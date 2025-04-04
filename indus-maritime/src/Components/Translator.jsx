import { useEffect } from "react";

const Translator = () => {
  useEffect(() => {
    // Ensure script is only added once
    if (!document.querySelector("#google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    // Define the translation function globally
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en", autoDisplay: false },
        "google_translate_element"
      );
    };

    // If script is already loaded, initialize immediately
    if (window.google && window.google.translate) {
      window.googleTranslateElementInit();
    }
  }, []);

  return (
    <div
      id="google_translate_element"
      className="bg-white text-black p-2 rounded-md shadow-md border border-gray-300"
    ></div>
  );
};

export default Translator;
