import React from "react";
import "./Hero.css";
import Image from "next/image";
import arrowimg from "../../images/assets/Left Arrow.svg";
import lineimg from "../../images/assets/Line.svg";
import chairpic from "../../images/assets/Product Image.svg";
import bgimg from "../../images/assets/BG Shapes.svg";
import rightarrow from "../../images/assets/Right Arrow.svg";
import discountimgg from "../../images/assets/50 Discount.png";
import threedots from "../../images/assets/Tracker.svg";

const HeroSection = () => {
  return (
    <div className="">
      <div className="container back-colo-2 rounded-bottom ">
        <div className="row ">
          <div class="col-md-6 pt-5  py-4">
            <div className="container px-5 mx-5 pt-4">
              <p className="px-5 pt-4"> Welcome to chairy </p>
            </div>
            <div className="d-flex">
              <Image
                className="px-5 pt-5"
                src={arrowimg}
                width={140}
                height={90}
              />

              <h1 class="fw-bold">
               
                Best Furniture <br />
                Collection for your interior.{" "}
              </h1>
            </div>
            <div className="container px-5 mx-5">
              <button
                type="button"
                class="btn  rounded mx-5 btn-greenn text-white px-4"
              >
                {" "}
                Shop Now
                <Image className="px-2 " src={lineimg} width={35} height={20} />
              </button>
            </div>
          </div>

          <div class="col-md-6 text-center">
            <div class="d-flex justify-content-center px-5"></div>
            <div className="pb-5 ">
              <Image
                className=" d-flex justify-content-center position-absolute"
                src={bgimg}
                width={330}
                height={250}
                alt="dots"
              />{" "}
            </div>
            <div className="">
              <Image
                className="position-relative top-25 middle-imgg"
                src={chairpic}
                width={300}
                height={300}
              />

              <Image className="pt-2" src={rightarrow} width={90} height={45} />
            </div>
          </div>
        </div>

        <div className="text-center py-5">
          <Image className="pb-4" src={threedots} width={70} height={50} />
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default HeroSection;
