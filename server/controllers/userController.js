import {Webhook} from 'svix'

// API Controller Function to manage Clerk User with database
// https://localhost:4000/api/user/webhooks
const clerkwebhooks = async(req,res)=>{
try{
  // create a svix instance with clerk webhook secret.
  const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)
}catch(error){
  
}
}