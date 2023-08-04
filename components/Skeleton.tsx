type Props = {
    width?: number
    height?: number
    className?: string
}

const Skeleton = ({ width, height, className }: Props) => {
    return (
        <div
            style={{
                width,
                height,
            }}
            className={`rounded-xs bg-gradient-to-r from-[#a2a2a2] to-[#848484] dark:from-[#1f1f1f] dark:to-[#121212] animate-[pulse_3s_infinite] ${className}`}
        ></div>
    )
}

export default Skeleton
