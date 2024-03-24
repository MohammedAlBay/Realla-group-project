import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';


import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

// Import AnnotationLayer styles

const PdfViewer = ({ pdfUrl }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const goToNextPage = () => {
        setPageNumber(prevPageNumber => Math.min(prevPageNumber + 1, numPages));
    };

    const goToPrevPage = () => {
        setPageNumber(prevPageNumber => Math.max(prevPageNumber - 1, 1));
    };

    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.min.js',
        import.meta.url,
    ).toString();

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Document
                file={pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page
                    pageNumber={pageNumber}
                    width={330}
                    height={200}
                />
            </Document>
            <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '1rem'}}>
                <button className="previous-button" onClick={goToPrevPage} disabled={pageNumber <= 1}>
                    Previous Page
                </button>
                <p>
                    Page {pageNumber} of {numPages}
                </p>
                <button className="next-button" onClick={goToNextPage} disabled={pageNumber >= numPages}>
                    Next Page
                </button>
            </div>

        </div>
    );
};

export default PdfViewer;
