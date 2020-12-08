const express = require('express')
const router = express.Router()
let users = require('./users.json')
router.get('/', (req, res)=>{
    res.send("hello")
})
router.get('/login', (req, res)=>{
    console.log(req.query)
    res.send('login route')
})
router.post('/login', (req, res) => {
    let data = req.body;
    console.log(data)
  
    let user = users.filter((i) => {
      return (i.username === data.username && i.pw === data.pw)
    })[0];
    
    if(user) {
      return res.json({
        msg: "success",
        username: user.username

      })
    }
    
    res.json({
      msg: "Incorrect username or Password"
    })
});

module.exports = router