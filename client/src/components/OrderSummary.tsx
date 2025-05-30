// components/OrderSummary.tsx
'use client';

import React, { useState, useEffect } from 'react';

export interface OrderSummaryProps {
  stockCode: string;
  side: 'buy' | 'sell';
}

export default function OrderSummary({
  stockCode,
  side,
}: OrderSummaryProps) {
  const isBuy = side === 'buy';

  // 주문 타입: 지정가(limit) / 시장가(market)
  const [orderType, setOrderType] =
    useState<'limit' | 'market'>('limit');
  // 2) 공통 state
  const [availableQty, setAvailableQty] = useState<number>(0);
  const [currentPrice, setCurrentPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number | ''>('');
  const [percentage, setPercentage] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  // API로 주문가능 수량 & 현재 시세 받아오기
  useEffect(() => {
    fetch(``) // 공공데이터 포털 시세 API URL 넣기
      .then((res) => res.json())
      .then((data) => {
        // 실제 필드명에 맞춰 꺼내주세요.
        setAvailableQty(data.availableQty);
        setCurrentPrice(data.currentPrice);
      })
      .catch(console.error);
  }, [stockCode]);

  // 수량·퍼센트·orderType·currentPrice 변경 시 총액 계산
  useEffect(() => {
    if (!quantity || !currentPrice) {
      setTotal(0);
      return;
    }
    let unitPrice = currentPrice;

    if (orderType === 'limit') {
      // 매수는 가산, 매도는 차감
      const factor = isBuy
        ? 1 + percentage / 100
        : 1 - percentage / 100;
      unitPrice = Math.floor(currentPrice * factor);
    }

    setTotal(Math.floor((quantity as number) * unitPrice));
  }, [quantity, percentage, currentPrice, orderType, isBuy]);

  // 초기화
  const handleReset = () => {
    setQuantity('');
    setPercentage(0);
  };

  // 주문 요청
  const handleOrder = async () => {
    if (!quantity) {
      alert('수량을 입력해주세요');
      return;
    }
    const payload: any = {
      stockCode,
      side,
      quantity: Number(quantity),
    };
    if (orderType === 'limit') {
      payload.limitPrice = Math.floor(
        currentPrice *
          (isBuy
            ? 1 + percentage / 100
            : 1 - percentage / 100)
      );
    }
    const res = await fetch('/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      alert(`${isBuy ? '매수' : '매도'} 실패`);
    } else {
      alert(`${isBuy ? '매수' : '매도'} 완료`);
      handleReset();
    }
  };

  return (
    <div className="space-y-4">
      {/* 지정가 / 시장가 */}
      <div className="flex items-center space-x-6">
        <label>
          <input
            type="radio"
            checked={orderType === 'limit'}
            onChange={() => setOrderType('limit')}
          />{' '}
          지정가
        </label>
        <label>
          <input
            type="radio"
            checked={orderType === 'market'}
            onChange={() => setOrderType('market')}
          />{' '}
          시장가
        </label>
      </div>

      {/* 주문가능 / 현재가 */}
      <div className="flex justify-between text-sm">
        <span>주문가능</span>
        <span>{availableQty}주</span>
      </div>
      <div className="bg-white rounded px-3 py-2 flex justify-between">
        <span>현재가</span>
        <span>{currentPrice.toLocaleString()}원</span>
      </div>

      {/* 지정가 폼 */}
      {orderType === 'limit' && (
        <>
          <div className="bg-white rounded px-3 py-2 flex items-center">
            <input
              type="number"
              value={quantity}
              onChange={(e) =>
                setQuantity(
                  e.target.value === ''
                    ? ''
                    : Number(e.target.value)
                )
              }
              placeholder="수량"
              className="flex-1 bg-transparent focus:outline-none"
            />
            <span className="ml-2">개</span>
          </div>
          <div className="bg-white rounded px-3 py-2 flex items-center">
            <select
              value={percentage}
              onChange={(e) =>
                setPercentage(Number(e.target.value))
              }
              className="flex-1 bg-transparent focus:outline-none"
            >
              {Array.from({ length: 41 }, (_, i) => 100 - i * 5).map(
                (v) => (
                  <option key={v} value={v}>
                    {v >= 0 ? `+${v}%` : `${v}%`}
                  </option>
                )
              )}
            </select>
            <span className="ml-2"></span>
          </div>
        </>
      )}

      {/* 시장가 폼 */}
      {orderType === 'market' && (
        <div className="bg-white rounded px-3 py-2 flex items-center">
          <input
            type="number"
            value={quantity}
            onChange={(e) =>
              setQuantity(
                e.target.value === ''
                  ? ''
                  : Number(e.target.value)
              )
            }
            placeholder="수량"
            className="flex-1 bg-transparent focus:outline-none"
          />
          <span className="ml-2">개</span>
        </div>
      )}

      {/* 총액 */}
      <div className="bg-white rounded px-3 py-2 flex justify-between">
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

      {/* 초기화 / 주문 버튼 */}
      <div className="flex space-x-4">
        <button
          onClick={handleReset}
          className="flex-1 bg-gray-300 text-white rounded py-2"
        >
          초기화
        </button>
        <button
          onClick={handleOrder}
          disabled={!quantity}
          className={`flex-1 rounded py-2 text-white disabled:opacity-50 ${
            isBuy ? 'bg-red-500' : 'bg-blue-600'
          }`}
        >
          {isBuy ? '매수' : '매도'}
        </button>
      </div>
    </div>
  );
}
