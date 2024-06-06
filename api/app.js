import express from "express" //import express
import postRoute from "./routes/post.route.js"
import authRoute from "./routes/auth.route.js"

const app = express() //create app

app.use(express.json()) //allow app to use json objects 

app.use("/api/posts",postRoute)
app.use("/api/auth",authRoute)

app.listen(8800, () => {
  console.log("Sever is running...")
}) // to run app, listen on a port number
