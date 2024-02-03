import React, { useState } from "react";
import Dropzone from "react-dropzone";
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css"

const UploadFile = () => {
    const [file, setFile] = useState(null);

    const handleUpload = (acceptedFiles) => {
        console.log("logging drop/selected file", acceptedFiles);
        // fake request to upload file
        const url = "https://api.escuelajs.co/api/v1/files/upload";
        const formData = new FormData();
        formData.append("file", acceptedFiles[0]); // Assuming you only accept one file

        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((response) => {
                if (response.ok) {
                    // File uploaded successfully
                    setFile(acceptedFiles[0]);
                } else {
                    // File upload failed
                    console.error(response);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const saveBtnClick = () => {
        alert("button click test");
    }

    return (
        <div className="main-container">
            <Dropzone onDrop={handleUpload} accept="image/*" minSize={1024} maxSize={3072000}>
                {({ getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject }) => {
                    const additionalClass = isDragAccept ? "accept" : isDragReject ? "reject" : "";

                    return (
                        <div
                            {...getRootProps({
                                className: `dropzone ${additionalClass}`,
                            })}
                        >
                            <input {...getInputProps()} />
                            <p> Drag and drop images, or click to select files. </p>
                        </div>
                    );
                }}
            </Dropzone>
            {file && (
                <>
                    <img src={URL.createObjectURL(file)} className="img-container" alt="Uploaded file" />
                    <Button onClick= {saveBtnClick} variant="success" className="download-btn" > Click to download the pixelated picture </Button>
                </>
            )}
        </div>
    );
};

export default UploadFile;