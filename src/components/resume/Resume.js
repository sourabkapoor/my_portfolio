import React from 'react'
import { Document, Page } from 'react-pdf';
// import resume from "../../../public/files/Sourab_Kapoor_CV.pdf"
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import './Resume.styles.scss'

const resume = "/files/sourab_cv.pdf"

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export const Resume = () => {

  return (
    <div className='resumeContainer'>
      <div className='resumeHeader'>The official version of my journey—my resume.</div>
      <Document 
        file={resume}
        onLoadError={(error) => console.error("Error while loading document:", error)}
      >
        <Page pageNumber={1} />
      </Document>
    </div>
  )
}

export default Resume