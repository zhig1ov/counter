type ButtonPropsType = {
    name: string
    onClick: () => void
    disabled?: boolean
}

export const Button = ({name, onClick, disabled}: ButtonPropsType) => {

    return (
        <button onClick={onClick} disabled={disabled}>{name}</button>
    )
}