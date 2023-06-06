const Slider = ({ title, btnTitle, src }) => {
  return (
    <section className="relative w-full h-64">
      <div
        className={`w-full h-full flex flex-col justify-between z-10 bg-no-repeat bg-cover bg-center`}
        style={{ backgroundImage: `url(${src})` }}
      >
        <div className="w-full flex justify-between sm:pt-20 pt-16">
          <img src="src/assets/icons/arrowRight.svg" alt="arrow right icon" />
          <h2 className="text-white font-estedad font-bold sm:text-3xl text-xl">
            {title}
          </h2>
          <img src="src/assets/icons/arrowLeft.svg" alt="arrow left icon" />
        </div>
        <div className="w-full flex justify-center pt-5">
          <button
            type="button"
            className="sm:w-48 w-44 h-10 bg-green-primary text-white flex justify-center items-center font-estedad rounded-md"
          >
            {btnTitle}
          </button>
        </div>
        <div className="w-full flex justify-center">
          <img src="src/assets/images/numberSlider.svg" alt="Slider counter" />
        </div>
      </div>
    </section>
  );
};

export default Slider;
