import TimeAgo from "./timeAgo"
import { FaUser, FaUserAlt } from "react-icons/fa"

const UserWindow = (params) => {
    return (
        <div className="flex items-center">
            <div className={`bg-black rounded-full flex items-center justify-center text-white text-xl ${params.type==="small" ? "w-[45px] h-[45px]" : "w-[60px] h-[60px]"}`}>
                <FaUserAlt/>
            </div>
            <div className={`px-3 flex flex-col`}>
                <div class={`text-medium font-bold ${params.user.isUserName ? "text-brand" : ""}`}>
                    {params.user.userName}
                </div>
                <div className="text-sm">
                    <TimeAgo date={params.date}/>
                </div>
            </div>
        </div>
    )
}

export default UserWindow