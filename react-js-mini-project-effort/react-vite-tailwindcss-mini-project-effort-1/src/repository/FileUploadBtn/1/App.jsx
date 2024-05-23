import React, { useState } from 'react'

const FileUploadBtnApp = () => {
    return (
        <>
            <FileUploadButton />
        </>
    )
}

export default FileUploadBtnApp

const FileUploadButton = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const handleUpload = () => {
        // Perform file upload logic here
        if (selectedFile) {
            console.log(`Uploading file: ${selectedFile.name}`);
            // You can use APIs like FormData to send the file to a server
        } else {
            console.log('No file selected');
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};
