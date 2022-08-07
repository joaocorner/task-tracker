import PropTypes from 'prop-types';// PropTypes are used to validate props passed to components and to help prevent bugs

const Button = ({ color, text, onClick }) => { // color and text are props

    return (
        <button
            onClick={onClick}
            className='btn'
            style={{ backgroundColor: color }}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button