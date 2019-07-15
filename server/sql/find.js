const User = require('./prolists') 
User.find({}, {}, (err, data) => { 
    if (err) throw err 
    console.log(data) 
})