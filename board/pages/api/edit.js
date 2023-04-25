import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler( request, response ){
    
    switch( request.method  ){
        case 'POST' :
        
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
                        { _id : new ObjectId(id) },
                        { $set : {title:title,content:content} }
                    )
                
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