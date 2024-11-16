const logo = "/images/resources/logo-white.png";

const social = [
  { icon: "fa-twitter", link: "" },
  { icon: "fa-facebook-square", link: "" },
  { icon: "fa-pinterest-p", link: "" },
  { icon: "fa-instagram", link: "" },
];

const footerData = {
  logo,
  social,
  year: new Date().getFullYear(),
  author: "MovingCloud",
  about:
    "Welcome to our Trip and Tour Agency. Lorem simply text amet cing elit.",
  icons: [
    {
      id: 1,
      icon: "fas fa-phone-square-alt",
      content: "0495 4604555",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "fas fa-envelope",
      content: "movingcloudkerala@gmail.com",
      subHref: "mailto",
    },
    {
      id: 3,
      icon: "fas fa-map-marker-alt",
      content: "Ground Floor, Viva Plaza, \n Ram Mohan Road, Calicut 673004",
    },
  ],
  companies: [
    { id: 1, link: "/about", title: "About Us" },
    { id: 2, link: "#", title: "Community Blog" },
    { id: 3, link: "#", title: "Rewards" },
    { id: 4, link: "#", title: "Work with Us" },
    { id: 5, link: "#", title: "Meet the Team" },
  ],
  explore: [
    { id: 1, link: "#", title: "North India Packages" },
    { id: 2, link: "#", title: "South India Packages" },
    { id: 3, link: "#", title: "International Packages" },
    { id: 4, link: "#", title: "Kerala Packages" }
  ],
};

export default footerData;
