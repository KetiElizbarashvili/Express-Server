const express = require("express")
const router=express.Router()
const usersEmailContainer = [{email:"elizbarashviliketi44@gmail.com",name:"keti"}]


router.post('/create-email', (req,res)=>{

    try{
        const {name,email} = req.body

        for(let i =0;i<= usersEmailContainer.length;i++){
            if(usersEmailContainer[i].email === email){
                res.status(400).json({error:"email already existis"})  //user email-is check
            }
        }
    
        usersEmailContainer.push({email:email,name:name}) // aq imqneba user


        res.status(200).json({user:{name:name,email:email}})
        
        
    }catch(e){
        res.status(400).json({error:"ragac moxda sheqmnisas"})
    }

})



router.get('/get-users', (req,res)=>{
    try{

        const user = usersEmailContainer

        if(user.length){
            res.status(200).json({user:user})
        }

        res.status(400).json({user:'Your user is empty'})

    }catch(e){
        res.status(500).json({error:"ragac moxda "})
    }

})


module.exports = router
