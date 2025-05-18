import React from "react";

const Pricing = () => (
  <section id="pricing" className="py-16 px-6 bg-white text-center">
    <h2 className="text-3xl font-bold mb-8">Pricing Plans</h2>
    <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-6">
      <div className="border rounded p-6 w-full sm:w-[80%] md:w-[45%] max-w-sm mx-auto">
        <h3 className="text-xl font-semibold mb-4">Starter</h3>
        <p className="text-3xl font-bold mb-4">$499</p>
        <p className="text-lg font-bold mb-4">
          $29/mo for Basic Hosting, Domain, SSL management
        </p>
        <ul className="text-left mb-6">
          <li>✔ 1-page site (Home, About, Gallery, Contact)</li>
          <li>✔ Contact form</li>
          <li>✔ Basic SEO</li>
          <li>✔ Responsive design (Desktop & Mobile Friendly)</li>
        </ul>

        <h4 className="text-lg font-medium mb-2">
          Optional Add-Ons for an additional charge:
        </h4>
        <ul className="text-left text-sm mb-6 list-disc list-inside">
          <li>Google Reviews - $149</li>
        </ul>
        {/* <button className="bg-indigo-700 text-white px-4 py-2 rounded">
          Choose Plan
        </button> */}
      </div>
      <div className="border rounded p-6 w-full max-w-sm mx-auto">
        <h3 className="text-xl font-semibold mb-4">Pro</h3>
        <p className="text-3xl font-bold mb-4">$999</p>
        <p className="text-lg font-bold mb-4">
          $49/mo for Basic Hosting, Domain, SSL management, Image updates.
        </p>
        <ul className="text-left mb-6">
          <li>
            ✔ Multi-page site (Up to 5 pages, Home, About, Services,
            Contact,Gallery)
          </li>
          <li>✔ Advanced SEO</li>
          <li>✔ Responsive design (Desktop & Mobile Friendly)</li>
          <li>✔ Google Analytics integration</li>
          <li>✔ Social media links</li>
        </ul>
        {/* <button className="bg-indigo-700 text-white px-4 py-2 rounded">
          Choose Plan
        </button> */}
        <h4 className="text-lg font-medium mb-2">
          Optional Add-Ons for an additional charge:
        </h4>
        <p className="text-sm font-bold mb-4">
          Maintenance/Management for any services below incurs additional
          monthly cost.
        </p>
        <ul className="text-left text-sm mb-6 list-disc list-inside">
          <li>Additional Page - $150</li>
          <li>CRM Integration (Welcome email, Newsletter ) - $350</li>
          <li>eCommerce Setup (Shopify) - $350</li>
          <li>Booking System (Calendly, Embedded Forms) - $175</li>
          <li>Custom Domain Email - $100</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Pricing;
