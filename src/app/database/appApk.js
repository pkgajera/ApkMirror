import mongoose from "mongoose";

const Schema = mongoose.Schema;

const versionSchema = new Schema({
    versionLink: { type: String, required: true },
    actualLink: { type: String, require: true },
    versionNumber: { type: String, required: true },
    latestVersion: { type: Boolean, default: false },
    size: { type: String },
    minimum: { type: String },
    updated: { type: String }
});

const categorySchema = new Schema({
    name: { type: String, required: true },
    value: { type: String, required: true }
});

const appApkSchema = new Schema({
    appId: { type: String, required: true, unique: true },
    type: { type: String, required: true },
    // category: { type: categorySchema, required: true },
    category:{ type: String, required: true },
    isPopular: { type: Boolean, default: false },
    recentlyUpdated: { type: Boolean, default: false },
    isSimilar: { type: Boolean, default: false },
    versions: [versionSchema]
});

mongoose.models = {};
export default mongoose.model("AppApk", appApkSchema);

