import Image from 'next/image'
import Link from 'next/link'
import * as Icon from 'react-feather';
import { Metadata } from 'next'
import Footer from '@/app/_components/footer'


export const metadata: Metadata = {
  title: 'Tokenomics NextJs',
  description: 'Learn to earn | Official communication NextJs Viet Nam',
}



export default async function Home() {
  
  return (
    <>
      <div className="hero min-h-screen" style={{ backgroundImage: 'url(wallpaper.jpg)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content overflow-y-auto">
          <div className="max-w-md justify-items-center space-y-10">
            <div>
              <h1 className="mt-5 text-3xl font-bold">NextJs Tokenomics</h1>
              <p className="mb-5 animate-pulse">Trang đang xây dựng, nếu bạn có nhã hứng hãy tham gia cùng chúng tôi !</p>
            </div>
            <div>
              
            </div>
          </div>

        </div>
      </div>
      <Footer></Footer>
    </>

  )
}

