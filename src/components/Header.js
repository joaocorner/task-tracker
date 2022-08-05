import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
    return (
        <header className='header'>
             <h1>{title}</h1>
             <Button color='green' text='hi'/>
             <Button color='orange' text='hi'/>
             <Button color='red' text='hi'/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker', // default title
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header