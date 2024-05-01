"use client"
import Link from "next/link";
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes'
import TwoButton from "@/components/Button/TwoButton";
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];


export default function Home() {
  const [selectedOption, setSelectedOption] = useState(null);
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="container mx-auto">
      <div>

        <div className="grid grid-cols-4">
          <div className="col-span-1 flex justify-center mt-2">
            <div className="w-[284px] rounded-[8px] bg-white shadow-inner">
              <div className="flex justify-center pt-4 pb-3">
                <span className="text-lg font-bold">Tìm chiếc xe dành cho bạn</span>
              </div>
              <div>
                <div className="mb-2">
                  <TwoButton />
                </div>
                <Select
                  placeholder={'Chọn hãng xe'}
                  defaultValue={selectedOption}
                  onChange={() => setSelectedOption}
                  options={options}
                  className="mb-2"
                />

                <Select
                  placeholder={'Chọn dòng xe'}
                  defaultValue={selectedOption}
                  onChange={() => setSelectedOption}
                  options={options}
                  className="mb-2"
                />
              </div>
            </div>
          </div>
          <div className="col-span-3 bg-gray-300">Phần 2</div>
        </div>


        <div>
          <button onClick={() => setTheme('light')}>Light Mode</button>
        </div>

        <div>
          <button onClick={() => setTheme('dark')}>Dark Mode</button>
        </div>
      </div>
      <Link href={'/mua-ban-xe'}>Mua ban xe</Link>
      <p>hehehehe</p>
    </div>
  );
}
