"use client"
// components/AdSenseAd.js
import React, { useEffect } from 'react';

const NextScript = () => {
    useEffect(() => {
        if (window.adsbygoogle) {
            (window.adsbygoogle = window.adsbygoogle || [])
        }
    }, []);

    return (
        <ins
            className="adsbygoogle"
            style={{ "display": "block", textAlign: "center" }}
            data-ad-client="<YOUR_GOOGLE_AD_CLIENT_ID>"
            data-ad-slot="<YOUR_GOOGLE_AD_SLOT>"
            data-ad-format="auto"
            data-adtest="on" // <- this one
            data-full-width-responsive="true"
        />
    );
};

export default NextScript;
