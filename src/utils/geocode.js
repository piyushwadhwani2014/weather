const request=require("request")

const geocode =(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoicGl5dXNod2FkaHdhbmkiLCJhIjoiY2p0eWc1aTZ5MGg5MzN5bWhjczZhNnBjOCJ9.HZKUpoooQfBZHisxABLszg'
request({url:url,json:true},(error,response)=>{
    if(error)
    {
     callback("Ops!Unable to connect",undefined)
    }
    else if(response.body.features.length===0)
    {
        callback("Please provide proper location",undefined)
    }
    else{
       callback(undefined,{
           latitude:response.body.features[0].center[1],
           longitude:response.body.features[0].center[0],
           location:response.body.features[0].place_name
       })
    }

})
{

}


}

module.exports=geocode
