import { connectDB } from "@/util/database"
import Link from "next/link"
import ItemList from "./ItemList"

export default async function List(){

    const db = (await connectDB).db('hongtest')  
    let Datas = await db.collection('board').find().toArray()

    console.log(Datas)

    return (
        <div className="list-bg">
            <ItemList datas={ Datas } />
        </div>
    )
}