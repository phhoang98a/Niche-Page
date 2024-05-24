"use client"
import React, { useState, useEffect } from "react";
import Icon from "./Icon";
import styles from "../styles/image.module.css"
import Image from 'next/image'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";

const MailIcon = (props) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z"
      fill="currentColor"
    />
  </svg>
);

export default function Pricing() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const sendingEmail = async () => {
    fetch("/api/notification", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
    setEmail("")
    setShowAlert(true);
  }

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

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
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        style={{ background: "linear-gradient(177.52deg, #1A162D -2.74%, #1D1831 35.54%, #272140 97.93%)" }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

              </ModalBody>
              <ModalFooter className="flex flex-col items-center space-y-2">
                <Button
                  color="primary"
                  onPress={sendingEmail}
                  style={{
                    background: "linear-gradient(96.63deg, #D79AF5 3.04%, #9393F5 99.24%)",
                    width: "100%"
                  }}
                >
                  Request credits
                </Button>
                {showAlert && (
                  <div role="alert" className="alert alert-success">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Your credits request has been sent!</span>
                  </div>
                )}
                <div className="text-center text-sm mt-2 px-3">
                  NicheTensor respects your privacy. For more information, see our Privacy Policy.
                </div>
              </ModalFooter>

            </>
          )}
        </ModalContent>

      </Modal>

    </>
  )
}