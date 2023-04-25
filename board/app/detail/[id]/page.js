import { ObjectId } from "mongodb"
import { connectDB } from "@/util/database"

export default async function Detail( props ){
    const db = (await connectDB).db('hongtest')  
    let Data = await db.collection('board').findOne({
        _id: new ObjectId(props.params.id)
    })

    return (
        <div className="list-bg">
            <h4>상세페이지</h4>
            <h4>{ Data.title }</h4>
            <p>{ Data.content }</p>
        </div>
    )
}