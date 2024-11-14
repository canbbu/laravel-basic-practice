import React from 'react';
import Layout from '../Layouts/Layout';

export default function Home({name}) {
    return (
        <div>
            <h1 className='title'>Hello {name}</h1>
        </div>
    )
}
