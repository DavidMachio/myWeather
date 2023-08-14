import "./Weather.css";

const template = () => {
  return `
  <h1>hola</h1>
  <article id="realtime-data"></article>
  `;
};

//Hacemos la petición de los datos crudos y cambiamos el valor de location por el argumento que le pasaremos a la funcion getRealTimeData
//Esta función se encarga de buscar los datos en la API
const getRealTimeData = async (city) => {
  const data = await fetch(
    `https://api.tomorrow.io/v4/weather/realtime?location=${city}&apikey=iuaGxlWD0T55i5vljsX9I8IkTqjmEbOv`
  );
  //parseamos los datos a json
  const dataJSON = await data.json();
  printData(dataJSON);
};
//Esta función se encarga de pintar los datos
const printData = (data) => {
  //Recuperamos el container
  const container = document.querySelector("#realtime-data");
  //Parsear la fecha
  const date = new Date(data.data.time);
  //Aqui tenemos la hora de la api formateada con los datos que queremos
  const formattedDate = date.toLocaleString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = date.toLocaleString("es-ES", {
    hour: "numeric",
    minute: "numeric",
  });

  container.innerHTML = `
  <h3 class="date">${formattedDate}</h3>
  <div class="buscador">
  <input type="text" id="my-input" placeholder="..."/>
  <button id="my-btn">search</button>
  </div>
  <h3 class="hour">${formattedTime}</h3>
  <img src="/weathericons/mixweather.webp" alt="icono de precipitación"class="imgprecipitacion"/>
  <h4 class="temperature">${data.data.values.temperature}º</h4>
  <container class="resume">
  <div class="resume-box">
    <ul>
      <img src="/icons/thermometer.png" class="apparent"/>
    </ul>
    <p>${data.data.values.temperatureApparent}º</p>
  </div>
  <div class="resume-box">
    <ul>
      <img src="/icons/wind.png" class="apparent"/>
    </ul>
    <p>${data.data.values.windSpeed}km/h</p>
  </div>
  <div class="resume-box">
    <ul>
      <img src="/icons/drop.png" class="apparent"/>
    </ul>
    <p>${data.data.values.humidity}%</p>
  </div>
  <div class="resume-box">
    <ul>
      <img src="/icons/visible.png" class="apparent"/>
    </ul>
    <p>${data.data.values.visibility}m</p>
  </div>
  </container>
  `;
};

const Weather = () => {
  document.querySelector("main").innerHTML = template();
  getRealTimeData();
  //Recuperamos el input y el boton
  const myInput = document.querySelector("#my-input");
  const myBtn = document.querySelector("#my-btn");
  myBtn.addEventListener("click", () => {
    getRealTimeData(myInput.value);
  });
};
export default Weather;