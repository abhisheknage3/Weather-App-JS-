const btn=document.getElementById('Search-btn')
const inp=document.getElementById('City-inp')
const cityname=document.getElementById('cityname')
const citytime=document.getElementById('citytime')
const citytemp=document.getElementById('citytemp')

 async function getdata(cityName){
      const promis= await fetch(`
      http://api.weatherapi.com/v1/current.json?key=694156b911794f478a972738241201&q=${cityName}&aqi=yes    `)
    return  await promis.json()
}

btn.addEventListener('click', async()=>{
    const value=inp.value
   const res=await getdata(value)
   cityname.innerText=`${res.location.name} ,${res.location.region} - ${res.location.country } `
   citytime.innerText=res.location.localtime
   citytemp.innerText=res.current.temp_c

})