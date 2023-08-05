import Image from 'next/image'
import Link from 'next/link'

export default async function Footer() {
    return (
        <>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div className='flex flex-col'>
                    <Image className=' w-56' src='/nextjs-logo.png' width={300} height={100} alt='NextJs Viet Nam'></Image>
                    <p>Nextjsvietnam.org. Building since 2023</p>
                    <p className='-mt-2 text-xs'>Development by you.</p>
                </div>
                <div>
                    <span className="footer-title">Cộng đồng</span>
                    <a className="link link-hover">Người dùng</a>
                    <a className="link link-hover">Đội phát triển</a>
                    <a className="link link-hover">Thành viên</a>
                    <a className="link link-hover">Nhà tài trợ</a>

                </div>
                <div>
                    <span className="footer-title">Tiện ích</span>
                    <a className="link link-hover">Hỏi/đáp</a>
                    <a className="link link-hover">Kinh nghiệm phát triển</a>
                    <a className="link link-hover">Tài liệu phát triển</a>
                    <a className="link link-hover">Tiện ích nhỏ</a>
                </div>
                <div>
                    <span className="footer-title">Pháp luật</span>
                    <a className="link link-hover">Chính sách sử dụng và quy định chung</a>
                    <a className="link link-hover">Chính sách bảo mật thông tin</a>
                    <a className="link link-hover">Chính sách quyền riêng tư</a>
                    <a className="link link-hover">Chính sách sở hữu token</a>
                </div>
            </footer>
        </>
    )

}