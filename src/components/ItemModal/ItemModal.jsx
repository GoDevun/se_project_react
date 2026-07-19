import "./ItemModal.css";

function ItemModal({ isOpen, card, onClose, onDeleteClick }) {
  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <div
      className={`modal modal_type_preview ${isOpen ? "modal_is-opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__container modal__container_type_preview">
        <button
          type="button"
          className="modal__close-button modal__close-button_type_preview"
          aria-label="Close"
          onClick={onClose}
        ></button>
        <img
          src={card.imageUrl}
          alt={card.name}
          className="modal__card-image"
        />
        <div className="modal__card-caption">
          <div className="modal__card-info">
            <p className="modal__card-name">{card.name}</p>
            <p className="modal__card-weather">Weather: {card.weather}</p>
          </div>
          <button
            type="button"
            className="modal__delete-button"
            onClick={onDeleteClick}
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
