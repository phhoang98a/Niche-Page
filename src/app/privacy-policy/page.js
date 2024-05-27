
import styles from "../../styles/policy.module.css"

export default function PrivacyPolicy() {
  return (
    <div className={styles.privacyPolicy}>
      <div className={styles.container}>
        <h1>Privacy Policy for NicheTensor</h1>
        <section>
          <h2>1. Information We Collect</h2>
          <p>Email Address: We collect your email address when you request credits on our site.</p>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>Provide the credits you request.</li>
            <li>Communicate with you regarding your requests and provide updates.</li>
          </ul>
        </section>

        <section>
          <h2>3. Cookies and Tracking Technologies</h2>
          <p>We do not use cookies or tracking technologies on our landing page.</p>
        </section>

        <section>
          <h2>4. Data Sharing and Disclosure</h2>
          <p>We do not sell, trade, or otherwise transfer your email address to outside parties. We may share your email address with trusted partners who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.</p>
        </section>

        <section>
          <h2>5. Data Security</h2>
          <p>We use commercially acceptable means to protect your email address, but remember that no method of transmission over the internet, or method of electronic storage is 100% secure.</p>
        </section>

        <section>
          <h2>6. Your Data Protection Rights</h2>
          <p>Depending on your location, you may have the following rights regarding your email address:</p>
          <ul>
            <li>The right to access: You have the right to request copies of your personal data.</li>
            <li>The right to rectification: You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
            <li>The right to erasure: You have the right to request that we erase your personal data, under certain conditions.</li>
          </ul>
        </section>

        <section>
          <h2>7. Changes to This Privacy Policy</h2>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
        </section>

        <section>
          <h2>8. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at: contact@nichetensor.com</p>
        </section>
      </div>
    </div>
  )

}