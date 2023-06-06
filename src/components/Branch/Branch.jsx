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
    // { id: 19, title: "دلمه برگ کلم", price: "209,000" },
    // { id: 20, title: "دلمه برگ کلم", price: "209,000" },
    // { id: 21, title: "دلمه برگ کلم", price: "209,000" },
    // { id: 22, title: "دلمه برگ کلم", price: "209,000" },
    // { id: 23, title: "دلمه برگ کلم", price: "209,000" },
    // { id: 24, title: "دلمه برگ کلم", price: "209,000" },
    // { id: 25, title: "دلمه برگ کلم", price: "209,000" },
    // { id: 26, title: "دلمه برگ کلم", price: "209,000" },
  ];
  setInterval(() => {
    swiperElRef.current.swiper.slideNext();
  }, 3000);
  setInterval(() => {
    swiperElRef2.current.swiper.slidePrev();
  }, 2000);
  return (
    <section className="w-full h-auto p-10 flex justify-center items-center flex-col">
      <div className="w-full h-auto p-5 flex flex-col">
        <h2 className="font-estedad font-bold text-xl text-title-color text-right">
          پیشنهاد ویژه
        </h2>
        <div className="w-full flex items-center mt-5 overflow-x-scroll no-scrollbar hover:cursor-grab active:cursor-grabbing">
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
        <h2 className="font-estedad font-bold text-xl text-white text-right">
          پیشنهاد ویژه
        </h2>
        <div className="w-full h-auto flex items-center mt-5 overflow-x-scroll no-scrollbar hover:cursor-grab active:cursor-grabbing">
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
    </section>
  );
};

export default Branch;
