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
        <div>
            <Document
                file={pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
            >

                <Page
                    pageNumber={pageNumber}
                    width={300}
                    height={200}
                />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
            <button onClick={goToPrevPage} disabled={pageNumber <= 1}>
                Previous Page
            </button>
            <button onClick={goToNextPage} disabled={pageNumber >= numPages}>
                Next Page
            </button>
        </div>
    );
};

export default PdfViewer;
