import React, { useState } from 'react';
import MockUp1 from '@/Pages/MockUp1.jsx';
import RightArrow2 from "@/Components/RightArrow2.jsx";
import LeftArrow2 from "@/Components/LeftArrow2.jsx";
import MockUp2Page from "@/Pages/MockUp2Page.jsx";
import MockUp3 from "@/Pages/MockUp3.jsx";
import MockUp4 from "@/Pages/MockUp4.jsx";

function MockUp() {
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const mockupPages = [MockUp1, MockUp2Page, MockUp3, MockUp4];

    const goToNextPage = () => {
        if (currentPageIndex < mockupPages.length - 1) {
            setCurrentPageIndex(currentPageIndex + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPageIndex > 0) {
            setCurrentPageIndex(currentPageIndex - 1);
        }
    };

    const CurrentPage = mockupPages[currentPageIndex];

    return (
        <div className={"MockUp"} style={{ overflowX: 'hidden', backgroundColor: '#e1e1e1', }}>
            <div className="page-container">
                <LeftArrow2 onClick={goToPreviousPage} disabled={currentPageIndex === 0} />
                <CurrentPage />
                <RightArrow2 onClick={goToNextPage} disabled={currentPageIndex === mockupPages.length - 1} />
            </div>
        </div>
    );
}

export default MockUp;
