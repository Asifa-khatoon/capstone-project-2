import React from "react";
import Image from "next/image";
import categori from "../../images/assets/All Categories (1).svg";

const Lastnav = () => {
  return (
    <div className="border-bottom">
      <header class="p-3 ">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <Image src={categori} width={150} height={60} />
            </a>

            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" class="nav-link px-2  Home-text">
                  Home
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-2 other-color">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-2 other-color">
                  Product
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-2 other-color">
                  Pages
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-2 other-color">
                  About
                </a>
              </li>
            </ul>

            <div className="px-5 d-flex">
              <p className="justify-content-center px-3 pt-3 other-color">
                {" "}
                Contact:{" "}
              </p>{" "}
              <span className="pt-3"> (808) 555-0111</span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Lastnav;
