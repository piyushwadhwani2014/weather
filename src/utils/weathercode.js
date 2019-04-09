 const request=require("request")

// const url="https://api.darksky.net/forecast/8c69b59517a4a8e68031fba7b6273e70/23.1793,75.7849"

// request({url:url,json:true},(error,response)=>{

//     if(error)
//     {
//       console.log("something went wrong!!")
      
//     }
//       else if(response.body.error)
//       {
//           console.log("unable to find location. please check if place name is correct or not and try again")
//       }
    
//     else
//     console.log("temperature "+response.body.currently.temperature)
// }
// )




const weathercode=(latitude,longitude,callback)=>{

    const url='https://api.darksky.net/forecast/8c69b59517a4a8e68031fba7b6273e70/'+latitude+','+longitude+'?units=si'





    request({url:url,json:true},(error,response)=>{

        if(error)
        {
            callback("something went wrong!!",undefined)
          //console.log("something went wrong!!")
          
        }
          else if(response.body.error)
          {
              callback("unable to find location. please check if place name is correct or not and try again",undefined)
          }
        
        else
        callback(undefined,response.body.daily.data[0].summary+"It is currently "+response.body.currently.temperature+"% degrees out.")
    }
    )


}

module.exports=weathercode







