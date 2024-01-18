"use client"

import React from 'react'
import { useRouter } from "next/navigation"

const page = () => {
    const survey = false // mbti 검사 완료 boolean
    const router = useRouter();
    
    return (
        <div>
            {!survey 
                ?  
                // mbti 검사페이지
                <div>
                    <h2>MBTI 검사</h2>
                    <p>MBTI 질문들</p>
                </div>
                :
                // 검사결과 페이지
                <div>
                    <h2>당신의 MBTI는 ~입니다</h2>
                    <p className="text-sm text-gray-400 hover:text-slate-700 hover:text-base cursor-pointer" onClick={()=>router.push("/")}>
                        밸런스 게임하러 가기
                    </p>
                </div>
            }
        </div>
    )
}

export default page
