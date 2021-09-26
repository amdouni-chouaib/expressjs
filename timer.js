const path = require("path")
const hours = new Date().getHours()
const days = new Date().getDay()

const timer = async(req,res,next)=>{
if(
    hours >= 9 && hours <=17 && days > 0 && days < 4
    
){
    next()
}else{
    res.sendFile(path.join(__dirname, "/closed", "closed.html"));

}

}
module.exports = timer;
