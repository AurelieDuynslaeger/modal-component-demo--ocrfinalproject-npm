import { useEffect } from 'react';
import "./Modal.css";

const Modal = ({
  isOpen,
  title,
  text,
  onClose,
  primaryButton,
  secondaryButton,
  style = {}, 
}) => {

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        style={style} 
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div className="modal-header">
          {title && <h2 id="modal-title">{title}</h2>}
          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            &times;
          </button>
        </div>
        <div className="modal-body" id="modal-description">
          <p>{text}</p>
        </div>
        <div className="modal-footer">
          {primaryButton && (
            <button onClick={primaryButton.onClick} aria-label={primaryButton.label} style={primaryButton.style}>
              {primaryButton.label}
            </button>
          )}
          {secondaryButton && (
            <button onClick={secondaryButton.onClick} aria-label={secondaryButton.label} style={secondaryButton.style}>
              {secondaryButton.label}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
