'use client'

import { useState, useEffect } from "react"

export default function Comment( props ){
    const id = props.id
    let [ comment, setComment ] = useState('')
    let [ commentList, setCommentList ] = useState([])

    /**
     * 1. useEffect 안에 적은 코드는 html이 로드/재렌더링 될 때 마다 실행됩니다. 
     * 1회만 실행하려면 useEffect(()=>{ 여기 코드 작성합시다 }, [] )
     * 2. useEffect 안에 적은 코드는 html 렌더링 후에 실행됩니다. 
     */
    

    useEffect( () => {
        fetch('/api/comment/list/'+id)
        .then( response => response.json() )
        .then((result)=>{
            setCommentList(result)
        })
    },[]) //1회만 실행할때
    

    return (
        <div className="Comment">
            <div>
                {
                    commentList.length >  0  ?
                    commentList.map((data, index) => {
                        return <p key={ index }>{ data.comment }</p>
                    })
                    : 'comment not exist'
                }
            </div>
            <input type="text" onChange={(e) => {
                setComment(e.target.value)
            }}/>
            <button onClick= { (e) =>{
                fetch('/api/comment/write', {
                    method : 'POST',
                    body : JSON.stringify({
                        parentId : id,
                        comment: comment                        
                    })
                }).then( () => {
                    var list = [...commentList]
                    list.push(comment)
                    setCommentList(list)
                })
            }}>댓글작성</button>
        </div>
        
    )
}