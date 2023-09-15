import React from "react";
import Image from "next/image";
import "./cards.css";
import arrwoimg from "../../images/assets/Arrow.svg";
import girlpic from "../../images/assets/Image (7).png";
import girlpic2 from "../../images/assets/Image (8).png";
import cornering from "../../images/assets/Group (2).png";

const Cards = (props) => {
  const userFeedback = [
    {
      customerFeedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et",
      customerName: " Kristin Watson",
      customerLname: "Fashion Designer",
      imageimport: girlpic,
    },
    {
      customerFeedback:
        "Nullam sapien elit, dignissim eu viverra et, scelerisque et felis. Aliquam egestas dui elit, quis tincidunt lacus aliquam et. Duis nulla velit, dignissim ut odio ac, eleifend luctus leo. Ut ac imperdiet velit. Aliquam semper ex in volutpat rutrum.",
      customerName: "Esther Howard",
      customerLname: "Fashion Designer",
      imageimport: girlpic2,
    },
  ];

  return (
    <div className="bg-colorr">
      <div className="d-flex justify-content-between container pt-5 mt-4">
        <h5 className="fw-bold pt-4 px-2"> What client says about us </h5>
        <Image src={arrwoimg} width={80} height={90} alt="" />
      </div>
      <div className="container">
        <div class="row row-cols-1 row-cols-md-2">
          {userFeedback.map((item) => {
            return (
              <div class="col pb-5 ">
                <div class=" rounded card-bg mx-2 px-4 py-4 pb-5 shadow  bg-body rounded">
                  <p class=" text-secondary font-size-10 box-shadow-55 px-3 ">
                    {item.customerFeedback}
                  </p>

                  <div className="d-flex  position-relative">
                    <Image className="p-2" src={item.imageimport} width={60} />
                    <div className="">
                      <p className="mb-0 mt-2">{item.customerName}</p>

                      <div className="container ">
                        <p className="text-muted mb-0"> Fashion Designer </p>

                        <div className="position-absolute  end-0 top-0">
                          <Image className="rounded" src={cornering} />
                        </div>
                      </div>
                    
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>


  );
};

export default Cards;

