// components/OrderPage.tsx
'use client';

import React, { useState } from 'react';
import OrderBook from './OrderBook';
import OrderSummary from './OrderSummary';
import TradeHistory from './TradeHistory';

interface OrderPageProps {
  stockCode: string;
}

export default function OrderPage({ stockCode }: OrderPageProps) {
  const [tab, setTab] = useState<'buy' | 'sell' | 'history'>('buy');

  return (
    <div className="p-4">
      <div className="flex">
        {/* ② 호가창 영역 (빈 자리) */}
        <div className="w-1/3 border rounded bg-gray-50">
          <OrderBook stockCode={stockCode} />
        </div>

        {/* ① 탭 + ③/④ 콘텐츠 영역 */}
        <div className="w-2/3 ml-6">
          <div className="flex border-b-2 border-gray-200">
            <button
              className={`pb-2 ${
                tab === 'buy'
                  ? 'border-b-4 border-orange-500 font-semibold'
                  : 'text-gray-400'
              }`}
              onClick={() => setTab('buy')}
            >
              매수
            </button>
            <button
              className={`ml-6 pb-2 ${
                tab === 'sell'
                  ? 'border-b-4 border-orange-500 font-semibold'
                  : 'text-gray-400'
              }`}
              onClick={() => setTab('sell')}
            >
              매도
            </button>
            <button
              className={`ml-6 pb-2 ${
                tab === 'history'
                  ? 'border-b-4 border-orange-500 font-semibold'
                  : 'text-gray-400'
              }`}
              onClick={() => setTab('history')}
            >
              거래내역
            </button>
          </div>

          <div className="mt-6">
            {tab === 'buy' && (
              <OrderSummary stockCode={stockCode} side="buy" />
            )}
            {tab === 'sell' && (
              <OrderSummary stockCode={stockCode} side="sell" />
            )}
            {tab === 'history' && (
              <TradeHistory stockCode={stockCode} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
