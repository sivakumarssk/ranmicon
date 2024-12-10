"use client";

import React, { useEffect, useRef } from "react";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist/legacy/build/pdf";

// Set the worker source to a local file
GlobalWorkerOptions.workerSrc = "/pdf.worker.mjs";

const PdfViewer = ({ pdfUrl }) => {
    const canvasContainerRef = useRef();

    const renderPdf = async () => {
        if (!pdfUrl || !canvasContainerRef.current) return;

        // Clear any existing canvases before rendering
        const canvasContainer = canvasContainerRef.current;
        canvasContainer.innerHTML = "";

        const pdf = await getDocument(pdfUrl).promise;

        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
            const page = await pdf.getPage(pageNum);

            const canvas = document.createElement("canvas");
            canvas.style.marginBottom = "10px";
            canvasContainer.appendChild(canvas);

            // Calculate viewport scale dynamically based on container width
            const containerWidth = canvasContainer.offsetWidth;
            const viewport = page.getViewport({ scale: containerWidth / page.view[2] });

            canvas.width = viewport.width;
            canvas.height = viewport.height;

            const context = canvas.getContext("2d");
            const renderContext = {
                canvasContext: context,
                viewport: viewport,
            };

            await page.render(renderContext).promise;
        }
    };

    useEffect(() => {
        renderPdf();
        // Add a resize event listener to re-render the PDF when the container size changes
        const handleResize = () => renderPdf();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [pdfUrl]); // Only re-run if pdfUrl changes

    return (
        <div
            ref={canvasContainerRef}
            style={{
                width: "100%",
                maxWidth: "100%",
                overflow: "hidden",
            }}
        ></div>
    );
};

export default PdfViewer;
