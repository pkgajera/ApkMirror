import { NextResponse } from "next/server";
import App from "@/app/database/appData";
import AppApk from "@/app/database/appApk";
import connectDB from "@/app/database/mongoose";

export const GET = async (request, res) => {

    try {
        await connectDB();

        const allPopularAppsGames = await AppApk.find({ isPopular: true, type: { $in: ['app', 'game'] } }).select('appId versions type');
        console.log(allPopularAppsGames,"b")
        const appDetailsWithVersion = await Promise.all(
            allPopularAppsGames.map(async (appApk) => {
                const app = await App.findOne({ appId: appApk.appId }).select('title icon developer scoreText');
                if (app) {
                    const latestVersion = appApk.versions[0];
                    return {
                        title: app.title,
                        appId: appApk.appId,
                        type: appApk.type,
                        icon: app.icon,
                        developer: app.developer,
                        scoreText: app.scoreText,
                        latestVersion: latestVersion ? latestVersion.versionNumber : null,
                        updated: latestVersion ? latestVersion.updated : null
                    };
                }
                return null;
            })
        );
        const filteredAppDetails = appDetailsWithVersion.filter(app => app !== null);
        const popularApps = filteredAppDetails.filter(app => app.type === 'app');
        const popularGames = filteredAppDetails.filter(app => app.type === 'game');

        return NextResponse.json({ popularApps, popularGames }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: "Error fetching popualr apps and games", error },
            { status: 500 }
        );
    }
};