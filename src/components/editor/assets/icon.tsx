interface Size {
    width: string,
    height: string,
}

export const DeleteIcon = ({ width, height }: Size) => {
    return (
        <svg width={width} height={height} viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 0L6 1H0V3H1.10938L2.89258 18.2559V18.2637C3.0236 19.2503 3.88032 20 4.875 20H13.123C14.1177 20 14.9744 19.2503 15.1055 18.2637L15.1074 18.2559L16.8906 3H18V1H12L11 0H7ZM3.125 3H14.875L13.123 18H4.875L3.125 3Z" fill="white"/>
        </svg>
    )
}