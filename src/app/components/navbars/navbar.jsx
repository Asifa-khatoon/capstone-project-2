import React from "react";
import "./navbar.css";
import Image from "next/image";
import Logo from "../../images/assets/Logo.svg";
import Rightt from "../../images/assets/Vector (2).svg";
import searchLogo from "../../images/assets/search 1.svg";
import cartt from "../../images/assets/Cart.svg";
import whitelist from "../../images/assets/Wishlist.svg";
import manpic from "../../images/assets/User Dropdown.svg";
import Link from "next/link";
import articleImg from "../../images/assets/alert-circle 1 (1).svg";

const NavbarOne = () => {
  return (
    <div>
      <div className="back-color ">
        <header class="">
          <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a
                href="/"
                class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
              ></a>

              <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <Image className="px-3" width={55} height={0} src={Rightt} />{" "}
                <span className=" pt-2 text-white">
                  Free shipping on all orders over $50{" "}
                </span>
              </ul>

              <div className=" d-flex px-5">
                <button
                  type="button"
                  class="btn  text-white dropdown-toggle "
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Eng
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Separated link
                    </a>
                  </li>
                </ul>
                <p className="text-white pt-3 px-3 "> Faqs</p>
                <span className="text-white  pt-3">
               
                  <Image className="" src={articleImg} width={50} height={24} />
                  Need Help
                </span>
              </div>
            </div>
          </div>
        </header>
      </div>

      <nav className="saction-nav  navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <Image width={190} height={50} src={Logo} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-marg">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <span className="nav-text">
                    <u> </u>
                  </span>
                  <br />
                </a>
              </li>
            </ul>

            <div className="editt">
              <input
                type="text"
                placeholder="Search here..."
                className="removed-properties px-4 rounded"
              />
              <Image src={searchLogo} className=" mx-4" alt="search" />
            </div>

            <button type="button" className="btn  back-btn ">
              <Image src={cartt} width={200} height={50} />
            </button>

            <button type="button" className="btn">
              <Image src={whitelist} width={50} height={50} />
            </button>

            <Link href="../../pages/signup-page">
              <Image src={manpic} width={50} height={50} />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarOne;
