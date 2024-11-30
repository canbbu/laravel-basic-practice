import './bootstrap';
import '../css/app.css';
import React from 'react';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import Layout from '@/Layouts/Layout';

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true });
        let page = pages[`./Pages/${name}.jsx`];

        // Apply the default layout if none is provided in the page component
        page.default.layout = page.default.layout || ((page) => <Layout children ={page}/>);
        
        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
}).then(() => {
    console.log('Inertia app has been mounted');
});