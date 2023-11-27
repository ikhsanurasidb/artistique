import Image from "next/image";
import React from "react";
import Logo from "./artistique-logo";
import Link from "next/link";
import { SignUpButton, LoginButton } from "./button";
import { CartIcon } from "./icons";

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
            <CartIcon/>
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
      <CartAndProfile />
    </div>
  );
};

export default Navbar;
