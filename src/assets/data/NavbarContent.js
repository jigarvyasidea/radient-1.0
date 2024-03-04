import h4b_logo from "../images/NavbarImages/logo.png";

const navbarContent = {
  logo: h4b_logo,
  links: [
    {
      text: "Home",
      link: "home",
    },
    {
      text: "About",
      link: "about",
    },
    {
      text: "Timeline",
      link: "timeline",
    },
    {
      text: "Themes",
      link: "themes",
    },
    {
      text: "Prizes",
      link: "prizes",
    },
    {
      text: "Sponsors",
      link: "sponsors",
    },
  ],
  dropdown: {
    text: "More",
    links: [
      {
        text: "Mentors",
        link: "mentors",
      },
      {
        text: "Testimonials",
        link: "testimonials",
      },
      {
        text: "FAQ",
        link: "faq",
      },
      {
        text: "Team",
        link: "/team",
      },
    ],
  },
};

export default navbarContent;
