import Image from 'next/image'
import Link from 'next/link'
import BomMember from './_components/bomMember'
import DevMember from './_components/devMember'
import UserMember from './_components/userMember'


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

  return (
    <>
      <div className="hero min-h-screen" style={{ backgroundImage: 'url(wallpaper.jpg)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content overflow-y-auto">
          <div className="max-w-md justify-items-center space-y-10">
            <div>
              <h1 className="mt-5 text-3xl font-bold">NEXTJS VIET NAM</h1>
              <p className="mb-5 animate-pulse">Wellcome to NextJs Viet Nam, please support to build it !</p>
            </div>
            <div className='grid grid-cols-2 gap-5'>
              <Link href={'https://github.com/ChungLeba/nextjsvietnam'} className='flex flex-row justify-center border border-slate-500 rounded p-2'>
                <Image className=' rounded-full w-6 h-6 mr-2' src='/git.png' width={50} height={50} alt='Open Source'></Image>
                <p className='my-auto'>Git Clone</p>
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
                <Link href={'https://docs.google.com/forms/d/1yQyCcLNuhgOCGm9Ylz7V3GvbxCRhf0cE39yxlghZ7yo/edit?pli=1'} className=' underline my-auto mt-2 flex flex-row'>Nhận Airdrop #1 <Icon.ExternalLink className='ml-2 w-4 h-4' /></Link>

              </div>
              <label className="label">
                <span className="label-text">Tiến độ</span>
                <span className="label-text-alt flex flex-row">{hasSendAirdrop1.toLocaleString('it-IT')}/1.000.000 <Link href={'https://ftmscan.com/token/0xb8058e311b451406bff63a11582b740a806b09e4?a=0xc78fd70a999a938ed939809fedd40e744d8c2bd9'} className='ml-2 underline'>NextJs</Link></span>

              </label>
              <progress className="progress progress-secondary w-full h-3" value={phantramAirdrop1} max="100"></progress>
            </div>

            <div className='flex justify-center ...'>
              <p className="mb-5 text-sm flex flex-row"><Icon.Mail className='mr-2 w-4 h-4' />Email: admin@nextjsvietnam.org</p>

            </div>
          </div>

        </div>
      </div>
      <div className='hero min-h-screen justify-items-center '>
        <div className='max-w-xl text-center'>
          <h2 className=' text-3xl font-black'>Đội ngũ</h2>
          <p className='font-light justify-center ...'>
            Với mong muốn NextJsVietNam.Org là nơi học hỏi, trao đổi kiến thực của cộng đồng,
            ngày 27/7/2023 chúng tôi đã bắt tay vào phát triển cộng đồng NextJS Viet Nam.</p>
          <h3 className=' text-xl font-medium mt-5'>Hội đồng</h3>
          <div className='flex font-light justify-center ...'>
            <Link href={'https://docs.google.com/forms/d/e/1FAIpQLScBs4yXuMLKmX0tdXTvfEUCFWhqofISeGs881wdrGgw08uiiQ/viewform'} className=' underline my-auto mt-2 flex flex-row'>Tham gia<Icon.ExternalLink className='ml-2 w-4 h-4' /></Link>
          </div>
          <div className=' grid grid-cols-6 gap-5 mt-5 justify-items-center'>
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
          <div className=' grid grid-cols-10 gap-5 mt-5 justify-items-center'>
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
          <div className=' grid grid-cols-12 gap-5 mt-5 justify-items-center'>
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
    </>

  )
}

