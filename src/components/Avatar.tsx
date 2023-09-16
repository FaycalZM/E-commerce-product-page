import { AvatarProps } from "../types/Types"



const Avatar = ({ imageURL }: AvatarProps) => {
    return (
        <img
            className="w-14 border-[3px] border-transparent hover:border-primary-orange rounded-full transition cursor-pointer"
            src={imageURL}
            alt="avatar pic" />
    )
}

export default Avatar