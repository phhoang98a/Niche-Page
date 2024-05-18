import Image from 'next/image'
import styles from "../../styles/aboutus.module.css"
import { Card, CardBody, Button } from "@nextui-org/react";
import Link from 'next/link'
import Icon from '@/components/Icon';
import { Teams } from '@/components/Teams';
import Timeline from '@/components/Timeline';
import Contact from '@/components/Contact';

const NicheTensor = () => {
  return (
    <svg viewBox="0 0 1180 144" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27 128.768L23.024 130.168L23.024 138.316L27 139.716L27 143.048L7.512 136.076L7.512 132.38L27 125.408L27 128.768ZM20.42 131.064L11.376 134.228L20.42 137.42L20.42 131.064ZM13.868 116.385C12.468 115.377 11.32 113.445 11.32 111.009C11.32 106.921 14.456 103.757 19.216 103.757C23.976 103.757 27.252 106.949 27.252 111.009C27.252 113.557 26.104 115.377 24.76 116.385L27 116.385L27 119.577L6.28 119.577L6.28 116.385L13.868 116.385ZM19.216 107.005C15.884 107.005 14.092 109.301 14.092 111.709C14.092 114.089 15.968 116.385 19.272 116.385C22.604 116.385 24.48 114.089 24.48 111.709C24.48 109.301 22.548 107.005 19.216 107.005ZM19.272 83.1C24.116 83.1 27.252 86.684 27.252 91.108C27.252 95.504 24.116 98.836 19.272 98.836C14.428 98.836 11.32 95.364 11.32 90.968C11.32 86.572 14.428 83.1 19.272 83.1ZM19.272 95.588C22.772 95.588 24.48 93.516 24.48 91.108C24.48 88.728 22.772 86.376 19.272 86.376C15.772 86.376 14.092 88.644 14.092 91.024C14.092 93.432 15.772 95.588 19.272 95.588ZM11.572 63.1725L27 63.1725L27 66.3645L25.152 66.3645C26.468 67.3725 27.224 69.1085 27.224 70.9285C27.224 74.5405 24.956 77.2845 20.644 77.2845L11.572 77.2845L11.572 74.1205L20.168 74.1205C22.996 74.1205 24.452 72.5805 24.452 70.2565C24.452 67.9045 22.996 66.3645 20.168 66.3645L11.572 66.3645L11.572 63.1725ZM22.716 55.6569L14.176 55.6569L14.176 57.4769L11.572 57.4769L11.572 55.6569L7.736 55.6569L7.736 52.4369L11.572 52.4369L11.572 48.6849L14.176 48.6849L14.176 52.4369L22.716 52.4369C23.864 52.4369 24.34 51.9889 24.34 50.6449L24.34 48.6849L27 48.6849L27 51.2049C27 53.9489 25.852 55.6569 22.716 55.6569Z" fill="#F9F9F9" />
      <path fillRule="evenodd" clipRule="evenodd" d="M273.491 0.201172C241.582 0.201172 217.293 30.0082 217.293 72.1005C217.293 114.193 241.582 143.798 273.491 143.798C298.098 143.798 318.101 127.284 325.562 98.2823H300.003C294.764 111.977 285.239 118.624 273.333 118.624C253.965 118.624 240.153 100.498 240.153 72.1005C240.153 43.5019 253.965 25.5774 273.333 25.5774C285.239 25.5774 294.764 32.2235 300.003 45.7172H325.562C318.101 16.9173 298.098 0.201172 273.491 0.201172ZM127.55 1.61084H149.775V142.388H127.55L77.2253 45.9185V142.388H55V1.61084H77.2253L127.55 98.2822V1.61084ZM172.421 142.288V1.71167H194.646V142.288H172.421ZM417.9 142.288V82.4725H370.433V142.288H348.208V1.71167H370.433V59.5131H417.9V1.71167H440.126V142.288H417.9ZM527.066 24.5703V1.61084H462.771V142.388H527.066V119.429H484.997V82.1703H522.304V59.815H484.997V24.5703H527.066Z" fill="url(#paint0_linear_153_1564)" />
      <path d="M549.712 24.4699V1.71191H630.994V24.4699H601.466V142.288H579.24V24.4699H549.712Z" fill="white" />
      <path d="M717.935 1.61133V24.5708H675.866V59.8155H713.172V82.1708H675.866V119.43H717.935V142.389H653.64V1.61133H717.935Z" fill="white" />
      <path d="M813.131 1.61133H835.356V142.389H813.131L762.806 45.919V142.389H740.581V1.61133H762.806L813.131 98.2827V1.61133Z" fill="white" />
      <path d="M938.331 101.908C938.331 124.062 924.361 144 899.119 144C876.1 144 858.32 128.694 858.002 102.109H881.815C882.45 113.387 888.324 120.839 898.643 120.839C909.121 120.839 915.312 113.79 915.312 103.72C915.312 73.3091 858.161 91.6363 858.32 40.6825C858.32 15.3063 874.513 0 897.373 0C920.075 0 935.632 14.7021 937.061 40.0783H912.613C912.137 30.814 906.263 23.5636 896.738 23.3622C888.007 22.9594 881.498 28.3972 881.498 39.8769C881.498 68.0727 938.331 52.3636 938.331 101.908Z" fill="white" />
      <path d="M1074.49 71.8993C1074.49 114.193 1049.24 144 1017.81 144C986.536 144 960.977 114.193 960.977 71.8993C960.977 29.807 986.536 0 1017.81 0C1049.4 0 1074.49 29.807 1074.49 71.8993ZM983.837 71.8993C983.837 100.498 997.649 118.825 1017.81 118.825C1037.81 118.825 1051.62 100.498 1051.62 71.8993C1051.62 43.3007 1037.81 25.3762 1017.81 25.3762C997.649 25.3762 983.837 43.3007 983.837 71.8993Z" fill="white" />
      <path d="M1155.87 45.4154C1155.87 32.9287 1150.31 25.0741 1137.93 25.0741H1119.36V66.3609H1137.93C1150.31 66.3609 1155.87 58.1035 1155.87 45.4154ZM1097.13 1.71191H1138.72C1165.39 1.71191 1178.73 21.2476 1178.73 44.8112C1178.73 61.9301 1171.27 79.2504 1153.49 85.2923L1180 142.288H1154.28L1129.83 87.5077H1119.36V142.288H1097.13V1.71191Z" fill="white" />
      <defs>
        <linearGradient id="paint0_linear_153_1564" x1="65.8938" y1="13.6634" x2="508.172" y2="182.749" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D79AF5" />
          <stop offset="1" stopColor="#9393F5" />
        </linearGradient>
      </defs>
    </svg>
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
        </div>
        <div className="flex rounded-xl">
          <Image src="/Aboutus.svg" width={1} height={1} className="w-[100%]" ></Image>
        </div>
      </div>
    </div>
  )
}


const AboutNicheTensor = () => {
  return (
    <div style={{ background: "linear-gradient(180deg, rgba(21, 24, 54, 0.24) 0%, rgba(7, 9, 17, 0.24) 100%)" }} className='p-6 md:p-8 lg:p-20'>
      <div className="flex justify-center items-center relative w-full">
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className={styles.text_1_bold}>
              Pioneering in the field of AI
            </p>
            <p className={`${styles.text_1_slim} mt-2`}>
              Re-targeting your audience with competitive intelligence embedded in Destiny. See it in action and then believe
            </p>
            <Button className={styles.button}>
              Contact us
            </Button>
          </div>
          <div className="rounded-xl">
            <Image src="/R part.svg" width={0} height={0} sizes="100vw" className="w-full" />
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-auto max-w-7xl">
          <NicheTensor />
        </div>
      </div>
    </div>
  )
}

export default function AboutNiche() {

  return (
    <div>
      <AboutNicheTensor />
      <AboutUs />
      <Timeline />
      <Teams />
      <div className='pb-[100px]'>
        <Contact />
      </div>
    </div>

  );
}


