import React from 'react';

function Education() {
    return ( 
      <div className='container my-5 py-5'>
        <div className='row align-items-center'>
            <div className='col-12 col-md-6 text-center text-md-start'>
                <img src='media/images/education.svg' className='img-fluid' alt='Education' />
            </div>
            <div className='col-12 col-md-6'>
                <h1 className='fw-bold text-dark mb-3'>Free and Open Market Education</h1>
                <p className='text-muted lead mb-4'>Empowering investors with knowledge to navigate financial markets confidently.</p>
                
                <h1 className='fw-bold text-dark mb-3'>Learn, Trade, and Grow</h1>
                <p className='text-muted lead mb-4'>Access high-quality educational resources, expert insights, and real-world trading strategies to enhance your financial acumen.</p>
            </div>
        </div>
      </div>
    );
}

export default Education;
