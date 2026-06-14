import React from 'react';
import { MapPin, GraduationCap, Code, Mail } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-[#fbfbfe]">
      {/* --- 네비게이션 바 --- */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 flex justify-between items-center py-4 px-8 shadow-sm">
        <div className="text-xl font-bold text-blue-600 tracking-tight">
          MyPortfolio.
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <a href="#home" className="hover:text-blue-600 transition">소개</a>
          <a href="#skills" className="hover:text-blue-600 transition">기술</a>
          <a href="#projects" className="hover:text-blue-600 transition">프로젝트</a>
          <a href="#contact" className="hover:text-blue-600 transition">연락처</a>
        </div>
      </nav>

      {/* --- 메인 (Hero) 섹션 --- */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-16">
        {/* 배경 그라데이션 장식 */}
        <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] bg-pink-200/40 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute top-1/3 right-1/4 w-[35vw] h-[35vw] bg-blue-200/40 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 right-1/2 w-[40vw] h-[20vw] bg-purple-100/40 rounded-full blur-[120px] -z-10"></div>

        <p className="text-sm font-bold text-blue-600 tracking-widest mb-4">
          WELCOME TO MY PORTFOLIO
        </p>
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
          안녕하세요, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">코딩 애호가</span>
        </h1>
        
        <p className="text-lg text-gray-600 mb-10 max-w-2xl leading-relaxed break-keep">
          새로운 기술을 배우고 문제를 해결하는 것을 즐깁니다.<br/>
          사용자 경험을 중요하게 생각하며 깔끔한 코드를 작성하기 위해 노력합니다.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-3.5 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-200">
            프로젝트 보기
          </button>
          <button className="px-8 py-3.5 bg-white border border-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-50 transition shadow-sm">
            연락하기
          </button>
        </div>
        
        <div className="mt-16 text-gray-400">
          <Mail className="w-6 h-6 mx-auto mb-2" />
        </div>
      </section>

      {/* --- About Me 섹션 --- */}
      <section id="about" className="py-24 px-4 bg-white relative">
        <div className="max-w-5xl mx-auto">
          {/* 섹션 타이틀 */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 inline-block relative">
              About Me
              <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-12 h-1 bg-blue-600 rounded-full"></span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            {/* 왼쪽: AI 아이콘 이미지 영역 */}
            <div className="flex-shrink-0 relative">
              <div className="w-64 h-64 bg-white rounded-full border-4 border-gray-50 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center justify-center p-8">
                {/* 스크린샷과 유사한 AI 연상 SVG 로고 */}
                <svg viewBox="0 0 100 100" className="w-full h-full text-black">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2" />
                  {/* 중앙 AI 박스 */}
                  <rect x="30" y="35" width="40" height="30" rx="4" fill="currentColor" />
                  <text x="50" y="55" fill="white" fontSize="16" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">AI</text>
                  {/* 연결 노드들 (상단) */}
                  <circle cx="35" cy="20" r="3" fill="currentColor" />
                  <line x1="35" y1="23" x2="40" y2="35" stroke="currentColor" strokeWidth="2" />
                  <circle cx="50" cy="15" r="3" fill="currentColor" />
                  <line x1="50" y1="18" x2="50" y2="35" stroke="currentColor" strokeWidth="2" />
                  <circle cx="65" cy="20" r="3" fill="currentColor" />
                  <line x1="65" y1="23" x2="60" y2="35" stroke="currentColor" strokeWidth="2" />
                  {/* 연결 노드들 (하단) */}
                  <circle cx="40" cy="80" r="3" fill="currentColor" />
                  <line x1="40" y1="77" x2="45" y2="65" stroke="currentColor" strokeWidth="2" />
                  <circle cx="60" cy="80" r="3" fill="currentColor" />
                  <line x1="60" y1="77" x2="55" y2="65" stroke="currentColor" strokeWidth="2" />
                  {/* 측면 장식 */}
                  <path d="M 15 50 Q 25 40 30 50 Q 25 60 15 50" fill="currentColor" />
                  <path d="M 85 50 Q 75 40 70 50 Q 75 60 85 50" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* 오른쪽: 소개 텍스트 및 정보 */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 break-keep">
                어제보다 오늘 더 성장하는 개발자, <span className="text-blue-600">가정운</span>입니다.
              </h3>
              
              <p className="text-gray-600 mb-8 leading-relaxed text-[15px] break-keep">
                안녕하세요! 인공지능 개발에 푹 빠져있는 가정운입니다. 인공지능 기술이 특정 인종/성별/나이 등에 편향적이지 않도록 모델을 개선하는 것에 관심이 많습니다. 어려운 문제에 부딪혔을 때 원인을 분석하고 해결해 나가는 과정을 즐기며, 동료들과의 코드 리뷰 및 소통을 통해 함께 성장하는 것을 가치 있게 생각합니다.
              </p>

              {/* 개인 정보 리스트 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2 text-sm text-gray-700">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span>대한민국, 서울</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-4 h-4 text-blue-500" />
                  <span>동양미래대학교 소프트웨어공학</span>
                </div>
                <div className="flex items-center gap-3">
                  <Code className="w-4 h-4 text-blue-500" />
                  <span>인공지능 / 프론트엔드 관심</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}