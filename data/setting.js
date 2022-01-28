import { FaFacebookF, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
export const header = {
  name: "Jhon Doe",
  role: "Editor",
};
export const menu = ["resume", "projects", "forums", "contact"];

export const contact = "123-4567-8910";

export const email = "jhondoe2020@mysite.com";

export const follow = [
  {
    icon: <FaFacebookF className="facebook" />,
    url: "https://www.facebook.com/shresthapradhuman",
  },
  {
    icon: <FaInstagram className="instagram" />,
    url: "https://www.instagram.com/shresthapradhuman/",
  },
  {
    icon: <FaYoutube className="youtube" />,
    url: "https://www.youtube.com/channel/UC833VjwIP98-Qv2-FAGJLIw",
  },
  {
    icon: <FaGithub className="github" />,
    url: "https://github.com/shresthapradhuman",
  },
];

export const profileImage = {
  alt: "profile image",
  filename: "profile.jpg",
};


export const about =
  "I'm Jhon Doe. Web Developer From Tokyo, Japan. I am passionate about Web Designing. I have rich experience in Magento, also I'm good at WordPress. I love to talk with you about our unique.";