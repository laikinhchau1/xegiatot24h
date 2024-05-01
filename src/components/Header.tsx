import { Input } from '@mui/material'
import React, { useEffect } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import NavMenu from './NavMenu/NavMenu';
import { FaCar } from "react-icons/fa";

function Header() {

    return (
        <div className=''>
            <div className='container mx-auto flex flex-row justify-between py-3 items-center '>
                <div className='bg-white'>
                    <img src='https://staticfile.oto.com.vn/dist/web/images/logo-oto.svg' className='h-[30px]' />
                    <span className='text-[10px] text-neutral-500'>Kênh thông tin và giao dịch về oto</span>
                </div>

                <div className='flex flex-row items-center'>

                    <div className='flex flex-row border-2 items-center rounded-md overflow-hidden bg-gray-200 border-gray-300'>
                        <input
                            className=' bg-transparent text-left w-[210px] text-sm h-[30px] pl-1 outline-none focus:outline-none'
                            placeholder='Tìm kiếm theo hãng xe dòng xe'
                            autoComplete='off'
                            maxLength={100}
                            type='text'
                        />
                        <AiOutlineSearch size={20} color='#888' className='mx-2' />
                    </div>

                    <CiHeart size={30} color='#888' className='mx-[30px]' />

                    <div>
                        <span className='text-[#888] text-[14px]'>Đăng nhập / Đăng ký</span>
                    </div>
                </div>
            </div>

            <div className='border-t-[1px] shadow-md flex flex-row justify-between'>
                <div className='container mx-auto'>

                    <div className='flex flex-row justify-between'>
                        <NavMenu />
                        <div className='bg-green-600 flex flex-row items-center px-2'>
                            <FaCar className='mr-2'color='#fff' />
                            <span className='text-[#fff] font-bold'>ĐĂNG TIN</span>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Header