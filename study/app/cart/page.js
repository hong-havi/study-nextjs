/** 'user client' 선언시 Client Component */
/**
 * Server Component 
 *  - html에 자바스크립트 기능 넣기 불가능
 *  - useState, useEffect 등 사용불가
 *  - 로딩속도 빠름
 *  - 검색엔진 노출 유리
 *  - 큰 페이지 단위
 * Client Component 
 *  - 전부다 쓰면 좋기 좋음...(작업이 편함)
 *  - html에 자바스크립트 기능넣기 가능
 *  - useState, useEffect 등 사용가능
 *  - 로딩이 느림 
 *    - 자바스크립트 많이 필요
 *    - hydration 필요 ( html 유저에게 보낸 후에 자바스크립트로 html 다 시읽고 분석하는 일)
 *  - JS기능이 필요한곳만
 * 
 */
import {age, name} from './data.js'

import Link from 'next/link'

export default function Cart(){
  let data = ['Prod1','Prod2']

  return (
    <div>
      <h1 className="title">장바구니입니다</h1>
      <Link href="/cart/payment">결제페이지</Link>

      <CartItem product={ data[0] } ></CartItem>
      <CartItem data="데이터1"></CartItem>
      <CartItem data="데이터2"></CartItem>
      <Banner discount="50"/>
      <Banner discount="10"/>
      <Button color="red"/>
      <Button color="blue"/>
    </div>
  )
}

function Banner( Props ){
  return <h5 className="center" >{ Props.discount }% 할인중</h5>
}

function Button( Props ){
  return <button className="center" style={{ color:Props.color }}>버튼</button>
}

/** Server Component **/
function CartItem( props ){
  return (
    <div>
      <div className="cart-item">
        <p>{ props.product } </p>
        <p>$40</p>
        <p>3개</p>
      </div>        
    </div>
    )
}