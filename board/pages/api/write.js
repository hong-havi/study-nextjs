import { connectDB } from "@/util/database"
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

export default async function handler( request, response ){    

    switch( request.method  ){
        case 'POST' :
            const session = await getServerSession(request, response, authOptions)
        
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
                    title : title,
                    content : content,
                    writer : ( session?.user.name ) ? session?.user.name : '',
                    createdatetime : new Date().toUTCString()
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