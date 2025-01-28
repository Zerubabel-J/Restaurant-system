// components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8 mt-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-400">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Partner with us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Help & Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Ride with us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Refund & Cancellation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">FOLLOW US</h3>
            <p className="mb-4">Receive exclusive offers in your mailbox</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter Your email"
                className="p-2 rounded-l text-black"
              />
              <button className="bg-blue-500 p-2 rounded-r">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>All rights Reserved © Your Company, 2021</p>
          <p>Made with by Themewagon</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
