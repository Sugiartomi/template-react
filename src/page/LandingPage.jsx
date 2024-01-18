import { TvIcon } from "@heroicons/react/24/outline"
import { useNavigate } from "react-router"

export default function LandingPage() {
  const nav = useNavigate()
  return (
    <>
      <div className="text-center pt-10 cp1-text-1">
        {"{"} message : "success" {"}"}
      <TvIcon className=""/>
      </div>
    </>
  )
}
