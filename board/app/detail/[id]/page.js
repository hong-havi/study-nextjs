import { ObjectId } from "mongodb"
import { connectDB } from "@/util/database"
import Comment from "./Comment"

export default async function Detail( props ){
    const Id = new ObjectId(props.params.id)
    const db = (await connectDB).db('hongtest')  
    let Data = await db.collection('board').findOne({
        _id: Id
    })

    return (
        <div className="list-bg">
            <h4>상세페이지</h4>
            <h4>{ Data.title }</h4>
            <p>{ Data.writer }</p>
            <p>{ Data.createdatetime }</p>
            <p>{ Data.content }</p>
            <Comment id={ Id } />
        </div>
    )
}