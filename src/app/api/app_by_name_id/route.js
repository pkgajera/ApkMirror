import { NextResponse } from "next/server";
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

    if (!appVersions) {
      return NextResponse.json({ message: "App not found" }, { status: 404 });
    }
    const appDetails = await App.findOne({ appId }).select('title icon developer scoreText ratings maxInstalls screenshots  description headerImage video summary recentChanges');

    const mergedData = { appVersions, appDetails };
    return NextResponse.json({ app: mergedData }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching app details", error },
      { status: 500 }
    );
  }
};