import facebook_logo from "../images/FooterImages/facebook_logo.svg";
import footer_bg from "../images/FooterImages/footer_bg.webp";
import github_logo from "../images/FooterImages/github_logo.svg";
import instagram_logo from "../images/FooterImages/instagram_logo.svg";
import linkedin_logo from "../images/FooterImages/linkedin_logo.svg";
import twitter_logo from "../images/FooterImages/twitter_logo.svg";

const footerContent = {
  backgroundImage: footer_bg,
  socials: [
    {
      icon: github_logo,
      link: "#",
      name:"github_logo"
    },
    {
      icon: instagram_logo,
      link: "#",
      name:"instagram_logo"
    },
    {
      icon: twitter_logo,
      link: "#",
      name:"twitter_logo"
    },
    {
      icon: facebook_logo,
      link: "#",
      name:"facebook_logo"
    },
    {
      icon: linkedin_logo,
      link: "#",
      name:"linkedin_logo"
    },
  ],
  links: [
    {
      text: "Brand Assets",
      link: "#",
    },
    {
      text: "Code of Conduct",
      link: "#",
    },
  ],
  mail: {
    text: "Email Us for more details",
    address: "Radient@gmail.com",
  },
  prevSeason: {
    text: "Past Events",
    url: "#",
  },
};

export default footerContent;
