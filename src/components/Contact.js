import Image from 'next/image'
import styles from "../styles/home.module.css"
import Link from 'next/link'
const imgs = [
  { image: "/Team-1.svg", describle: "Mr Niche" },
  { image: "/Team-1.svg", describle: "Mr Niche" },
  { image: "/Team-1.svg", describle: "Mr Niche" },
  { image: "/Team-1.svg", describle: "Mr Niche" },
  { image: "/Team-1.svg", describle: "Mr Niche" },
];


export const Contact = () => {
  return (
    <div>
      <div className={styles.textContact}>
        Get in touch <span className={styles.textColor}>with us</span>
      </div>
      <div className="flex justify-center mt-[40px] ">
        <div className={`${styles.contactContainer} grid grid-cols-1 md:grid-cols-3 gap-2`}>
          <div className={`${styles.contact} flex items-center`}>
            <div className='mx-6 lg:mx-3'>
              <Image src="/discord.svg" width={0} height={0} sizes="100vw" className={styles.icon}></Image>
            </div>
            <div >
              <div className={styles.textCt_1}><Link href='https://shorturl.at/fiFY3'>Discord</Link></div>
            </div>
          </div>
          <div className={`${styles.contact} flex items-center`}>
            <div className='mx-6 lg:mx-3'>
              <Image src="/email.svg" width={0} height={0} sizes="100vw" className={styles.icon}></Image>
            </div>
            <div >
              <div className={styles.textCt_1}>
                <a href="mailto:contact@nichetensor.com">Email</a>
              </div>
            </div>
          </div>
          <div className={`${styles.contact} flex items-center`}>
            <div className='mx-6 lg:mx-3'>
              <Image src="/github.svg" width={0} height={0} sizes="100vw" className={styles.icon}></Image>
            </div>
            <div >
              <div className={styles.textCt_1}><Link href='https://shorturl.at/uyAPZ'>GitHub</Link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Contact;
