import Image from "next/image";
import React from "react";
import Logo from "./artistique-logo";
import Link from "next/link";
import { SignUpButton, LoginButton } from "./button";

const ArtistiqueLogo = () => {
  return (
    <div className="flex-1">
      <Link href="/" className="btn btn-ghost text-xl text-base-200">
        <Logo />
      </Link>
    </div>
  );
};

const Menu = () => {
  const links = [
    { name: "Arts", href: "/#arts-area" },
    { name: "Artists", href: "/#artists-area" },
    { name: "Auction", href: "/#auction-area" },
  ];
  const artsCategory = [
    { name: "Painting" },
    { name: "Sculpture" },
    { name: "Graphic Arts" },
    { name: "Photography" },
  ];

  return (
    <div className="flex-none gap-4">
      {links.map((link) => {
        return (
          <div className="dropdown dropdown-hover" key={link.name}>
            <label
              tabIndex={0}
              className="btn-neutral m-1 tracking-widest text-xl"
            >
              <Link href={link.href}>{link.name}</Link>
            </label>

            {/* untuk sub menu */}
            {link.name === "Arts" ? (
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full lg:w-52"
              >
                {artsCategory.map((category) => (
                  <li key={category.name}>
                    <a>{category.name}</a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

const CartAndProfile = () => {
  return (
    <div className="flex-none">
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-sm indicator-item">8</span>
          </div>
        </label>
        <div
          tabIndex={0}
          className="mt-3 z-[1] card card-compact dropdown-content w-full lg:w-52 bg-base-100 shadow"
        >
          <div className="card-body">
            <span className="font-bold text-lg">8 Items</span>
            <span className="text-neutral">Subtotal: $999</span>
            <div className="card-actions">
              <button className="btn btn-primary btn-block text-neutral">
                View cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <Image
              alt="Tailwind CSS Navbar component"
              width={30}
              height={30}
              src="/profile-icon.webp"
            />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-full lg:w-52"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <p>Logout</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="navbar glass flex flex-col lg:flex-row items-center gap-4 p-4 fixed top-0 w-full z-10">
      <ArtistiqueLogo />
      <Menu />
      <LoginButton href="/login"/>
      <SignUpButton href="/signup"/>
    </div>
  );
};

export default Navbar;
