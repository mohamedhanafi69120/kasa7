import Logo from "../../assets/images/LOGO.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <img src={Logo} alt="Logo" />
      <div className="footer-text">© 2020 Kasa. All rights reserved</div>
    </footer>
  );
};

export default Footer;
