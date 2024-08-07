import { NextResponse } from "next/server";
import App from "@/app/database/appData";
import AppApk from "@/app/database/appApk";
import connectDB from "@/app/database/mongoose";

export const GET = async (request, res) => {
    const url = new URL(request.url);
    const category = decodeURIComponent(url.searchParams.get("category"));
    if (!category) {
        return NextResponse.json({ error: "Category Name is required" }, { status: 400 });
    }

    try {
        await connectDB();

        const allAppsByCategory = await AppApk.find({ category }).select('appId versions');

        const recentlyUpdated = await AppApk.find({ recentlyUpdated: true }).limit(6).select('appId versions type');

        if (!allAppsByCategory || allAppsByCategory.length === 0) {
            return NextResponse.json(
                { message: "No apps found for the specified category" },
                { status: 204 }
            );
        }
        const fetchAppDetailsWithVersion = async (appApk) => {
            const app = await App.findOne({ appId: appApk.appId }).select('title icon developer scoreText');
            if (app) {
              const latestVersion = appApk.versions.find(version => version.latestVersion) || appApk.versions[0];
              return {
                title: app.title,
                appId: appApk.appId,
                icon: app.icon,
                developer: app.developer,
                scoreText: app.scoreText,
                latestVersion: latestVersion ? latestVersion.versionNumber : null,
                updated: latestVersion ? latestVersion.updated : null
              };
            }
            return null;
          };
      
          const appDetailsWithVersion = await Promise.all(
            allAppsByCategory.map(fetchAppDetailsWithVersion)
          );
      
          const recentlyUpdatedApps = await Promise.all(
            recentlyUpdated.map(fetchAppDetailsWithVersion)
          );
      
        const recentlyUpdatedAppsAndGames = recentlyUpdatedApps.filter(app => app !== null);
        const filteredAppDetails = appDetailsWithVersion.filter(app => app !== null);

        return NextResponse.json({ apps: filteredAppDetails, recentlyUpdatedApps: recentlyUpdatedAppsAndGames }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: "Error fetching app by cateogry", error },
            { status: 500 }
        );
    }
};