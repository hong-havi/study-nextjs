import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function handler( request, response) {
  if ( request.method === "POST" ) {
      const hash = await bcrypt.hash(request.body.password, 10);
      request.body.password = hash;

      //console.log(hash)
      //console.log(request.body)

      let db = (await connectDB).db('hongtest');
      await db.collection('user_info').insertOne(request.body);
      response.status(200).json('Success');
  }
}; 