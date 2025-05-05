import React from 'react';

const Loading = () => {
    return (
        <div className='flex items-center justify-center min-h-[calc(100vh-100px)]'>
            <span className="loading loading-infinity loading-xl"></span>
        </div>
    );
};

export default Loading;