import { connectDB } from "@/util/database"
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

export default async function handler( request, response ){    

    switch( request.method  ){
        case 'POST' :
            const session = await getServerSession(request, response, authOptions)
        console.log(request.body)
            const { parentId, comment } = JSON.parse(request.body)

            
            if ( !parentId.trim() ){
                return response.status(500).json({
                    result : 0,
                    message : 'No exist parentId'
                }) 
                //.json('No exist title') 
            }
            
            if ( !comment.trim() ){
                return response.status(500).json({
                    result : 0,
                    message : 'No exist comment'
                }) 
                //.json('No exist content') 
            }

            try{
                const db = (await connectDB).db('hongtest')  
                const collection = db.collection("comment")
    
                const result = await collection.insertOne({
                    parentId : parentId,
                    comment : comment,
                    writer : ( session?.user.name ) ? session?.user.name : '',
                    createdatetime : new Date().toUTCString()
                })
                
            }catch (error) {
                return response.status(500).json({
                    result : 0,
                    message : 'error'
                }) 
            }
            /*return response.status(200).json({
                result : result
            })*/
            return response.status(200).json({
                result : 1,
                message : ''
            })
        default :
        return response.status(500).json('Not use Method') 
        
    }
}