import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

const PdfViewer = ({ pdfUrl }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div>
            <Document
                file={"./images/Residential-Real-Estate-Purchase-Agreement.pdf"}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={1} />
            </Document>
            <p>Page {pageNumber} of {4}</p>
        </div>
    );
};

export default PdfViewer;
