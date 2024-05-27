import Image from 'next/image'
import styles from "../styles/home.module.css"
import Link from 'next/link'

export const Resources = () => {
  return (
    <div className='mb-10'>
      <div className={styles.textContact}>
        More <span className={styles.textColor}>Resources</span>
      </div>
      <div className="flex justify-center mt-[40px] md:px-10 ">
        <div className={`${styles.contactContainer} grid grid-cols-1 md:grid-cols-2 gap-4`}>
          <div className={`${styles.contact} flex items-center`}>
            <div className='mx-6 lg:mx-5'>
              <Image src="/doc2.svg" width={0} height={0} sizes="100vw" className={styles.icon}></Image>
            </div>
            <div >
              <div className={styles.textCt_1}><Link href='https://docs.nichetensor.com/'>Documents</Link></div>
            </div>
          </div>
          <div className={`${styles.contact} flex items-center`}>
            <div className='mx-6 lg:mx-5'>
              <Image src="/studio.svg" width={0} height={0} sizes="100vw" className={styles.icon}></Image>
            </div>
            <div >
              <div className={styles.textCt_1}><Link href='https://studio.nichetensor.com/'>Studio</Link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Resources;
