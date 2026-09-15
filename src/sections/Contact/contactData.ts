import { CiMail, FaLinkedinIn, FaGithub } from "../../components/ui/icons";

export interface ContactItem {
  icon: React.ComponentType;
  title: string;
  value: string;
  href: string;
}

export const contactItems = [
  {
    icon: CiMail,
    title: "E-mail",
    value: "igor.bernardes2@gmail.com",
    href: "mailto:igor.bernardes2@gmail.com",
  },
  {
    icon: FaLinkedinIn,
    title: "LinkedIn",
    value: "https://www.linkedin.com/in/igor-bernardess/",
    href: "https://www.linkedin.com/in/igor-bernardess/",
  },
  {
    icon: FaGithub,
    title: "GitHub",
    value: "https://github.com/IgorBern02",
    href: "https://github.com/IgorBern02",
  },
];
