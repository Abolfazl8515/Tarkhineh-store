const Home = () => {
  return (
    <main>
      <Slider />
      <MenuRestaurant />
      <AboutUs />
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

const AboutUs = () => {
  return (
    <section className="w-full h-96 mt-20 flex flex-wrap justify-around items-center bg-[url('src/assets/images/aboutBackground.png')] bg-no-repeat bg-cover">
      <div className="w-1/3 h-4/5 flex flex-col justify-center">
        <h3 className="text-white font-estedad font-bold text-xl text-right">
          رستوران های زنجیره ایی ترخینه
        </h3>
        <p className="py-5 font-estedad text-white text-right">
          مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست
          که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
          رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
          پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان
          شما عزیزان ارائه دهیم.
        </p>
        <div className="w-full flex justify-end">
          <button
            type="button"
            className="w-44 h-10 text-white flex justify-center items-center bg-transparent border border-solid border-white rounded-md"
          >
            <span className="font-estedad ml-2">اطلاعات بیشتر</span>
            <img src="src/assets/icons/arrowLeft.svg" alt="more info icon" />
          </button>
        </div>
      </div>
      <div className="w-1/5 h-4/5 flex flex-wrap justify-between items-center">
        <div className="w-1/2 flex items-center flex-col">
          <img
            src="src/assets/icons/userAboutIcon.svg"
            width="48"
            height="48"
            alt="user icon"
          />
          <p className="font-estedad text-white text-sm mt-3">
            پرسنل مجرب و حرفه ایی
          </p>
        </div>
        <div className="flex items-center flex-col">
          <img
            src="src/assets/icons/qualityIcon.svg"
            width="48"
            height="48"
            alt="quality icon"
          />
          <p className="font-estedad text-white text-sm mt-3">
            کیفیت بالای غذاها
          </p>
        </div>
        <div className="flex items-center flex-col">
          <img
            src="src/assets/icons/wifiIcon.svg"
            width="48"
            height="48"
            alt="wifi icon"
          />
          <p className="font-estedad text-white text-sm mt-3">
            محیطی دلنشین و آرام
          </p>
        </div>
        <div className="flex items-center flex-col text-sm mt-3">
          <img
            src="src/assets/icons/subjectIcon.svg"
            width="48"
            height="48"
            alt="subject icon"
          />
          <p className="font-estedad text-white">منوی متنوع</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
