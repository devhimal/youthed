import React from "react"
import styles from "./scholarship.module.scss"
import { Typography } from "@/components/atoms/Typography/Typography"
import Scholarship from "@/components/atoms/Cards/Scholarship"
import { Button } from "@nextui-org/button"
import client from "@/lib/pockethost"

const page = async () => {
  const scholarships = await client.collection("Scholarships").getList(1, 6, {
    sort: "-created",
    requestKey: `${Math.random() * 1000000}`,
  })
  return (
    <div className="mx-10 py-4 min-h-screen">
      <Typography.H2> Discover scholarship opportunities</Typography.H2>
      <div className="grid m:grid-cols-2 md:grid-cols-3 gap-4 py-4 pl-4">
        {scholarships.items.map((items, index) => {
          return (
            <div key={index}>
              <Scholarship
                title={items.title}
                desc={items.description}
                url={items.url}
                deadline={items.deadline}
                contact={items.contact}
                slug={items.slug}
              />
            </div>
          )
        })}
      </div>
      <div className="flex justify-center items-center py-8">
        <Button color="primary" variant="solid">
          Show more
        </Button>
      </div>
    </div>
  )
}

export default page
