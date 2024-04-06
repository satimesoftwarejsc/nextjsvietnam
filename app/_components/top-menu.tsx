"use client";
import {
  FiLogIn, FiInfo
} from "react-icons/fi";

export default function Topmenu() {
  const NextJsCategory = [
    'Định tuyến',
    'Tìm nạp dữ liệu',
    'Kết xuất',
    'Bộ nhớ đệm',
    'Kiểu dáng',
    'Tối ưu',
    'Cấu hình',
    'Kiểm tra',
    'Xác thực',
    'Nâng cấp',
  ]
  return (
    <>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700">
        <nav className="relative container flex flex-wrap basis-full items-center w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
          <div className="flex flex-col items-start">
            <a className="flex-none text-xl font-semibold dark:text-white uppercase" href="/" aria-label="Brand"><strong className=" bg-black text-white p-0.5 rounded-md">NextJs</strong>VietNam</a>
            <p>Cộng đồng Amater Coder</p>
          </div>

          <div className="flex items-center ms-auto sm:ms-0 sm:order-3">
            <div className="sm:hidden">
              <button type="button" className="p-2 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-overlay="#navbar-offcanvas-example" aria-controls="navbar-offcanvas-example" aria-label="Toggle navigation">
                Menu
                <svg className="hs-overlay-open:hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" /></svg>
              </button>
            </div>

            <div className="ps-3 sm:ps-6 sm:ms-6 sm:border-s sm:border-gray-300 dark:border-gray-700">
              <button type="button" className="size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700" data-hs-overlay="#navbar-secondary-content" aria-controls="navbar-secondary-content" aria-label="Toggle navigation">
              <FiInfo />
              </button>

            </div>
            <div className="ps-3 sm:ps-6 sm:ms-6 sm:border-s sm:border-gray-300 dark:border-gray-700">
              <button type="button" className="size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700">
                <FiLogIn />
              </button>

            </div>
          </div>

          <div id="navbar-offcanvas-example" className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-[60] bg-white border-e basis-full grow sm:order-2 sm:static sm:block sm:h-auto sm:max-w-none sm:w-auto sm:border-r-transparent sm:transition-none sm:translate-x-0 sm:z-40 sm:basis-auto dark:bg-gray-800 dark:border-r-gray-700 sm:dark:border-r-transparent hidden">
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
              <a className="font-medium text-blue-600 px-6 sm:py-6 sm:px-0 dark:text-blue-500" href="#" aria-current="page">Home</a>

              <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
                <button type="button" className="flex items-center w-full text-gray-500 hover:text-gray-400 font-medium px-6 sm:px-0 dark:text-gray-400 dark:hover:text-gray-500">
                  NextJs
                  <svg className="flex-shrink-0 ms-2 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                </button>

                <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg py-2 px-3 sm:px-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5">
                  {NextJsCategory.map((e, i) => {
                    return (
                      <a key={i} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                        {e}
                      </a>
                    )
                  })}


                </div>
              </div>
              <a className="font-medium" href="#" aria-current="page">Component</a>
              <a className="font-medium" href="#" aria-current="page">Khác</a>
            </div>
          </div>
        </nav>
      </header>
      <div id="navbar-secondary-content" className="hs-overlay hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-[80] bg-white border-e dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
          <h3 className="font-bold text-gray-800 dark:text-white">
            Giới thiệu về chúng tôi
          </h3>
          <button type="button" className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white text-sm dark:text-gray-500 dark:hover:text-gray-400 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-overlay="#navbar-secondary-content">
            <span className="sr-only">Close offcanvas</span>
            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
          </button>
        </div>
        <div className="p-4">
          <p className=" text-4xl py-10"><strong className=" font-black">NextJs</strong>VietNam</p>
          <p className="text-gray-800 dark:text-gray-400">
            NextJsVietNam là nơi đăng tải các thông tin chuyên sâu về NextJS do các lập trình viên nghiệp dư phát triển.
          </p>
          <p className="my-5">
            NextJsVietNam với mục tiêu học tập là chính, từ đó có thể kiếm tiền.
          </p>
          <p className="my-5 text-sm">Nếu bạn có thời gian hãy <a href="http://" className=" text-red-600 mr-2 hover:font-black">tham gia cùng chúng tôi</a>tham gia cùng chúng tôi !</p>
        </div>
      </div>
    </>

  )
}