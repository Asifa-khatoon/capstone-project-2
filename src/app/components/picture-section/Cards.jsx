import React from "react";
import Image from "next/image";
import "./picturecss.css";
import { useState } from "react";
import arrwoimg from "../../images/assets/Arrow.svg";
import img1 from "../../images/assets/Image (4).png";
import img2 from "../../images/assets/Image (1) (1).png";
import img3 from "../../images/assets/Image (2) (1).png";
import img4 from "../../images/assets/Image (3) (1).png";
import cartimg from "../../images/assets/Add Cart (1).png";
import cartwo from "../../images/assets/Add Cart (2).png";


const Pictures = (props) => {
  const productData = [
    {
      productName: "Library Stool Chair",
      productPrize: "$20",
      imageUrl: img1,
      cardurl: cartwo,
      cardstyle: "fw-bold text-colorr",

    },
    {
      productName: "Library Stool Chair",
      productPrize: "$20 ",
      imageUrl: img2,
      cardurl: cartimg,
      cardstyle: "fw-bold text-size",
     
    },
    {
      productName: "Library Stool Chair",
      productPrize: "$20",
      imageUrl: img3,
      cardurl: cartimg,
      cardstyle: "fw-bold",
    },
    {
      productName: "Library Stool Chair",
      productPrize: "$20",
      imageUrl: img4,
      cardurl: cartimg,
      cardstyle: "fw-bold",
    },
  ];

  return (
    <div className="container">
      <div className="container d-flex justify-content-between p-2">
        <h5 className="fw-bold pt-4"> Feature product </h5>
        <Image src={arrwoimg} width={80} height={90} alt="" />
      </div>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 ">

      
          {productData.map((item) => {
            return (
              <div class="col ">
              <div className="" > 
              <Image
                className="widht-imgg rounded"
                src={item.imageUrl}
                width={249}
                height={190}
              />
             
              
              <div className="d-flex">
                <div className="mx-3 text-size">
                  <p className={item.cardstyle}> {item.productName}</p>
                  <p className=" fw-bold pb-5">{item.productPrize}</p>
                 
                </div>
                <Image
                  className="text-center mx-3 p-3"
                  src={item.cardurl}
                  width={70}
                  height={69}
                />
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

export default Pictures;
