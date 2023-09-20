"use client";
import React from "react";
import Image from "next/image";
import "./picturecss.css";
import arrwoimg from "../../images/assets/Arrow.svg";
import img1 from "../../images/assets/Image (4).png";
import img2 from "../../images/assets/Image (1) (1).png";
import img3 from "../../images/assets/Image (2) (1).png";
import img4 from "../../images/assets/Image (3) (1).png";


const Cardss = () => {
  return (
    <div>
         <div className="container">
      <div className="container d-flex justify-content-between p-2">
        <h5 className="fw-bold pt-4">  Recently added </h5>
        <Image src={arrwoimg} width={80} height={90} alt="" />
      </div>

      <div class="container  margi">
        <div className="row">
          <div className="col-md-3">
            <div className="post position-absolute bg-success succes text-white rounded pt-1 mt-3 mx-4 px-3">
              <span className="">New</span>
            </div>
          
            <Image src={img1} className="img-fluid mb-2" alt="chair" />
            <div className=" ">
              <h6 className="text-start text-info fw-bold">
                Library Stool Chair
              </h6>
              
              <h6 className="newclas text-start">$20</h6>
            </div>
            
          </div>
          <div className="col-md-3">
            <div className="post position-absolute orange text-white rounded pt-1 mt-3 mx-3">
              <span className="bg-danger px-4 rounded py-1">Sales</span>
            </div>
            <Image src={img2} className="img-fluid" alt="chair" />
            <div className="">
              <h6 className="text-start fw-bold">Library Stool Chair</h6>
              <h6 className=" text-start">$20
              <span className="text-decoration-line-through text-body-secondary">
                $39
              </span>
              </h6>
            </div>
           
          </div>
          <div className="col-md-3">
            <Image src={img3} className="img-fluid mb-2" alt="chair" />
            <div className="">
              <h6 className="text-start fw-bold">Library Stool Chair</h6>
              <h6 className=" text-start">$20</h6>
            </div>
            
          </div>
          <div className="col-md-3">
            <Image src={img4} className="img-fluid mb-2" alt="chair" />
            <div className="">
              <h6 className="text-start fw-bold">Library Stool Chair</h6>
              <h6 className=" text-start">$20</h6>
            </div>
           
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default Cardss
