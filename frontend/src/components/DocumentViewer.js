import React from 'react';
import { Link } from 'react-router-dom';

const DocumentViewer = ({ documents }) => {
  return (
    <div>
      {documents.length > 0 ? (
        <ul>
          {documents.map((document) => (
            <li key={document._id}>
              <Link to={`/documents/${document.file}`} className="text-blue-500 hover:underline">
                {document.type} - Download
              </Link>
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
