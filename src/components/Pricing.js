import Icon from "./Icon";
import styles from "../styles/image.module.css"
import { Button } from "@nextui-org/react";
import Image from 'next/image'

export default function Pricing() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-7xl p-6 md:p-4 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-1 mb-10">
        <div className="flex flex-col justify-center">
          <h2 className={styles.text_1}>Pricing plan</h2>
          <h1 className={`${styles.textBold} mt-2`}>
            Let’s <span className={styles.textColor}>get stared</span>
          </h1>
          <p className={`${styles.textSlim} mt-4`}>
            Nichelmage is a decentralized network that powers the image generation API.
          </p>
        </div>
        <div className="rounded-xl p-6" style={{ background: "linear-gradient(177.52deg, #1A162D -2.74%, #1D1831 35.54%, #272140 97.93%)" }}>
          <h2 className={styles.textBold}>Free trial</h2>
          <p className={`${styles.textSlim} mt-2`}>For those who want to test it out.</p>
          <div className={`${styles.textBold} mt-4`}>
            First <span className={styles.textColor}>10,000</span> generations for free!
          </div>
          <div className={`${styles.textBold} mt-2`}>
            Then <span className={styles.textColor}>$0.01</span> per generation
          </div>

          <Button className={`${styles.pricingButton} hover:bg-purple-100 focus:outline-none w-full`}>
            <Icon/>
            <span className={`${styles.textColor} text-base`}>
              Get started
            </span>
          </Button>
          <hr className="border-[rgba(224, 224, 224, 1)] my-6" />
          <ul className={`${styles.textSlim} space-y-5`}>
            <li className="flex items-center">
              <Image src="/check-circle.svg" width={20} height={20} sizes="100vw" className="mr-2" /> Limited generations
            </li>
            <li className="flex items-center">
              <Image src="/check-circle.svg" width={20} height={20} sizes="100vw" className="mr-2" />General commercial terms
            </li>
            <li className="flex items-center">
              <Image src="/check-circle.svg" width={20} height={20} sizes="100vw" className="mr-2" />Optional credit top ups
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}