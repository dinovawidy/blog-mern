import React from "react";
import {
  GambarFooter,
  Idiscord,
  IFacebook,
  IGithub,
  IInstagram,
  ILinkedIn,
  ITelegram,
} from "../../../assets";
import "./footer.scss";

const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img className="icon-medsos" src={img} alt="icon" />
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <img className="logo" src={GambarFooter} alt="logo" />
        </div>
        <div className="social-wrapper">
          <Icon img={IFacebook} />
          <Icon img={IInstagram} />
          <Icon img={ITelegram} />
          <Icon img={Idiscord} />
          <Icon img={IGithub} />
          <Icon img={ILinkedIn} />
        </div>
      </div>
      <div className="copyright">
        <p>Copyright @ 2022 -2023 Dinova Code All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
