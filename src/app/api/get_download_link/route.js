import { NextResponse } from "next/server";
import AppApk from "@/app/database/appApk";
import connectDB from "@/app/database/mongoose";
import { Buffer } from 'buffer';

export const GET = async (request, res) => {
    try {
        await connectDB();

        const url = new URL(request.url);
        const appId = url.searchParams.get("appId");
        const versionNumber = url.searchParams.get("version");
        // const appId="com.google.android.gms";
        // const versionNumber = "16.0.89 (000300-239467275) (16089000)"


        if (!appId || !versionNumber) {
            return NextResponse.json({ error: "AppId and version are required" }, { status: 400 });
        }

        const result = await AppApk.aggregate([
            { $match: { appId } },
            { $unwind: "$versions" },
            { $match: { "versions.versionNumber": versionNumber } },
            { $project: { actualLink: "$versions.actualLink" } }
        ]);

        if (result.length === 0) {
            return NextResponse.json({ error: "App or version not found" }, { status: 404 });
        }

        const actualLink = result[0].actualLink;
        const encodedLink = Buffer.from(actualLink).toString('base64');

          return NextResponse.json({ encodedLink }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: "Error fetching app download link", error },
            { status: 500 }
        );
    }
};
