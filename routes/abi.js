const router = require('express').Router();

router.use('/usertest',(req,res)=>{
    res.send('Abhineet your test is shuccessfull')
});
//if we are using post it means we are gona request somethin to client....
router.post('/usertest',(req,res)=>{
    const user = req.body.usename;
     res.send('usernae is' + user)
//We are req.body to pass any input to our server

//This body is bassicaly what we are passing to our server
});

module.exports = router;
