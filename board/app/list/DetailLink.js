'use client'

import { useRouter } from "next/navigation"

export default function DetailLink( props ){
    console.log(props.id)
    let router = useRouter()

    return (
        <button 
            onClick = { () => {
                router.push('/detail/'+props.id)
            }}
        >버튼</button>
    )
}