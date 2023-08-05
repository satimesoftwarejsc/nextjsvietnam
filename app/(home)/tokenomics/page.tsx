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
          <div className="max-w-xxl justify-items-center space-y-10">
            <div>
              <h1 className="mt-5 text-3xl font-bold uppercase">tokenomics</h1>
              <p className="mb-5 animate-pulse">NextJs được phát hành trên Fantom chain với <Link href={'https://ftmscan.com/address/0xb8058e311b451406bff63a11582b740a806b09e4'} className=' underline text-white'>Contract</Link></p>
            </div>
            <p className='text-sm'>NextJs token có tổng cung tối đa 1,000,000,000  <br /> và sẽ được phân phối hàng tuần 1,000,000: 80% cho đội phát triển và 20% cho hội đồng (người góp quỹ).</p>
            <div className="overflow-x-auto">
              <h2>Lịch sử phát hành</h2>
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Thời gian</th>
                    <th>Đối tượng</th>
                    <th>Số lượng</th>
                    <th>Tần xuất</th>
                    <th>%</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>27/7/2023</td>
                    <td>Hội đồng, pool thanh khoản</td>
                    <td>1,000,000</td>
                    <td>Hàng tuần</td>
                    <td>0.1 %</td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>29/7/2023</td>
                    <td>Hội đồng, đội phát triển, pool thanh khoản</td>
                    <td>1,000,000</td>
                    <td>Hàng tuần</td>
                    <td>0.1 %</td>
                  </tr>
                  
                </tbody>
              </table>
            </div>

          </div>

        </div>
      </div>
      <Footer></Footer>
    </>

  )
}

