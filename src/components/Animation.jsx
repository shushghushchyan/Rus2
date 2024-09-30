import React from 'react'
import { animation1, animation2 } from '../constant/const'

export default function Animation() {
    return (
        <div className='animation'>
            <div className='anime'>{
                animation1.map((el) => {
                    return (
                        <img className='animImg1' src={el.src} alt={el.alt} />
                    )
                })
            }</div>
            <div className='anime'>{
                animation2.map((el) => {
                    return (
                        <img className='animImg2' src={el.src} alt={el.alt} />
                    )
                })
            }</div>


        </div>
    )
}
