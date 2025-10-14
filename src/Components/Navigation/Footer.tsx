"use client"

import Image from "next/image";
import Link from "next/link";
import { CustomButton } from "@/Components/Button/CustomButton";
import { BASE_PATH } from "@/lib/basePath";

const services = [
  { name: "Packaging Solutions", href: "/packaging" },
  { name: "Visual Merchandising", href: "/visual-merchandising" },
  { name: "Eco Design & R&D", href: "/eco-design" },
  { name: "Global Sourcing", href: "/global-sourcing" },
];

export default function Footer() {
  return (
    <footer className="bg-faint py-12">
      <div className="mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo + Description */}
        <div className="md:col-span-2 space-y-4">
          <Link href="/" className="block h-8 w-fit">
            <Image
              src={`${BASE_PATH}/img/logos/logo-with-title.png`}
              alt="FLM Solutions Logo"
              width={200}
              height={32}
              className="h-8 w-auto"
            />
          </Link>

          <p className="text-sm max-w-xs mt-2">
            We guide global brands towards sustainable packaging design & material selection.
            From eco-design and research to global sourcing and inventory management,
            we provide end-to-end packaging and visual merchandising solutions.
          </p>
          <CustomButton>Contact Us</CustomButton>
        </div>

        {/* Product */}
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            {services.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="hover:text-main-blue">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-main-blue">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-main-blue">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-main-blue">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 border-t border-blue-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm px-6 lg:px-16">
        <p>
          © {new Date().getFullYear()} Packaging & Visual Merchandising Solutions. All rights reserved.
        </p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            target="_blank"
            href="https://www.linkedin.com/company/flm-solutions/"
            className="hover:text-main-blue"
          >
            LinkedIn
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/flm_solutions/"
            className="hover:text-main-blue"
          >
            Instagram
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100086239284436&fbclid=PAZXh0bgNhZW0CMTEAAacEFAzi99P0r_vGtaW8ZS4-TSlEoAcLtU1WKqBG-pWP6enS9Ag4Cip0gEaoxQ_aem_dv93w4FN06aqoxmgGddAnQ"
            className="hover:text-main-blue"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
