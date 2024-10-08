import React from "react";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faBehance,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import Image from "next/image";

const teamMembers = [
  {
    picture: "/goodManImg.jpg",
    fullName: "Aakash Bagale",
    designation: "Founder ",
    // bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
    socialLinks: [
      { icon: faFacebookF, href: "#" },
      { icon: faLinkedinIn, href: "#" },
      { icon: faTwitter, href: "#" },
      { icon: faBehance, href: "#" },
    ],
  },
  {
    picture: "/aman.jpeg",
    fullName: "Aman Partel",
    designation: "Creative Lead",
    // bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
    socialLinks: [
      { icon: faFacebookF, href: "#" },
      { icon: faLinkedinIn, href: "#" },
      { icon: faTwitter, href: "#" },
      { icon: faBehance, href: "#" },
    ],
  },
  {
    picture: "/Darshan.jpeg",
    fullName: "Darshan Poudel",
    designation: "Head of Tech",
    // bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
    socialLinks: [
      { icon: faFacebookF, href: "#" },
      { icon: faLinkedinIn, href: "#" },
      { icon: faTwitter, href: "#" },
      { icon: faBehance, href: "#" },
    ],
  },
  {
    picture: "/ankit.jpeg",
    fullName: "Ankit Mehta",
    designation: "Managing Director",
    // bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
    socialLinks: [
      { icon: faFacebookF, href: "#" },
      { icon: faLinkedinIn, href: "#" },
      { icon: faTwitter, href: "#" },
      { icon: faBehance, href: "#" },
    ],
  },
  {
    picture: "/bipin.jpg",
    fullName: "Bipin Thapa",
    designation: "Cheif Financial Officer",
    // bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
    socialLinks: [
      { icon: faFacebookF, href: "#" },
      { icon: faLinkedinIn, href: "#" },
      { icon: faTwitter, href: "#" },
      { icon: faBehance, href: "#" },
    ],
  },
];

const TeamMemberItem = ({
  member,
}: {
  member: {
    picture: string;
    fullName: string;
    designation: string;
    socialLinks: { icon: IconDefinition; href: string }[];
  };
}) => (
  <div className=" flex justify-center items-center flex-col ">
    {/* <div className=" w-[230px] h-[230px]  relative rounded-full">
      <Image src={member.picture} alt={member.fullName} fill></Image>
    </div> */}
    {/* <div className=" xl:w-[84px] xl:h-[84px] lg:w-[70px] lg:h-[70px] w-[55px] h-[55px] rounded-full  relative border-2 border-sky-200 object-cover">
      <Image src={member.picture} alt="logo" fill></Image>
    </div> */}

    <img
      src={member.picture}
      alt={member.fullName}
      className="max-w-full h-auto rounded-full mx-auto xl:w-[130px] lg:w-[100px] w-[90px] border-2 border-sky-300"
      width=""
    />
    <div className="px-4 py-6 xl:px-6">
      <h4 className="text-2xl max-md:text-xl font-poppins mb-2 max-sm:mb-0">
        {member.fullName}
      </h4>
      <h6 className="font-medium">{member.designation}</h6>
      {/* <p className="opacity-50 mb-0">{member.bio}</p> */}
      <div className="mt-6">
        {member.socialLinks.map((link, i) => (
          <a
            href={link.href}
            className="inline-block opacity-60 transition duration-300 hover:translate-y-1 hover:opacity-100 mr-4"
            key={i}
          >
            <FontAwesomeIcon icon={link.icon} />
          </a>
        ))}
      </div>
    </div>
  </div>
);

TeamMemberItem.propTypes = {
  member: PropTypes.object.isRequired,
};

export default function Team() {
  return (
    <section
      className="ezy__team2 light  md:py-10 bg-white  text-zinc-900  "
      id="team"
    >
      <div className="container px-4 mx-auto ">
        <div className="flex justify-center  mb-6 md:mb-12">
          <div className="sm:max-w-md text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl leading-none font-bold mb-7 font-poppins">
              Our Core Members
            </h2>
            {/* <p>
              Assumenda non repellendus distinctio nihil dicta sapiente,
              quibusdam maiores, illum at qui.
            </p> */}
          </div>
        </div>
        <div className="grid grid-cols-5 max-xl:grid-cols-4 xl:gap-6 lg:gap-4 gap-2 text-center mt-20">
          {teamMembers.map((member, i) => (
            <div className="col-span-4 md:col-span-2 lg:col-span-1" key={i}>
              <TeamMemberItem member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
