const Home = () => {
  return (
    <main>
      <Slider />
      <MenuRestaurant />
    </main>
  );
};

const Slider = () => {
  return (
    <section className="relative w-full h-64">
      <div className="w-full h-full z-10 bg-[url('src/assets/images/sliderBackground.png')] bg-no-repeat bg-cover bg-center">
        <div className="w-full flex justify-between pt-20">
          <img src="src/assets/icons/arrowRight.svg" alt="arrow right icon" />
          <h2 className="text-white font-estedad font-bold text-3xl">
            تجربه غذای سالم و گیاهی به سبک ترخینه
          </h2>
          <img src="src/assets/icons/arrowLeft.svg" alt="arrow left icon" />
        </div>
        <div className="w-full flex justify-center pt-5">
          <button
            type="button"
            className="w-48 h-10 bg-green-primary text-white flex justify-center items-center font-estedad rounded-md"
          >
            سفارش انلاین غذا
          </button>
        </div>
        <div className="w-full flex justify-center pt-12">
          <img src="src/assets/images/numberSlider.svg" alt="Slider counter" />
        </div>
      </div>
    </section>
  );
};

const MenuRestaurant = () => {
  return (
    <section className="w-full h-96 flex flex-col justify-center items-center">
      <h3 className="w-full text-center font-estedad font-bold text-xl text-title-color">
        منوی رستوران
      </h3>
      <div className="w-full flex justify-center items-center pt-36">
        <ul className="w-full flex justify-evenly">
          <li className="w-72 h-44 border border-solid border-green-primary rounded-md relative flex flex-col justify-center">
            <img
              src="src/assets/images/foodMenu1.png"
              alt="food image"
              width="210"
              height="210"
              className="absolute bottom-16 right-9"
            />
            <button
              type="button"
              className="w-40 h-12 flex justify-center items-center bg-green-primary text-white font-estedad absolute -bottom-5 right-16 rounded-md"
            >
              غذای اصلی
            </button>
          </li>
          <li className="w-72 h-44 border border-solid border-green-primary rounded-md relative flex flex-col justify-center">
            <img
              src="src/assets/images/foodMenu2.png"
              alt="food image"
              width="210"
              height="210"
              className="absolute bottom-16 right-9"
            />
            <button
              type="button"
              className="w-40 h-12 flex justify-center items-center bg-green-primary text-white font-estedad absolute -bottom-5 right-16 rounded-md"
            >
              پیش غذا
            </button>
          </li>
          <li className="w-72 h-44 border border-solid border-green-primary rounded-md relative flex flex-col justify-center">
            <img
              src="src/assets/images/foodMenu3.png"
              alt="food image"
              width="370"
              height="370"
              className="absolute bottom-16"
            />
            <button
              type="button"
              className="w-40 h-12 flex justify-center items-center bg-green-primary text-white font-estedad absolute -bottom-5 right-16 rounded-md"
            >
              دسر
            </button>
          </li>
          <li className="w-72 h-44 border border-solid border-green-primary rounded-md relative flex flex-col justify-center">
            <img
              src="src/assets/images/foodMenu4.png"
              alt="food image"
              width="240"
              height="240"
              className="absolute bottom-16 right-5"
            />
            <button
              type="button"
              className="w-40 h-12 flex justify-center items-center bg-green-primary text-white font-estedad absolute -bottom-5 right-16 rounded-md"
            >
              نوشیدنی
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Home;
