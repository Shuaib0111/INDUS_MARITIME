import React from "react";
import Contact from "../Components/Contact";

const Certificate = () => {
  return (
    <>
    <div className="pt-[50px] pb-6 flex flex-col justify-center items-center px-4 min-h-screen">
      <div className="w-[95%] sm:w-[90%] md:w-full max-w-[900px] bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Fully responsive PDF display */}
        <div className="w-full h-[85vh] sm:h-[90vh] md:h-[95vh] flex justify-center items-center">
          <iframe
            src="/Certificate.pdf"
            type="application/pdf"
            className="w-full h-full"
            title="Certificate"
            style={{ objectFit: "cover" }} // Ensures PDF scales properly
          />
        </div>
      </div>

      {/* Download Button */}
      <a
        href="/Certificate.pdf"
        download="Certificate.pdf"
        className="my-6 px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Download Certificate
      </a>
    </div>
    <Contact />
    </>
  );
};

export default Certificate;
