export default function Write(){
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