let searchButton = document.querySelector("#search")
let cityName = document.querySelector("#searchTerm").value



//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  sendApiRequest()
})


//An asynchronous function to fetch data from the API.
async function sendApiRequest(){
  let API_KEY =   "0b453f07038c9f02451ebbbcaf922d77";
  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric&lang=fr `);
  console.log(response)
  let data = await response.json()
  console.log(data);
  useApiData(data)
}


//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data){
  document.querySelector(".city__name").innerHTML = cityName
  document.querySelector(".city__temperature").innerHTML = data.temp
}

