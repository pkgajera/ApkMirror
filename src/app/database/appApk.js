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

const appApkSchema = new Schema({
    appId: { type: String, required: true, unique: true },
    versions: [versionSchema]
});

mongoose.models = {};
export default mongoose.model("AppApk", appApkSchema);