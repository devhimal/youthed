import React from "react"
import { Typography } from "../atoms/Typography/Typography"
import Image from "next/image"

const Supporters = () => {
  const supporters = [
    {
      id: 1,
      name: "Kings College",
      logo: "/logo-footer.png",
      desc: "kings college",
    },
    {
      id: 2,
      name: "Pachkhal Munipality",
      logo: "/pachkhallogo.png",
      desc: "pachkhal municipality",
    },
  ]
  return (
    <div className="py-14">
      <div className="flex justify-center items-center py-4">
        <Typography.H1>Our Supporters</Typography.H1>
      </div>
      <div className="flex justify-center  items-center overflow-auto gap-10">
        {supporters?.map((items, index) => {
          return (
            <div key={index} className="">
              <Image
                src={items.logo}
                width={200}
                height={100}
                alt="kings logo"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Supporters
