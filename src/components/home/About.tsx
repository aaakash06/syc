import React from "react";
import PropTypes from "prop-types";
import { GiBiceps } from "react-icons/gi";
import Image from "next/image";
const stories = [
  {
    title: "The journey to relaxation.",
    description:
      "Finding a hammock you can truly relax in didn’t happen overnight. It started with a chance discovery while on vacation, and took a lot of hard work (and a lot of hanging around) to bring the softest, most comfortable, and thoughtfully crafted hammocks to your backyard.",
    image: "https://cdn.easyfrontend.com/pictures/featured/featured_13.png",
  },
  {
    title: "The way to heaven.",
    description:
      "More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously outside crud mightily rigorous negative one inside gorilla and drew humbly shot tortoise inside opaquely. Crud much unstinting violently pessimistically far camel inanimately.",
    image: "https://cdn.easyfrontend.com/pictures/about/about9.jpg",
  },
];

const StoryItem = ({ item, index }) => {
  const { title, description, image } = item;
  return (
    <>
      <div
        className={`col-span-12 md:col-span-5 ${
          index % 2 === 0
            ? "order-1 md:order-2 md:col-start-7"
            : "order-2 md:order-1 md:col-start-2"
        }`}
      >
        <div
          className={`flex flex-col justify-center ${
            index % 2 === 0 ? "lg:pl-14" : "lg:pr-14"
          }`}
        >
          <h4 className="text-2xl font-bold mb-4">{title}</h4>
          <p className="text-base leading-relaxed text-justify opacity-70 mb-0 md:pr-6">
            {description}
          </p>
        </div>
      </div>
      <div
        className={`${
          index % 2 === 0
            ? "order-1 md:col-start-2"
            : "order-1 md:order-2 md:col-start-7"
        } col-span-12 md:col-span-5  mb-6 md:mb-0 mt-6 md:mt-0`}
      >
        <div>
          <img
            src={image}
            alt={title}
            className="max-w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </>
  );
};

StoryItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

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
