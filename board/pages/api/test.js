export default function handler( request, response ){
    switch( request.method  ){
        case 'POST' :
            return response.status(200).json('ok') 
            break;
        case 'GET' :
            return response.status(200).json('ok') 
            break;
    }
}