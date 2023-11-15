import User from "../models/User";

export const getAllUser = async(req,res,next) => {
    let users;
    try{
        users = await User.find();
    }
    catch(err) { console.log(err); }
    if(!users){
        return res.status(404).json({ message: "No users found" });
    }
    return res.status(200).json({users});
}

export const signUp = async(req,res,next) =>{
    // const { name, email, password } = req.body;
    console.log(req.body);
    let existingUser;
    try{
        existingUser = await User.findOne({ email:req.body.email });
    }
    catch(err){ return console.log(err) }
    if(existingUser){
        return res.status(400).json({message: "User already exists."});
    }

    const user = new User({ name:req.body.name, email:req.body.email, password:req.body.password })

    try {
        await user.save();
    } catch (error) {
        return console.log(error);
    }
    return res.status(201).json({user});
}

export const login = async(req,res,next) => {
    const { email, password} = req.body;
    let existingUser;
    try{
        existingUser = await User.findOne({ email });
    } catch(err) { return console.log(err); }

    if(!existingUser){
        return res
            .status(404)
            .json({ message: "Couldn't Find user by this email."})
    }

    let ispasswordCorrect = (password == existingUser.password);
    if(!ispasswordCorrect)
    {
        return res.status(404).json({ message: "Incorrect password" });
    }
    return res.status(200).json({ message:"Login Successful" });
}