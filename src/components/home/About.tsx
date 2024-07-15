import React from "react";
import PropTypes from "prop-types";
import { GiBiceps } from "react-icons/gi";
import Image from "next/image";

export default function About() {
  return (
    <section
      className="ezy__about6 font-poppins  light pb-14 md:py-24 bg-white  text-zinc-900 flex justify-center items-center "
      id="about"
    >
      <div className="container px-4 ">
        <div className="grid grid-cols-12 justify-center text-center mb-12">
          <div className="col-span-12 md:col-span-8 md:col-start-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl  leading-snug md:leading-snug font-bold mb-6">
              About Us
            </h2>
            <p className="text-sm sm:text-lg opacity-80 mb-4">
              The primary purpose of our project is to foster a community of
              support and resilience among students. By conducting regular
              support group sessions, we aim to normalize conversations around
              mental health, reduce stigma, and empower students to take
              proactive steps in managing their mental wellbeing.
            </p>
          </div>
        </div>

        <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl mb-20">
          Our Objectives
        </h1>
        <div className="flex flex-col gap-10 text-sm sm:text-lg px-[20%] max-md:px-[10px] max-lg:px-[10%] items-start">
          <div className="flex items-center gap-5 ">
            <Image
              src={"/checked.png"}
              alt="checked"
              width={30}
              height={30}
            ></Image>
            <p className="">
              Provide consistent and reliable support for students through
              weekly group sessions.
            </p>
          </div>
          <div className="flex items-center gap-5 justify-center">
            <Image
              src={"/checked.png"}
              alt="checked"
              width={30}
              height={30}
            ></Image>
            <p className="">
              Create a safe and confidential environment where students can
              openly discuss their mental health challenges.
            </p>
          </div>
          <div className="flex items-center gap-5 justify-center">
            <Image
              src={"/checked.png"}
              alt="checked"
              width={30}
              height={30}
            ></Image>
            <p className="">
              Equip students with practical tools and strategies for managing
              stress and anxiety.
            </p>
          </div>
          <div className="flex items-center gap-5 justify-center">
            <Image
              src={"/checked.png"}
              alt="checked"
              width={30}
              height={30}
            ></Image>
            <p className="">
              To provide a consistent and reliable support system for students
              through weekly group sessions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
