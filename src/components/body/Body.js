import React from "react";

const Body = () => {
  return (
    <div>
      <div
        className="w-full h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/Rectangle 2.png')",
        }}
      >
        <div className="flex justify-around items-center h-full px-8">
          <div className="text-left max-w-lg">
            <h1 className="text-4xl font-bold text-[#F6F7FF] mb-4">Чіп Чендж</h1>
            <p className="text-lg text-[#E0E1EA] mb-6">Обмінник валют - навчальний</p>
            <button
              className="w-[234px] h-[53px] rounded-[4px] bg-[#F6F7FF] text-[#707C87] text-sm font-medium"
              onClick={() => {
              }}
            >
              Конвертер валют
            </button>
          </div>
          <div className="flex-shrink-0">
            <img
              src="/images/standard-mastercard-card-debit_1280x720 2.png"
              alt="Карта"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
