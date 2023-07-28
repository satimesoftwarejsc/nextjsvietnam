import Image from 'next/image'

export default function TeamMember() {
    return (
        <>
            <div className=' flex flex-col items-center ...'>
                <div className="avatar">
                    <div className="w-8 mask mask-squircle">
                        <Image className=' rounded-full w-6 h-6 mr-2' src='/noavatar.png' width={50} height={50} alt='Open Source'></Image>

                    </div>
                </div>
                <p className=' mt-2 text-sm'>Team Member</p>
            </div>
        </>
    )

}