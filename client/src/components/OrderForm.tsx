// components/OrderForm.tsx
'use client';

import React, { useState, useEffect } from 'react';

export default function OrderForm() {
  // 주문 타입: 지정(limit) / 시장가(market)
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
    fetch('') // 공공포털 API URL넣기
      .then((res) => res.json())
      .then((data) => {
        setAvailableQty(data.availableQty);
        setCurrentPrice(data.currentPrice);
      })
      .catch(console.error);
  }, []);

  // 수량 또는 퍼센트 변경 시 총액 재계산
  useEffect(() => {
    if (quantity && currentPrice) {
      const price =
        orderType === 'limit'
          ? currentPrice * (1 + percentage / 100)
          : currentPrice;
      setTotal(Math.floor((quantity as number) * price));
    } else {
      setTotal(0);
    }
  }, [quantity, percentage, currentPrice, orderType]);

  // 입력 초기화
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
    const payload = {
      stockCode: 'STOCK_CODE', // 상세페이지에서 받아온 값으로 교체
      orderType,
      quantity: Number(quantity),
      limitPrice:
        orderType === 'limit'
          ? Math.floor(currentPrice * (1 + percentage / 100))
          : undefined,
    };
    const res = await fetch('/api/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      alert('매수 실패');
    } else {
      alert('매수 완료');
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
            <button className="pb-2 border-b-4 border-orange-500 font-semibold">
              매수
            </button>
            <button className="ml-6 pb-2 text-gray-400">매도</button>
            <button className="ml-6 pb-2 text-gray-400">거래내역</button>
          </div>

          <div className="mt-6 space-y-4">
            {/* 지정 / 시장가 선택 */}
            <div className="flex items-center space-x-4">
              <label>
                <input
                  type="radio"
                  checked={orderType === 'limit'}
                  onChange={() => setOrderType('limit')}
                />
                지정
              </label>
              <label>
                <input
                  type="radio"
                  checked={orderType === 'market'}
                  onChange={() => setOrderType('market')}
                />
                시장가
              </label>
            </div>

            {/* 주문 가능 수량 */}
            <div>
              주문가능: <span className="font-medium">{availableQty}</span>주
            </div>

            {/* 현재 시세 */}
            <div>
              현재시세:{' '}
              <span className="font-medium">
                {currentPrice.toLocaleString()}원
              </span>
            </div>

            {/* 수량 입력 */}
            <div>
              <label className="block mb-1">수량</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) =>
                  setQuantity(
                    e.target.value === '' ? '' : Number(e.target.value)
                  )
                }
                disabled={orderType === 'market'}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            {/* 현재가 대비 % 선택 */}
            <div>
              <label className="block mb-1">현재가 대비 %</label>
              <select
                value={percentage}
                onChange={(e) => setPercentage(Number(e.target.value))}
                disabled={orderType === 'market'}
                className="w-full border rounded px-3 py-2"
              >
                {Array.from({ length: 41 }, (_, i) => 100 - i * 5).map((v) => (
                  <option key={v} value={v}>
                    {v >= 0 ? `+${v}%` : `${v}%`}
                  </option>
                ))}
              </select>
            </div>

            {/* 총액 */}
            <div>
              총액:{' '}
              <span className="font-medium">
                {total.toLocaleString()}원
              </span>
            </div>

            {/* 초기화 / 매수 버튼 */}
            <div className="flex space-x-4">
              <button
                onClick={handleReset}
                className="flex-1 border rounded py-2"
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
        </div>
      </div>
    </div>
  );
}
