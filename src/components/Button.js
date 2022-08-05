const Button = ({ color, text }) => { // color and text are props
    return (
        <button
            className='btn'
            style={{ backgroundColor: color }}>
            {text}
        </button>
    )
}

export default Button