import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

export default async function Write(){
    let session = await getServerSession(authOptions)

    if( !session?.user ){
        return ( 
                <div>
                    <p>로그인해주세요.</p>
                </div> 
            )
    }

    return (
        <div>
            <h4>글작성</h4>
            <form action="/api/write" method="POST">
                <h5>제목</h5>
                <input type="text" name="title" />
                <h5>내용</h5>
                <input type="text" name="content" />
                <p>
                    <button type="submit">작성</button>
                </p>
            </form>
        </div>
    )
}