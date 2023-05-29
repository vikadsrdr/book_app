import React from 'react';
import loader from '../../images/loader.svg';

const Loader = () => {
    // console.log('loading');
    return (
        <div className='loader'
            style={{ padding: '4 rem 0' }}>
            <img src={loader} alt="loading..."
                style={{ width: '150px' }} />
                {/* LOADING.... */}
        </div>
    );
};

export default Loader;