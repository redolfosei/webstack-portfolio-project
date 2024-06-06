import express from "express" // import express 

const router = express.Router() // call express router 

// router.get("/test",(req,res)=>{
//   console.log("router works");
// }) // using the router, create a get request 

// router.post("/test",(req,res)=>{
//   console.log("router works");
// }) // using the router, create a post request 

// router.put("/test",(req,res)=>{
//   console.log("router works");
// }) // using the router, create a put request to help update items 

// router.delete("/test",(req,res)=>{
//   console.log("router works");
// }) // using the router, create a delete request to help delete items from the DB. 

export default router; // use router inside the app.js to do that, you need to export 