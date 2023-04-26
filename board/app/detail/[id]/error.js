'use client' //필수

export default function Error({erros, reset}){
    return (
        <div>
            <p>에러페이지</p>
            <button onClick={ ()=>{ reset() }} >리셋</button>
        </div>
    )
}

