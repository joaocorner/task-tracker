import PropTypes from 'prop-types';

const Button = ({ color, text }) => { // color and text are props
    return (
        <button
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
    text: PropTypes.string
}

export default Button