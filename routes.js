const route=require('react-router-dom')
const routes=route()
routes.get('/',(req,res)=>{
    res.end({
        status:"succes"
    })
})

module.exports