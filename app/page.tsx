import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
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

        </div>
      </div>
    </div>
  )
}
