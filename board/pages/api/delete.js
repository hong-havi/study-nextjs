import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

export default async function handler( request, response ){
    
    switch( request.method  ){
        case 'POST' :
            const session = await getServerSession(request, response, authOptions)
        
            const id = JSON.parse(request.body).id

            try{
                const db = (await connectDB).db('hongtest')  
                const collection = db.collection("board")
                
                const result = await collection.deleteOne(
                        { 
                            _id : new ObjectId(id),
                            writer : ( session?.user.name ) ? session?.user.name : ''
                        }
                    )
                if( result.deleteCount > 0 ){
                    response.status(200).json({
                        'result' : 1,
                        'message' : 'Delete Complete'
                    }) 
                }else{
                    response.status(200).json({
                        'result' : 0,
                        'message' : 'Delete Fail'
                    }) 
                }
                
            }catch (error) {
                response.status(500).json({
                    'result' : 0,
                    'message' : 'DB ERROR'
                }) 
            }

            break;
        default :
            response.status(500).json('Not use Method') 
            break;
        
    }
}