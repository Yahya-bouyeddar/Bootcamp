import express from 'express'
const app = express()
app.listen(5000,()=>{
    console.log('server is listening on port 5000');
    
})
app.get('/api/greetings',(req,res)=>{
    res.json({'yahya':'zeb'}
    )
})