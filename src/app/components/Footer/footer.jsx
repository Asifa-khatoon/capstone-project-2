import React from "react";
import Image from "next/image";
import "./footer.css";
import Logo from "../../images/assets/Logo (8).svg";
import links from "../../images/assets/Social Links.svg";
import facebook from "../../images/assets/Group 44.png";
import linkimg2 from "../../images/assets/Group (1).png";
import linkimg3 from "../../images/assets/Instagram 1.png";
import lingimg4 from "../../images/assets/Group.png";
import twiitter from "../../images/assets/Group 48.png";
import lastimg from "../../images/assets/Logos.png";

const Footer = () => {
  return (
    <div className="py-5">
      <div className=" border-top text-size-5 p-5">
        <div className=" p-3">
          <footer>
            <div className="py-4 ">
              <div className="row justify-content-center">
                <div className=" col-md-4 px-5 d-flex flex-column">
                  <Image src={Logo} width={130} height={90} />

                  <ul className="nav flex-column">
                    <p className="text-secondary">
                      Vivamus tristique odio sit amet velit semper, <br /> eu
                      posuere turpis interdum. <br />
                      Cras egestas purus
                    </p>
                    <li className="nav-item mb-2">
                      <Image
                        className=""
                        src={facebook}
                        width={30}
                        height={30}
                      />
                      <Image
                        className=""
                        src={twiitter}
                        width={30}
                        height={30}
                      />
                      <Image
                        className="p-2"
                        src={linkimg3}
                        width={30}
                        height={30}
                      />
                      <Image
                        className="p-2"
                        src={lingimg4}
                        width={30}
                        height={30}
                      />
                      <Image
                        className="p-2 "
                        src={linkimg2}
                        width={30}
                        height={30}
                      />
                    </li>
                  </ul>
                </div>
                <div className="col-md-2 text-center text-lg-start d-flex flex-column">
                  <ul className="nav flex-column py-4">
                    <li className="text-secondary py-3">CATEGORY</li>
                    <li className="nav-item mb-2"> sofa </li>
                    <li className="nav-item mb-2"> Armchair</li>
                    <li className="nav-item mb-2"> Wing chair </li>
                    <li className="nav-item mb-2 text-color-5">
                      {" "}
                      <u> Desk Chair </u>{" "}
                    </li>
                    <li className="nav-item mb-2"> wooden Chair </li>
                    <li className="nav-item mb-2"> Park Bench</li>
                  </ul>
                </div>
                <div className=" col-md-2 text-center  d-flex flex-column text-lg-start">
                  <ul className="nav flex-column py-4">
                    <li className="nav-item mb- text-secondary p-3">
                      {" "}
                      SUPPORT
                    </li>
                    <li className="nav-item mb-2 "> Help & Support </li>
                    <li className="nav-item mb-2"> Tearms & Conditions </li>
                    <li className="nav-item mb-2"> Privacy Policy </li>
                    <li className="nav-item mb-2"> Help </li>
                  </ul>
                </div>
                <div className="col-md-4 text-center text-lg-start d-flex flex-column align-items-center ">
                  <form className="my-4">
                    <p className="text-secondary"> NEWSLETTER</p>
                    <div className="d-flex">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=" Your email"
                      />
                      <button
                        className="btn btn-bg text-white mx-2"
                        type="button"
                      >
                        Subscribe
                      </button>
                    </div>
                    <p className="text-secondary pt-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam tincidunt erat enim.
                    </p>
                  </form>
                </div>
              </div>

              <div className=" border-top pt-3">
                <div className="container d-flex justify-content-between text-center ">
                  <p className="text-muted mb-0">
                   
                    @ 2021 - Blogy - Designed & Develop by{" "}
                    <span className="text-black"> Zakirsoft</span>{" "}
                  </p>
                  <div className="d-flex justify-"> 
                  <Image
                    className="rounded px-5"
                    src={lastimg}
                    width={290}
                   
                  />
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
