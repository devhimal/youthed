import { Typography } from "@/components/atoms/Typography/Typography"
import client from "@/lib/pockethost"
import React from "react"
import Image from "next/image"

interface Props {
  params: {
    slug: string
  }
}

const ScholarhsipDetail = async ({ params: { slug } }: Props) => {
  // const scholarships = await client.collection("Scholarships").getList(1, 6, {
  //   sort: "-created",
  //   requestKey: `${Math.random() * 1000000}`,
  // })

  const MyScholarships = await client
    .collection("Scholarships")
    .getFirstListItem(`slug= "${slug}"`, {
      requestKey: `${Math.random() * 1000000}`,
    })

  return (
    <div className="mx-10 my-10">
      <Image
        src={"/images/samaanta.png"}
        height={200}
        width={400}
        alt="company profile picture"
      />
      <div className="flex flex-col gap-4">
        <Typography.H3 className="pt-4">{MyScholarships.title}</Typography.H3>
        <p>
          <span className="font-medium">Official Website:</span> <br />{" "}
          {MyScholarships.url}
        </p>
        <p>
          <span className="font-medium">Deadline:</span> <br />
          {MyScholarships.Deadline}
        </p>
        <span className="font-medium">Contact Details</span>
        <p>{MyScholarships.email}</p>
        <p>{MyScholarships.contact}</p>
        <span className="font-medium">Description:</span>
        <div dangerouslySetInnerHTML={{ __html: MyScholarships.description }} />
      </div>
    </div>
  )
}

export default ScholarhsipDetail
