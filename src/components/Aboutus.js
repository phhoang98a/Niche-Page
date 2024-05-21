import Image from 'next/image'
import styles from "../styles/home.module.css"
import Link from 'next/link'
import { Button } from "@nextui-org/react";

export const Aboutus = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-7xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-0 mb-5">
        <div className="flex flex-col justify-center">
          <div className={styles.auText_1}>
            About Us
          </div>
          <div className={styles.auText_2}>
            Making AI Tailored to Each Individual
          </div>
          <div className={styles.auText_3}>
            We are a startup working to make AI universally accessible and tailored to each individual’s needs.
            <br />
            <br />
            We do this by providing AI services such as image and text generation tailored to the client’s needs.
            <br />
            <br />
            To ensure the fastest and most affordable end product, we utilize Bittensor - a protocol that allows us to use decentralized networks of computing, that ensure that we always have the optimal and most price efficient compute available.
          </div>
          <Button className={`w-[140px] ${styles.buttonAu}`}>
            <Link href='/about-us'>Read More</Link>
          </Button>
        </div>
        <div className="flex rounded-xl">
          <Image src="/Aboutus.svg" width={1} height={1} className="w-[100%]" ></Image>
        </div>
      </div>
    </div>
  )
};

export default Aboutus;
