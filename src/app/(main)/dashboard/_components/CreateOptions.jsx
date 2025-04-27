import { Phone, VideoIcon } from "lucide-react"
import React from "react"
function CreateOptions() {
  return (
    <div className="md:flex flex-col">
        <div>
          Video Interview<VideoIcon/>
        </div>
        <div>
            Phone screening<Phone/>
        </div>
    </div>
  )
}

export default CreateOptions