import React from 'react';

const Modal = ({ showModal, handleCloseModal, selectedTeaDetail }) => {
  if (!showModal) return null; // Если showModal false, ничего не рендерим

  return (
    <div className={`modal ${showModal ? 'show' : ''}`} onClick={handleCloseModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={handleCloseModal}>&times;</span>
        {selectedTeaDetail && (
          <>
            <h2 className='modal-title'>{selectedTeaDetail.name}</h2>
            <img className="modal-image" src={selectedTeaDetail.image} alt={selectedTeaDetail.name} />
            <p className='modal-desc'>{selectedTeaDetail.description}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;