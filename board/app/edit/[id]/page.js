import { ObjectId } from "mongodb"
import { connectDB } from "@/util/database"

export default async function Edit( props ){

    const db = (await connectDB).db('hongtest')  
    let Data = await db.collection('board').findOne({
        _id: new ObjectId(props.params.id)
    })

    return (
        <div>
            <h4>글작성</h4>
            <form action="/api/edit" method="POST">
                <input type="hidden" name="id" defaultValue={ Data._id.toString() } />

                <h5>제목</h5>
                <input type="text" name="title" defaultValue={ Data.title } />
                <h5>내용</h5>
                <input type="text" name="content" defaultValue={ Data.content } />
                <p>
                    <button type="submit">작성</button>
                </p>
            </form>
        </div>
    )
}