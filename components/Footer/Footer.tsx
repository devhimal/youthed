import React from "react"
import styles from "./footer.module.scss"
import { Typography } from "../atoms/Typography/Typography"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import Image from "next/image"

const Footer = () => {
  return (
    // <div className={styles.footerWrapper}>
    //   <div className={styles.childwrapper}>footer page</div>
    // </div>
    <>
      <footer className={`${styles.footer} bg-primary w-full`}>
        <div className={` grid grid-cols-1  xl:grid-cols-4 gap-6`}>
          <div className={styles.logo}>
            {/* Add your logo image here */}
            <Image
              src="/logo.png"
              width={150}
              height={150}
              alt="Logo"
              style={{ border: "1px solid white" }}
            />
            <p>
              Surmounting economic barriers through scholarship opportunities.
            </p>
          </div>
          <div className={styles.aboutUs}>
            <Typography.H2>About Us</Typography.H2>
            <ul>
              <li>Scholarships</li>
              <li>Counselling</li>
              <li>Contact Us:</li>
              <li>Phone no: 00000000</li>
            </ul>
          </div>

          <div className={styles.subscribe}>
            <p>Subscribe to know about recent scholarships</p>
            {/* Add your subscription form here */}
            <div className="flex w-full flex-wrap gap-4 ">
              <input type="text" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>

          <div className={styles.socialMedia}>
            <Typography.H2>Follow Us</Typography.H2>
            <div className="flex gap-4">
              <FaFacebook size={30} />
              <FaInstagram size={30} />
              <FaTwitter size={30} />
              <FaLinkedin size={30} />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
