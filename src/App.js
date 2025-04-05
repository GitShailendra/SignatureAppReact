"use client"

import React, { useRef, useState, useEffect } from 'react'
import SignatureCanvas from 'react-signature-canvas'
import Button from './components/Button'
export default function App() {
  const sigCanvas = useRef(null)
  const [imageURL, setImageURL] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const clear = () => {
    sigCanvas.current.clear()
    setImageURL(null)
  }

  const save = () => {
    if (sigCanvas.current) {
      const dataURL = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png')
      setImageURL(dataURL)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Sign Here</h1>
        <div className="border border-gray-300 rounded-md mb-4">
          <SignatureCanvas
            ref={sigCanvas}
            canvasProps={{
              className: 'w-full h-64',
            }}
          />
        </div>
        <div className="flex justify-between mb-4">
          <Button onClick={clear} variant="outline">Clear</Button>
          <Button onClick={save}>Save</Button>
        </div>
        {imageURL && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">Saved Signature: </h2>
            <img src={imageURL} alt="Saved signature" className="border border-gray-300 rounded-md" />
          </div>
        )}
        //asd
        <p className="text-sm text-gray-600 mt-4">
          {isMobile
            ? "Use your finger or a stylus to sign on the canvas above."
            : "Use your mouse to sign on the canvas above."}
        </p>
      </div>
    </div>
  )
}