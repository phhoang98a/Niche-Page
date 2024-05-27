"use client"
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, useDisclosure } from "@nextui-org/react";
import styles from "../styles/navbar.module.css"
import Logo from "./Logo";
import RequestModal from "./RequestModal";
import Icon from "../components/Icon";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Image API", link: "/image-api" },
    { name: "Text API", link: "/text-api" },
    { name: "NicheTensor", link: "/about-us" },
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
            <Button className={`w-[180px] ${styles.button2}`} onClick={onOpen}>
              <Icon />
              <span className={`${styles.textColor}`}>
                Request credits
              </span>
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
            <Button className={`w-full flex items-center justify-center ${styles.button2}`} onClick={onOpen}>
              <span className={`${styles.textColor}`}>
                Request credits
              </span>
            </Button>
          </NavbarItem>
        </NavbarMenu>
      </Navbar>
      <RequestModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>

  );
}
