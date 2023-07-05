type Props = {
    width?: number,
    height?: number,
    className?: string
}

const Skeleton = ({ width, height, className }: Props) => {
    return (
        <div
            style={{
                width, height
            }}
            className={`rounded-xs bg-gradient-to-r from-[#1f1f1f] to-[#121212] animate-[pulse_3s_infinite] ${className}`}
        ></div>
    )
}

export default Skeleton