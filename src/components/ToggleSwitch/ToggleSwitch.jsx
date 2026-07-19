import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import "./ToggleSwitch.css";

function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext,
  );

  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch__checkbox"
        checked={currentTemperatureUnit === "C"}
        onChange={handleToggleSwitchChange}
      />
      <span className="toggle-switch__track"></span>
      <span className="toggle-switch__knob"></span>
      <span className="toggle-switch__label toggle-switch__label_type_f">
        F
      </span>
      <span className="toggle-switch__label toggle-switch__label_type_c">
        C
      </span>
    </label>
  );
}

export default ToggleSwitch;
