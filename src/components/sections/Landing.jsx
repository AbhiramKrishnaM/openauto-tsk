import Content from "@/components/base/Content";
import Form from "@/components/core/Form";
import Social from "@/components/core/SocialLinks";

import LifeAtCity from "@/assets/images/Life-at-city.svg";

function Landing() {
  const content = {
    title: "Vehicle Maintenance From The Comfort of Your Home",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur numquam sint at ab unde impedit fuga voluptatibus officiis similique et.",
  };

  return (
    <div className="flex items-center flex-col lg:flex-row ">
      <div className="w-full lg:w-6/12 flex flex-col gap-8 items-start">
        <Content content={content} />
        <Form />
      </div>
      <div className="w-6/12 flex flex-col items-end">
        <img
          src={LifeAtCity}
          alt="Picture portraying life at a big city"
          className=" w-full max-h-[700px]"
        />
        <div className="flex items-center justify-between w-full lg:w-[40%] my-10">
          <Social />
        </div>
      </div>
    </div>
  );
}

export default Landing;
