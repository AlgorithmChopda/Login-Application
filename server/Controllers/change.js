import mongoose from "mongoose";
import user_data from "../models/user_data.js";
import * as status from './status.js'

const change_user_data = async(req, res) => {
    const {id, name, email, pass} = req.body;
    
    try{
        await user_data.findByIdAndUpdate(id, {name, pass})
        return res.status(200).json({code: status.SUCCESS});
    }
    catch(exception){
        return res.status(200).json({code: status.SOME_THING_WENT_WRONG});
    }
}

export default change_user_data;