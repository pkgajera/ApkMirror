import { NextResponse } from "next/server";
import gplay from "google-play-scraper";
import App from "@/app/database/appData";
import AppApk from "@/app/database/appApk";
import connectDB from "@/app/database/mongoose";

export const GET = async (request, res) => {
  const url = new URL(request.url);
  const appId = url.searchParams.get("appId");
  if (!appId) {
    return NextResponse.json({ error: "App ID is required" }, { status: 400 });
  }

  try {
    await connectDB();
    const appVersions = await AppApk.findOne({ appId });
    const recentlyUpdated = await AppApk.find({ recentlyUpdated: true}).limit(6).select('appId versions type');

    if (!appVersions) {
      return NextResponse.json({ message: "App not found" }, { status: 404 });
    }
    const appDetails = await App.findOne({ appId }).select('title icon developer scoreText ratings maxInstalls screenshots  description headerImage video summary recentChanges');
    const appDetailsWithVersion = await Promise.all(
      recentlyUpdated.map(async (appApk) => {
          const app = await App.findOne({ appId: appApk.appId }).select('title icon developer scoreText');
          if (app) {
              const latestVersion = appApk.versions[0];
              return {
                  title: app.title,
                  appId: appApk.appId,
                  icon: app.icon,
                  developer: app.developer,
                  score: app.scoreText,
                  latestVersion: latestVersion ? latestVersion.versionNumber : null,
                  updated: latestVersion ? latestVersion.updated : null
              };
          }
          return null;
      })
  );
  const similarApps = await getSimilarApps(appId);
  const recentlyUpdatedApps = appDetailsWithVersion.filter(app => app !== null);
    const mergedData = { appVersions, appDetails , recentlyUpdatedApps, similarApps};
    return NextResponse.json({ app: mergedData }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching app details", error },
      { status: 500 }
    );
  }
};

const getSimilarApps = async (appId) => {
  try {
    const similarApps = await gplay.similar({ appId, num: 5 });

    if (Array.isArray(similarApps) && similarApps.length > 0) {
      return similarApps.map(app => ({
        appId: app.appId,
        developer: app.developer,
        scoreText: app.scoreText,
        icon: app.icon,
        title: app.title,
      }));
    } else {
      console.log("No similar apps found");
      return [];
    }
  } catch (error) {
    console.error("Error fetching similar apps:", error);
    return [];
  }
};