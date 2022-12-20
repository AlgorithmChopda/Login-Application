import user_data from "../models/user_data.js"
import * as status from './status.js'

const login = async (req, res) => {
    
    const {email, pass} = req.body;

    try{
        const user = await user_data.findOne( {email, pass})
        
        if(user === null)  
            return res.status(200).json({code: status.INVALID_CREDENTIALS});
    
        return res.status(200).json({code: status.SUCCESS, user: user});
    }
    catch(exception){
        return res.status(200).json({code: status.SOME_THING_WENT_WRONG})
    }
}

export default login;