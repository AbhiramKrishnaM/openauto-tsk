import { Icon } from "@iconify/react";

function Footer() {
  const socialLinks = [
    { id: 0, name: "Facebook", icon: "fa6-brands:facebook-f" },
    { id: 1, name: "Twitter", icon: "fa6-brands:twitter" },
    { id: 2, name: "Youtube", icon: "fa6-brands:youtube" },
    { id: 3, name: "Linkedin", icon: "fa6-brands:linkedin" },
    { id: 4, name: "Instagram", icon: "fa6-brands:instagram" },
  ];

  const Links = socialLinks.map((link) => {
    return (
      <a href="/" className="text-xl">
        <Icon icon={link.icon} />
      </a>
    );
  });

  return (
    <footer className="w-full">
      <div className="mx-auto w-[90%] border-t-4 border-gray-800 py-10 flex items-center justify-between">
        {/* icon and rights */}
        <div className="w-1/6">
          <div id="logo" className="h-14 bg-red-600 mb-2"></div>
          <span className="text-xl text-light">
            Open Auto @ all rights reserved
          </span>
        </div>

        {/* social links */}
        <div className="text-light flex flex-col items-end gap-4">
          <div id="contact-details" className="flex items-center gap-7">
            <h3 className="text-lg flex items-center">
              <Icon icon="ic:baseline-phone" class="mr-3 " />
              +763 586 4558
            </h3>
            <h3 className="text-lg flex items-center">
              <Icon icon="material-symbols:mail" class="mr-3" />
              service@openauto.ca
            </h3>
          </div>
          <div id="social-links" className="flex items-center gap-7">
            {Links}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
