import PropTypes from 'prop-types';

const Header = ({ title }) => {
    return (
        <header>
             <h1 style={headingStyle}>{title}</h1>{/*single curly braces in headingStyle*/}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker', // default title
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const headingStyle = {
    color: 'red',
    backgroundColor: 'black'
}

export default Header