const Footer = () => {
  return (
    <>
      <div className="relative w-full h-80 top-16">
        <div className="z-10 w-full h-full absolute bottom-0 bg-background-black"></div>
        <div className="flex w-full justify-around h-full bg-[url('src/assets/images/footer-background.avif')] bg-no-repeat bg-cover bg-center">
          <div className="z-20 flex justify-between items-center w-full">
            <div className="w-1/2 flex justify-around">
              <div className="w-44">
                <h2 className="text-left text-lg font-estedad font-bold text-white">
                  دسترسی اسان
                </h2>
                <ul className="mt-4">
                  <li className="text-center mt-5 text-xs font-estedad text-white">
                    پرسش های متداول
                  </li>
                  <li className="text-center mt-5 text-xs font-estedad text-white">
                    قوانین ترخینه
                  </li>
                  <li className="text-center mt-5 text-xs font-estedad text-white">
                    حریم خصوصی
                  </li>
                </ul>
                <div className="flex text-right mt-4 mr-2">
                  <img src="src/assets/icons/twitter.svg" alt="twitter logo" />
                  <img
                    className="mx-3"
                    src="src/assets/icons/instagram.svg"
                    alt="instagram logo"
                  />
                  <img
                    src="src/assets/icons/telegram.svg"
                    alt="telegram logo"
                  />
                </div>
              </div>
              <div className="w-44">
                <h2 className="text-left text-lg font-estedad font-bold text-white">
                  شعبه های ترخینه
                </h2>
                <ul className="mt-4">
                  <li className="text-right mr-3 text-xs mt-5 font-estedad text-white">
                    شعبه اکباتان
                  </li>
                  <li className="text-right mr-3 text-xs mt-5 font-estedad text-white">
                    شعبه چالوس
                  </li>
                  <li className="text-right mr-3 text-xs mt-5 font-estedad text-white">
                    شعبه اقدسیه
                  </li>
                  <li className="text-right mr-3 text-xs mt-5 font-estedad text-white">
                    شعبه ونک
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-2/5 mx-auto">
              <h2 className="text-left font-estedad font-bold text-white">
                پیام به ترخینه
              </h2>
              <div className="flex justify-between mt-3">
                <div>
                  <div className="relative w-64 h-10">
                    <div className="absolute w-60 -z-50 right-2 h-full flex justify-between">
                      <img
                        src="src/assets/icons/lock.svg"
                        alt="lock icon"
                        width="19.95"
                        height="16.2"
                      />
                      <img
                        src="src/assets/icons/show.svg"
                        width="19.95"
                        height="16.2"
                        alt="show icon"
                      />
                    </div>
                    <input
                      type="text"
                      className="w-64 h-10 text-sm bg-transparent border border-solid border-white px-8 font-estedad rounded-md text-white focus:outline-none"
                      placeholder="نام و نام خوانوادگی"
                    />
                  </div>
                  <div className="relative w-64 h-10 my-3">
                    <div className="absolute w-60 -z-50 right-2 h-full flex justify-between">
                      <img
                        src="src/assets/icons/lock.svg"
                        alt="lock icon"
                        width="19.95"
                        height="16.2"
                      />
                      <img
                        src="src/assets/icons/show.svg"
                        width="19.95"
                        height="16.2"
                        alt="show icon"
                      />
                    </div>
                    <input
                      type="text"
                      className="w-64 h-10 text-sm bg-transparent border border-solid border-white px-8 font-estedad rounded-md text-white focus:outline-none"
                      placeholder="شماره تماس"
                    />
                  </div>
                  <div className="relative w-64 h-10">
                    <div className="absolute w-60 -z-50 right-2 h-full flex justify-between">
                      <img
                        src="src/assets/icons/lock.svg"
                        alt="lock icon"
                        width="19.95"
                        height="16.2"
                      />
                      <img
                        src="src/assets/icons/show.svg"
                        width="19.95"
                        height="16.2"
                        alt="show icon"
                      />
                    </div>
                    <input
                      type="text"
                      className="w-64 h-10 text-sm bg-transparent border border-solid border-white px-8 font-estedad rounded-md text-white focus:outline-none"
                      placeholder="ادرس ایمیل (اختیاری)"
                    />
                  </div>
                </div>
                <div className="relative w-72 h-36">
                  <div className="absolute w-64 right-4 -z-50 h-10 flex justify-between">
                    <img
                      src="src/assets/icons/lock.svg"
                      alt="lock icon"
                      width="19.95"
                      height="16.2"
                    />
                    <img
                      src="src/assets/icons/show.svg"
                      width="19.95"
                      height="16.2"
                      alt="show icon"
                    />
                  </div>
                  <textarea
                    className="w-72 h-36 text-sm bg-transparent border border-solid border-white px-10 pt-2 font-estedad rounded-md text-white focus:outline-none"
                    placeholder="پیام شما"
                  ></textarea>
                  <div className="w-full flex justify-end mt-2">
                    <button
                      type="button"
                      className="w-44 h-10 flex justify-around items-center border border-solid border-white rounded-md text-white font-estedad"
                    >
                      <img
                        src="src/assets/icons/cartfooter.svg"
                        alt="cart icon"
                      />
                      <span>ارسال پیام</span>
                      <img
                        src="src/assets/icons/cartfooter.svg"
                        alt="cart icon"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
