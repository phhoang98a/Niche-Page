import styles from "../../styles/image.module.css"
import { Button } from "@nextui-org/react";
import Image from 'next/image'
import Pricing from "@/components/Pricing";
import Partners from "@/components/Partners";
import React from "react";
import Questions from "@/components/Questions";
import Link from 'next/link'

const Introduction = () => {
  return (
    <div style={{ background: "rgba(27, 26, 31, 1)" }} className="flex justify-center items-center">
      <div className="w-full max-w-7xl p-6 md:p-4 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-1">
        <div className="flex flex-col justify-center">
          <div className={styles.title}>
            All new <span className={styles.textColor}>Image APIs</span>
          </div>
          <div className={styles.describe}>
            GoAPI provides GPT API for your development needs, you can now add GPTs, along with all its capabilities and features, into your own app, projects, or websites. Sign up now and happy integrating!
          </div>
          <div>
            <div className="rounded-3xl p-5 flex justify-around items-center lg:items-start mt-10 xl:mt-15" style={{ background: "rgba(41, 40, 40, 1)" }}>
              <div>
                <div className={styles.number}>40k+</div>
                <div className={styles.textNum}>Total Users</div>
              </div>
              <div>
                <div className={styles.number}>50k+</div>
                <div className={styles.textNum}>Auctions</div>
              </div>
              <div>
                <div className={styles.number}>80k+</div>
                <div className={styles.textNum}>Artists</div>
              </div>
            </div>
          </div>
          <div className="mt-10 xl:mt-15 flex justify-center md:justify-start">
            <Button className={`px-7 ${styles.button1}`}>
              <Link href='https://studio.nichetensor.com/'>Try now!</Link>
            </Button>
            <Button className={`ml-3 px-7 ${styles.button2}`}>
              <Link href="https://docs.nichetensor.com/">Documentation</Link>
            </Button>
          </div>
        </div>
        <div className="hidden md:flex rounded-xl">
          <Image src="/Image.svg" width={0} height={0} sizes="100vw" className={styles.bigImage} />
        </div>
      </div>
    </div>
  )
}

const Features = () => {
  const features = [
    { model: "GoJourney", image: "/Go Journey.svg", text: "A lab exploring new ways of thinking and enhancing human creativity" },
    { model: "Sticker Maker", image: "/Sticker.svg", text: "Stop scrolling for hours to find the perfect sticker and instead make your own" },
    { model: "Text To Image", image: "/Text To Image.svg", text: "Transform your ideas into stunning visuals with our powerful video creation platform" },
    { model: "Face To Many", image: "/Face to many.svg", text: "A lab exploring new ways of thinking and enhancing human creativity" },
    { model: "Control To Image", image: "/Control to Image.svg", text: "Stop scrolling for hours to find the perfect sticker and instead make your own" },
    { model: "Image To Image", image: "/Image2Image.svg", text: "A lab exploring new ways of thinking and enhancing human creativity" },
  ];
  return (
    <div className="my-4 lg:my-12 flex justify-center">
      <div className="w-[95%] lg:w-[80%]">
        <div className={styles.textTitle}>
          AI Art Generator with <span className={styles.textColor}>Swift AI Tools</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <div className={styles.container}>
              <div className="w-[95%]">
                <Image src={feature.image} width={0} height={0} sizes="100vw" className="w-full" />
                <div className={styles.featureModel}>
                  {feature.model}
                </div>
                <div className={styles.featureText}>
                  {feature.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ImageApi() {


  return (
    <div>
      <Introduction />
      <Features />
      <Pricing />
      <div style={{ background: "linear-gradient(150.98deg, #151836 14.93%, rgba(14, 15, 20, 0) 78.67%)" }}>
        <Partners />
        <div style={{ background: "rgba(27, 27, 27, 1)", marginBottom: "50px" }}>
          <Questions />
        </div>
      </div>
    </div >
  )

}