import React, { useState } from 'react'
import { XMarkIcon } from "@heroicons/react/24/solid"

const StandardMessageForm = () => {
    const [message, setMessage] = useState("");
    const [attachment, setAttachment] = useState("");
    const [preview, setPreview] = useState("");
    console.log("Ho")
    return (
        <div className='message-form-container'>
            {preview && (
                <div className='message-form-preview'>
                    <img alt='message-form-preview' className='message-form-preview-image' src={preview} onLoad={() => URL.revokeObjectURL(preview)} />
                    <XMarkIcon className='message-form-icon-x' onClick={ ()=> {
                            setPreview("") 
                            setAttachment("")
                        }}
                    />
                </div>
            )}  
        </div>
    )
}

export default StandardMessageForm
