import React from 'react'

const DownloadBtnApp = () => {
    const fileContent = 'This is the content of the file.';
  return (
    <>
      <DownloadButton fileName="example.txt" content={fileContent} />
    </>
  )
}

export default DownloadBtnApp

const DownloadButton = ({ fileName, content }) => {
    const handleDownload = () => {
      const blob = new Blob([content], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName || 'file.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    };
  
    return (
      <button className="download-button" onClick={handleDownload}>
        Download File
      </button>
    );
  };