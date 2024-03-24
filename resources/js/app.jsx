import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import Header from './Layouts/Partials/Header.jsx';
import Footer from './Layouts/Partials/Footer.jsx';


const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);


        root.render(
            <>
                <main className={"main"}>
                    <Header />
                    <App {...props} />
                    <Footer />
                </main>
            </>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
