import React, { useState, useEffect } from "react";
// import default react-pdf entry
import { Document, Page, pdfjs } from "react-pdf";
import { AiOutlineClose } from 'react-icons/ai';




const PDFViewer = ({setShowResume}) => {


    useEffect(() => {
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    }, [])

    const path = `${window.location.protocol}//${window.location.host}//cv.pdf`
    return (


        <div className="flex flex-col h-full w-full justify-center m-auto p-10">
            <div className=" m-auto">
                <div className="flex  justify-center my-6">
                    <div
                    onClick={()=>setShowResume(false)}
                     className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                        <AiOutlineClose size={25} />
                    </div>
                </div>
                <div className="shadow-lg shadow-zinc-800">
                    <Document file={path} >
                        <Page scale={2}
                            pageNumber={1}
                            renderAnnotationLayer={false}
                            renderTextLayer={false}
                        />
                    </Document>
                </div>
            </div>
        </div>

    );
}


export default PDFViewer