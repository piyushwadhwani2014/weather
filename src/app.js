const express=require("express")
const path=require("path")
const hbs=require("hbs")
const geocode=require("./utils/geocode")
const weathercode=require("./utils/weathercode")
const app=express()
const port=process.env.PORT || 3000
const pathdirectory=path.join(__dirname,'../public')
const partialspath=path.join(__dirname,"../views/partials")
app.use(express.static(pathdirectory))
hbs.registerPartials(partialspath)
app.set("view engine","hbs")

app.get("/index",(req,res)=>{

    res.render("index",{
        name:"Piyush Wadhwani",
        title:"Weather"
    })
})
app.get("/about",(req,res)=>{
    res.render("about",{
        title:"About us",
        name:"Piyush Wadhwani"
    })
})
app.get("/help",(req,res)=>{
   res.render("help",{
       email:"piyushwadhwani2014@gmail.com",
       title:"Help Info",
       name:"Piyush Wadhwani"
   })

   
})
app.get("/weather",(req,res)=>{

if(!req.query.address)
{
    return res.send({
        error :"You must provide address term"
    })
}
else{
    
    geocode(req.query.address,(error,{latitude,longitude,location}={})=>{
if(error)
{
    return res.send(error)
}

weathercode(latitude,longitude,(error,forecastdata)=>{
if(error){
    res.send(error)
}
else{
res.send(
    {
        forecast:forecastdata,
        location,
        address:req.query.address,
        
    }
)
}

})
    })
    
}
})

app.get("*",(req,res)=>{
    res.render("404",{
        name:"Piyush Wadhwani",
        title:"404",
        errormessage:"Page not Found"
    })

}
)
app.listen(port,()=>{
    console.log("server is up ...")
})