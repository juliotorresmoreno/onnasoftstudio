"use client";

import classNames from "classnames";
import Image from "next/image";
import { useRef, useState } from "react";
import logoSrc from "../assets/icon64x64.png";
import Link from "next/link";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const toggle = () => setIsOpen(!isOpen);
  const toggleMenu = () => {
    if (navRef.current) {
      toggle();
    }
  };
  return (
    <header
      className="mx-auto w-full border-b border-gray-50/0 ease-in-out flex-none sticky top-0 transition-[opacity] z-40 bg-white"
      id="header"
    >
      <div className="absolute inset-0" />
      <div className="relative mx-auto max-w-7xl md:px-6 text-default md:flex md:justify-between px-3 py-3 w-ful">
        <div className="flex justify-between">
          <a href="/#" className="flex items-center font-bold">
            <span className="font-bold text-lg ml-2 rtl:ml-0 rtl:mr-2 self-center text-gray-900 whitespace-nowrap">
              <Image
                alt=""
                decoding="async"
                height={64}
                loading="lazy"
                src={logoSrc}
                style={{
                  width: "24px",
                  display: "inline-block",
                  marginTop: "-2px",
                }}
                width={64}
              />{" "}
              &nbsp;Home
            </span>
          </a>
          <div className="flex items-center md:hidden">
            <button
              aria-label="Toggle Menu"
              className="flex justify-center items-center cursor-pointer flex-col group h-12 rounded w-12"
              onClick={toggleMenu}
            >
              {!isOpen ? (
                <>
                  <span className="sr-only">Toggle Menu</span>
                  <span
                    className="bg-black dark:bg-white duration-200 ease h-0.5 my-1 opacity-80 rounded-full transform transition w-6 group-[.expanded]:rotate-45 group-[.expanded]:translate-y-2.5"
                    aria-hidden="true"
                  />
                  <span
                    className="bg-black dark:bg-white duration-200 ease h-0.5 my-1 opacity-80 rounded-full transform transition w-6 group-[.expanded]:opacity-0"
                    aria-hidden="true"
                  />
                  <span
                    className="bg-black dark:bg-white duration-200 ease h-0.5 my-1 opacity-80 rounded-full transform transition w-6 group-[.expanded]:-rotate-45 group-[.expanded]:-translate-y-2.5"
                    aria-hidden="true"
                  />
                </>
              ) : (
                <>X</>
              )}
            </button>
          </div>
        </div>

        <nav
          ref={navRef}
          aria-label="Main navigation"
          className={
            classNames({ hidden: !isOpen }) +
            " w-full md:w-auto items-center md:flex md:mx-5 overflow-x-hidden overflow-y-auto text-default"
          }
        >
          <ul className="flex flex-col font-medium md:flex-row md:self-center md:text-[0.9375rem] md:w-auto text-xl tracking-[0.01rem] w-full">
            <li>
              <a
                href="/#about"
                className="flex hover:text-pink-600 text-lg hover:text-link items-centers px-4 py-3 font-bold	"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="/#features"
                className="flex hover:text-pink-600 text-lg hover:text-link items-centers px-4 py-3 font-bold	"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="/#FAQS"
                className="flex hover:text-pink-600 text-lg hover:text-link items-centers px-4 py-3 font-bold	"
              >
                FAQS
              </a>
            </li>
            <li>
              <Link
                href="/contact"
                className="flex hover:text-pink-600 text-lg hover:text-link items-centers px-4 py-3 font-bold	"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="flex hover:text-pink-600 text-lg hover:text-link items-centers px-4 py-3 font-bold	"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center md:w-auto w-full bottom-0 fixed hidden justify-end left-0 md:flex md:mb-0 md:p-0 md:self-center md:static p-3 rtl:left-auto rtl:right-0">
          <div className="flex items-center md:w-auto w-full justify-between">
            <div className="flex"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
