import "./DeleteConfirmationModal.css";

function DeleteConfirmationModal({ isOpen, onClose, onConfirm }) {
  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <div
      className={`modal modal_type_delete-confirmation ${
        isOpen ? "modal_is-opened" : ""
      }`}
      onClick={handleOverlayClick}
    >
      <div className="modal__container modal__container_type_confirmation">
        <button
          type="button"
          className="modal__close-button"
          aria-label="Close"
          onClick={onClose}
        ></button>
        <p className="modal__confirmation-text">
          Are you sure you want to delete this item? This action is
          irreversible.
        </p>
        <button
          type="button"
          className="modal__confirm-button"
          onClick={onConfirm}
        >
          Yes, delete item
        </button>
        <button
          type="button"
          className="modal__cancel-button"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;
