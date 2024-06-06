export const register = (req,res)=>{         // create function
  const  {username, email, password } = req.body; 
  //db operations 
  //hash the password 
  //create a new user and save to the database
  console.log(req.body);
} 
export const login = (req,res)=>{         // create function
  //db operations 
}
export const logout = (req,res)=>{         // create function
  //db operations 
}  

