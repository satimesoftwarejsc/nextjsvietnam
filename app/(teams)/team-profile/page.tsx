import Image from 'next/image'
import Link from 'next/link'
import UserMember from "../../_components/userMember"
import DevMember from '../../_components/devMember'
import CouncilsMember from '../../_components/councilsmember'
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
  const devNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const userNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
  const councilsMember = [1, 2, 3, 4, 5, 6]

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
    <div className="hero min-h-screen" style={{ backgroundImage: 'url(wallpaper.jpg)' }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg justify-items-center space-y-10">
          <div>
            <h1 className="mt-5 text-3xl font-bold">Đội ngũ</h1>
            <p className="mb-5 animate-pulse">Với mong muốn NextjsVietNam.Org là nơi học hỏi, trao đổi kiến thức của cộng đồng. Ngày 27/7/2023 chúng tôi đã bắt tay phát triển</p>
          </div>

          <div className="form-control w-full ">
            <h1 className=" text-3xl font-bold">Hội đồng</h1>
            <div className='flex justify-center ...'>
              <Link href={'https://docs.google.com/forms/d/e/1FAIpQLScBs4yXuMLKmX0tdXTvfEUCFWhqofISeGs881wdrGgw08uiiQ/viewform'} className=' underline my-auto mt-2 flex flex-row'>Tham gia <Icon.ExternalLink className='ml-2 w-4 h-4' /></Link>
            </div>
            <div className=' grid grid-cols-6 gap-5 mt-5'>
              {councilsMember.map((e, i) => {
                return (
                  <>
                    <CouncilsMember></CouncilsMember>
                  </>
                )
              })}
            </div>
          </div>

          <div className="form-control w-full">
            <h1 className=" text-3xl font-bold">Nhóm phát triển</h1>
            <div className='flex justify-center ...'>
              <Link href={'https://docs.google.com/forms/d/e/1FAIpQLSfUzeFIkK-zmwybFhiSjWEMImqpw4EG3K3g5f2wpuPYPT8-4Q/viewform'} className=' underline my-auto mt-2 flex flex-row'>Tham gia đội phát triển<Icon.ExternalLink className='ml-2 w-4 h-4' /></Link>
            </div>
            <div className=' grid grid-cols-10 gap-5 mt-5'>
              {devNumber.map((e, i) => {
                return (
                  <>
                    <DevMember></DevMember>
                  </>
                )
              })}
            </div>
          </div>
          <div className="form-control w-full">
            <h1 className=" text-3xl font-bold">Thành viên</h1>
            <div className='flex justify-center ...'>
              <Link href={'https://docs.google.com/forms/d/e/1FAIpQLSfUzeFIkK-zmwybFhiSjWEMImqpw4EG3K3g5f2wpuPYPT8-4Q/viewform'} className=' underline my-auto mt-2 flex flex-row'>Đăng kí<Icon.ExternalLink className='ml-2 w-4 h-4' /></Link>
            </div>
            <div className=' grid grid-cols-12 gap-5 mt-5'>
              {userNumber.map((e, i) => {
                return (
                  <>
                    <UserMember></UserMember>
                  </>
                )
              })}
            </div>
          </div>
          <div className='flex justify-center ...'>
            <p className="mb-5 text-sm flex flex-row"><Icon.Mail className='mr-2 w-4 h-4' />Email: admin@nextjsvietnam.org</p>

          </div>
        </div>
      </div>
    </div>
  )
}

