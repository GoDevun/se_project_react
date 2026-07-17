import { useCallback, useEffect, useState } from "react";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { defaultClothingItems } from "../../utils/clothingItems";
import { APIkey, coordinates } from "../../utils/constants";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState({
    city: "",
    temperature: 0,
    condition: "",
    conditionType: "sunny",
    isDay: true,
  });
  const [clothingItems] = useState(defaultClothingItems);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const handleCloseModal = useCallback(() => {
    setActiveModal("");
  }, []);

  function handleAddClothesClick() {
    setActiveModal("add-garment");
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setActiveModal("preview");
  }

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        setWeatherData(filterWeatherData(data));
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!activeModal) {
      return;
    }

    function handleEscapePress(event) {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    }

    document.addEventListener("keydown", handleEscapePress);
    return () => {
      document.removeEventListener("keydown", handleEscapePress);
    };
  }, [activeModal, handleCloseModal]);

  return (
    <div className="page">
      <div className="page__content">
        <Header
          weatherData={weatherData}
          onAddClothesClick={handleAddClothesClick}
        />
        <Main
          weatherData={weatherData}
          clothingItems={clothingItems}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>
      <ModalWithForm
        title="New garment"
        name="add-garment"
        buttonText="Add garment"
        isOpen={activeModal === "add-garment"}
        onClose={handleCloseModal}
      >
        <label htmlFor="clothing-name" className="modal__label">
          Name
          <input
            type="text"
            id="clothing-name"
            className="modal__input"
            placeholder="Name"
            required
          />
        </label>
        <label htmlFor="clothing-link" className="modal__label">
          Image
          <input
            type="url"
            id="clothing-link"
            className="modal__input"
            placeholder="Image URL"
            required
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
              name="weatherType"
              value="hot"
              className="modal__radio-input"
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
              name="weatherType"
              value="warm"
              className="modal__radio-input"
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
              name="weatherType"
              value="cold"
              className="modal__radio-input"
            />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>
      <ItemModal
        isOpen={activeModal === "preview"}
        card={selectedCard}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;
