// /src/components/ConfirmModal.tsx
'use client';
import React from 'react';

interface ConfirmModalProps {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  message?: string;
}

export default function ConfirmModal({
  visible,
  onConfirm,
  onCancel,
  message = '정말 파산 신청 하시겠습니까?',
}: ConfirmModalProps) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-[80%] max-w-sm p-6">
        <p className="text-center text-base mb-4">{message}</p>
        <div className="flex justify-around">
          <button
            className="px-4 py-2 rounded border border-gray-300 text-gray-600 hover:bg-gray-100"
            onClick={onCancel}
          >
            취소
          </button>
          <button
            className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
            onClick={onConfirm}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
