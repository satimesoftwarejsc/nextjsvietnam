import Image from 'next/image'

export default function CouncilsMember() {
    return (
        <>
            <div className=' flex flex-col items-center ...'>
                <div className="avatar">
                    <div className="w-12 mask mask-squircle">
                        <Image className=' rounded-full w-6 h-6 mr-2' src='/noavatar.png' width={150} height={150} alt='Open Source'></Image>
                    </div>
                </div>
            </div>
        </>
    )

}