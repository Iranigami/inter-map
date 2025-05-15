//@ts-ignore
import { FC } from 'react'

type Props = {
  strokeWidth: number
  sqSize: number
  seconds: number
}

export default function CircularProgressBar ({strokeWidth, sqSize, seconds}: Props){
  const radius = (sqSize - strokeWidth) / 2
  const viewBox = `0 0 ${sqSize} ${sqSize}`
  const dashArray = radius * Math.PI * 2
  const dashOffset = dashArray - (dashArray * (seconds/30*100 || 0)) / 100

  return (
    <div className={`flex justify-center items-center relative size-[${sqSize}]`}>
    <svg width={sqSize} height={sqSize} viewBox={viewBox} className='scale-x-[-1] absolute'>
      <circle
        className="fill-none stroke-[#f8ceb5] transition-all delay-100 ease-in duration-300"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeLinecap="round"
        strokeWidth={`${strokeWidth}px`}
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
        }}
      />
    </svg>
    <div className='font-montserrat font-bold text-[120px] text-[#EE8545]'>
        {seconds}
    </div>
    </div>
  )
}