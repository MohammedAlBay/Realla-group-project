import React, { useEffect } from 'react';
import '../../css/Documents.css';
import DashboardTenantBar from "@/Components/DashboardTenantBar.jsx";
import PdfViewer from '@/Components/PdfViewer';

const DocumentsPage = () => {
    useEffect(() => {
        const indexes = document.querySelectorAll('.indexes li');
        const tabs = document.querySelectorAll('.tab');
        const contents = document.querySelectorAll('.tab-content');

        const reset = () => {
            for (let i = 0; i < tabs.length; i++) {
                indexes[i].style.borderColor = 'transparent';
                tabs[i].style.zIndex = 0;
                tabs[i].classList.remove('active');
                contents[i].classList.remove('active');
            }
        };

        const showTab = (i) => {
            indexes[i].style.borderColor = 'rgba(211,38,38,0.6)';
            tabs[i].style.opacity = 1;
            tabs[i].style.zIndex = 5;
            tabs[i].classList.add('active');
            contents[i].classList.add('active');
        };

        const activate = (e) => {
            if (!e.target.matches('.indexes li')) return;
            reset();
            showTab(e.target.dataset.index);
        };

        const init = () => showTab(0);

        init(); // Initialize on load
        window.addEventListener('click', activate);

        return () => {
            window.removeEventListener('click', activate);
        };
    }, []);

    return (
        <div className="body">
            <DashboardTenantBar />
        <div className="documents flex justify-center items-center grid">
            <section>
                <ul className='indexes'>
                    <li data-index='0'>Contract</li>
                    <li data-index='1'>Electric Contract</li>
                    <li data-index='2'>Gas Contract</li>
                    <li data-index='3'>Water Contract</li>
                </ul>
                <ul className='tabs'>
                    <li className='tab'>
                        <article className='tab-content'>
                            <h3>Midnight Station</h3>

                            <PdfViewer pdfUrl="./images/Residential-Real-Estate-Purchase-Agreement.pdf" />
                            <button>Read More</button>
                        </article>
                        <div className='tab-image'><img src='https://picsum.photos/id/345/1000/600'
                                                        alt='Midnight Station'/></div>
                    </li>
                    {/* Repeat for other tabs */}
                </ul>
            </section>
        </div>
        </div>
    );
};

export default DocumentsPage;
