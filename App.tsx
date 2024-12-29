import React, { useState, useEffect } from 'react';

interface File {
  name: string;
  size: number;
}

const FileTransferApp = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [qrCode, setQrCode] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (selectedFiles) {
      const newFiles: File[] = Array.from(selectedFiles).map((file) => ({
        name: file.name,
        size: file.size,
      }));
      setFiles(newFiles);
    }
  };

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
  };

  const handleUpload = () => {
    setUploading(true);
    const intervalId = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(intervalId);
          setUploading(false);
          setUploadComplete(true);
          setQrCodeUrl('https://example.com/download');
          return 0;
        }
        return prevProgress + 10;
      });
    }, 500);
  };

  useEffect(() => {
    if (qrCodeUrl) {
      const encodedUrl = encodeURIComponent(qrCodeUrl);
      const qrCodeApiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodedUrl}&size=200x200`;
      setQrCode(qrCodeApiUrl);
    }
  }, [qrCodeUrl]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">File Transfer App</h1>
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
      <ul className="mt-4">
        {files.map((file, index) => (
          <li
            key={index}
            className="py-2 px-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
            onClick={() => handleFileSelect(file)}
          >
            <span className="text-lg font-bold">{file.name}</span>
            <span className="text-sm text-gray-500 ml-2">{file.size} bytes</span>
          </li>
        ))}
      </ul>
      {selectedFile && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-2">Selected File:</h2>
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
          <p className="text-lg font-bold mt-2">{selectedFile.name}</p>
          <p className="text-sm text-gray-500">{selectedFile.size} bytes</p>
        </div>
      )}
      <button
        onClick={handleUpload}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-4"
      >
        {uploading ? `Uploading... (${progress}%)` : 'Upload'}
      </button>
      {uploadComplete && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-2">Download QR Code:</h2>
          <img src={qrCode} alt="QR Code" className="w-64 h-64" />
          <p className="text-lg font-bold mt-2">Scan to download files</p>
        </div>
      )}
    </div>
  );
};

export default FileTransferApp;