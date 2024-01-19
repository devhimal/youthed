import React from "react"
import { Button } from "@nextui-org/react"
import Image from "next/image"
import { Typography } from "../atoms/Typography/Typography"

const heroSection = () => {
  return (
    <div
      className="grid   md:grid-cols-2 items-center justify-between pb-12"
      // style={{ border: "1px solid red" }}
    >
      <div className="order-2 md:order-1">
        <div>
          <Typography.H2>Empowering the Education</Typography.H2>
          <p className="pb-10">
            Scholarships are the transformative bridge that empowers exceptional
            youth, transcending economic barriers, and paving the way for higher
            education—a beacon of hope illuminating the path to a brighter, more
            equitable future.
          </p>
          <div className="flex gap-4">
            <Button color="primary" variant="ghost" size="md">
              Book an online meet
            </Button>
            <Button color="primary" variant="solid">
              Explore Scholarships
            </Button>
          </div>
        </div>
      </div>
      <div className="order-1 md:order-2">
        <Image
          src={"/images/empowering.webp"}
          width={600}
          height={400}
          alt="scholarship profile"
        />
      </div>
    </div>
  )
}

export default heroSection
