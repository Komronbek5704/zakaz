import React from "react";
import "./footer.css";
import phone from "./heroimg.png";
import phone2 from "./phone2.png";
import retabl from "./retabl.png";
import payment from "./payment.png";
import footer_logo from "../assests/left.svg";
const footer = () => {
  return (
    <section className="footer">
      <div className="hero_page">
        <div className="hero_page_1">
          <img src={phone}></img>
          <p className="line"></p>
          <h1 className="app_work">How the app works</h1>
          <div className="login">
            <img className="phone2" src={phone2}></img>
            <div className="hero_title">
              <p>Create an account</p>
              <h2>Create/login to an existing account to get started</h2>
              <span>
                An account is created with your email and a desired password
              </span>
            </div>
          </div>

          <div className="explore">
            <div className="retable">
              <p>Explore varieties</p>
              <h1>Shop for your favorites meal as e dey hot.</h1>
              <span>
                Shop for your favorite meals or drinks and enjoy while doing it.
              </span>
            </div>

            <img src={retabl}></img>
          </div>

          <div className="Payment">
            <img src={payment}></img>

            <div className="checkout">
              <p>Checkout</p>
              <h1>When you done check out and get it delivered.</h1>
              <span>
                When you done check out and get it delivered with ease.
              </span>
            </div>
          </div>
          <div className="now">
            <h1>Download the app now.</h1>
            <p>
              Available on your favorite store. Start your premium experience
              now
            </p>
            <div className="button_now">
              <button className="button_now_1">Play store</button>
              <button className="button_now_2"> App store</button>
            </div>
          </div>
          <div className="footer_logo">
            <img src={footer_logo}></img>
            <div className="links">
              <a className="instagram" href="https://www.instagram.com/_kudratov__01/profilecard/?igsh=ZDZhY2pqNmxoZm9u">
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.625 3.25H11.375C6.88769 3.25 3.25 6.88769 3.25 11.375V27.625C3.25 32.1123 6.88769 35.75 11.375 35.75H27.625C32.1123 35.75 35.75 32.1123 35.75 27.625V11.375C35.75 6.88769 32.1123 3.25 27.625 3.25Z"
                    fill="#FA4A0C"
                  />
                  <path
                    d="M26 18.4763C26.2006 19.8287 25.9696 21.2099 25.3399 22.4234C24.7102 23.6369 23.7139 24.621 22.4927 25.2357C21.2714 25.8504 19.8875 26.0643 18.5377 25.8471C17.1878 25.6299 15.9409 24.9926 14.9741 24.0259C14.0074 23.0591 13.3701 21.8122 13.1529 20.4623C12.9357 19.1125 13.1496 17.7286 13.7643 16.5074C14.379 15.2861 15.3631 14.2898 16.5766 13.6601C17.7902 13.0305 19.1714 12.7995 20.5238 13C21.9033 13.2046 23.1804 13.8474 24.1665 14.8335C25.1526 15.8196 25.7955 17.0968 26 18.4763Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M28.4375 10.5625H28.4537"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a className="instagram" href="https://www.instagram.com/_kudratov__01/profilecard/?igsh=ZDZhY2pqNmxoZm9u">
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.625 3.25H11.375C6.88769 3.25 3.25 6.88769 3.25 11.375V27.625C3.25 32.1123 6.88769 35.75 11.375 35.75H27.625C32.1123 35.75 35.75 32.1123 35.75 27.625V11.375C35.75 6.88769 32.1123 3.25 27.625 3.25Z"
                    fill="#FA4A0C"
                  />
                  <path
                    d="M26 18.4763C26.2006 19.8287 25.9696 21.2099 25.3399 22.4234C24.7102 23.6369 23.7139 24.621 22.4927 25.2357C21.2714 25.8504 19.8875 26.0643 18.5377 25.8471C17.1878 25.6299 15.9409 24.9926 14.9741 24.0259C14.0074 23.0591 13.3701 21.8122 13.1529 20.4623C12.9357 19.1125 13.1496 17.7286 13.7643 16.5074C14.379 15.2861 15.3631 14.2898 16.5766 13.6601C17.7902 13.0305 19.1714 12.7995 20.5238 13C21.9033 13.2046 23.1804 13.8474 24.1665 14.8335C25.1526 15.8196 25.7955 17.0968 26 18.4763Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M28.4375 10.5625H28.4537"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a className="instagram" href="https://www.instagram.com/_kudratov__01/profilecard/?igsh=ZDZhY2pqNmxoZm9u">
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.625 3.25H11.375C6.88769 3.25 3.25 6.88769 3.25 11.375V27.625C3.25 32.1123 6.88769 35.75 11.375 35.75H27.625C32.1123 35.75 35.75 32.1123 35.75 27.625V11.375C35.75 6.88769 32.1123 3.25 27.625 3.25Z"
                    fill="#FA4A0C"
                  />
                  <path
                    d="M26 18.4763C26.2006 19.8287 25.9696 21.2099 25.3399 22.4234C24.7102 23.6369 23.7139 24.621 22.4927 25.2357C21.2714 25.8504 19.8875 26.0643 18.5377 25.8471C17.1878 25.6299 15.9409 24.9926 14.9741 24.0259C14.0074 23.0591 13.3701 21.8122 13.1529 20.4623C12.9357 19.1125 13.1496 17.7286 13.7643 16.5074C14.379 15.2861 15.3631 14.2898 16.5766 13.6601C17.7902 13.0305 19.1714 12.7995 20.5238 13C21.9033 13.2046 23.1804 13.8474 24.1665 14.8335C25.1526 15.8196 25.7955 17.0968 26 18.4763Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M28.4375 10.5625H28.4537"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
            <p className="title">Copywright 2020 Bella Onojie.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default footer;
