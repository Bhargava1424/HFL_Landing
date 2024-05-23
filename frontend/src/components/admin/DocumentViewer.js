import React from 'react';
import { Link } from 'react-router-dom';

const DocumentViewer = ({ documents }) => {
  return (
    <div>
      {documents.length > 0 ? (
        <ul>
          {documents.map((document) => (
            <li key={document.file}>
              <a href={document.file} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                {document.type} - View
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No documents found</p>
      )}
    </div>
  );
};

export default DocumentViewer;
