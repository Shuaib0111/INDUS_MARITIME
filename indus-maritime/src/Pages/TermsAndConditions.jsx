import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">
          Terms and Conditions
        </h1>
        <p className="text-sm text-gray-500 mb-6">Last Updated: March 30, 2025</p>

        {/* Introduction */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            1. Introduction
          </h2>
          <p className="text-gray-600">
            Welcome to <strong>Indus Maritime Pvt. Ltd.</strong> By using our services,
            you agree to comply with the following terms and conditions. Please read
            them carefully.
          </p>
        </section>

        {/* Services Overview */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            2. Services Overview
          </h2>
          <p className="text-gray-600">
            We provide international freight forwarding, logistics, and customs clearance
            services, specializing in air & sea freight, NVOCC, and project logistics.
          </p>
        </section>

        {/* User Responsibilities */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            3. User Responsibilities
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Ensure all provided shipment details are accurate.</li>
            <li>Comply with customs regulations for import/export.</li>
            <li>Use our services lawfully and ethically.</li>
          </ul>
        </section>

        {/* Payment & Pricing */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            4. Payment & Pricing
          </h2>
          <p className="text-gray-600">
            All payments must be made in full before shipment processing. Our rates
            are subject to change based on international logistics market conditions.
          </p>
        </section>

        {/* Liability & Disclaimers */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            5. Liability & Disclaimers
          </h2>
          <p className="text-gray-600">
            Indus Maritime Pvt. Ltd. is not responsible for delays caused by external factors
            such as customs procedures, weather conditions, or government regulations.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            6. Contact Information
          </h2>
          <p className="text-gray-600">
            If you have any questions about these terms, please contact us at:
          </p>
          <ul className="mt-2 text-gray-600">
            <li>📍 <strong>Address:</strong> B-58, Vishwakarma Colony, New Delhi - 110044</li>
            <li>📞 <strong>Phone:</strong> +91 9354739557</li>
            <li>📧 <strong>Email:</strong> <a href="mailto:delhi@indusmaritime.in" className="text-blue-600 hover:underline">delhi@indusmaritime.in</a></li>
          </ul>
        </section>

        {/* Acceptance */}
        <section className="mt-8 text-center">
          <p className="text-gray-700 font-semibold">
            By using our services, you agree to these Terms & Conditions.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
