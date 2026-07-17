import logo from "../../assets/Logo.png";
import avatar from "../../assets/Profile_Picture.png";
import "./Header.css";

function Header({ weatherData, onAddClothesClick }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__info">
        <img src={logo} alt="WTWR logo" className="header__logo" />
        <p className="header__date-and-location">
          {currentDate}, {weatherData.city}
        </p>
      </div>
      <div className="header__user-container">
        <button
          type="button"
          className="header__add-clothes-button"
          onClick={onAddClothesClick}
        >
          + Add clothes
        </button>
        <p className="header__username">Terrence Tegegne</p>
        <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
