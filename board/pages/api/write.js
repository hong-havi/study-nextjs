import { connectDB } from "@/util/database"

export default async function handler( request, response ){
    
    switch( request.method  ){
        case 'POST' :
        
            const { title, content } = request.body
            
            if ( !title.trim() ){
                return response.status(500).redirect('/write')
                //.json('No exist title') 
            }
            
            if ( !content.trim() ){
                return response.status(500).redirect('/write')
                //.json('No exist content') 
            }

            try{
                const db = (await connectDB).db('hongtest')  
                const collection = db.collection("board")
    
                const result = await collection.insertOne({
                    title,
                    content
                })
                
            }catch (error) {
                return response.status(500).redirect('/write')
            }
            /*return response.status(200).json({
                result : result
            })*/
            response.status(200).redirect('/list') 
        default :
            return response.status(500).json('Not use Method') 
        
    }
}