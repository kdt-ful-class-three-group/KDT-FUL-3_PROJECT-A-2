// components/OrderForm.tsx
'use client';

import React, { useState, useEffect } from 'react';

interface OrderFormProps {
  stockCode: string;  // 부모로부터 내려받을 종목 코드
}

export default function OrderForm({ stockCode }: OrderFormProps) {
  // 주문 타입: 지정가(limit) / 시장가(market)
  const [orderType, setOrderType] = useState<'limit' | 'market'>('limit');
  // 주문 가능 수량, 현재 시세
  const [availableQty, setAvailableQty] = useState<number>(0);
  const [currentPrice, setCurrentPrice] = useState<number>(0);
  // 입력 수량, 선택 퍼센트, 계산된 총액
  const [quantity, setQuantity] = useState<number | ''>('');
  const [percentage, setPercentage] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  // API로 수량/시세 받아오기
  useEffect(() => {
    fetch('') // 공공포털 시세 API URL
      .then((res) => res.json())
      .then((data) => {
        setAvailableQty(data.availableQty);
        setCurrentPrice(data.currentPrice);
      })
      .catch(console.error);
  }, []);

  // 수량·퍼센트·시세·주문타입 바뀔 때마다 총액 재계산
  useEffect(() => {
    if (quantity && currentPrice) {
      const unitPrice =
        orderType === 'limit'
          ? currentPrice * (1 + percentage / 100)
          : currentPrice;
      setTotal(Math.floor((quantity as number) * unitPrice));
    } else {
      setTotal(0);
    }
  }, [quantity, percentage, currentPrice, orderType]);

  // 초기화
  const handleReset = () => {
    setQuantity('');
    setPercentage(0);
  };

  // 매수 요청 StockOrder 테이블 INSERT
  const handleBuy = async () => {
    if (!quantity) {
      alert('수량을 입력해주세요');
      return;
    }
    const payload: any = {
      stockCode, // prop으로 받은 stockCode 사용
      orderType,
      quantity: Number(quantity), // input에 빈 문자열이 들어올 수 있으므로 Number로 변환
    };
    // 지정가(limit) 주문일 때만 limitPrice 추가
    if (orderType === 'limit') {
      payload.limitPrice = Math.floor(currentPrice * (1 + percentage / 100)); // 현재 시세에 선택된 퍼센트 만큼 가산한 가격
    }
    // 서버로 매수 요청 전송
    const res = await fetch('/api/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }, // json 타입으로 전송
      body: JSON.stringify(payload), // payload를 JSON 문자열로 변환
    });
    if (!res.ok) {
      alert('매수 실패');
    } else {
      alert('매수 완료');
      handleReset(); // 입력 폼 초기화
    }
  };

  return (
    <div className="p-4">
      <div className="flex">
        {/* 호가 영역 */}
        <div className="w-1/3 border rounded p-2 h-[500px] overflow-auto">
          {/* TODO: 호가 리스트 */}
        </div>

        {/* 주문 폼 영역 */}
        <div className="w-2/3 ml-6">

          {/* 매수/매도/거래내역 탭 */}
          <div className="flex border-b-2 border-gray-200">
            <button className="pb-2 border-b-4 border-orange-500 font-semibold">매수</button>
            <button className="ml-6 pb-2 text-gray-400">매도</button>
            <button className="ml-6 pb-2 text-gray-400">거래내역</button>
          </div>

          {/* 지정/시장가 선택 */}
          <div className="mt-6 flex items-center space-x-6">
            <label className="flex items-center">
              <input
                type="radio"
                checked={orderType === 'limit'}
                onChange={() => setOrderType('limit')}
              />
              <span className="ml-1">지정</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={orderType === 'market'}
                onChange={() => setOrderType('market')}
              />
              <span className="ml-1">시장</span>
            </label>
          </div>

          {/* 주문가능 & 공통 현재시세 */}
          <div className="mt-4 flex justify-between">
            <span>주문가능</span>
            <span className="font-medium">{availableQty}주</span>
          </div>

          {/* --- 시장가 전용 UI */}
          {orderType === 'market' && (
            <div className="mt-2 space-y-3">
              {/* 현재시세 */}
              <div className="bg-white rounded px-3 py-2 flex justify-between items-center">
                <span>현재시세</span>
                <span>{currentPrice.toLocaleString()}원</span>
              </div>

              {/* 수량 입력 */}
              <div className="bg-white rounded px-3 py-2 flex items-center">
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(
                      e.target.value === '' ? '' : Number(e.target.value)
                    )
                  }
                  placeholder="수량"
                  className="flex-1 bg-transparent focus:outline-none"
                />
                <span className="ml-2">개</span>
              </div>

              {/* 총액 */}
              <div className="bg-white rounded px-3 py-2 flex justify-between items-center">
                <span>총액</span>
                <span>{total.toLocaleString()}원</span>
              </div>

              {/* 최소주문금액 & 수수료 */}
              <div className="text-sm flex justify-between text-gray-500">
                <span>최소주문금액</span>
                <span>1주</span>
              </div>
              <div className="text-sm flex justify-between text-gray-500">
                <span>수수료</span>
                <span>0.05%</span>
              </div>

              {/* 초기화 / 매수 버튼 */}
              <div className="flex space-x-4">
                <button
                  onClick={handleReset}
                  className="flex-1 bg-gray-300 text-white rounded py-2 disabled:opacity-50"
                >
                  초기화
                </button>
                <button
                  onClick={handleBuy}
                  disabled={!quantity}
                  className="flex-1 bg-red-500 text-white rounded py-2 disabled:opacity-50"
                >
                  매수
                </button>
              </div>
            </div>
          )}


          {/* --- 지정(limit) 전용 UI*/}
          {orderType === 'limit' && (
           <div className="mt-2 space-y-3">
             {/* 현재시세 */}
             <div className="bg-white rounded px-3 py-2 flex justify-between items-center">
               <span>현재시세</span>
               <span>{currentPrice.toLocaleString()}원</span>
               
             </div>

             {/* 수량 입력 Input */}
             <div className="bg-white rounded px-3 py-2 flex items-center">
               <input
                 type="number"
                 value={quantity}
                 onChange={(e) =>
                   setQuantity(
                     e.target.value === '' ? '' : Number(e.target.value)
                   )
                 }
                 placeholder="수량"
                 className="flex-1 bg-transparent focus:outline-none"
               />
               <span className="ml-2">개</span>
             </div>

             {/* 현재가 대비 % 선택 select형식 */}
             <div className="bg-white rounded px-3 py-2 flex items-center">
               <select
                 value={percentage}
                 onChange={(e) => setPercentage(Number(e.target.value))}
                 className="flex-1 bg-transparent focus:outline-none"
               >
                 {Array.from({ length: 41 }, (_, i) => 100 - i * 5).map((v) => (
                   <option key={v} value={v}>
                     {v >= 0 ? `+${v}%` : `${v}%`}
                   </option>
                 ))}
               </select>
             </div>

             {/* 총액 */}
             <div className="bg-white rounded px-3 py-2 flex justify-between items-center">
               <span>총액</span>
               <span>{total.toLocaleString()}원</span>
             </div>
              
              {/* 최소주문금액 & 수수료 */}
              <div className="text-sm flex justify-between text-gray-500">
                <span>최소주문금액</span>
                <span>1주</span>
              </div>
              <div className="text-sm flex justify-between text-gray-500">
                <span>수수료</span>
                <span>0.05%</span>
              </div>

             {/* 초기화 / 매수 버튼 */}
             <div className="flex space-x-4">
               <button
                 onClick={handleReset}
                 className="flex-1 bg-gray-300 text-white rounded py-2 disabled:opacity-50"
               >
                 초기화
               </button>
               <button
                 onClick={handleBuy}
                 disabled={!quantity}
                 className="flex-1 bg-red-500 text-white rounded py-2 disabled:opacity-50"
               >
                 매수
               </button>
             </div>
           </div>
         )}
        </div>
      </div>
    </div>
  );
}
