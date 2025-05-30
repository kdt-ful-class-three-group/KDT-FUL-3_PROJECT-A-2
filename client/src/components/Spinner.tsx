import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

function Spinner({ loading }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <ClipLoader
        color="#36d7b7" // 스피너 색상
        loading={loading} // 로딩 여부
        size={50} // 크기
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner;
