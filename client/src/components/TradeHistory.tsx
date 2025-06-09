// components/TradeHistory.tsx
'use client';

import React, { useState, useEffect } from 'react';

// 거래내역 컴포넌트(체결, 미체결, 주문취소)
interface OrderItem {
  id: string;
  stock_name: string;
  order_type: 'BUY' | 'SELL';
  price: number;
  quantity: number;
  remainingQuantity: number;
  status: 'PENDING' | 'FILLED';
  orderedAt: string;
}

// 거래내역 컴포넌트 props
interface TradeHistoryProps {
  stockCode: string;
}

export default function TradeHistory({
  stockCode,
}: TradeHistoryProps) {
  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [view, setView] = useState<'pending' | 'filled'>(
    'pending'
  );
  const [selectedId, setSelectedId] = useState<string | null>(
    null
  );

  // 전체 주문 가져오기
  useEffect(() => {
    fetch('http://localhost:8000/orders/stock', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        stock_code: stockCode,
        member_id: sessionStorage.getItem('member_id'), // 실제 member_id로 교체
      }),
    })
      .then((res) => res.json())
      .then((data: OrderItem[]) => {
        console.log(data);
        setOrders(data)
      })
      .catch(console.error);
  }, [stockCode]);

  // 분리된 리스트
  // 가져온 주문을 미체결(PENDING)과 체결(FILLED)로 분리
  const pending = orders.filter((o) => o.status === 'PENDING');
  const filled = orders.filter((o) => o.status === 'FILLED');

  // 일괄취소
  const handleCancelAll = () => {
    if (
      window.confirm('정말 모두 거래 취소하시겠습니까?')
    ) {
      fetch(`/api/orders/cancelAll?stockCode=${stockCode}`, {
        method: 'POST',
        // 취소 후에는 미체결인 애들만 필터링해서 남김
      }).then(() => setOrders((os) => os.filter((o) => o.status !== 'PENDING')));
    }
  };

  // 주문취소 버튼
  const handleCancelOne = () => {
    if (!selectedId) return;
    fetch(`http://localhost:8000/orders/cancel`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
      },
      body: JSON.stringify({ id: selectedId }),
    }).then(() =>
      setOrders((os) =>
        os.map((o) =>
          o.id === selectedId ? { o, status: 'CANCELLED' } : o
        )
      )
    );
    // 취소 후 radio 버튼 초기화
    setSelectedId(null);
  };

  return (
    <div className="space-y-4">
      {/* 미체결 & 체결 탭 */}
      <div className="flex border-b-2 border-gray-200">
        <button
          className={`pb-2 ${view === 'pending'
            ? 'border-b-4 border-orange-500 font-semibold'
            : 'text-gray-400'
            }`}
          onClick={() => setView('pending')}
        >
          미체결
        </button>
        <button
          className={`ml-6 pb-2 ${view === 'filled'
            ? 'border-b-4 border-orange-500 font-semibold'
            : 'text-gray-400'
            }`}
          onClick={() => setView('filled')}
        >
          체결
        </button>
      </div>

      {/* 일괄취소 */}
      {/* 미체결 탭일 때만 총 건수와 일괄 취소 버튼 보이기 */}
      {view === 'pending' && (
        <div className="flex justify-between items-center">
          <span>총 {pending.length}건</span>
          <button
            onClick={handleCancelAll}
            className="text-red-500"
          >
            일괄취소
          </button>
        </div>
      )}
      {view === 'filled' && (
        <div>총 {filled.length}건</div>
      )}

      {/* 리스트 */}
      {/* 체결 탭일때 체결된 건수만 보이기 */}
      <div className="space-y-3">
        {(view === 'pending' ? pending : filled).map((o) => (
          <div
            key={o.id}
            className="bg-white rounded p-4 flex flex-col space-y-1 border"
          >
            {/* 미체결 탭에서 종목명과 시간 */}
            <div className="flex items-center space-x-3">
              {view === 'pending' && (
                <input
                  type="radio"
                  name="orderSelect"
                  value={o.id}
                  checked={selectedId === o.id}
                  onChange={() => setSelectedId(o.id)}
                />
              )}
              <span className="font-medium">
                {o.stock_name} {o.order_type === 'BUY' ? '매수' : '매도'}
              </span>
              <span className="text-sm text-gray-500">
                {o.orderedAt}
              </span>
            </div>

            {/* 주문가격, 수량, 미체결량 표시 */}
            <div className="text-sm">
              <div>
                주문가격: {o.price.toLocaleString()}원
              </div>
              <div>주문수량: {o.quantity}주</div>
              {view === 'pending' && (
                <div>
                  미체결량: {o.remainingQuantity}주
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 주문취소 버튼 */}
      {/* 선택된 주문이 있을때만 주문취소 버튼 활성화 */}
      {view === 'pending' && (
        <button
          onClick={handleCancelOne}
          disabled={!selectedId}
          className="w-full bg-red-500 text-white rounded py-2 disabled:opacity-50"
        >
          주문취소
        </button>
      )}
    </div>
  );
}
