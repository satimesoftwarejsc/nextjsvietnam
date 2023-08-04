import Image from 'next/image'

export default function DevMember() {
    return (
        <>
            <div className="avatar drop-shadow-lg">
                <div className=" w-12 mask mask-squircle">
                    <Image src='/bean.jpg' width={200} height={200} alt='team avatar' className='mask mask-squircle'></Image>
                </div>
            </div>
        </>
    )

}