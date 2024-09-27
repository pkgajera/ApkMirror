import { useEffect } from 'react';

// Helper function to get cookies
const getCookies = () => {
  const cookies = document.cookie.split(';').reduce((acc, cookie) => {
    const [key, value] = cookie.trim().split('=');
    acc[key] = value;
    return acc;
  }, {});
  return cookies;
};

// Helper function to set a cookie
const setCookie = (name, value, days) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
};

const useBrowserFingerprint = () => {
  useEffect(() => {
    const cookies = getCookies();

    // Check if the fingerprint has already been captured
    if (!cookies.browserFingerprintFlag) {
      if (typeof window.FingerprintJS !== 'undefined') {
        FingerprintJS.load().then((fp) => {
          fp.get().then((result) => {
            const browserFingerprint = result.visitorId;
            const browserInfo = {
              userAgent: navigator.userAgent,
              platform: navigator.platform,
              language: navigator.language,
              screenResolution: `${window.screen.width}x${window.screen.height}`,
              timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
              pageUrl: window.location.href,
              fingerprint: browserFingerprint,
              cookies: getCookies(),
            };

            // Send data to your custom API
            const apiUrl = 'https://test.apk-mirror.com/collect';
            fetch(apiUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(browserInfo),
            })
              .then((response) => response.json())
              .then((data) => {
                console.log('Successfully sent browser info and fingerprint:', data);

                // Set a flag in the cookie to avoid future calls
                setCookie('browserFingerprintFlag', browserFingerprint, 30); // Cookie expires in 30 days
              })
              .catch((error) => {
                console.error('Error sending browser info and fingerprint:', error);
              });
          });
        });
      }
    } else {
      console.log('Fingerprint already captured, skipping API call.');
    }
  }, []);
};

export default useBrowserFingerprint;
