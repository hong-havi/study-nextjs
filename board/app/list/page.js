import { connectDB } from "@/util/database"
import ItemList from "./ItemList"

export const dynamic = 'force-dynamic'
export const revalidate = 60 // 캐싱 (sec) ISR

export default async function List(){

    const db = (await connectDB).db('hongtest')  
    let Datas = await db.collection('board').find().toArray()

    /**
     * await fetch('/api/list', { cache: 'force-cache' }) // 캐싱
     * await fetch('/api/list', { cache: 'no-store' }) // 강제 논캐싱
     * await fetch('/api/list', { next: {revalidate:60} }) // 초단위 캐싱 (sec)
     */

    return (
        <div className="list-bg">
            <ItemList datas={ Datas } />
        </div>
    )
}