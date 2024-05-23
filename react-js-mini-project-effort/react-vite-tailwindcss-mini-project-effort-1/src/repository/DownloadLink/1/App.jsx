import React from 'react'

const DownloadLinkApp = () => {
    const pdfFolder = 'assets/pdf';
    const pdfFileName = 'basic-english-grammar.pdf'
  return (
    <>
       <h1 className='font-bold text-[red] italic underline'>PDF Download Link</h1>
       <a href={`${pdfFolder}/${pdfFileName}`} download={pdfFileName}>
        Download PDF
      </a>
    </>
  )
}

export default DownloadLinkApp
