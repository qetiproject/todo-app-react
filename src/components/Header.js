import React from 'react'
import Button from './Button';
import PropTypes from 'prop-types';

const Header = ({ title}) => {
    const onClick = () => {
        console.log('click');
    }
    
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button 
                color='green' 
                text='Add'
                onClick={onClick}
            />
        </header>
    )
}

Header.defaultProps = {
    title: 'Todo app'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header