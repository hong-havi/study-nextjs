import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

export default async function handler( request, response ){
    
    switch( request.method  ){
        case 'POST' :
            const session = await getServerSession(request, response, authOptions)
        
            const { id, title, content } = request.body
            
            if ( !id.trim() ){
                return response.status(500).redirect('/write')
                //.json('No exist title') 
            }

            if ( !title.trim() ){
                return response.status(500).redirect('/write')
                //.json('No exist title') 
            }
            
            if ( !content.trim() ){
                response.status(500).redirect('/write')
                //.json('No exist content') 
            }

            try{                

                const db = (await connectDB).db('hongtest')  
                const collection = db.collection("board")
    
                const result = await collection.updateOne(
                        { 
                            _id : new ObjectId(id),
                            writer : ( session?.user.name ) ? session?.user.name : ''
                        },
                        { $set : {title:title,content:content} }
                    )
                console.log(result)
            }catch (error) {
                response.status(500).redirect('/write')
            }
            /*return response.status(200).json({
                result : result
            })*/
            response.status(200).redirect('/list') 
            break;
        default :
            response.status(500).json('Not use Method') 
            break;
        
    }
}