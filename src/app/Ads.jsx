import { useEffect, useState, useRef } from 'react';
import { staticDataForChannel } from './StaticDataForChannel';

const Ads = ({ slot = "", className }) => {

  const [url, setUrl] = useState("");
  const [insSize, setInsSize] = useState({ width: 0, height: 0 });
  const insRef = useRef(null); 

  useEffect(() => {
    setUrl(window.location.hostname);
  }, []);

  console.log("Slot : ",slot);

  useEffect(() => {
    const initializeAd = () => {
      try {
        const adsGoogle = window.adsbygoogle || [];
        adsGoogle.push({});
      } catch (err) {
        if (
          err.name === "TagError" &&
          window.googletag &&
          window.googletag.pubads
        ) {
          window.googletag.pubads().clearInstanceData();
          window.googletag.pubads().refresh(["7434970023"]);
        }
      }
    };

    const adScript = document.createElement("script");
    adScript.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7178919035426667`;

    adScript.async = true;
    adScript.onload = initializeAd;
    document.body.appendChild(adScript);
    const checkInsSize = setTimeout(() => {
      if (insRef.current) {
        const { offsetWidth, offsetHeight } = insRef.current;
        setInsSize({ width: offsetWidth, height: offsetHeight });
      }
    }, 1500); // Delay by 1.5 seconds to allow ad to load

    return () => clearTimeout(checkInsSize);
  }, [slot]);



  return (
    <div className={`h-auto border text-center ${className}`} style={{borderColor:"black"}}>
      {/* <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-8916641928046583"  // replace with your AdSense publisher ID
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins> */}
      <span>
      {slot}
      </span>
      <ins
       ref={insRef} 
        className="adsbygoogle"
        style={{ display: "block", height: "auto" }}
        data-ad-client="ca-pub-7178919035426667"
        data-ad-slot={slot}
        data-ad-channel={staticDataForChannel[url] || "9614727333"}
        data-full-width-responsive="true"
        // data-ad-slot={"AUTO_AD_SLOT_ID"}
        // data-ad-format="auto"
        // data-adbreak-test="on"
        // <-----New Attribute------>
        data-ad-format="fluid"
        data-ad-status="filled"
      ></ins>
       <p>
        {insSize.width}px width, {insSize.height}px height
      </p>
    </div>
  );
};

export default Ads;