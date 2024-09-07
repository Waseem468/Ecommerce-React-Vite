import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt="about_img"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to TrendMart, your one-stop online destination for the
            latest trends in fashion, electronics, home goods, and more. At
            TrendMart, we are committed to providing a seamless shopping
            experience with a curated selection of high-quality products that
            cater to your lifestyle needs.
          </p>
          <p>
            Whether you're looking for the hottest fashion pieces, cutting-edge
            gadgets, or stylish home decor, we've got you covered. Enjoy fast
            shipping, secure payments, and exceptional customer service as you
            explore the best deals and discover the trends that define your
            style. Shop smart, shop TrendMart!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission at TrendMart is to empower customers by providing access
            to the latest trends and high-quality products at competitive
            prices. We strive to create a seamless and enjoyable shopping
            experience that brings convenience, style, and innovation to
            everyday life. Through a commitment to excellence, customer
            satisfaction, and sustainability, we aim to become a trusted name in
            e-commerce, delivering value and inspiration with every purchase.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We ensure that every product meets our rigorous quality standards,
            so you can shop with confidence and enjoy long-lasting value.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Experience a hassle-free shopping journey with user-friendly
            navigation, quick checkout, and fast delivery straight to your door.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our dedicated support team is here to assist you at every step,
            ensuring a smooth and satisfying shopping experience.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
