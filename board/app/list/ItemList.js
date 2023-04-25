'use client'

import { useEffect } from "react"
import DetailLink from "./DetailLink"

export default function ItemList(props){

    useEffect( ()=> {
        //API를 통해 데이터 가져옴 Ajax, Axios ... 
        // 또는 props로 사용

    },[])

    return (
        <div>
        {
            props.datas.map(( data, index ) =>{
                return (
                    <div className="list-item" key={ index }>
                        <a href={ `/detail/${data._id}` }>
                            <h4>{ data.title }</h4>
                        </a>
                        <DetailLink id={data._id}></DetailLink>&nbsp;
                        <a href={ `/edit/${data._id}` }>수정</a>&nbsp;
                        <button onClick={ () => {
                            fetch('/api/delete')
                        }}
                        >삭제</button>&nbsp;
                        <p>{ data.content }</p>
                    </div>
                )
            })
        }
        </div>
    )
}