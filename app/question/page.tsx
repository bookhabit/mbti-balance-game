"use client"

import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

const QuestionPage = ()=>{
    const router = useRouter();
    return(
        <div className=' bg-zinc-400 w-44 h-44 p-20 cursor-pointer hover:shadow-lg' onClick={()=>router.push(`/`)}>
            <p className='text-xl'>1~20</p>
        </div>
    )
}

const page = () => {
    // 파라미터 sort에 따라서 어떤 게임인지 종류 
    const searchParams = useSearchParams()
    const param = searchParams.toString()
    const sortName = param.split('=')[1]

    // sortName에 해당하는 게임 데이터 패칭
    
    // 게임 종류 20개단위로 선택할 수 있도록 - 선택하면 실제 질문페이지으로 넘어가기

  return (
    <div className="h-screen flex items-center justify-center">
        <div className='grid xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-20'>
            <QuestionPage/>
            <QuestionPage/>
            <QuestionPage/>
            <QuestionPage/>
        </div>
    </div>
  )
}

export default page
