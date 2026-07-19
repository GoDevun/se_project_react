import avatar from "../../assets/Profile_Picture.png";
import "./SideBar.css";

function SideBar() {
  return (
    <section className="sidebar">
      <img src={avatar} alt="Terrence Tegegne" className="sidebar__avatar" />
      <p className="sidebar__username">Terrence Tegegne</p>
    </section>
  );
}

export default SideBar;
