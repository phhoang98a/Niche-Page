import Image from 'next/image'
import styles from "../styles/home.module.css"
import { Card, CardBody, Button } from "@nextui-org/react";
import Link from 'next/link'
import Icon from '@/components/Icon';

const Serendale = () => {
  return (
    <div className={styles.serendale} >
      <div className={styles.area_1}>
        Inference and data generation <span className={styles.textColor}>AI models</span>
      </div>
      <div className={styles.area_2}>
        Our technology performing fast blockchain (120K TPS) and it has guaranteed AI-based data security. Proof of Stake, its consensus algorithm enables unlimited speeds.
      </div>
      <Button className={styles.button1}>
        <Icon />
        <span className={`${styles.textColor}`}>
          Get started
        </span>
      </Button>
      <Image src="/Frame.svg" width={1} height={1} className={styles.imageSerendale}>
      </Image>
    </div>
  )
}

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[20px] xl:mt-[80px]">
      <div>
        <Card className={`ml-auto mr-auto md:mr-0 ${styles.card}`} style={{ background: "rgba(27, 26, 31, 1)" }}>
          <CardBody className={styles.cardBodyCenter}>
            <div className={styles.roundText}>
              Image APIs
            </div>
            <div className={styles.cardText1}>
              Your gateway
              <br />
              to perfect images
            </div>
            <div className={styles.cardText2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas  fermentum tellus at pellentesque luctus.
            </div>
            <Image src="/GoJourney.svg" width={0} height={0} sizes="100vw" className={styles.image}></Image>
            <Button className={`w-[140px] ${styles.textButton}`} >
              <Link href='https://studio.nichetensor.com/'>Try now</Link>
            </Button>
          </CardBody>
        </Card>
      </div>
      <div >
        <Card className={`ml-auto mr-auto md:ml-0 ${styles.card}`} style={{ background: "rgba(27, 26, 31, 1)" }}>
          <CardBody className={styles.cardBodyCenter}>
            <div className={styles.roundText}>
              Text APIs
            </div>
            <div className={styles.cardText1}>
              Your gateway
              <br />
              to perfect texts
            </div>
            <div className={styles.cardText2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas  fermentum tellus at pellentesque luctus.
            </div>
            <Image src="/TextFeature.svg" width={0} height={0} sizes="100vw" className={styles.image}></Image>
            <Button className={`w-[140px] ${styles.textButton}`}>
              Try now
            </Button>
          </CardBody>
        </Card>
      </div>

    </div>
  )
}

const AboutUs = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-7xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-0 mb-5">
        <div className="flex flex-col justify-center">
          <div className={styles.auText_1}>
            About Us
          </div>
          <div className={styles.auText_2}>
            Empowering <span className={styles.textColor}>Niche Tensor</span>  By Keeping Them Well
          </div>
          <div className={styles.auText_3}>
            NicheImage is a decentralized network that powers the image generation API.
            <br />
            <br />
            By having the network decentralized using the Bittensor protocol, anyone can join as an image producer.
            <br />
            <br />
            We then validate that all image producers use the models we specify, and in return for generating images for us, the image producers get paid.
          </div>
          <Button className={`w-[140px] ${styles.buttonAu}`}>
            Read More
          </Button>
        </div>
        <div className="flex rounded-xl">
          <Image src="/Aboutus.svg" width={1} height={1} className="w-[100%]" ></Image>
        </div>
      </div>
    </div>
  )
}

const Contact = () => {
  return (
    <div>
      <div className={styles.textContact}>
        Get in touch <span className={styles.textColor}>with us</span>
      </div>
      <div className="flex justify-center mt-[40px] ">
        <div className={`${styles.contactContainer} grid grid-cols-1 lg:grid-cols-3 gap-2`}>
          <div className={`${styles.contact} flex items-center`}>
            <div className='mx-6'>
              <Image src="/discord.svg" width={0} height={0} sizes="100vw" className={styles.icon}></Image>
            </div>
            <div className={styles.textCt}>
              <div className={styles.textCt_1}>Discord</div>
              <div className={styles.textCt_2}><Link href='https://shorturl.at/fiFY3'>https://shorturl.at/fiFY3</Link></div>
            </div>
          </div>
          <div className={`${styles.contact} flex items-center`}>
            <div className='mx-6'>
              <Image src="/email.svg" width={0} height={0} sizes="100vw" className={styles.icon}></Image>
            </div>
            <div className={styles.textCt}>
              <div className={styles.textCt_1}>Email</div>
              <div className={styles.textCt_2}>Niche@gmail.com</div>
            </div>
          </div>
          <div className={`${styles.contact} flex items-center`}>
            <div className='mx-6'>
              <Image src="/github.svg" width={0} height={0} sizes="100vw" className={styles.icon}></Image>
            </div>
            <div className={styles.textCt}>
              <div className={styles.textCt_1}>GitHub</div>
              <div className={styles.textCt_2}><Link href='https://shorturl.at/uyAPZ'>https://shorturl.at/uyAPZ</Link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <Serendale />
      <Services />
      <div style={{ background: "linear-gradient(150.98deg, #151836 14.93%, rgba(14, 15, 20, 0) 78.67%)" }}>
        <div className='pb-[100px]'>
          <AboutUs />
          <Contact />
        </div>
      </div>
    </div>

  );
}


