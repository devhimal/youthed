import React from "react"
import Image from "next/image"
import { Typography } from "../atoms/Typography/Typography"
import { Button } from "@nextui-org/button"

const story = () => {
  return (
    <div className="pt-10">
      <div className="pb-12 flex flex-col justify-start">
        <Typography.H1 className="pt-10 px-0">Story of Change</Typography.H1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad tenetur,
          dignissimos ipsa ut quae vero, dolore ipsam doloremque consequuntur
          ullam nulla numquam impedit placeat reiciendis aut quia consectetur
          praesentium minima!
        </p>
      </div>
      <div
        className="grid md:grid-cols-2 items-center justify-between gap-4 pb-12 pl-3 sm:pl-8"
        // style={{ border: "1px solid red" }}
      >
        <div className="order-1 ">
          <div>
            <Typography.H2>Radha Nepali</Typography.H2>
            <p className="opacity-50">Bhotenamlang, Sindhupalshowk</p>
            <p className="pb-8 opacity-50">
              Diploma in Computer Engineering / Full Scholarship
            </p>
            <p className="pb-10">
              Scholarships are the transformative bridge that empowers
              exceptional youth, transcending economic barriers, and paving the
              way for higher education—a beacon of hope illuminating the path to
              a brighter, more equitable future. Through the wings of
              scholarships, I soared from an economically challenged background
              to the realms of knowledge. My journey from plus two to bachelors
              was not just a pursuit of education; it was a testament to the
              power of opportunity, turning adversity into achievement and
              dreams into reality.
              <br /> <br />
              Beyond the corridors of high school, I relentlessly pursued
              scholarships, crafting a bridge to a diploma education that stood
              as my triumph over financial constraints. Now, as I embark on my
              bachelor&apos;s journey, it&apos;s a blend of 50% scholarship and
              50% sponsorship— a testament to the resilience fueled by
              opportunities. Without the wings of scholarships and the support
              of sponsors, my bachelor&apos;s dream would remain unattainable,
              underlining the profound impact of collective empowerment in
              shaping educational destinies.
            </p>
          </div>
        </div>
        <div className="order-2">
          <Image
            src={"/images/radha.png"}
            width={600}
            height={400}
            alt="scholarship profile"
          />
        </div>
      </div>
    </div>
  )
}

export default story
