import Image from 'next/image'
import Link from 'next/link'
import TeamMember from './_components/teammember'
import * as Icon from 'react-feather';

/* Check token Nextjs */
async function getData() {
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

export default async function Home() {

  const data = await getData()
  //console.log(data);
  const remainingBalanceToken = data.result.replace('000000000000000000','')
  const hasSend = 1000000 - parseInt(remainingBalanceToken)
  //console.log('remainingBalanceToken: ',remainingBalanceToken);
  const phantram = hasSend / 1000000 *100
  const teamNumber = [1, 2, 3, 4, 5, 6, 7, 8]
  /*  */
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: 'url(wallpaper.jpg)' }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md justify-items-center space-y-10">
          <div>
            <h1 className="mt-5 text-5xl font-bold">NEXTJS VIET NAM</h1>
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
              <span className="label-text-alt flex flex-row">{hasSend.toLocaleString('it-IT')}/1.000.000 <Link href={'https://ftmscan.com/token/0xb8058e311b451406bff63a11582b740a806b09e4'} className='ml-2 underline'>NextJs</Link></span>

            </label>
            <progress className="progress progress-primary w-full h-6" value={phantram} max="100"></progress>
          </div>
          <div className="form-control w-full">
            <div className='flex justify-center ...'>
              <Link href={'https://docs.google.com/forms/d/e/1FAIpQLSfUzeFIkK-zmwybFhiSjWEMImqpw4EG3K3g5f2wpuPYPT8-4Q/viewform'} className=' underline my-auto mt-2 flex flex-row'>Tham gia đội phát triển<Icon.ExternalLink className='ml-2 w-4 h-4' /></Link>
            </div>
            <div className=' grid grid-cols-4 gap-5 mt-5'>
              {teamNumber.map((e, i) => {
                return (
                  <>
                    <TeamMember></TeamMember>
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

