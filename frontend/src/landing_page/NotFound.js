import React from 'react';


import { Link } from 'react-router-dom';

function NotFound() {
    return ( 
        <div className='container text-center'>
            <h1>404 - Page Not Found</h1>
            <p>The page you're looking for doesn't exist.</p>
            <button>
            <Link to='/' className='btn btn-primary'>Go Back Home</Link>
            </button>
            {/* <Link to='/' className='btn btn-primary'>Go Back Home</Link> */}

        </div>
     );
}

export default NotFound;