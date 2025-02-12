import { useState } from "react";

export default function CookieConsent(params) {
      const [showCookieConsent, setShowCookieConsent] = useState(!document.cookie.includes("cookieConsent=true"));
      const acceptCookies = () => {
            document.cookie = "cookieConsent=true; path=/";
            setShowCookieConsent(false);
      };
      return (
            <div
                  className={`fixed bottom-12 left-3/4 font-semibold transform z-10 -translate-x-1/2 bg-white p-6 shadow-2xl shadow-gray-500 rounded-lg border border-gray-200 ${
                        !showCookieConsent && "hidden"
                  }`}
            >
                  <div className="flex justify-between items-center space-x-4">
                        <p className="text-gray-700">This website uses cookies to enhance your experience.</p>
                        <button
                              onClick={acceptCookies}
                              className="bg-green-800 text-white px-4 py-2 rounded-md hover:bg-green-700"
                        >
                              Accept
                        </button>
                  </div>
            </div>
      );
}
