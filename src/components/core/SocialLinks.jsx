import { Icon } from "@iconify/react";

function Social() {
  const socialLinks = [
    { id: 0, name: "Facebook", icon: "fa6-brands:facebook-f" },
    { id: 1, name: "Twitter", icon: "fa6-brands:twitter" },
    { id: 2, name: "Youtube", icon: "fa6-brands:youtube" },
    { id: 3, name: "Linkedin", icon: "fa6-brands:linkedin" },
    { id: 4, name: "Instagram", icon: "fa6-brands:instagram" },
  ];

  const Links = socialLinks.map((link) => {
    return (
      <a href="/" className="text-2xl" key={link.id}>
        <Icon icon={link.icon} className="text-light" />
      </a>
    );
  });

  return Links;
}

export default Social;
