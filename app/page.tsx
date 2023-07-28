import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const ok = 40
  const phantram = ok / 1000 * 100
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: 'url(wallpaper.jpg)' }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md justify-items-center">
          <h1 className="mb-5 text-5xl font-bold">NEXTJS VIET NAM</h1>
          <p className="mb-5">Wellcome to NextJs Viet Nam, please support to build it !</p>
          <Link href={'https://github.com/ChungLeba/nextjsvietnam'} className='flex flex-row text-lg justify-center'>
            <Image className=' rounded-full w-10 h-10 mr-2' src='/git.png' width={50} height={50} alt='Open Source'></Image>
            <p className='my-auto'>Git Clone</p>
          </Link>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Tiến độ</span>
              <span className="label-text-alt">{ok}/1000 $</span>
            </label>
            <progress className="progress progress-primary w-full h-6" value={phantram} max="100"></progress>
            <Link href={'https://docs.google.com/forms/d/e/1FAIpQLScBs4yXuMLKmX0tdXTvfEUCFWhqofISeGs881wdrGgw08uiiQ/viewform'} className='my-auto mt-2'>Tham gia hội đồng</Link>
          </div>

        </div>
      </div>
    </div>
  )
}
