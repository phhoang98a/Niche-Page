"use client"
import React, { useState, useEffect } from "react";
import Icon from "./Icon";
import styles from "../styles/image.module.css"
import Image from 'next/image'
import { Button, useDisclosure } from "@nextui-org/react";
import RequestModal from "./RequestModal";


export default function Pricing() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>

      <div className="flex justify-center items-center p-2 md:p-4 mt-20 md:mt-28 ">
        <div className="w-full max-w-7xl grid grid-cols-1 rounded-3xl p-6 md:p-0 md:grid-cols-2 gap-12 md:gap-1 mb-10"
          style={{ background: "linear-gradient(177.52deg, #1A162D -2.74%, #1D1831 35.54%, #272140 97.93%)" }}>
          <div className="relative hidden md:block">
            <div>
              <Image
                src="/robot.svg"
                width={0} height={0} sizes="100vw"
                className={`${styles.imagePricing} absolute bottom-0 `}
              />
            </div>
          </div>
          <div className="rounded-xl p-6">
            <p className={styles.textBold}>
              Let's <span className={styles.textColor}>get started</span>
            </p>
            <div className={`${styles.textSlim} mt-4`}>
              First <span className={styles.textColor}>10.000</span> generations for free!
            </div>
            <div className={`${styles.textSlim} mt-2`}>
              Then <span className={styles.textColor}>$0.01</span> per generation
            </div>
            <Button className={`${styles.pricingButton}  hover:bg-purple-100 focus:outline-none w-full`} onClick={onOpen}>
              <Icon />
              <span className={`${styles.textColor} text-base`}>
                Request credits
              </span>
            </Button>
          </div>
        </div>
      </div>
      <RequestModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  )
}