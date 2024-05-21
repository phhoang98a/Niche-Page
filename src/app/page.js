"use client"
import Image from 'next/image'
import styles from "../styles/home.module.css"
import { Card, CardBody, Button } from "@nextui-org/react";
import Link from 'next/link'
import Icon from '@/components/Icon';
import Contact from '@/components/Contact';
import { useRef } from 'react';
import Aboutus from '@/components/Aboutus';


const Serendale = ({ servicesRef }) => {
  const handleLearnMoreClick = () => {
    servicesRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="flex justify-center items-center">
      <div className={`${styles.serendale}  w-full max-w-7xl p-3 md:p-12 lg:p-20 `} >
        <div className={`${styles.area_1}`}>
          Want an affordable <p className={styles.textColor}> image and text generation API </p> that supports the latest models?

        </div>
        <div className={styles.area_2}>
          The NicheTensor API supports cutting edge models such as JuggernautX, DreamShaperXL, Llama 3 70B and many more!
        </div>
        <Button className={styles.button1} onClick={handleLearnMoreClick}>
          <Icon />
          <span className={`${styles.textColor}`}>
            Learn more
          </span>
        </Button>
        <Image src="/Frame.svg" width={1} height={1} className={styles.imageSerendale}>
        </Image>
      </div>
    </div>
  )
}

const Services = ({ servicesRef }) => {
  return (
    <div ref={servicesRef} className="flex justify-center items-center">
      <div className="grid grid-cols-1 w-full max-w-7xl md:grid-cols-2 p-3 lg:p-1 gap-4 mt-[20px] mb-12">
        <div>
          <Card className="ml-auto mr-auto md:mr-0 h-full flex flex-col" style={{ background: "rgba(27, 26, 31, 1)" }}>
            <CardBody className={`flex flex-col justify-between   ${styles.cardBodyCenter}`}>
              <div className="flex-grow flex flex-col justify-center items-center">
                <div className={styles.roundText}>
                  Image Generation
                </div>
                <div className={styles.cardText1}>
                  Stunning Images for Every Use Case
                </div>
                <div className={styles.cardText2}>
                  By supporting 7 different image models with different styles and generation speeds, you can find the optimal model for your use case.
                </div>
              </div>
              <div>
                <Image src="/image.png" width={0} height={0} sizes="100vw" className={styles.image}></Image>
              </div>
              <div className="mt-auto flex justify-center">
                <Button className={`w-[140px] ${styles.textButton}`}>
                  <Link href='/image-api'>Learn more</Link>
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card className="ml-auto mr-auto md:ml-0 h-full flex flex-col" style={{ background: "rgba(27, 26, 31, 1)" }}>
            <CardBody className={`flex flex-col justify-between  ${styles.cardBodyCenter}`}>
              <div className="flex-grow flex flex-col justify-center items-center">
                <div className={styles.roundText}>
                  Text Generation
                </div>
                <div className={styles.cardText1}>
                  Intelligent Text Generation
                </div>
                <div className={styles.cardText2}>
                  Power your apps with extremely affordable text generation, utilizing the latest and best available models of different sizes.
                </div>
              </div>
              <div>
                <Image src="/text.webp" width={0} height={0} sizes="100vw" className={styles.image}></Image>
              </div>
              <div className="mt-auto flex justify-center">
                <Button className={`w-[140px] ${styles.textButton}`}>
                  <Link href='/text-api'>Learn more</Link>
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const servicesRef = useRef(null);
  return (
    <div>
      <Serendale servicesRef={servicesRef} />
      <Services servicesRef={servicesRef} />
      <div style={{ background: "linear-gradient(150.98deg, #151836 14.93%, rgba(14, 15, 20, 0) 78.67%)" }}>
        <div className='pb-[100px]'>
          <Aboutus/>
          <Contact />
        </div>
      </div>
    </div>

  );
}


