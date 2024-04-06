"use client";
import {
  FiShoppingCart, FiPhoneCall, FiMessageCircle, FiMessageSquare, FiEye, FiXCircle, FiCopy, FiArrowDownRight, FiArrowRightCircle, FiChevronRight
} from "react-icons/fi";

import Image from "next/image";

export default function Content() {
  const contentData = {
    title: 'What’s new in Ubuntu Linux 18.10 ‘Cosmic Cuttlefish’',
    description: "Ubuntu 18.10 “Cosmic Cuttlefish” arrives with the Linux 4.18 kernel, the Gnome 3.30 desktop, and improved support for gaming-level graphics",
    coverImange: "/vercel.svg",
    content: "Canonical’s Ubuntu distribution for Linux has earned a reputation for being user-friendly, with editions aimed at desktop, server, cloud, and IoT users. This changelog tracks updates to Ubuntu across its release cycle, including its LTS (long term support) releases. "
  }

  return (
    <>
      <main className="flex min-h-screen">
        <div className=' container mx-auto'>
          <div className="bg-red-200 min-h-36 my-5">
          </div>
          <div className=' flex flex-row justify-between mb-3 px-5'>
            <p className=' font-light text-sm'>Gợi ý cho bạn</p>
            <div className=' flex flex-row text-primary'>
              <p className='text-xs'>xem thêm</p>
              <FiChevronRight></FiChevronRight>
            </div>
          </div>
          <div className=' grid xl:grid-cols-5 mb-10'>
            <div className=' col-span-2 px-5'>
              <Image src={"/vercel.svg"} width={500} height={300} alt='abc'></Image>

            </div>
            <div className=' col-span-2 px-5'>
              {Array.from({ length: 5 }, (_, i) => i + 1).map((e, i) => {
                return (
                  <div key={i} className=' flex flex-col space-y-2 mb-3'>
                    <p className=' font-bold'>{contentData.title}</p>
                    <p className=' text-sm'>{contentData.description}</p>
                  </div>
                )
              })}
            </div>
            <div className=' col-span-1 bg-red-200'>

            </div>
          </div>
          <div className=' flex flex-row justify-between mb-3 px-5'>
            <p className=' font-light text-sm'>Chuyên mục về NextJs</p>
            <div className=' flex flex-row text-primary'>
              <p className='text-xs'>xem thêm</p>
              <FiChevronRight></FiChevronRight>
            </div>
          </div>
          <div className=' grid xl:grid-cols-12 mb-10'>
            <div className=' col-span-3 px-5'>
              <Image src={"/vercel.svg"} width={500} height={300} alt='abc'></Image>
            </div>

            <div className=' col-span-5 px-5'>
              <div className=' grid grid-cols-2 gap-2'>
                {Array.from({ length: 10 }, (_, i) => i + 1).map((e, i) => {
                  return (
                    <div key={i} className=' flex flex-row space-x-2'>
                      <p className=' text-xs opacity-50 mt-1'>{i + 1}</p>
                      <div className=' flex flex-col space-y-2'>
                        <p className=' font-bold'>{contentData.title}</p>
                        {/* <p className=' text-sm'>{contentData.description}</p> */}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className=' col-span-4 bg-red-200'>

            </div>
          </div>

          <div className=' grid xl:grid-cols-3 gap-5 mb-10 px-5'>
            <div className=' col-span-1'>
              <div className=' flex flex-row justify-between mb-3'>
                <p className=' font-light text-sm'>Biệt thự</p>
                <div className=' flex flex-row text-primary'>
                  <p className='text-xs'>xem thêm</p>
                  <FiChevronRight></FiChevronRight>
                </div>
              </div>
              {Array.from({ length: 5 }, (_, i) => i + 1).map((e, i) => {
                return (
                  <div key={i} className=' flex flex-row space-x-2'>
                    <p className=' text-xs opacity-50 mt-1'>{i + 1}</p>
                    <div className=' flex flex-col space-y-2 mb-2'>

                      <p className=' font-bold'>{contentData.title}</p>
                      <p className=' text-sm'>{contentData.description}</p>
                    </div>
                  </div>

                )
              })}
            </div>
            <div className=' col-span-1'>
              <div className=' flex flex-row justify-between mb-3'>
                <p className=' font-light text-sm'>Nhà phố</p>
                <div className=' flex flex-row text-primary'>
                  <p className='text-xs'>xem thêm</p>
                  <FiChevronRight></FiChevronRight>
                </div>
              </div>
              {Array.from({ length: 5 }, (_, i) => i + 1).map((e, i) => {
                return (
                  <div key={i} className=' flex flex-row space-x-2'>
                    <p className=' text-xs opacity-50 mt-1'>{i + 1}</p>
                    <div className=' flex flex-col space-y-2 mb-2'>

                      <p className=' font-bold'>{contentData.title}</p>
                      <p className=' text-sm'>{contentData.description}</p>
                    </div>
                  </div>

                )
              })}
            </div>
            <div className=' col-span-1'>
              <div className=' flex flex-row justify-between mb-3'>
                <p className=' font-light text-sm'>Khu nghỉ dưỡng</p>
                <div className=' flex flex-row text-primary'>
                  <p className='text-xs'>xem thêm</p>
                  <FiChevronRight></FiChevronRight>
                </div>
              </div>
              {Array.from({ length: 5 }, (_, i) => i + 1).map((e, i) => {
                return (
                  <div key={i} className=' flex flex-row space-x-2'>
                    <p className=' text-xs opacity-50 mt-1'>{i + 1}</p>
                    <div className=' flex flex-col space-y-2 mb-2'>

                      <p className=' font-bold'>{contentData.title}</p>
                      <p className=' text-sm'>{contentData.description}</p>
                    </div>
                  </div>

                )
              })}
            </div>
          </div>
         
          <div className="bg-red-200 min-h-36 my-5">
          </div>
          <div className=' flex flex-row justify-between mb-3'>
            <p className=' font-light text-sm'>Mới nhất</p>
            <div className=' flex flex-row text-primary'>
              <p className='text-xs'>xem thêm</p>
              <FiChevronRight></FiChevronRight>
            </div>
          </div>
          <div className=' grid xl:grid-cols-4 gap-5 mb-10'>
            {Array.from({ length: 12 }, (_, i) => i + 1).map((e, i) => {
              return (
                <div key={i} className=' flex flex-col space-y-5 mb-2'>
                  <Image src={contentData.coverImange} width={500} height={300} alt='abc'></Image>
                  <p className=' font-bold'>{contentData.title}</p>
                  <p className=' text-sm'>{contentData.description}</p>
                </div>
              )
            })}
          </div>
          <div className="bg-red-200 min-h-36 my-5">
          </div>
        </div>
        {/* <article className="prose lg:prose-2xl">

        </article> */}
      </main>
    </>

  )
}