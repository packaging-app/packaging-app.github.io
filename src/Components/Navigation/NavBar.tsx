"use client";

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import React from "react";
import {
  CubeIcon,
  CogIcon,
  BeakerIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { CustomButton } from "@/Components/Button/CustomButton";
import { Bars3Icon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/Context/Language/LanguageContext";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getServices = (t: any) => [
  {
    name: t("services.textilePackaging.name"),
    href: "/packaging",
    icon: CubeIcon,
  },
  {
    name: t("services.manufacturing.name"),
    href: "/manufacturing",
    icon: CogIcon,
  },
  {
    name: t("services.development.name"),
    href: "/development",
    icon: BeakerIcon,
  },
  {
    name: t("services.logistics.name"),
    href: "/logistics",
    icon: TruckIcon,
  },
  {
    name: t("services.specializedProducts.name"),
    href: "/specialized-products",
    icon: WrenchScrewdriverIcon,
  },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { locale, setLocale } = useLanguage();
  const { t } = useTranslation();

  const services = getServices(t);

  const switchLanguage = (newLocale: string) => {
    setLocale(newLocale);
  };

  return (
    <header className="bg-faint">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href={"/"} className="-m-1.5 p-1.5">
            <img
              alt="FML Logo"
              src="/img/logos/nimetex-logo.png"
              className="h-8 w-auto lg:hidden"
            />
            <img
              alt="FML Logo"
              src="/img/logos/nimetex-logo.png"
              className="h-12 w-[100px] lg:block hidden"
            />
          </a>
        </div>

        <div className="flex lg:hidden items-center gap-3">
          {/* Mobile Language Switcher */}
          <div className="flex items-center gap-1 bg-white rounded-lg p-1 shadow-sm border border-gray-200">
            <button
              onClick={() => switchLanguage("fr")}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 ${
                locale === "fr"
                  ? "bg-primary text-white"
                  : "text-gray-600 hover:text-primary hover:bg-primary/10"
              }`}
            >
              FR
            </button>
            <button
              onClick={() => switchLanguage("en")}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 ${
                locale === "en"
                  ? "bg-primary text-white"
                  : "text-gray-600 hover:text-primary hover:bg-primary/10"
              }`}
            >
              EN
            </button>
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 rounded-md p-2.5 text-gray-400"
          >
            <span className="sr-only">Close menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className="text-sm/6 font-semibold text-gray-900 hover:text-primary transition-colors duration-300"
          >
            {t("footer.home")}
          </Link>
          <Link
            href="/about"
            className="text-sm/6 font-semibold text-gray-900 hover:text-primary transition-colors duration-300"
          >
            {t("footer.about")}
          </Link>
          <Popover className="relative">
            <PopoverButton className="focus:outline-none focus:ring-0 flex items-center gap-x-1 text-sm/6 font-semibold cursor-pointer text-gray-900 hover:text-primary transition-colors duration-300">
              {t("footer.services")}
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-900 group-data-[open]:rotate-180 transition-transform duration-300"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-2xl bg-white shadow-2xl border border-gray-100 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-1">
                {services.map(item => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-4 rounded-xl p-1 text-sm/6 hover:bg-primary/5 transition-all duration-300"
                  >
                    <div
                      className="flex size-12 flex-none items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary transition-all duration-300"
                      style={{ backgroundColor: "rgba(148, 176, 185, 0.1)" }}
                    >
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-primary transition-colors duration-300"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-primary hover:bg-primary/90 transition-colors duration-300 rounded-b-2xl">
                <a
                  href={"/contact"}
                  className="flex items-center justify-center gap-x-2.5 p-4 text-sm/6 font-semibold text-white hover:text-white"
                >
                  <PhoneIcon
                    aria-hidden="true"
                    className="size-5 flex-none text-white"
                  />
                  {t("footer.contactUs")}
                </a>
              </div>
            </PopoverPanel>
          </Popover>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          {/* Language Switcher */}
          <div className="flex items-center gap-1 bg-white rounded-lg p-1 shadow-sm border border-gray-200">
            <button
              onClick={() => switchLanguage("fr")}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
                locale === "fr"
                  ? "bg-primary text-white"
                  : "text-gray-600 hover:text-primary hover:bg-primary/10"
              }`}
            >
              🇫🇷 FR
            </button>
            <button
              onClick={() => switchLanguage("en")}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
                locale === "en"
                  ? "bg-primary text-white"
                  : "text-gray-600 hover:text-primary hover:bg-primary/10"
              }`}
            >
              🇬🇧 EN
            </button>
          </div>
          <CustomButton isWhite={true} href={"/contact"}>
            {t("footer.contactUs")}
          </CustomButton>
        </div>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel
            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10"
            style={{ backgroundColor: "#f8f9fa" }}
          >
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="/img/logos/logo-no-title.png"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold hover:bg-white/5">
                      {t("footer.services")}
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="size-5 flex-none group-data-open:rotate-180"
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {services.map(item => (
                        <DisclosureButton
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold hover:bg-white/5"
                        >
                          {item.name}
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                  <Link
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-white/5"
                  >
                    {t("footer.home")}
                  </Link>
                  <Link
                    href="/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-white/5"
                  >
                    {t("footer.about")}
                  </Link>
                </div>
                <div className="py-6">
                  <CustomButton href={"/contact"}>
                    {t("footer.contactUs")}
                  </CustomButton>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </nav>
    </header>
  );
}
