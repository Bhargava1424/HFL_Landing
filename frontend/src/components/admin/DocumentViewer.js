import React, { useState } from 'react';

const DocumentViewer = ({ documents }) => {
  const [selectedDocument, setSelectedDocument] = useState(null);

  const handleDocumentClick = (document) => {
    setSelectedDocument(document);
  };

  const closeDocumentViewer = () => {
    setSelectedDocument(null);
  };

  return (
    <div>
      {documents.length > 0 ? (
        <ul>
          {documents.map((document) => (
            <li key={document.file} onClick={() => handleDocumentClick(document)}>
              <span className="text-blue-500 hover:underline cursor-pointer">
                {document.type} - View
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No documents found</p>
      )}

      {selectedDocument && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-xl relative">
            <button
              onClick={closeDocumentViewer}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <iframe
              src={selectedDocument.file}
              title={selectedDocument.type}
              width="800"
              height="600"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentViewer;