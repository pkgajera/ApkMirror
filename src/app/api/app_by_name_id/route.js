import { NextResponse } from "next/server";
import gplay from "google-play-scraper";
import App from "@/app/database/appData";
import AppApk from "@/app/database/appApk";
import connectDB from "@/app/database/mongoose";

export const GET = async (request) => {
  const url = new URL(request.url);
  const appId = url.searchParams.get("appId");
  if (!appId) {
    return NextResponse.json({ error: "App ID is required" }, { status: 400 });
  }

  try {
    await connectDB();
    const appVersions = await getAppVersions(appId);
    if (!appVersions) {
      return NextResponse.json({ message: "App not found" }, { status: 400 });
    }

    const recentlyUpdatedApps = await getRecentlyUpdatedApps();
    const appDetails = await getAppDetails(appId);
    const similarApps = await getSimilarApps();

    const mergedData = {
      appVersions,
      appDetails,
      recentlyUpdatedApps,
      similarApps,
    };

    return NextResponse.json({ app: mergedData }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching app details", error },
      { status: 500 }
    );
  }
};

const getAppVersions = async (appId) => {
  const appVersions = await AppApk.findOne({ appId }).select('appId category type versions');
  if (!appVersions) return null;

  const versions = appVersions.versions.slice(0,11).map(({ versionNumber, size, minimum, updated, latestVersion }) => ({
    versionNumber,
    size,
    minimum,
    updated,
    latestVersion,
  }));

  return {
    appId: appVersions.appId,
    category: appVersions.category,
    type: appVersions.type,
    versions,
  };
};

const getRecentlyUpdatedApps = async () => {
  const recentlyUpdated = await AppApk.find({ recentlyUpdated: true }).limit(6).select('appId versions type');
  const appDetailsWithVersion = await Promise.all(
    recentlyUpdated.map(async (appApk) => {
      const app = await App.findOne({ appId: appApk.appId }).select('title icon developer scoreText');
      if (!app) return null;
      const latestVersion = appApk.versions[0];
      return {
        title: app.title,
        appId: appApk.appId,
        icon: app.icon,
        developer: app.developer,
        scoreText: app.scoreText,
        latestVersion: latestVersion ? latestVersion.versionNumber : null,
        updated: latestVersion ? latestVersion.updated : null,
      };
    })
  );
  return appDetailsWithVersion.filter(app => app !== null);
};

const getAppDetails = async (appId) => {
  return App.findOne({ appId }).select('appId title icon developer scoreText ratings maxInstalls screenshots description headerImage video summary recentChanges');
};

const getSimilarApps = async () => {
  try {
    const similarApps = await AppApk.find({ isSimilar: true }).limit(15).select('appId versions type');
    const appDetailsWithVersion = await Promise.all(
      similarApps.map(async (appApk) => {
        const app = await App.findOne({ appId: appApk.appId }).select('title icon developer scoreText');
        if (!app) return null;
        const latestVersion = appApk.versions[0];
        return {
          title: app.title,
          appId: appApk.appId,
          icon: app.icon,
          developer: app.developer,
          scoreText: app.scoreText,
          latestVersion: latestVersion ? latestVersion.versionNumber : null,
          updated: latestVersion ? latestVersion.updated : null,
        };
      })
    );
    return appDetailsWithVersion.filter(app => app !== null);
    // const similarApps = await gplay.similar({ appId });
    // return similarApps.slice(0, 5).map(({ appId, developer, scoreText, icon, title }) => ({
    //   appId,
    //   developer,
    //   scoreText,
    //   icon,
    //   title,
    // }));
  } catch (error) {
    console.error("Error fetching similar apps:", error);
    return [];
  }
};