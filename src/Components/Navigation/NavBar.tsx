"use client"

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
  ShoppingBagIcon,
  BeakerIcon,
  GlobeAltIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { CustomButton } from "@/Components/Button/CustomButton";
import { Bars3Icon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { BASE_PATH } from "@/lib/basePath";

const services = [
  {
    name: "Packaging Solutions",
    description: "Sustainable packaging design & material selection",
    href: "/packaging",
    icon: CubeIcon,
  },
  {
    name: "Visual Merchandising",
    description: "Complete visual merchandising solutions",
    href: "/visual-merchandising",
    icon: ShoppingBagIcon,
  },
  {
    name: "Eco Design & R&D",
    description: "Sustainable materials & circular design",
    href: "/eco-design",
    icon: BeakerIcon,
  },
  {
    name: "Global Sourcing",
    description: "Global network of manufacturing partners",
    href: "/global-sourcing",
    icon: GlobeAltIcon,
  },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

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
              src={`${BASE_PATH}/img/logos/logo-no-title.png`}
              className="h-8 w-auto lg:hidden"
            />
            <img
              alt="FML Logo"
              src={`${BASE_PATH}/img/logos/logo-with-title.png`}
              className="h-8 w-auto lg:block hidden"
            />
          </a>
        </div>

        <div className="flex lg:hidden">
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
          <Link href="/" className="text-sm/6 font-semibold">
            Home
          </Link>
          <Link href="/about" className="text-sm/6 font-semibold">
            About
          </Link>
          <Popover className="relative">
            <PopoverButton className="focus:outline-none focus:ring-0 flex items-center gap-x-1 text-sm/6 font-semibold cursor-pointer">
              Services
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-black"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-faint outline-1 -outline-offset-1 outline-white/10 shadow-xl transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {services.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-white/5"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-faint group-hover:bg-main-blue transition duration-300">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-main-blue group-hover:text-white transition duration-300"
                      />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-main-blue hover:opacity-80 transition duration-300">
                <a
                  href={"/contact"}
                  className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-faint"
                >
                  <PhoneIcon
                    aria-hidden="true"
                    className="size-5 flex-none text-white"
                  />
                  Contact us
                </a>
              </div>
            </PopoverPanel>
          </Popover>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <CustomButton isWhite={true} href={"/contact"}>Contact Us</CustomButton>
        </div>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-faint p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src={`${BASE_PATH}/img/logos/logo-no-title.png`}
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
                      Services
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="size-5 flex-none group-data-open:rotate-180"
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {services.map((item) => (
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
                    Home
                  </Link>
                  <a
                    href="/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-white/5"
                  >
                    About
                  </a>
                </div>
                <div className="py-6">
                  <CustomButton href={"/contact"}>Contact Us</CustomButton>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </nav>
    </header>
  );
}
