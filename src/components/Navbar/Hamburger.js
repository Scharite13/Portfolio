import React from 'react';



    

function Hamburger(){
      
        return (
            <div className='hamburger'>
                <div className='hamburgerItem'></div>
                <div className='hamburgerItem'></div>
                <div className='hamburgerItem'></div>
            </div>
        )
    }


const Style = {
    hamburger: {
        display: 'flex',
        flexFlow: 'column nowrap',
        alignContent: 'space-around',
        marginRight: '10px'
    },
    hamburgerItem: {
        width: '2rem',
        height: '.25rem',
        margin: '4px',
        backgroundColor: 'white',
        borderRadius: '10px'
    }
}

export default Hamburger;