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
                        <button onClick={ (e) => {
                            fetch('/api/delete',{
                                method : 'POST',
                                body : JSON.stringify({
                                    id : data._id
                                })
                            }).then( (response) => {

                                return response.json()
                            }).then( ( data ) =>{
                                //리턴된 Json 사용시 다음요청 진행후 처리해야하여 then 이후 사용
                                console.log(data)
                            
                                if( data.result == 1){
                                    const target = e.target.parentElement
                                    target.style.opacity = 0
                                    setTimeout( () => {
                                        target.style.display = 'none'
                                    },1000)
                                }else{
                                    alert(data.message)
                                }
                            }).catch( (error) => {
                                console.log(error)
                            })
                        }}
                        >삭제</button>&nbsp;
                        <p>{ data.content }</p>
                        <p>{ data.writer }</p>
                        <p>{ data.createdatetime }</p>
                    </div>
                )
            })
        }
        </div>
    )
}