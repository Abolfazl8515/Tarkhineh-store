const Home = () => {
  return (
    <main>
      <Slider />
    </main>
  );
};

const Slider = () => {
  return (
    <section className="relative w-full h-64">
      <div className="w-full h-full z-10 bg-[url('src/assets/images/sliderBackground.png')] bg-no-repeat bg-cover bg-center">
        <div className="w-full flex justify-between pt-20">
          <img src="src/assets/icons/arrowRight.svg" alt="arrow right icon" />
          <h2 className="text-white font-estedad font-bold text-3xl">تجربه غذای سالم و گیاهی به سبک ترخینه</h2>
          <img src="src/assets/icons/arrowLeft.svg" alt="arrow left icon" />
        </div>
        <div className="w-full flex justify-center pt-5">
          <button type="button" className="w-48 h-10 bg-green-primary text-white flex justify-center items-center font-estedad rounded-md">سفارش انلاین غذا</button>
        </div>
        <div className="w-full flex justify-center pt-12">
          <img src="src/assets/images/numberSlider.svg" alt="Slider counter" />
        </div>
      </div>
    </section>
  );
};

export default Home;
