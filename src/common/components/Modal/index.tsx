import React, { useState, useEffect, useRef } from 'react';
import '../../Styles/Scrollbars/ModalScrollbar.css';
import '../../Styles/Scroll/Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isMouseDownOutside, setIsMouseDownOutside] = useState(false);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsMouseDownOutside(true);
    }
  };

  const handleMouseUp = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isMouseDownOutside && modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
    setIsMouseDownOutside(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div ref={modalRef} className="about-modal relative bg-[#171717] rounded-lg shadow-lg p-4 max-w-3xl w-full h-[80vh] overflow-auto">
        <button
          onClick={onClose}
          className="absolute text-2xl top-2 right-4 text-white hover:text-gray-300"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;