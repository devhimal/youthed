import React from "react"
import client from "@/lib/pockethost"
import { Typography } from "@/components/atoms/Typography/Typography"
import { columns, users } from "@/service/data"

import { DeleteIcon, EditIcon, EyeIcon } from "@/public/icons/Icons"

const Dashboard = async () => {
  const applicants = await client.collection("Apply").getList(1, 6, {
    sort: "-created",
    requestKey: `${Math.random() * 1000000}`,
  })
  console.log()

  return (
    <div className="mx-16 my-6 min-h-screen">
      <Typography.H2 className="py-4">Lists of applicants</Typography.H2>
      <div className="flex flex-col gap-3 px-20">
        <table border={1} className="border-separate border-spacing-2  ">
          <thead>
            <tr>
              <th className="text-left">Name</th>
              <th className="text-left">Email</th>
              <th className="text-left">Scholarship Name</th>
              <th className="text-left">Address</th>
              <th className="text-left">Contact</th>
              <th className="text-left">Gender</th>
              <th className="text-left">Files</th>
              <th className="text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {applicants?.items.map((items, index) => {
              return (
                <tr key={index}>
                  <td>{items.name}</td>
                  <td>{items.email}</td>
                  <td>{items.project_name}</td>
                  <td>{items.address}</td>
                  <td>{items.contact}</td>
                  <td>{items.gender}</td>
                  <td>{items.files}</td>
                  <td className="flex gap-1">
                    <button className="flex justify-center items-center gap-1 text-primary hover:underline">
                      <p>update</p>
                      <EditIcon />
                    </button>
                    <button className="flex justify-center items-center gap-1 text-danger hover:underline">
                      <p>delete</p>
                      <DeleteIcon />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard
