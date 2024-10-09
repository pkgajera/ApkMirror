import { useEffect, useState, useRef } from 'react';

const Ads = ({ slot = "", className }) => {

  const [url, setUrl] = useState("");
  const [insSize, setInsSize] = useState({ width: 0, height: 0 });
  const insRef = useRef(null); 

  useEffect(() => {
    setUrl(window.location.hostname);
  }, []);


  useEffect(() => {
    const initializeAd = () => {
      try {
        const adsGoogle = window.adsbygoogle || [];
        adsGoogle.push({});
      } catch (err) {
       
      }
    };

    const adScript = document.createElement("script");
    adScript.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8916641928046583`;

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
    <div className={className}>
      <ins className="adsbygoogle"
          style={{ "display": "block" }}
          data-ad-client="ca-pub-8916641928046583"
          data-ad-slot="8457249210"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>

     
    </div>
  );
};

export default Ads;