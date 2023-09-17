import { AvatarProps } from "../types/Types"



const Avatar = ({ imageURL }: AvatarProps) => {
    return (
        <img
            className="laptop:w-14 w-12 border-[3px] border-transparent hover:border-primary-orange rounded-full transition cursor-pointer"
            src={imageURL}
            alt="avatar pic" />
    )
}

export default Avatar