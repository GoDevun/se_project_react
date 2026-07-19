import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";

const defaultFormValues = {
  name: "",
  imageUrl: "",
  weather: "",
};

function AddItemModal({ isOpen, onAddItem, onCloseModal }) {
  const { values, handleChange, handleReset } = useForm(defaultFormValues);

  function handleSubmit(event) {
    event.preventDefault();
    onAddItem(values, handleReset);
  }

  return (
    <ModalWithForm
      title="New garment"
      name="add-garment"
      buttonText="Add garment"
      isOpen={isOpen}
      onClose={onCloseModal}
      onSubmit={handleSubmit}
    >
      <label htmlFor="clothing-name" className="modal__label">
        Name
        <input
          type="text"
          id="clothing-name"
          name="name"
          className="modal__input"
          placeholder="Name"
          required
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="clothing-link" className="modal__label">
        Image
        <input
          type="url"
          id="clothing-link"
          name="imageUrl"
          className="modal__input"
          placeholder="Image URL"
          required
          value={values.imageUrl}
          onChange={handleChange}
        />
      </label>
      <fieldset className="modal__radio-fieldset">
        <legend className="modal__legend">Select the weather type:</legend>
        <label
          htmlFor="choice-hot"
          className="modal__label modal__label_type_radio"
        >
          <input
            type="radio"
            id="choice-hot"
            name="weather"
            value="hot"
            className="modal__radio-input"
            checked={values.weather === "hot"}
            onChange={handleChange}
          />
          Hot
        </label>
        <label
          htmlFor="choice-warm"
          className="modal__label modal__label_type_radio"
        >
          <input
            type="radio"
            id="choice-warm"
            name="weather"
            value="warm"
            className="modal__radio-input"
            checked={values.weather === "warm"}
            onChange={handleChange}
          />
          Warm
        </label>
        <label
          htmlFor="choice-cold"
          className="modal__label modal__label_type_radio"
        >
          <input
            type="radio"
            id="choice-cold"
            name="weather"
            value="cold"
            className="modal__radio-input"
            checked={values.weather === "cold"}
            onChange={handleChange}
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
