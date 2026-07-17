import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__author">Developed by Devun Cooksey</p>
      <p className="footer__year">{currentYear}</p>
    </footer>
  );
}

export default Footer;
