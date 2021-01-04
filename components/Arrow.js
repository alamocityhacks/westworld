import { IoIosArrowDown } from 'react-icons/io';

export default function Arrow({mt}) {
    return (
        <div className={`flex items-center justify-center h-full mt-${mt} text-white w-screen`}>
            <IoIosArrowDown size="2rem"/>
        </div>
    )
}