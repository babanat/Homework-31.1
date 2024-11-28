import React from 'react';

const CurrencyConverterIntro = () => {
  return (
    <div className="flex justify-evenly items-center bg-transparent py-16">
      <div className="max-w-[379px] text-left">
        <h2 className="text-[#1F1E25] font-roboto font-bold text-[40px] leading-[47px] mb-4">
          Конвертер валют
        </h2>
        <p
          className="text-[#707C87] font-roboto font-normal text-[20px] leading-[33px] mb-6"
          style={{
            width: '379px',
            height: '99px',
            wordBreak: 'break-word',
            whiteSpace: 'normal',
          }}
        >
          Переважна діяльність банківської групи за останні чотири звітні
          квартали становить 50 і більше відсотків.
        </p>
        <button
          className="w-[251px] h-[53px] bg-[#2C36F2] text-[#F6F7FF] font-roboto font-medium text-[18px] rounded-[4px]"
          onClick={() => {
            // Логику кнопки потом напишу
          }}
        >
          Конвертувати валюту
        </button>
      </div>
      <div className="flex-shrink-0">
        <img
          src="/images/imageCard.png"
          alt="Конвертер валют"
          className="w-[436px] h-[314px]"
        />
      </div>
    </div>
  );
};

export default CurrencyConverterIntro;
