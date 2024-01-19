import { Button } from "@nextui-org/button"
import React from "react"
interface Props {
  HandleSubmit: any
}

const Apply = ({ HandleSubmit, ...props }: Props) => {
  return (
    <Button
      color="primary"
      variant="solid"
      className="px-10"
      type="submit"
      onClick={HandleSubmit}
    >
      Apply
    </Button>
  )
}

export default Apply
