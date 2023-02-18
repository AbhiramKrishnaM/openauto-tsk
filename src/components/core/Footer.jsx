function Footer() {
  const socialLinks = [
    { id: 0, name: "Facebook", icon: "" },
    { id: 1, name: "Twitter", icon: "" },
    { id: 2, name: "Youtube", icon: "" },
    { id: 3, name: "Linkedin", icon: "" },
    { id: 4, name: "Instagram", icon: "" },
  ];

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
            <h3 className="text-lg">+763 586 4558</h3>
            <h3 className="text-lg">service@openauto.ca</h3>
          </div>
          <div id="social-links">
            <h1>Hello</h1>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
