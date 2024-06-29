import React from 'react';
import Modal from 'react-modal';

 

const PdfModal = ({ isOpen, onClose, pdfUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="PDF Viewer"
      className="Modal" 
    >
      <button className='closeBtn' onClick={onClose}>Close</button>
       
        <iframe
          src={pdfUrl}
          title="PDF Viewer"
          width="100%"
          height="100%"
        
          style={{ border: 'none' }}
        ></iframe>
      
    </Modal>
  );
};

export default PdfModal;
