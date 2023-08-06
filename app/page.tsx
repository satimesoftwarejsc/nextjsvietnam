import Image from 'next/image'
import Link from 'next/link'
import BomMember from './_components/bomMember'
import DevMember from './_components/devMember'
import UserMember from './_components/userMember'
import Footer from './_components/footer'


import * as Icon from 'react-feather';
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'NextJs Viet Nam',
  description: 'Learn to earn | Official communication NextJs Viet Nam',
}

/* Check token Nextjs */
async function getBom() {
  const res = await fetch('https://api.ftmscan.com/api?module=account&action=tokenbalance&contractaddress=0xB8058e311B451406Bff63A11582b740A806b09e4&address=0xc502f799d90b694b815800b61b1d790f91cb2190&tag=latest&apikey=HW22AY1CVQUQWNH5F527R8TIPDGJ77ZYEK')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

async function getAidrop1() {
  const res = await fetch('https://api.ftmscan.com/api?module=account&action=tokenbalance&contractaddress=0xB8058e311B451406Bff63A11582b740A806b09e4&address=0xc78fd70a999a938ed939809fedd40e744d8c2bd9&tag=latest&apikey=HW22AY1CVQUQWNH5F527R8TIPDGJ77ZYEK')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

async function getPrice() {
  const res = await fetch('https://api.dexscreener.com/latest/dex/pairs/fantom/0xd45900dbfe70cc9347ae6924796b2b988dc1d143')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  /*  */
  const teamNumber = [1, 2, 3, 4, 5, 6, 7, 8]

  /* Hội đồng */
  const bom = await getBom()
  //console.log(bom);
  const remainingBalanceToken = bom.result.replace('000000000000000000', '')
  const hasSendBom = 1000000 - parseInt(remainingBalanceToken)
  //console.log('remainingBalanceToken: ',remainingBalanceToken);
  const phantramBom = hasSendBom / 1000000 * 100

  /* Team */
  const airdrop1 = await getAidrop1()
  //console.log(bom);
  const remainingBalanceTokenAirdrop1 = airdrop1.result.replace('000000000000000000', '')
  const hasSendAirdrop1 = 1000000 - parseInt(remainingBalanceTokenAirdrop1)
  //console.log('remainingBalanceTokenAirdrop1: ',remainingBalanceTokenAirdrop1);
  const phantramAirdrop1 = hasSendAirdrop1 / 1000000 * 100
  /* Price */
  const price = await getPrice()
  //console.log(price.pairs[0].priceUsd);
  return (
    <>
      <div className="hero min-h-screen" style={{ backgroundImage: 'url(wallpaper.jpg)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content overflow-y-auto">
          <div className="max-w-md justify-items-center space-y-10">
            <div>
              <h1 className="mt-5 text-3xl font-bold">NEXTJS VIET NAM</h1>
              <p className="mb-5 animate-pulse">Trang đang xây dựng, nếu bạn có nhã hứng hãy tham gia cùng chúng tôi !</p>
            </div>
            <div className='grid grid-cols-2 gap-5'>
              <Link href={'https://github.com/ChungLeba/nextjsvietnam'} className='flex flex-row justify-center border border-slate-500 rounded p-2'>
                <Image className=' rounded-full w-6 h-6 mr-2' src='/git.png' width={50} height={50} alt='Open Source'></Image>
                <p className='my-auto'>FE Git Clone</p>
              </Link>
              <Link href={'https://github.com/khoaha1904/Next-be'} className='flex flex-row justify-center border border-slate-500 rounded p-2'>
                <Image className=' rounded-full w-6 h-6 mr-2' src='/git.png' width={50} height={50} alt='Open Source'></Image>
                <p className='my-auto'>BE Git Clone</p>
              </Link>
              
              <Link href={'https://zalo.me/g/lmptrj280'} className='flex flex-row justify-center border border-slate-500 rounded p-2'>
                <Image className=' rounded-full w-6 h-6 mr-2' src='/zalo.png' width={50} height={50} alt='Open Source'></Image>
                <p className='my-auto'>Zalo Group</p>
              </Link>
              <Link href={'https://discord.gg/fhruv6GR'} className='flex flex-row justify-center border border-slate-500 rounded p-2'>
                <Image className=' rounded-full w-6 h-6 mr-2' src='/discord.png' width={50} height={50} alt='Open Source'></Image>
                <p className='my-auto'>Discord Group</p>
              </Link>
              <Link href={'https://meet.google.com/nbb-ywbb-gmn'} className=' flex flex-row justify-center border border-slate-500 rounded p-2'>
                <Image className=' rounded-full w-6 h-6 mr-2' src='/meet.png' width={50} height={50} alt='Open Source'></Image>
                <p className='my-auto'>Meet link</p>
              </Link>
              <Link href={'https://dexscreener.com/fantom/0xd45900dbfe70cc9347ae6924796b2b988dc1d143'} className=' flex flex-row justify-center border border-slate-500 rounded p-2'>
                <Image className=' rounded-full w-6 h-6 mr-2' src='/dexscreener.png' width={50} height={50} alt='Open Source'></Image>
                <p className='my-auto text-xs'>Price: {price.pairs[0].priceUsd}</p>
              </Link>
            </div>

            <div className="form-control w-full ">
              <div className='flex justify-center ...'>
                <Link href={'https://docs.google.com/forms/d/e/1FAIpQLScBs4yXuMLKmX0tdXTvfEUCFWhqofISeGs881wdrGgw08uiiQ/viewform'} className=' underline my-auto mt-2 flex flex-row'>Tham gia hội đồng <Icon.ExternalLink className='ml-2 w-4 h-4' /></Link>

              </div>
              <label className="label">
                <span className="label-text">Tiến độ</span>
                <span className="label-text-alt flex flex-row">{hasSendBom.toLocaleString('it-IT')}/1.000.000 <Link href={'https://ftmscan.com/token/0xb8058e311b451406bff63a11582b740a806b09e4?a=0xc502f799d90b694b815800b61b1d790f91cb2190'} className='ml-2 underline'>NextJs</Link></span>

              </label>
              <progress className="progress progress-primary w-full h-6" value={phantramBom} max="100"></progress>
            </div>

            <div className="form-control w-full ">
              <div className='flex justify-center ...'>
                <Link href={'https://docs.google.com/forms/d/1yQyCcLNuhgOCGm9Ylz7V3GvbxCRhf0cE39yxlghZ7yo/edit?pli=1'} className=' underline my-auto mt-2 flex flex-row'>Nhận Airdrop <Icon.ExternalLink className='ml-2 w-4 h-4' /></Link>

              </div>
              
            </div>

            <div className='flex justify-center ...'>
              <p className="mb-5 text-sm flex flex-row"><Icon.Mail className='mr-2 w-4 h-4' />Email: admin@nextjsvietnam.org</p>

            </div>
          </div>

        </div>
      </div>
      <div className='hero min-h-screen justify-items-center '>
        <div className='max-w-xl text-center'>
          <h2 className=' text-3xl font-black mt-5'>Đội ngũ</h2>
          <p className='font-light justify-center ...'>
            Với mong muốn NextJsVietNam.Org là nơi học hỏi, trao đổi kiến thức của cộng đồng,
            ngày 27/7/2023 chúng tôi đã bắt tay vào phát triển cộng đồng NextJS Viet Nam.</p>
          <h3 className=' text-xl font-medium mt-5'>Hội đồng</h3>
          <div className='flex font-light justify-center ...'>
            <Link href={'https://docs.google.com/forms/d/e/1FAIpQLScBs4yXuMLKmX0tdXTvfEUCFWhqofISeGs881wdrGgw08uiiQ/viewform'} className=' underline my-auto mt-2 flex flex-row'>Tham gia<Icon.ExternalLink className='ml-2 w-4 h-4' /></Link>
          </div>
          <div className=' grid lg:grid-cols-6 grid-cols-3 gap-5 mt-5 justify-items-center mx-5'>
            <BomMember></BomMember>
            <BomMember></BomMember>
            <BomMember></BomMember>
            <BomMember></BomMember>
            <BomMember></BomMember>
            <BomMember></BomMember>
          </div>
          <h3 className=' text-xl font-medium mt-5'>Nhóm phát triển</h3>
          <div className='flex font-light justify-center ...'>
            <Link href={'https://docs.google.com/forms/d/e/1FAIpQLSfUzeFIkK-zmwybFhiSjWEMImqpw4EG3K3g5f2wpuPYPT8-4Q/viewform'} className=' underline my-auto flex flex-row'>Tham gia<Icon.ExternalLink className='ml-2 w-4 h-4' /></Link>
          </div>
          <div className=' grid lg:grid-cols-8 grid-cols-4 gap-5 mt-5 justify-items-center mx-5'>
            <DevMember></DevMember>
            <DevMember></DevMember>
            <DevMember></DevMember>
            <DevMember></DevMember>
            <DevMember></DevMember>
            <DevMember></DevMember>
            <DevMember></DevMember>
            <DevMember></DevMember>
            <DevMember></DevMember>
            <DevMember></DevMember>
          </div>
          <h3 className=' text-xl font-medium mt-5'>Thành viên</h3>
          <div className='flex font-light justify-center ...'>
            <Link href={'#'} className=' underline my-auto flex flex-row'>Đăng ký<Icon.ExternalLink className='ml-2 w-4 h-4' /></Link>
          </div>
          <div className=' grid lg:grid-cols-8 grid-cols-4 gap-5 mt-5 justify-items-center mx-5'>
            <UserMember></UserMember>
            <UserMember></UserMember>
            <UserMember></UserMember>
            <UserMember></UserMember>
            <UserMember></UserMember>
            <UserMember></UserMember>
            <UserMember></UserMember>
            <UserMember></UserMember>
            <UserMember></UserMember>
            <UserMember></UserMember>
            <UserMember></UserMember>
            <UserMember></UserMember>

            <UserMember></UserMember>
            <UserMember></UserMember>
            <UserMember></UserMember>
            <UserMember></UserMember>
            <UserMember></UserMember>
            <UserMember></UserMember>
            <UserMember></UserMember>
            <UserMember></UserMember>
            <UserMember></UserMember>
            <UserMember></UserMember>
            <UserMember></UserMember>
            <UserMember></UserMember>
          </div>

        </div>

      </div>
      <div className='w-full h-full p-5 py-10 justify-items-center ...'>
        <div className='text-center'>
          <h2 className=' text-3xl font-black mb-10'>Tiến độ xây dựng</h2>
          <ol className="items-center text-start sm:flex">
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pr-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Khởi động</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Thứ 7, ngày 27 tháng 7 năm 2023</time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Đăng ký domain, kêu gọi cộng đồng, xây dựng đội phát triển.</p>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pr-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Tính năng Q/A (Questions/Answers)</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Thứ 3, ngày 1 tháng 8 năm 2023</time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Xây dựng Frontend, xây dựng Backend, thiết kế giao diện cơ bản.</p>
              </div>
            </li>

          </ol>
        </div>

      </div>
      <Footer></Footer>
    </>

  )
}

