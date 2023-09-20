import React from "react";
import Image from "next/image";
import "./Hero.css";
import lastimg from "../../images/assets/shield.svg";
import secondimg from "../../images/assets/Group 51.svg";
import boximg from "../../images/assets/box.svg";
import thirdimg from "../../images/assets/24-hours.svg";

const CardCenter = () => {
  return (
    <>
      <div className="">
        <div class="container ">
          <div class="row card-bg mx-5 d-flex rounded shadow-lg mb-5 bg-body rounded position-relative ">
            <div class="row g-4  row-cols-1 row-cols-lg-4 pb-2">
              <div class="second-cards col">
                <div className="d-flex px-1 ">
                  <Image className="pb-2" src={boximg} width={60} height={70} />

                  <div className="px-2 pt-2">
                    <p className="font-size-5 fw-bold"> Discount</p>
                    <p className="font-size-5 text-secondary ">
                    
                      Every week new sales
                    </p>
                  </div>
                </div>
              </div>
              <div class="second-cards col">
                <div className="d-flex px-1">
                  <Image src={secondimg} width={60} height={70} />

                  <div className="px-2 pt-3">
                    <p className="font-size-5 fw-bold"> Free Delivery </p>
                    <p className="font-size-5 text-secondary ">
                    
                      100% Free for all orders
                    </p>
                  </div>
                </div>
              </div>
              <div class="second-cards col">
                <div className="d-flex px-1 ">
                  <Image src={thirdimg} width={50} height={60} />

                  <div className="px-2 pt-3">
                    <p className="font-size-5 fw-bold"> Great Support 24/7 </p>
                    <p className="font-size-5 text-secondary ">
                     
                      We care your experiences
                    </p>
                  </div>
                </div>
              </div>
              <div class="second-cards col">
                <div className="d-flex  px-1">
                  <Image className="" src={lastimg} width={50} height={60} />

                  <div className="pt-3 px-2">
                    <p className="font-size-5 fw-bold"> secure Payment </p>
                    <p className="font-size-5 text-secondary ">
                     
                      100% Secure Payment Method
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCenter;
