let searchButton = document.querySelector("#search")
let cityName 

//Add an event listener to the button that runs the functions sendApiRequest and getImage when it is clicked
searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  cityName = document.querySelector("#searchTerm").value
  sendApiRequest()
  getImage()

})

function capitalize(str){
  return str[0].toUpperCase()+str.substr(1);
}

//get the city image from api
async function getImage(){
  let API_KEY2 =   "j-vdX5NnVzzrqVXfweHa3jGZxzNhhQZajse3ALBkfGU";
  try {
    document.querySelector(".image").replaceChildren()
  let response2 = await fetch(`https://api.unsplash.com/search/photos/?client_id=${API_KEY2}&query=${cityName} `);
 // console.log(response2)
  let data2 = await response2.json()
  useApiData2(data2)  
    } catch (e) {
      console.log(e);
     
      let errorMessage = document.createElement("p")
      errorMessage.classList.add("error")
      errorMessage.textContent = 'There is no image for this city'
      document.querySelector(".image").appendChild(errorMessage)
    }
 //console.log(data2);

}

//get weather informations from the second api
async function sendApiRequest(){
  let API_KEY =   "0b453f07038c9f02451ebbbcaf922d77";
  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric `);
  let data = await response.json()
  useApiData(data)
}

//using the data in the application
function useApiData(data){
    try   {
  document.querySelector(".city__name").innerHTML = capitalize(cityName);
  document.querySelector(".city__temperature").innerHTML = data.main.temp
  document.querySelector(".city__temperature-max").innerHTML = data.main.temp_max
  document.querySelector(".city__temperature-min").innerHTML = data.main.temp_min
  document.querySelector(".weather").innerHTML = capitalize(data.weather[0].description);
  document.querySelector(".pressure").innerHTML = data.main.pressure
  document.querySelector(".humidity").innerHTML = data.main.humidity
  } catch (e) {

  }
}

function useApiData2(data2){
 document.body.style.backgroundImage = `url(${data2.results[0].urls.full})`;
 console.log(data2.results[0].urls.full);

    
  }