import React from "react";

interface SubscribeEmailProps {
  heading: string;
  subheading: string;
  buttonText: string;
}

const SubscribeEmail: React.FC<SubscribeEmailProps> = ({
  heading,
  subheading,
  buttonText,
}) => {
  return (
    <div className="relative w-full h-[312px] bg-[#F5F5F5] flex items-center justify-center">
      <div className="absolute inset-0 bg-[#F5F5F5] bg-opacity-50 flex items-center justify-center text-black">
        <div className="bg-opacity-80   text-center w-full max-w-[580px]">
          <h3 className="text-[28px] text-black font-semibold mb-2">
            {heading}
          </h3>
          <p className="mb-8 text-[16px] text-[#555555]">{subheading}</p>
          <form className="flex w-full max-w-2xl gap-2 ">
            <input
              type="email"
              placeholder="Your email address..."
              required
              className="px-6 py-2 bg-transparent border-2 border-black placeholder:text-[#555555] w-full flex-grow"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-black transition ease duration-300 text-white flex-shrink-0"
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubscribeEmail;
