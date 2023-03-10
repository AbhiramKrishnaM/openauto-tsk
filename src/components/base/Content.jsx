function Content({ content }) {
  return (
    <div>
      <h1 className="text-5xl text-center lg:text-start lg:text-6xl font-bold mb-5 text-light ">
        {content.title}
      </h1>
      <span className="text-grey text-center lg:text-start text-lg lg:text-xl">
        {content.subtitle}
      </span>
    </div>
  );
}

export default Content;
