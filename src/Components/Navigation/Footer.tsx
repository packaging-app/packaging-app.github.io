"use client";

import Image from "next/image";
import Link from "next/link";
import { CustomButton } from "@/Components/Button/CustomButton";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation("common");

  const services = [
    { name: t("services.textilePackaging.name"), href: "/packaging" },
    { name: t("services.manufacturing.name"), href: "/manufacturing" },
    { name: t("services.development.name"), href: "/development" },
    { name: t("services.logistics.name"), href: "/logistics" },
    {
      name: t("services.specializedProducts.name"),
      href: "/specialized-products",
    },
  ];

  return (
    <footer className="bg-faint py-12">
      <div className="mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo + Description */}
        <div className="md:col-span-2 space-y-4">
          <Link href="/" className="block h-8 w-fit">
            <Image
              src="/img/logos/nimetex-logo.png"
              alt="Nimetex Groupe Logo"
              width={200}
              height={32}
              className="h-8 w-auto"
            />
          </Link>

          <p className="text-sm max-w-xs mt-2">{t("footer.description")}</p>
          <div className="pt-2">
            <CustomButton>{t("footer.contactUs")}</CustomButton>
          </div>
        </div>

        {/* Product */}
        <div>
          <h4 className="font-semibold mb-4">{t("footer.services")}</h4>
          <ul className="space-y-2 text-sm">
            {services.map(item => (
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
          <h4 className="font-semibold mb-4">{t("footer.company")}</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-main-blue">
                {t("footer.home")}
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-main-blue">
                {t("footer.about")}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-main-blue">
                {t("footer.contact")}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 border-t border-blue-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm px-6 lg:px-16">
        <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            target="_blank"
            href="https://www.facebook.com/sharer/sharer.php?u=https://nimetexgroupe.com/"
            className="hover:text-main-blue"
          >
            Facebook
          </a>
          <a
            target="_blank"
            href="https://twitter.com/share?url=https://nimetexgroupe.com/"
            className="hover:text-main-blue"
          >
            Twitter
          </a>
          <a
            target="_blank"
            href="https://pinterest.com/pin/create/button/?url=https://nimetexgroupe.com/&media=https://nimetexgroupe.com/wp-content/uploads/2020/09/Nimtex01.jpg&description=Nimetex+Groupe+%26%238211%3B+Confection+de+v%C3%AAtements+de+dessus"
            className="hover:text-main-blue"
          >
            Pinterest
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/shareArticle?mini=true&url=https://nimetexgroupe.com/"
            className="hover:text-main-blue"
          >
            LinkedIn
          </a>
          <a
            target="_blank"
            href="https://telegram.me/share/url?url=https://nimetexgroupe.com/"
            className="hover:text-main-blue"
          >
            Telegram
          </a>
        </div>
      </div>
    </footer>
  );
}
