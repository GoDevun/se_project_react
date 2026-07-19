import { Link } from "react-router-dom";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
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
        <Link to="/" className="header__logo-link">
          <img src={logo} alt="WTWR logo" className="header__logo" />
        </Link>
        <p className="header__date-and-location">
          {currentDate}, {weatherData.city}
        </p>
      </div>
      <div className="header__user-container">
        <ToggleSwitch />
        <button
          type="button"
          className="header__add-clothes-button"
          onClick={onAddClothesClick}
        >
          + Add clothes
        </button>
        <Link to="/profile" className="header__user-link">
          <p className="header__username">Terrence Tegegne</p>
          <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
