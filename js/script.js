const APIKEY = 'ccc3ce458332f810dc23e767ea13646e';
const imgIcon = document.querySelector('.icon');

let apiCall = function(city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`;
    
    fetch(url).then((response) => 
    response.json().then((data) => {
        
            console.log(data);
            
            document.body.classList.remove('cloudy');
            document.body.classList.remove('sunny');
            document.body.classList.remove('rainy');
            document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°';
            document.querySelector('.city').innerHTML = data.name;
            document.querySelector('.weather').innerHTML = data['weather'][0]['main'];

            switch (data['weather'][0]['main']) {
                case 'Clouds':
                    document.body.classList.add('cloudy');
                    imgIcon.src = 'assets/cloudy-icon.svg';
                break;
                case 'Clear':
                    document.body.classList.add('sunny');
                    imgIcon.src = 'assets/sunny-icon.svg';
                break;
                case 'Drizzle':
                    document.body.classList.add('rainy');
                    imgIcon.src = 'assets/rainy-icon.svg';
                break;
                case 'Rain':
                    document.body.classList.add('rainy');
                    imgIcon.src = 'assets/rainy-icon.svg';
            }

            document.querySelector('.cloudy-details').innerHTML = data.clouds.all + '%';
            document.querySelector('.humidity-details').innerHTML = data.main.humidity + '%';
            document.querySelector('.wind-details').innerHTML = Math.round(data.wind.speed) + 'km/h';
            document.querySelector('.pressure-details').innerHTML = Math.round(data.main.pressure) + 'hPa';

            document.querySelector('.paris').addEventListener('click', () => {
                apiCall('Paris');
            });

            document.querySelector('.london').addEventListener('click', () => {
                apiCall('London');
            });

            document.querySelector('.newyork').addEventListener('click', () => {
                apiCall('New York');
            });

            document.querySelector('.montreal').addEventListener('click', () => {
                apiCall('Montreal');
            });

        })
       
    )
};

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    let city = document.querySelector('.text').value;

    apiCall(city);
});

apiCall('Saint-Jorioz');