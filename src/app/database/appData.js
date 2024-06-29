"use strict";

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appSchema = new Schema({
    title: { type: String, required: true },
    appId: { type: String, required: true, unique: true },
    description: String,
    descriptionHTML: String,
    summary: String,
    installs: String,
    minInstalls: Number,
    maxInstalls: Number,
    score: Number,
    scoreText: String,
    ratings: Number,
    reviews: Number,
    histogram: {
      type: Schema.Types.Mixed, 
      default: {} 
    },
    price: Number,
    free: Boolean,
    currency: String,
    priceText: String,
    available: Boolean,
    offersIAP: Boolean,
    androidVersion: String,
    androidVersionText: String,
    androidMaxVersion: String,
    developer: String,
    developerId: String,
    developerEmail: String,
    developerWebsite: String,
    developerAddress: String,
    privacyPolicy: String,
    developerInternalID: String,
    genre: String,
    genreId: String,
    categories: [{ name: String, id: String }],
    icon: String,
    headerImage: String,
    screenshots: [String],
    bannerImage: String,
    video: String,
    VideoImage: String,
    previewVideo: String,
    contentRating: String,
    adSupported: Boolean,
    released: String,
    recentChanges: String,
    updated: String,
    version: String,
    recentChanges: String,
    comments: [String],
    preregister: Boolean,
    earlyAccessEnabled: Boolean,
    isAvailableInPlayPass: Boolean,
    editorsChoice: Boolean,
    url: String,
  });
 mongoose.models = {};
  export default  mongoose.model('App', appSchema);

