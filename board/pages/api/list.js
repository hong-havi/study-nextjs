import { connectDB } from "@/util/database"

export default async function handler( request, response ){
    
    const db = (await connectDB).db('hongtest')  
    let Datas = await db.collection('board').find().toArray()

    switch( request.method  ){
        case 'GET' :
            return response.status(200).json(Datas) 
        default :
            return response.status(500).json('Not use Method') 
        
    }
}