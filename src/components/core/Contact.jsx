import { Icon } from "@iconify/react";

function Contact() {
  return (
    <div id="contact-details" className="flex items-center gap-7 text-light">
      <h3 className="text-lg flex items-center">
        <Icon icon="ic:baseline-phone" className="mr-3 " />
        +763 586 4558
      </h3>
      <h3 className="text-lg flex items-center">
        <Icon icon="material-symbols:mail" className="mr-3" />
        service@openauto.ca
      </h3>
    </div>
  );
}

export default Contact;
