import "../App.scss";
import Logo from "../img/white_logo.png";

const SideBar = () => {
  return (
    <div class="sidebar">
      <img class="logo" src={Logo} />
      <a id="about" href="">
        About us
      </a>
      <a id="partners" href="/">
        Partners
      </a>
      <a id="portfolio" href="/">
        Portfolio
      </a>
      <a id="news" href="">
        News
      </a>
      <a id="contact" href="">
        Contact
      </a>
    </div>
  );
};

export default SideBar;
