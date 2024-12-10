import Link from "next/link";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-screen-xl  mx-auto p-8">
        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Contact Info */}
          <div className="flex flex-col  md:flex-row items-center gap-4">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="w-6 h-6" />
              <Link href={"tel:+91-9266967128"}>+91-9266967128</Link>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail className="w-6 h-6" />
              <Link href={"mailto:info@utxotech.com"}>info@utxotech.com</Link>
            </div>
            <Link href={"/privacy-policy"}>Privacy Policy</Link>
            <Link href={"/terms-and-conditions"} className="cursor-pointer">
              Terms and Conditions
            </Link>
          </div>

          {/* Social Icons */}
          <div>
            <ul className="flex items-center gap-4 ">
              <Link
                href={"https://www.facebook.com/utxotech/"}
                target="_blank"
                className="cursor-pointer group"
              >
                <li className="text-2xl bg-white  group-hover:bg-[#1877F2]   h-8 w-8 p-[8px]  rounded-full">
                  <FaFacebookF className="h-full w-full  text-gray-500  group-hover:text-white" />
                </li>
              </Link>
              <Link
                href={"https://x.com/utxotech"}
                target="_blank"
                className="cursor-pointer group"
              >
                <li className="text-2xl bg-white  group-hover:bg-[#000000]   h-8 w-8 p-[8px]  rounded-full">
                  <FaXTwitter className="h-full w-full  text-gray-500  group-hover:text-white" />
                </li>
              </Link>
              <Link
                href={"https://www.linkedin.com/company/utxotech/"}
                target="_blank"
                className="cursor-pointer group"
              >
                <li className="text-2xl bg-white  group-hover:bg-[#1877F2]   h-8 w-8 p-[8px]  rounded-full">
                  <FaLinkedinIn className="h-full w-full  text-gray-500  group-hover:text-white" />
                </li>
              </Link>
              <Link
                href={"https://www.instagram.com/utxotech/"}
                target="_blank"
                className="cursor-pointer group"
              >
                <li className="text-2xl bg-white group-hover:bg-gradient-to-tl group-hover:from-[#fdf497] group-hover:via-[#d6249f] group-hover:to-[#285AEB]   h-8 w-8 p-[8px]  rounded-full">
                  <AiFillInstagram className="h-full w-full text-gray-500  group-hover:text-white" />
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
