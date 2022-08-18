/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsDribbble } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <>
      <div className="header__socials">
        <a href="inkedin.com/in/osama-ayub8889993755979/" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com/osamaayub" target="_blank">
          <FaGithub />
        </a>
        <a href="https://dribbble.com/usama4385" target="_blank">
          <BsDribbble />
        </a>
      </div>
    </>
  );
};

export default HeaderSocial;
