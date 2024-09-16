import React from "react";

const Informatin = () => {
  return (
    <section className="pt-[50px] pb-[50px] border-b-2 border-gray-100">
      <div className="flex justify-center items-center gap-5 flex-wrap">
        <div className="flex flex-col items-center w-[320px] h-[93px] ">
          <div  className="mb-2">
            <img
              src="https://demo-alukas.myshopify.com/cdn/shop/files/free-shipping.jpg?v=1712656231"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[18px] font-semibold">Free Shipping</span>
            <span className="text=[16px] text-[#555555]">For all Orders Over $100</span>
          </div>
        </div>
        <div className="flex flex-col items-center w-[320px] h-[93px] ">
          <div  className="mb-2">
            <img
              src="https://demo-alukas.myshopify.com/cdn/shop/files/returns.jpg?v=1712656231"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center w-[320px] h-[93px] ">
            <span className="text-[18px] font-semibold">30 Days Returns</span>
            <span className="text=[16px] text-[#555555]">For an Exchange Product</span>
          </div>
        </div>
        <div className="flex flex-col items-center w-[320px] h-[93px] ">
          <div  className="mb-2">
            <img
              src="https://demo-alukas.myshopify.com/cdn/shop/files/secured-payment.jpg?v=1712656231"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[18px] font-semibold">Secured Payment</span>
            <span className="text=[16px] text-[#555555]">Payment Cards Accepted</span>
          </div>
        </div>
        <div className="flex flex-col items-center w-[320px] h-[93px] ">
          <div className="mb-2">
            <img
              src="https://demo-alukas.myshopify.com/cdn/shop/files/support.jpg?v=1712656037"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[18px] font-semibold">Support 24/7</span>
            <span className="text=[16px] text-[#555555]">Contact us Anytime</span>
          </div>
        </div>
          </div>

      </section>
      
  );
};

export default Informatin;
