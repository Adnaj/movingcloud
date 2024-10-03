import logo from "@/images/resources/logo.png";
import logo2 from "@/images/resources/logo-2.png";

const navItems = [
  {
    id: 1,
    name: "Home",
    href: "/",
    subNavItems: [],
  },
  {
    id: 2,
    name: "About",
    href: "/about",
    subNavItems: [],
  },
  {
    id: 3,
    name: "Holiday Packages",
    href: "/tours",
    subNavItems: [
      { id: 1, name: "North India Packages", href: "/tours" },
      { id: 1, name: "South India Packages", href: "/tours" },
      { id: 1, name: "International Packages", href: "/tours" },
      { id: 1, name: "kerala Packages", href: "/tours" },
    ],
  },
  {
    id: 4,
    name: "Theme Packages",
    href: "/tours",
    subNavItems: [
      { id: 1, name: "Honeymoon", href: "/tours" },
      { id: 1, name: "Pilgrimages", href: "/tours" },
      { id: 1, name: "Ayurvadic", href: "/tours" },

    ],
  },
  {
    id: 5,
    name: "Contact",
    href: "/contact",
    subNavItems: [],
  },
];

const social = [
  { icon: "fa-facebook-square", link: "" },
  { icon: "fa-twitter", link: "" },
  { icon: "fa-instagram", link: "" },
  { icon: "fa-pinterest-p", link: "" },
];

const headerData = {
  icons: [
    {
      id: 1,
      icon: "icon-phone-call",
      content: " +91 9746 629 003",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "icon-at",
      content: " movingcloudkerala@gmail.com",
      subHref: "mailto",
    },
  ],
  navItems,
  social,
  logo,
  logo2,
};

export default headerData;