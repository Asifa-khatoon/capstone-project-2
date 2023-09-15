import React from "react";
import Image from "next/image";

import img1 from "../../images/assets/Image (4).png";
import img2 from "../../images/assets/Image (1) (1).png";
import img3 from "../../images/assets/Image (2) (1).png";
import img4 from "../../images/assets/Image (3) (1).png";
import cartimgtwo from "../../images/assets/Add Cart (1).png";
import imagetwo from "../../images/assets/Image (1).png";
import arrwoimg from "../../images/assets/Arrow.svg";
import cartimg from "../../images/assets/Add Cart (2).png";
import chairimg from "../../images/assets/Image (9).png";
import chairimgg from "../../images/assets/Image (10).png";

const Products = () => {
  const productImages = [
    {
      productName: "Library Stool Chair",
      productPrize: "$20",
      imageUrl: img1,
      cartimgurl: cartimg,
      cardstyle: "fw-bold text-colorr",
    },
    {
      productName: "Library Stool Chair",
      productPrize: "$20",
      imageUrl: img2,
      cartimgurl: cartimgtwo,
      cardstyle: "fw-bold text-size",
    },
    {
      productName: "Library Stool Chair",
      productPrize: "$20",
      imageUrl: img3,
      cartimgurl: cartimgtwo,
      cardstyle: "fw-bold text-size",
    },
    {
      productName: "Library Stool Chair",
      productPrize: "$20",
      imageUrl: img4,
      cartimgurl: cartimgtwo,
      cardstyle: "fw-bold text-size",
    },
    {
      productName: "Library Stool Chair",
      productPrize: "$20",
      imageUrl: imagetwo,
      cartimgurl: cartimgtwo,
      cardstyle: "fw-bold text-size",
    },
    {
      productName: "Library Stool Chair",
      productPrize: "$20",
      imageUrl: chairimg,
      cartimgurl: cartimgtwo,
      cardstyle: "fw-bold text-size",
    },
    {
      productName: "Library Stool Chair",
      productPrize: "$20",
      imageUrl: chairimgg,
      cartimgurl: cartimgtwo,
      cardstyle: "fw-bold text-size",
    },
    {
      productName: "Library Stool Chair",
      productPrize: "$20",
      imageUrl: img1,
      cartimgurl: cartimgtwo,
      cardstyle: "fw-bold text-size",
    },
  ];

  return (
    <div>
      <div className="text-center">
        <h3 className=" ">
          Our Products
          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 py-3">
            <li>
              <a
                href="#"
                className="nav-link px-3  text-black text-border "
              >
                ALL
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-3 text-secondary">
              
                NEWEST
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-3 text-black">
                
                TRENDING
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-3 text-secondary">
              
                BEST SELLER
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-3 text-secondary">
                
                FEATIURED
              </a>
            </li>
          </ul>
        </h3>
      </div>

      <div className="container">
        <div className="container d-flex justify-content-between p-2">
          <h5 className="fw-bold pt-4"> Feature product </h5>
          <Image src={arrwoimg} width={80} height={90} alt="" />
        </div>

        <div className="container">
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {productImages.map((item) => {
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
                      src={item.cartimgurl}
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
    </div>
  );
};

export default Products;
