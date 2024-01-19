"use client"
import React from "react"
import { FaBeer } from "@react-icons/all-files/fa/FaBeer"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
} from "@nextui-org/react"
import { useRouter } from "next/navigation"

interface Props {
  title: string
  url: string
  desc: string
  deadline: any
  contact: number
  slug: string
}

const Scholarship = ({ title, url, desc, deadline, contact, slug }: Props) => {
  const router = useRouter()
  return (
    <Card className="">
      <CardHeader className="flex gap-4">
        {/* <Image
          src={"../../../public/images/samaanta.png"}
          height={100}
          width={100}
          alt="org logo"
        /> */}
        <FaBeer size={50} />
        <div className="flex flex-col">
          <div className="text-md hover:cursor-pointer">{title}</div>
          <p className="text-small text-default-500">{slug}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <div dangerouslySetInnerHTML={{ __html: desc }} />
      </CardBody>
      {/* <Divider /> */}
      <CardFooter className="grid grid-cols-2 gap-4">
        <Button
          variant="ghost"
          color="primary"
          onClick={() => router.push(`/scholarships/${slug}`)}
        >
          View
        </Button>
        <Button variant="solid" color="primary">
          <Link href="/apply" className="text-white">
            Apply
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default Scholarship
