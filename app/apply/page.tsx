import { Button } from "@nextui-org/button"
import React from "react"
// import Apply from "@/components/atoms/Button/Apply"

import PocketBase from "pocketbase"
const pb = new PocketBase("https://youthed.pockethost.io")

const Apply = async () => {
  // const [name, setName] = useState(null)
  // const [email, setEmail] = useState(null)
  // const [address, setAddress] = useState(null)
  // const [contact, setContact] = useState(null)

  // example create data
  const data = {
    name: "test",
    address: "test",
    contact: "test",
    email: "test@example.com",
    gender: "male",
    project_name: "test",
  }
  const record = await pb.collection("Apply").create(data)

  const HandleSubmit = () => {
    return record
  }
  return (
    <div
      // style={{ border: "1px solid blue" }}
      className="w-full px-10 py-6"
    >
      <form
        className="w-full overflow-auto py-4 px-4 "
        // style={{ border: "1px solid red" }}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Full Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 borderrounded py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Email Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Enter your email"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Scholarship Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Your scholarship name"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase  text-gray-700 text-xs font-bold mb-2">
              Address
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Enter your address"
            />
          </div>
        </div>
        <div
          className="flex flex-col gap-8"
          // style={{ border: "2px solid red" }}
        >
          <div className=" ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Contact
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              placeholder="Albuquerque"
            />
          </div>
          <div className="">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Gender
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option value="select">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Attachment Files
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="file"
              placeholder="90210"
            />
          </div>
        </div>
        <div className="py-8">
          <Button
            color="primary"
            variant="solid"
            className="px-10"
            type="submit"
            // onClick={HandleSubmit}
          >
            Apply
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Apply
