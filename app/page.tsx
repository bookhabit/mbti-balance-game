"use client"

import { useRouter } from "next/navigation"
import { useState } from "react";

export type userMBTI = "ISTJ"| "ISFJ" | "INFJ"| "INTJ"| "ISTP"| "ISFP"| "INFP"| "INTP"| "ESTP"| "ESFP"|"ENFP"| "ENTP"| "ESTJ"| "ESFJ"| "ENFJ"| "ENTJ"

interface GameCardProps {
  gameName:string
  desc:string
  sort:"if" | "balance" | "couple"
}
const GameCard = ({gameName,desc,sort}:GameCardProps)=>{
  const router = useRouter();
  return(
      <div className=" bg-slate-200 p-11 rounded-3xl w-72 cursor-pointer hover:shadow-lg" onClick={()=>router.push(`/question/?sort=${sort}`)}>
        <h4 className="mb-10">{gameName}</h4>
        <p>ex) {desc}</p>
      </div>
  )
}

export default function Home() {
  const router = useRouter();
  const [userMBTI,setUserMBTI] = useState(true) // TODO : 전역상태 recoil로 변경
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {!userMBTI 
        ? 
        // MBTI 선택하기 TODO : MBTI 나열 컴포넌트로 변경
        <>
          <div className="mb-20">
            <p className="text-xl">당신의 MBTI를 선택하세요</p>
            <p>TODO: MBTI 나열 (컴포넌트)</p>
          </div>
          <p className="text-sm text-gray-400 hover:text-slate-700 hover:text-base cursor-pointer" onClick={()=>router.push("/mbti")}>당신의 MBTI를 모르신다면??</p>
        </>
        :
        // 게임 선택하기 ( 게임 카테고리 )  TODO : 게임 카테고리 컴포넌트로 변경
        <div className="lg:grid-flow-col xl:gap-40 grid grid-flow-row gap-20 ">
          <GameCard 
            gameName="만약에 게임"
            desc="만약에 ~하면 어떻게 할거야?"
            sort="if"
          />
          <GameCard 
            gameName="밸런스 게임"
            desc="평생 춥게 살기 vs 평생 덥게 살기"
            sort="balance"
          />
          <GameCard 
            gameName="커플 게임"
            desc="논쟁,토론..."
            sort="couple"
          />
        </div>
      }
      
    </div>
  )
}
