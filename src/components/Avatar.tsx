import { AvatarProps } from "../types/Types"



const Avatar = ({ imageURL }: AvatarProps) => {
    return (
        <img
            className="w-14 hover:border-2 hover:border-primary-orange hover:scale-105 rounded-full transition cursor-pointer"
            src={imageURL}
            alt="avatar pic" />
    )
}

export default Avatar