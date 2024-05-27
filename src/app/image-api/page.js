import styles from "../../styles/image.module.css"
import { Button } from "@nextui-org/react";
import Image from 'next/image'
import Pricing from "@/components/Pricing";
import Partners from "@/components/Partners";
import React from "react";
import Questions from "@/components/Questions";
import Link from 'next/link';
import { Resources } from "@/components/Resources";

const Introduction = () => {
  return (
    <div style={{ background: "rgba(27, 26, 31, 1)" }} className="flex justify-center items-center">
      <div className="w-full max-w-7xl p-6 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 lg:mb-20 lg:mt-20">
        <div className="flex flex-col justify-center">
          <div className={styles.title}>
            {/* All new <span className={styles.textColor}>Image APIs</span> */}
            Stunning Images for Every Use Case
          </div>
          <div className={styles.describe}>
            By supporting 7 different image models with different styles and generation speeds, you can find the optimal model for your use case
          </div>
        </div>
        <div className="flex justify-center items-center rounded-xl">
          <div className="md:w-[70%]">
            <Image src="/Text.svg" width={0} height={0} sizes="100vw" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

const Features = () => {
  const features = [
    { model: "GoJourney", image: "/Go Journey.svg", text: "Embark on a journey of innovation and creativity" },
    { model: "Sticker Maker", image: "/Sticker.svg", text: "Conjure up perfect stickers with AI-generated graphics and seamless transparent backgrounds" },
    { model: "Text To Image", image: "/Text To Image.svg", text: "Convert your textual ideas into breathtaking visuals" },
    { model: "Face To Many", image: "/Face to many.png", text: "Transform any face into 3D, emoji, pixel art, video game characters, claymation, or toys" },
    { model: "Control To Image", image: "/Control to image.png", text: "Harness the power of ControlNet to modify images with precision" },
    { model: "Image To Image", image: "/Image to image.png", text: "Reimagine and recreate visuals effortlessly" },
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
      <Resources/>
      {/* <div style={{ background: "linear-gradient(150.98deg, #151836 14.93%, rgba(14, 15, 20, 0) 78.67%)" }}>
        <Partners />
        <div style={{ background: "rgba(27, 27, 27, 1)", marginBottom: "50px" }}>
          <Questions />
        </div>
      </div> */}
    </div >
  )

}