 // DEFINING THE API KEYS FROM OPEN WEATHER API


 const apiKey="de2e4381f8fb06009d6912529976851c";
 const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


 const searchBox=document.querySelector(".search input");
 const searchBtn=document.querySelector(".search button");
 const weatherIcon=document.querySelector(".weather-icon");

 // DEFINING THE ASYNC FUNCTION

     async function checkWeather(city){
     const response = await fetch(apiUrl +city+ `&apiid=${apiKey}`);
     
     if (response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none"; 
     }
     else{
        var data =await response.json();//fetching the data from the api

        //  console.log(data);//1)displaying the data//2)look below to understand y we commeneted this
    
         document.querySelector(".city-name").innerHTML=data.name;//assigning the data to variables
         document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
         document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
         document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
    
         //changing images
         if(data.weather[0].main=="Clouds")
          weatherIcon.src="images/clouds.png";
    
             else  if(data.weather[0].main=="Clear")
             weatherIcon.src="images/clear.png";
    
             else  if(data.weather[0].main=="Drizzle")
             weatherIcon.src="images/drizzle.png";
             else  if(data.weather[0].main=="Humidity")
             weatherIcon.src="images/humidity.png";
             else  if(data.weather[0].main=="Mist")
             weatherIcon.src="images/mist.png";
             else  if(data.weather[0].main=="Rain")
             weatherIcon.src="images/rain.png";
             if(data.weather[0].main=="Snow")
             weatherIcon.src="images/snow.png";
             else  if(data.weather[0].main=="Wind")
             weatherIcon.src="images/wind.png";
    
             document.querySelector(".weather").style.display="block";
             document.querySelector(".error").style.display="none";//no need to display error msg
     }

    


    
 }

   searchBtn.addEventListener("click",()=>{
     checkWeather(searchBox.value);
   })
// CALLING THE FUNCTION