import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">צור קשר</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
               כתם שלכם           </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              בעיה שלנו
            </h1>
            <Button type="primary">תרימו טלפון אנחנו זמינים תמיד</Button>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Footer;
