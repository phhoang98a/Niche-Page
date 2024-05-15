import styles from "../styles/image.module.css"
import Image from 'next/image'

export default function Partners() {

  const partners = [
    { logo: "/p-1.svg" },
    { logo: "/p-2.svg" },
    { logo: "/p-3.svg" },
    { logo: "/p-4.svg" },
    { logo: "/p-5.svg" },
    { logo: "/p-1.svg" },
    { logo: "/p-2.svg" },
    { logo: "/p-3.svg" },
    { logo: "/p-4.svg" },
    { logo: "/p-5.svg" },
  ];

  return (
    <div className="flex justify-center">
      <div className="w-[95%] lg:w-[80%] my-10 ">
        <div className={`${styles.textTitle} pb-2 md:pb-10`}>
          <span className={styles.textColor}>The best partners</span> trust NicheTensor
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {partners.map((partner, index) => (
            <div key={index} className={`${styles.container} flex justify-center items-center h-24`}> {/* Adjust the height as needed */}
              <div className="flex justify-center items-center w-[95%] h-full"> {/* Ensures centering within this div */}
                <Image src={partner.logo} width={150} height={150} sizes="100vw" className="max-h-14" /> {/* Adjust max height as needed */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}