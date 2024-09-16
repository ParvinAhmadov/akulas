import AlukasSvg from "@/components/AlukasSvg";
import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SlEarphones } from "react-icons/sl";

const Footer = () => {
  return (
    <footer className="text-center lg:text-left">
      <div className="flex justify-center items-center pt-[80px] pb-[20px]">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="flex flex-col gap-2">
            <AlukasSvg />
            <p>Gold & Diomonds</p>
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              About Alukas
            </h6>
            <p className="mb-4 text-[#555555]">
              <a href="#!">About Us</a>
            </p>
            <p className="mb-4 text-[#555555]">
              <a href="#!">Core Values</a>
            </p>
            <p className="mb-4 text-[#555555]">
              <a href="#!">Careers</a>
            </p>
            <p className="text-[#555555]">
              <a href="#!">Press Releases</a>
            </p>
          </div>

          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Our Company
            </h6>
            <p className="mb-4 text-[#555555]">
              <a href="#!">Shopping App</a>
            </p>
            <p className="mb-4 text-[#555555]">
              <a href="#!">Be an Affiliate</a>
            </p>
            <p className="mb-4 text-[#555555]">
              <a href="#!">Advertise Your Product</a>
            </p>
            <p className="text-[#555555]">
              <a href="#!">Media Enquires</a>
            </p>
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Store Details
            </h6>
            <div className="mb-4">
              <div className="flex items-center gap-4">
                <div className="border p-4 rounded-full bg-[#C6C6C6]">
                  <SlEarphones className="text-[26px] text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[16px] text-[#555555]">
                    Need Any Help?
                  </span>
                  <span className="text-[22px]">(+800) 1234 56</span>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <p className="w-[250px] text-[#555555]">
                <span>Address:</span> 502 New Design Str, Melbourne, Australia
              </p>
            </div>
            <div className="mb-4">
              <p className="text-[#555555]">
                <span>Email:</span> alukas@domain.com
              </p>
            </div>
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Follow Us
            </h6>
            <div className="mb-15">
              <ul className="flex items-center gap-4">
                <li className="text-[20px]">
                  <FaInstagram />
                </li>
                <li className="text-[20px]">
                  <FaTiktok />
                </li>
                <li className="text-[20px]">
                  <FaYoutube />
                </li>
                <li className="text-[20px]">
                  <FaXTwitter />
                </li>
                <li className="text-[20px]">
                  <FaFacebookF />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="h-[125px] flex flex-col justify-center">
        <div className="flex justify-center text-center">
          <img
            src="https://demo-alukas.myshopify.com/cdn/shop/files/alk_payment.png?v=1711955031"
            alt=""
          />
        </div>
        <span className="flex justify-center">
          Copyright © Alukas all rights reserved. Powered by Bersky.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
