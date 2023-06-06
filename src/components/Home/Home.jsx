import Slider from "../Slider/Slider";
import background from "../../assets/images/sliderBackground.png";

const Home = () => {
  return (
    <main>
      <Slider
        title=" تجربه غذای سالم و گیاهی به سبک ترخینه"
        btnTitle="سفارش انلاین غذا"
        src={background}
      />
      <div className="w-full my-10 flex lg:hidden justify-center items-center">
        <input
          type="text"
          placeholder="جستجو ..."
          className="w-4/5 h-10 p-5 font-estedad border border-solid border-gray-400 rounded-md"
        />
      </div>
      <MenuRestaurant />
      <AboutUs />
      <TarkhinehBranches />
    </main>
  );
};

const MenuRestaurant = () => {
  const liInfo = [
    {
      src: "src/assets/images/foodMenu1.png",
      btnTitle: "غذای اصلی",
    },
    {
      src: "src/assets/images/foodMenu2.png",
      btnTitle: "غذای اصلی",
    },
    {
      src: "src/assets/images/foodMenu3.png",
      btnTitle: "غذای اصلی",
    },
    {
      src: "src/assets/images/foodMenu4.png",
      btnTitle: "غذای اصلی",
    },
  ];
  return (
    <section className="w-full h-1/5 flex flex-col justify-center items-center">
      <h3 className="w-full text-center font-estedad font-bold text-xl text-title-color">
        منوی رستوران
      </h3>
      <div className="w-full flex justify-center items-center ">
        <ul className="w-full flex justify-evenly flex-wrap">
          {liInfo.map((li) => {
            return (
              <li
                className="lg:w-72 lg:h-44 w-52 h-32 mt-32 border border-solid border-green-primary rounded-md relative flex flex-col justify-center"
                key={li.src}
              >
                <img
                  src={li.src}
                  alt="food image"
                  className="lg:w-52 lg:h-52 w-40 h-40 absolute bottom-16 lg:right-9 right-6"
                />
                <button
                  type="button"
                  className="lg:w-40 lg:h-12 w-24 h-8 flex justify-center items-center bg-green-primary text-white font-estedad absolute -bottom-5 lg:right-16 right-14 rounded-md"
                >
                  {li.btnTitle}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

const AboutUs = () => {
  return (
    <section className="w-full h-auto py-4 mt-20 flex flex-wrap justify-around items-center bg-[url('src/assets/images/aboutBackground.png')] bg-no-repeat bg-cover">
      <div className="w-80 h-4/5 flex flex-col justify-center">
        <h3 className="w-full flex justify-center text-white font-estedad font-bold text-xl text-right">
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
      <div className="w-80 h-4/5 flex flex-wrap justify-between items-center sm:mt-0 mt-20">
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

const TarkhinehBranches = () => {
  const branchInfo = [
    {
      src: "src/assets/images/branchImage1.png",
      title: "شعبه اکباتان",
      address: "چالوس خیابان 17 شهریور بعد کوچه کوروش جنب داروخانه دکتر میلانی",
    },
    {
      src: "src/assets/images/branchImage2.avif",
      title: "شعبه اکباتان",
      address: "چالوس خیابان 17 شهریور بعد کوچه کوروش جنب داروخانه دکتر میلانی",
    },
    {
      src: "src/assets/images/branchImage3.png",
      title: "شعبه اکباتان",
      address: "چالوس خیابان 17 شهریور بعد کوچه کوروش جنب داروخانه دکتر میلانی",
    },
    {
      src: "src/assets/images/branchImage4.png",
      title: "شعبه اکباتان",
      address: "چالوس خیابان 17 شهریور بعد کوچه کوروش جنب داروخانه دکتر میلانی",
    },
  ];
  return (
    <section className="w-full h-auto flex flex-col items-center">
      <h2 className="my-3 font-estedad font-bold text-2xl text-title-color">
        ترخینه گردی
      </h2>
      <div className="w-full flex lg:flex-row flex-col lg:justify-evenly lg:items-start items-center mt-5">
        {branchInfo.map((branch) => {
          return (
            <div
              className="lg:w-72 w-full h-1/3 flex flex-col sm:flex-row items-center md:justify-evenly lg:flex-col relative group mt-10"
              key={branch.src}
            >
              <div className="absolute top-0 w-72 h-40 rounded-t-md cursor-pointer lg:group-hover:flex group-hover:opacity-100 animate-hover transition-all opacity-0 hidden justify-center items-center bg-background-black">
                <div className="absolute">
                  <img
                    src="src/assets/icons/hoverImageIcon.svg"
                    alt="hover image icon"
                  />
                  <img
                    src="src/assets/icons/hoverImageIcon2.svg"
                    alt="hover image icon"
                    className="absolute top-4 left-3.5"
                  />
                </div>
              </div>
              <div>
                <img
                  src={branch.src}
                  className="lg:group-hover:h-40 md:w-80 sm:w-72 w-60 transition-all h-60"
                  alt="branch image"
                />
              </div>
              <div className="lg:w-full w-1/2 h-full my-auto flex justify-center items-center flex-col">
                <h3 className="font-estedad font-bold lg:text-lg text-2xl text-title-color">
                  {branch.title}
                </h3>
                <p className="lg:text-sm md:text-xl text-base text-title-color font-estedad">
                  {branch.address}
                </p>
              </div>
              <div className="lg:w-full flex justify-center">
                <button
                  type="button"
                  className="w-32 h-8 mt-3 lg:group-hover:flex hidden justify-center items-center bg-transparent border border-solid border-green-primary rounded-md font-estedad text-green-primary text-sm"
                >
                  <span className="ml-2">صفحه شعبه</span>
                  <img
                    src="src/assets/icons/arrowLeftGreen.svg"
                    alt="more info icon"
                  />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Home;
