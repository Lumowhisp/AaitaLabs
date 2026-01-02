import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white">
      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* LEFT : Logo + Tagline + Socials */}
        <div className="space-y-6">
          <img
            src="https://aaitalabs.in/wp-content/uploads/2025/10/AaitaLabs_logo_250X30.svg"
            alt="Aaita Labs"
            className="h-8"
          />

          <p className="text-gray-700 text-sm max-w-xs">
            Long laptop hours, less neck and back pain
          </p>

          <div className="flex gap-6 text-gray-700 text-xl">
            {/* Replace with react-icons if needed */}
            <span><img className="w-8"src="Assets/insta.png"/></span>
            <span><img className="w-8"src="../Assets/whatsapp.png"/></span>
            <span><img className="w-8"src="../Assets/facebook.png"/></span>
            <span><img className="w-8"src="../Assets/x.png"/></span>
          </div>
        </div>

        {/* CENTER : Quick Links */}
        <div className="grid grid-cols-2 gap-x-16 gap-y-3">
          <h3 className="col-span-2 font-semibold text-lg mb-4  text-center">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm text-gray-700">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Shipping Policy</li>
          </ul>

          <ul className="space-y-2 text-sm text-gray-700">
            <li>Terms & Condition</li>
            <li>Refund and Returns</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* RIGHT : Newsletter */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">
            Join the AaitaLabs Family!
          </h3>

          <div className="space-y-2">
            <label className="text-sm text-gray-700">Email</label>
            <input
              type="email"
              placeholder="your.email@example.com"
              className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none"
            />
          </div>

          <button className="w-full bg-black text-white py-3 rounded-lg font-medium">
            Submit
          </button>

          <p className="text-xs text-gray-600">
            We value your privacy and will never send irrelevant information
          </p>

          <div className="flex items-center gap-2 text-sm text-gray-700">
            <span>✉️</span>
            <span>Sender.net email marketing</span>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-black text-white text-center py-4 text-sm">
        © 2026 AaitaLabs. Powered by AaitaLabs.
      </div>
    </footer>
  );
};

export default Footer;