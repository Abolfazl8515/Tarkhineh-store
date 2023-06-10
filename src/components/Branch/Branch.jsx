import Slider from "../Slider/Slider";
import background from "../../assets/images/sliderBackground.png";
import { register } from "swiper/element/bundle";
import { useRef } from "react";
register();

const Branch = () => {
  return (
    <main>
      <Slider
        title="سرسبزی اکباتان دلیل حس خوب شماست"
        btnTitle="سفارش انلاین غذا"
        src={background}
      />
      <Products />
      <AboutBranch />
      <UsersComments />
    </main>
  );
};

const Products = () => {
  const swiperElRef = useRef(null);
  const swiperElRef2 = useRef(null);
  const swiperElRef3 = useRef(null);
  const productsInfo = [
    { id: 1, title: "دلمه برگ کلم", price: "209,000" },
    { id: 2, title: "دلمه برگ کلم", price: "209,000" },
    { id: 3, title: "دلمه برگ کلم", price: "209,000" },
    { id: 4, title: "دلمه برگ کلم", price: "209,000" },
    { id: 5, title: "دلمه برگ کلم", price: "209,000" },
    { id: 6, title: "دلمه برگ کلم", price: "209,000" },
    { id: 7, title: "دلمه برگ کلم", price: "209,000" },
    { id: 8, title: "دلمه برگ کلم", price: "209,000" },
    { id: 9, title: "دلمه برگ کلم", price: "209,000" },
    { id: 10, title: "دلمه برگ کلم", price: "209,000" },
    { id: 11, title: "دلمه برگ کلم", price: "209,000" },
    { id: 12, title: "دلمه برگ کلم", price: "209,000" },
    { id: 13, title: "دلمه برگ کلم", price: "209,000" },
    { id: 14, title: "دلمه برگ کلم", price: "209,000" },
    { id: 15, title: "دلمه برگ کلم", price: "209,000" },
    { id: 16, title: "دلمه برگ کلم", price: "209,000" },
    { id: 17, title: "دلمه برگ کلم", price: "209,000" },
    { id: 18, title: "دلمه برگ کلم", price: "209,000" },
  ];
  setInterval(() => {
    swiperElRef.current.swiper.slideNext();
  }, 3000);
  setInterval(() => {
    swiperElRef2.current.swiper.slidePrev();
  }, 2000);
  setInterval(() => {
    swiperElRef3.current.swiper.slideNext();
  }, 4000);
  return (
    <section className="w-full h-auto flex justify-center items-center flex-col">
      <div className="w-full h-auto p-10 flex flex-col">
        <h2 className="font-estedad font-bold text-xl text-title-color text-right mr-20">
          پیشنهاد ویژه
        </h2>
        <div className="w-full flex items-center mt-5 overflow-x-scroll no-scrollbar hover:cursor-grab active:cursor-grabbing pr-20">
          <swiper-container
            ref={swiperElRef}
            slides-per-view="4"
            speed="500"
            loop="true"
          >
            {productsInfo.map((product) => {
              return (
                <swiper-slide key={product.id}>
                  <div className="w-72 min-w-max h-auto flex flex-col mr-3">
                    <div>
                      <img
                        src="src/assets/images/branchImage1.png"
                        alt="product image"
                      />
                    </div>
                    <h3 className="font-estedad text-title-color text-xl my-2">
                      {product.title}
                    </h3>
                    <p className="font-estedad text-neutral-400 text-right text-xs my-2">
                      افزودن به علاقه مندی ها
                    </p>
                    <div className="w-full flex justify-between my-2 px-4">
                      <div className="flex">
                        <p className="ml-2 flex">
                          <img
                            src="src/assets/icons/star.svg"
                            className="ml-2"
                            alt="score product icon"
                          />
                          <span className="font-estedad text-title-color text-sm">
                            5
                          </span>
                        </p>
                        <p className="font-estedad text-neutral-400 text-sm">
                          52 امتیاز
                        </p>
                      </div>
                      <div>
                        <p className="font-estedad text-title-color text-sm">
                          {product.price} تومان
                        </p>
                      </div>
                    </div>
                    <div className="w-full flex justify-center">
                      <button
                        type="button"
                        className="py-2 px-16 text-center bg-green-primary text-white font-estedad rounded-md"
                      >
                        افزودن به سبد خرید
                      </button>
                    </div>
                  </div>
                </swiper-slide>
              );
            })}
          </swiper-container>
        </div>
      </div>
      <div className="w-full h-auto p-5 flex flex-col bg-green-primary rounded-md">
        <h2 className="font-estedad font-bold text-xl text-white text-right mr-20">
          غذاهای محبوب
        </h2>
        <div className="w-full h-auto flex items-center mt-5 overflow-x-scroll no-scrollbar hover:cursor-grab active:cursor-grabbing pr-20">
          <swiper-container
            ref={swiperElRef2}
            slides-per-view="4"
            speed="500"
            loop="true"
          >
            {productsInfo.map((product) => {
              return (
                <swiper-slide key={product.id}>
                  <div className="w-72 h-96 min-w-max bg-white flex flex-col mr-6 rounded-md">
                    <div className="rounded-md">
                      <img
                        src="src/assets/images/branchImage1.png"
                        alt="product image"
                        className="rounded-md"
                      />
                    </div>
                    <h3 className="font-estedad text-title-color text-xl my-2">
                      {product.title}
                    </h3>
                    <p className="font-estedad text-neutral-400 text-right text-xs my-2">
                      افزودن به علاقه مندی ها
                    </p>
                    <div className="w-full flex justify-between my-2 px-4">
                      <div className="flex">
                        <p className="ml-2 flex">
                          <img
                            src="src/assets/icons/star.svg"
                            className="ml-2"
                            alt="score product icon"
                          />
                          <span className="font-estedad text-title-color text-sm">
                            5
                          </span>
                        </p>
                        <p className="font-estedad text-neutral-400 text-sm">
                          52 امتیاز
                        </p>
                      </div>
                      <div>
                        <p className="font-estedad text-title-color text-sm">
                          {product.price} تومان
                        </p>
                      </div>
                    </div>
                    <div className="w-full flex justify-center">
                      <button
                        type="button"
                        className="py-2 px-16 text-center bg-green-primary text-white font-estedad rounded-md"
                      >
                        افزودن به سبد خرید
                      </button>
                    </div>
                  </div>
                </swiper-slide>
              );
            })}
          </swiper-container>
        </div>
      </div>
      <div className="w-full h-auto p-5 flex flex-col rounded-md">
        <h2 className="font-estedad font-bold text-xl text-title-color text-right mr-20">
          غذاهای غیر ایرانی
        </h2>
        <div className="w-full h-auto flex items-center mt-5 overflow-x-scroll no-scrollbar hover:cursor-grab active:cursor-grabbing pr-20">
          <swiper-container
            ref={swiperElRef3}
            slides-per-view="4"
            speed="500"
            loop="true"
          >
            {productsInfo.map((product) => {
              return (
                <swiper-slide key={product.id}>
                  <div className="w-72 h-96 min-w-max bg-white flex flex-col mr-6 rounded-md">
                    <div className="rounded-md">
                      <img
                        src="src/assets/images/branchImage1.png"
                        alt="product image"
                        className="rounded-md"
                      />
                    </div>
                    <h3 className="font-estedad text-title-color text-xl my-2">
                      {product.title}
                    </h3>
                    <p className="font-estedad text-neutral-400 text-right text-xs my-2">
                      افزودن به علاقه مندی ها
                    </p>
                    <div className="w-full flex justify-between my-2 px-4">
                      <div className="flex">
                        <p className="ml-2 flex">
                          <img
                            src="src/assets/icons/star.svg"
                            className="ml-2"
                            alt="score product icon"
                          />
                          <span className="font-estedad text-title-color text-sm">
                            5
                          </span>
                        </p>
                        <p className="font-estedad text-neutral-400 text-sm">
                          52 امتیاز
                        </p>
                      </div>
                      <div>
                        <p className="font-estedad text-title-color text-sm">
                          {product.price} تومان
                        </p>
                      </div>
                    </div>
                    <div className="w-full flex justify-center">
                      <button
                        type="button"
                        className="py-2 px-16 text-center bg-green-primary text-white font-estedad rounded-md"
                      >
                        افزودن به سبد خرید
                      </button>
                    </div>
                  </div>
                </swiper-slide>
              );
            })}
          </swiper-container>
        </div>
        <div className="w-full mt-10 flex justify-center">
          <button
            type="button"
            className="w-44 h-10 flex justify-center items-center border border-solid border-green-primary text-green-primary text-sm font-estedad rounded-sm"
          >
            <img
              src="src/assets/icons/note.svg"
              alt="link menu icon"
              className="ml-2"
            />
            مشاهده منوی کامل
          </button>
        </div>
      </div>
    </section>
  );
};

