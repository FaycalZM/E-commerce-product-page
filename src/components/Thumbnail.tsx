type ThumbnailProps = {
    thumbnailURL: string;
}


const Thumbnail = ({ thumbnailURL }: ThumbnailProps) => {
    return (
        <div className="w-24 h-24 hover:border-opacity-100 border-4 border-transparent hover:border-primary-orange transition rounded-2xl cursor-pointer">
            <img
                className="rounded-xl hover:opacity-50 transition"
                src={thumbnailURL} alt="thumbnail" />
        </div>
    )
}

export default Thumbnail