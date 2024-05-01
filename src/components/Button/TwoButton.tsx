"use client"
import React, { useState } from 'react';
import '../../css/btn.css'
const TwoButton = () => {
  // Sử dụng useState để lưu trữ trạng thái của nút
  const [button1Active, setButton1Active] = useState(true);
  const [button2Active, setButton2Active] = useState(false);

  // Hàm để thay đổi trạng thái của nút 1
  const toggleButton1 = () => {
    setButton1Active(!button1Active);
    setButton2Active(false); // Đảm bảo chỉ có một nút được chọn cùng một lúc
  };

  // Hàm để thay đổi trạng thái của nút 2
  const toggleButton2 = () => {
    setButton2Active(!button2Active);
    setButton1Active(false); // Đảm bảo chỉ có một nút được chọn cùng một lúc
  };

  return (
    <div className='grid grid-cols-2 gap-x-10'>
      {/* Button 1 */}
      <button
        className={`btn ${button1Active ? 'active' : ''}`}
        onClick={toggleButton1}
      >
        Xe cũ
      </button>

      {/* Button 2 */}
      <button
        className={`btn ${button2Active ? 'active' : ''}`}
        onClick={toggleButton2}
      >
        Xe mới
      </button>

    </div>
  );
};

export default TwoButton;