const AboutBranch = () => {
  return (
    <section className="w-full h-full flex flex-col mb-24">
      <h2 className="font-estedad font-bold text-title-color text-2xl">
        شعبه اکباتان
      </h2>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="h-80 bg-cover bg-center bg-no-repeat w-full flex justify-between relative mt-5"
      >
        <img
          src="src/assets/icons/arrowRightBranchSlider.svg"
          alt="next slide icon"
        />
        <div className="w-auto h-auto py-5 px-14 flex justify-around items-center bg-white absolute right-96  -bottom-20 border-2 border-solid border-green-primary rounded-md">
          <div className="w-1/4 h-20 flex justify-between items-center flex-col">
            <img src="src/assets/icons/phone.svg" alt="phone icon" />
            <p className="font-estedad text-title-color text-sm">
              <span className="block">021-64393972</span> 021-64393972
            </p>
          </div>
          <div className="w-1/2 h-20 flex justify-between items-center flex-col">
            <img src="src/assets/icons/location.svg" alt="location icon" />
            <p className="font-estedad text-title-color text-sm">
              شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم
            </p>
          </div>
          <div className="w-1/4 h-20 flex justify-between items-center flex-col">
            <img src="src/assets/icons/clock.svg" alt="clock icon" />
            <p className="font-estedad text-title-color text-sm">
              همه‌روزه از ساعت ۱۲ الی ۲۳
            </p>
          </div>
        </div>
        <img
          src="src/assets/icons/arrowLeftBranchSlider.svg"
          alt="previous slide icon"
        />
      </div>
    </section>
  );
};

const UsersComments = () => {
  return (
    <section className="w-full h-auto pt-10 flex flex-col justify-between items-center">
      <h3 className="font-estedad font-bold text-2xl">نظرات کاربران</h3>
      <div className="w-1/3 h-40 flex justify-between">
        <div className="w-1/4 h-full flex flex-col justify-between">
          <img src="src/assets/images/userCommentImage.png" alt="User Image" />
          <div className="w-full flex flex-col">
            <span className="font-estedad text-neutral-400 text-xs">
              ابوالفضل بوربوری
            </span>
            <span className="font-estedad text-neutral-400 text-xs">
              25 اسفند 1401
            </span>
          </div>
        </div>
        <div className="w-3/4 flex flex-col justify-center mr-5">
          <p className="font-estedad text-title-color text-right text-sm">
            از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی
            عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا
            تشکر میکنم.
          </p>
          <div className="w-full flex justify-end">
            <p className="flex">
              4 <img src="src/assets/icons/star.svg" alt="star icon" />
            </p>
          </div>
        </div>
      </div>
      <div>
        <img
          src="src/assets/images/counterComments.png"
          alt="counter comments slider"
        />
      </div>
    </section>
  );
};

export default Branch;
