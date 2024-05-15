"use client"
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import styles from "../styles/navbar.module.css"
import Logo from "./Logo";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Image APIs", link: "/image-apis" },
    { name: "Text APIs", link: "/text-apis" },
    { name: "NicheTensor", link: "#" },
  ];

  return (
    <div>
      <Navbar className={styles.bgRadientCustom} onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden"
          />
          <NavbarBrand>
            <Logo />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden lg:flex gap-4" justify="center">
          {menuItems.map((item, index) => (
            <NavbarItem key={`${item.name}-${index}`}>
              <Link
                className={`w-full ${styles.textNav}`}
                href={item.link}
                size="lg"
              >
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end" className="pl-4">
          <NavbarItem className="hidden lg:flex">
            <Button className={`w-[140px] ${styles.button1}`}>
              <Link href='https://shorturl.at/fiFY3' className="text-white">Join Discord</Link>
            </Button>
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">
            <Button className={`w-[140px] ${styles.button2}`}>
              Get started
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu style={{ background: "linear-gradient(157.87deg, #151836 0%, #0E0F14 100%)" }}>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.name}-${index}`}>
              <Link
                className={`w-full ${styles.textNav}`}
                href={item.link}
                size="lg"
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarItem>

            <Button className={`w-full flex items-center justify-center ${styles.button1}`}>
              <Link href='https://shorturl.at/fiFY3' className="text-white">Join Discord</Link>
            </Button>

          </NavbarItem>
          <NavbarItem>
            <Button className={`w-full flex items-center justify-center ${styles.button2}`}>
              Get started
            </Button>
          </NavbarItem>
        </NavbarMenu>
      </Navbar>
    </div>

  );
}
