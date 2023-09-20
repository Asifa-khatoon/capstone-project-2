import React from "react";
import Image from "next/image";
import arrwoimg from "../../images/assets/Arrow.svg";
import imagetwo from "../../images/assets/Image (1).png";
import imagethree from "../../images/assets/Image (2).png";
import imagefour from "../../images/assets/Image (5).png";

const ImagesSection = (props) => {
  const productAvailable = [
    {
      productName: "Wing Chair",
      productAvailable: "3,584 Products",
      imageUrl: imagetwo,
    },
    {
      productName: "Wooden Chair",
      productAvailable: "157 Products",
      imageUrl: imagethree,
    },
    {
      productName: "Desk Chair",
      productAvailable: "154 Products",
      imageUrl: imagefour,
    },
  ];

  return (
    <div className="">
      <div className=" d-flex justify-content-between container">
        <h4 className="fw-bold pt-4"> Top categories </h4>
        <Image src={arrwoimg} width={80} height={90} alt="" />
      </div>

      <div class="container text-center mt-5">
        <div class="row">
          {productAvailable.map((item) => {
            return (
              <div class="col-md-4 mb-3">
                <div className="position-set position-absolute">
                  <h4 className=" fw-bold text-start m-2 p-1">
                  
                    {item.productName}
                  </h4>
                  <p className=" fw-bold text-start mx-3">
                  
                    {item.productAvailable}
                  </p>
                </div>
                <Image src={item.imageUrl} className="img-fluid" alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImagesSection;

{
 
}
