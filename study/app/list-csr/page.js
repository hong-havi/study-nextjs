'use client'

import { useState } from "react"

export default function List(){
    let Products = ['Prod1','Prod2','상품1','상품2']
    /** 자동재랜더링 useState **/
    let [Count, CountChange] = useState([0, 0, 0, 0])

    return (
        <div>
            <h2 className="red center">상품목록</h2>          
            {
                Products.map( (ProductData, index) => {
                    return (
                        /** key 유니크값 사용  **/
                        /** 외부링크시 width, height 속성 필수 , next.config.js 에 선언 필수 **/
                        <div className="food" key={ index }>
                            <img src={ '/test' + index + '.png' } alt="공사중" className="img-size"/>
                            { ProductData }
                            <span style={{ paddingLeft:'10px',paddingRight:'10px' }}>{ Count[index] }</span>
                            <button 
                                onClick={ ()=>{
                                    let tmp = [...Count]
                                    tmp[index]++
                                    CountChange( tmp )
                                }}
                            >+</button>
                            <button
                                onClick={ ()=>{
                                    let tmp = [...Count]
                                    tmp[index]--
                                    CountChange( tmp )
                                }}
                            >-</button>
                        </div>  
                    )
                })
            }
        </div>
    )
}