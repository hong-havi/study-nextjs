import Link from 'next/link'

export default function Cart(){
  
    return (
      <div>
        <h1>장바구니입니다</h1>
        <Link href="/cart/payment">결제페이지</Link>
      </div>
    )
  }