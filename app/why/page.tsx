// import { Typography } from "@/components/atoms/Typography/Typography"
// import { Accordion, AccordionItem } from "@nextui-org/react"
// import React from "react"

// const page = () => {
//   const defaultContent =
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

//   return (
//     <div className="px-6">
//       <Typography.H2>About Us</Typography.H2>
//       <p>
//         Welcome to ScholarConnect, a passionate initiative driven by four
//         dynamic groups of youth dedicated to empowering students after their
//         Secondary Education Examination (SEE). We understand the challenges that
//         students face when navigating the vast landscape of scholarship
//         opportunities, and we are here to bridge the gap.
//       </p>
//       <Typography.H2>Our Mission</Typography.H2>
//       <p>
//         At ScholarConnect, our mission is clear - to guide, inspire, and empower
//         SEE graduates in their pursuit of higher education. We firmly believe
//         that education is the key to unlocking a world of opportunities, and our
//         goal is to provide a comprehensive platform that simplifies the process
//         of exploring and applying for scholarships.
//       </p>
//       <div>
//         <Typography.H2>Why We Are Here</Typography.H2>
//         <Accordion>
//           <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
//             something
//           </AccordionItem>
//           <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
//             something1
//           </AccordionItem>
//           <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
//             something3
//           </AccordionItem>
//         </Accordion>
//       </div>
//     </div>
//   )
// }

// export default page

"use client"

import React from "react"
import { Accordion, AccordionItem } from "@nextui-org/react"
import { Typography } from "@/components/atoms/Typography/Typography"
import { subtle } from "crypto"

export default function App() {
  const accordionData = [
    {
      id: 1,
      title: "Empowering Dreams ",
      subtitle: "test1 test test",
      desc: "We are driven by the belief that financial constraints should not hinder a student's dreams of pursuing higher education. ScholarConnect aims to empower students to dream big and reach their full potential by connecting them with scholarships that align with their aspirations, talents, and academic achievements.",
    },
    {
      id: 2,
      title: "Filling the Information Gap",
      subtitle: "test1 cl asdlka",
      desc: "In our journey, we recognized a significant gap in the availability and accessibility of information regarding scholarships for SEE graduates. Many talented students were unaware of the diverse opportunities awaiting them. ScholarConnect is here to bridge this information gap, ensuring that every student has the knowledge and resources needed to make informed decisions about their educational future.",
    },
    {
      id: 3,
      title: "Community Support",
      subtitle: "test1 alfja asldahx",
      desc: "Navigating the world of scholarships can be overwhelming. We are here not just as a platform but as a supportive community. ScholarConnect fosters an environment where students can share experiences, seek guidance, and connect with like-minded individuals who understand the challenges and triumphs of the scholarship journey.",
    },
    {
      id: 4,
      title: "Streamlining the Process",
      subtle: "",
      desc: "Applying for scholarships can be complex and time-consuming. ScholarConnect is committed to simplifying the process by providing a user-friendly platform that streamlines scholarship searches, applications, and deadlines. Our aim is to make the journey as smooth as possible, ensuring that students can focus on their academic goals.",
    },
  ]
  const helpAccordion = [
    {
      id: 1,
      title: "Scholarship Database",
      desc: "Access a comprehensive database of scholarships specifically tailored for SEE graduates.",
    },
    {
      id: 2,
      title: "Guidance and Resources",
      desc: "Benefit from expert guidance and a wealth of resources to help you navigate the scholarship application process.",
    },

    {
      id: 3,
      title: "Community Forum",
      desc: "Connect with fellow students, mentors, and experts to share experiences, seek advice, and build a supportive network.",
    },
    {
      id: 4,
      title: "Regular Updates",
      desc: "Stay informed about upcoming scholarship opportunities, deadlines, and educational events through our regular updates.",
    },
  ]
  return (
    <>
      <div className="mx-10 my-8">
        <div className="mb-10">
          <Typography.H2>About Us</Typography.H2>
          <p className="my-2">
            Welcome to YouthEd, a passionate initiative driven by four dynamic
            groups of youth dedicated to empowering students after their
            Secondary Education Examination (SEE). We understand the challenges
            that students face when navigating the vast landscape of scholarship
            opportunities, and we are here to bridge the gap.
          </p>
        </div>
        <div className="mb-10">
          <Typography.H2>Our Mission</Typography.H2>
          <p className="my-2">
            At YouthEd, our mission is clear - to guide, inspire, and empower
            SEE graduates in their pursuit of higher education. We firmly
            believe that education is the key to unlocking a world of
            opportunities, and our goal is to provide a comprehensive platform
            that simplifies the process of exploring and applying for
            scholarships.
          </p>
        </div>
        <div className="mb-10">
          <Typography.H2>Why We Are Here?</Typography.H2>
          {/* <Accordion> */}
          {accordionData?.map((items, index) => {
            return (
              <Accordion
                key={index}
                className="my-2 mb-6 pb-4 rounded-sm"
                style={{ borderBottom: "1px solid #2c698d" }}
              >
                <AccordionItem
                  key="1"
                  aria-label="Accordion 1"
                  title={items.title}
                >
                  {items.desc}
                </AccordionItem>
              </Accordion>
            )
          })}
        </div>
        <div className="pb-8">
          <Typography.H2>How We Can Help</Typography.H2>
          {helpAccordion?.map((items, index) => {
            return (
              <Accordion
                key={index}
                className="my-2 mb-6 pb-4 rounded-sm"
                style={{ borderBottom: "1px solid #2c698d" }}
              >
                <AccordionItem
                  key="1"
                  aria-label="Accordion 1"
                  title={items.title}
                >
                  {items.desc}
                </AccordionItem>
              </Accordion>
            )
          })}
        </div>
        <div className="pb-12">
          <Typography.H2>Our Team</Typography.H2>
        </div>
      </div>
    </>
  )
}
