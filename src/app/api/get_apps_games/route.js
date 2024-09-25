import { NextResponse } from "next/server";
import App from "@/app/database/appData";
import AppApk from "@/app/database/appApk";
import connectDB from "@/app/database/mongoose";

export const revalidate = 60; // Cache for 1 minute

export const GET = async (request, res) => {
  const url = new URL(request.url);
  const type = url.searchParams.get("type");
  if (!type || (type !== 'app' && type !== 'game')) {
    return NextResponse.json({ error: "Invalid or missing type parameter" }, { status: 400 });
  }

  try {
    await connectDB();

    const getAndroidAppsAndGames = await AppApk.find({ type, isPopular: { $ne: true }, isGoogleApp: { $ne: true },  });

    const recentlyUpdated = await AppApk.find({ type, recentlyUpdated: { $ne: true }, isGoogleApp: { $ne: true },  }).limit(6).select('appId versions type');

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
      getAndroidAppsAndGames.map(fetchAppDetailsWithVersion)
    );

    const recentlyUpdatedApps = await Promise.all(
      recentlyUpdated.map(fetchAppDetailsWithVersion)
    );

    const filteredAppDetails = appDetailsWithVersion.filter(app => app !== null);
    const recentlyUpdatedAppsAndGames = recentlyUpdatedApps.filter(app => app !== null);

    const responseData = {
      AndroidData: filteredAppDetails,
      recentlyUpdatedAppsAndGames
    };

    return NextResponse.json(responseData, { status: 200 , headers: { 'Cache-Control': 'no-store' }});
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching get apps details", error },
      { status: 500 }
    );
  }
};