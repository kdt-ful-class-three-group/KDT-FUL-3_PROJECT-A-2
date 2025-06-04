// /src/app/my-page/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// 나중에 연결할 supabase (지금은 주석 처리했으나, 임시 더미로 테스트)
// import { supabase } from '@/lib/supabaseClient'; 
import ScoreCircle from '@/components/ScoreCircle';
import RatingChart from '@/components/RatingChart';
import ConfirmModal from '@/components/ConfirmModal';
import Nav from '@/components/Nav';
import Title from '@/components/Title';

function mapScoreToCreditGrade(score: number): number {
  if (score >= 950 && score <= 1000) return 1;
  if (score >= 800) return 2;
  if (score >= 700) return 3;
  if (score >= 650) return 4;
  if (score >= 600) return 5;
  if (score >= 550) return 6;
  return 7;
}

interface UserProfile {
  id: string;
  nickname: string;
  credit_score: number;       
  credit_grade: number;       
  invest_grade: number;       
  credit_percentile: number;  
  invest_percentile: number;  
}

export default function MyPage() {
  const router = useRouter();

  const [user, setUser] = useState<UserProfile | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProfile() {
      // 나중에 실제 SupaBase 연동할 때 이 부분 사용
      // const { data: { session } } = await supabase.auth.getSession();
      // if (!session?.user) {
      //   router.replace('/auth/login');
      //   return;
      // }
      // const userId = session.user.id;
      // const { data, error } = await supabase
      //   .from('profiles')
      //   .select('id, nickname, credit_score, invest_grade, credit_percentile, invest_percentile')
      //   .eq('id', userId)
      //   .single();
      // if (error || !data) {
      //   console.error('프로필 로딩 실패:', error);
      //   await supabase.auth.signOut();
      //   router.replace('/auth/login');
      //   return;
      // }
      // const score = data.credit_score;
      // const grade = mapScoreToCreditGrade(score);
      // setUser({
      //   id: data.id,
      //   nickname: data.nickname,
      //   credit_score: score,
      //   credit_grade: grade,
      //   invest_grade: data.invest_grade,
      //   credit_percentile: data.credit_percentile,
      //   invest_percentile: data.invest_percentile,
      // });
      // setIsLoading(false);

      // SupaBase 연결 전 더미 데이터 테스트
      const dummyScore = 962;
      const dummyGrade = mapScoreToCreditGrade(dummyScore);
      setUser({
        id: 'dummy-id',
        nickname: '윥',
        credit_score: dummyScore,
        credit_grade: dummyGrade,
        invest_grade: 5,
        credit_percentile: 4,
        invest_percentile: 4,
      });
      setIsLoading(false);
    }

    fetchProfile();
  }, [router]);

  // 로그아웃 핸들러
  const handleLogout = async () => {
    // sessionStorigie에 저장된 사용자 정보 삭제
      sessionStorage.clear();
    // 2) 페이지 내 user 상태 초기화
      setUser(null);

    // 3) 거래소 페이지로 리다이렉트
      router.replace('/');
  };

  // 파산신청(계정 삭제) 핸들러
  const handleBankruptcyConfirm = async () => {
    if (!user) return;
    setShowModal(false);

    // 실제 SupaBase 연동 시, 프로필 삭제/유저 삭제 로직 넣기
    // await supabase.from('profiles').delete().eq('id', user.id);
    // await supabase.auth.signOut();

    router.replace('/');
  };

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        로딩 중...
      </div>
    );
  }

  return (
    <div className="flex flex-col mb-25">

     <Title title="마이페이지" bookmark={false} dictionary={false}  />

      {/* 닉네임 */}
      <section className="mt-4 px-4 flex justify-center">
        <h2 className="text-xl font-semibold flex justify-center">{user?.nickname}님, 반갑습니다</h2>
      </section>

      {/* 동그라미: 등급 + 점수 */}
      <section className="mt-6 px-4 flex flex-col items-center">
        <ScoreCircle
          creditGrade={user?.credit_grade ?? 1}
          creditScore={user?.credit_score ?? 0}
        />
      </section>

      {/* 신용등급표 & 모의투자 등급표 */}
      <section className="mt-8 px-4">
        <RatingChart
          userCreditGrade={user?.credit_grade ?? 1}
          userInvestGrade={user?.invest_grade ?? 1}
          creditPercentile={user?.credit_percentile ?? 0}
          investPercentile={user?.invest_percentile ?? 0}
        />
      </section>

      {/* 로그아웃 & 파산신청 버튼 */}
      <section className="mt-6 px-4 flex justify-between">
        <button
          className="flex-1 mr-2 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          onClick={handleLogout}
        >
          로그아웃
        </button>
        <button
          className="flex-1 ml-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => setShowModal(true)}
        >
          파산신청
        </button>
      </section>

      {/* ConfirmModal (파산 경고창) */}
      <ConfirmModal
        visible={showModal}
        onCancel={() => setShowModal(false)}
        onConfirm={handleBankruptcyConfirm}
        message="정말 파산 신청 하시겠습니까?"
      />
      {/* 네비게이션 */}
      <Nav />
    </div>
  );
}
