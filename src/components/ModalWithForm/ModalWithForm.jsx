import "./ModalWithForm.css";

function ModalWithForm({ title, name, buttonText, isOpen, onClose, children }) {
  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <div
      className={`modal modal_type_${name} ${isOpen ? "modal_is-opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__container">
        <button
          type="button"
          className="modal__close-button"
          aria-label="Close"
          onClick={onClose}
        ></button>
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form" name={name}>
          {children}
          <button type="submit" className="modal__submit-button">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
