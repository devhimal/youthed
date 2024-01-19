import React from "react"
import { Typography } from "../atoms/Typography/Typography"
import Scholarship from "../atoms/Cards/Scholarship"
import { Button } from "@nextui-org/button"
import Link from "next/link"
import client from "@/lib/pockethost"

const ScholarshipSection = async () => {
  const scholarships = await client.collection("Scholarships").getList(1, 6, {
    sort: "-created",
    requestKey: `${Math.random() * 1000000}`,
  })
  return (
    <div className="sCardContainer">
      <div className="flex justify-between items-center">
        <Typography.H1>Explore Scholarships</Typography.H1>
        <Button color="primary" variant="ghost">
          <Link href={"/scholarships"}>Find more</Link>
        </Button>
      </div>
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
    </div>
  )
}

export default ScholarshipSection
