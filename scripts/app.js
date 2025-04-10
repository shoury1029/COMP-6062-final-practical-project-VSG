const app = Vue.createApp({
    data() {
        return {
            userProfile:{
                firstName: 'Varun',
                lastName: '',
                age: 25,
                profilePhoto: null
            },
            weatherModule: {
                temperature: "4 °C",
                wind_speed: "25 km/h",
                weather_description: "Partly cloudy",
                location: {
                    city: "Toronto",
                    region: "Ontario",
                    country: "Canada",
                    latitude: "43.667",
                    longitude: "-79.417",
                    population: "4612191"
                }
            }
        };
    },
    computed:  {
        fullName() {
            return `${this.firstName}  ${this.lastName}`;
        },
    },    
    methods: {
        newRandomProfile() {
            fetch('http://comp6062.liamstewart.ca/random0user-profile')
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                else {
                    console.log('Error. Try again');
                }
            })
        },
        getWeather(){
            fetch('http://comp6062.liamstewart.ca/weather-information')

        },
    },
});
    
    
app.mount('#app');

/*
{
    "first_name": "Antoniy",
    "last_name": "Konovalyuk",
    "email": "antoniy.konovalyuk@example.com",
    "age": 66,
    "profile_picture": "https://randomuser.me/api/portraits/men/88.jpg"
  }

  {
  "temperature": "4 °C",
  "wind_speed": "25 km/h",
  "weather_description": "Partly cloudy",
  "location": {
    "city": "Toronto",
    "region": "Ontario",
    "country": "Canada",
    "latitude": "43.667",
    "longitude": "-79.417",
    "population": "4612191"
  }
}
*/