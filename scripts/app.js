const app = Vue.createApp({
    data() {
      return {
        // User Profile Module
        // This module is used to display a random user profile
        userProfile: {
          firstName: "Varun Shoury",
          lastName: "Golluru",
          age: 25,
          profilePhoto: null
        },
        // Weather Module
        // This module is used to display the weather information of a location
        // The default location is set to London, Ontario, Canada
        weatherModule: {
          defaultLocation: {
            city: "London",
            region: "Ontario",
            country: "Canada"
          },
          temperature: "",
          wind: "",
          weather_description: "",
          location: {
            city: "",
            region: "",
            country: "",
            latitude: "",
            longitude: "",
            population: ""
          }
        },
        // Dictionary Module
        // This module is used to display the definition of a word
        // The default word is set to "hello"
        dictionaryWord: "",
        dictionaryModule: {
          word: "",
          phonetic: "",
          definition: ""
        }
      };
    },
    computed: {
      fullName() {
        return `${this.userProfile.firstName} ${this.userProfile.lastName}`;
      }
    },
    methods: {
      newRandomProfile() {
        // Fetch a random user profile from the API
        // and update the userProfile data object
        fetch("http://comp6062.liamstewart.ca/random-user-profile")
          .then(response => response.json())
          .then(data => {
            this.userProfile.firstName = data.first_name;
            this.userProfile.lastName = data.last_name;
            this.userProfile.age = data.age;
            this.userProfile.profilePhoto = data.profile_picture;
          })
          // catching error if the API is not reachable
          .catch(error => console.error("Error fetching user profile:", error));
      },

      getWeather() {
        // Fetch the weather information for the default location
        // and update the weatherModule data object
        const { city, region, country } = this.weatherModule.defaultLocation;
        const url = `http://comp6062.liamstewart.ca/weather-information?city=${city}&province=${region}&country=${country}`;
  
        fetch(url)
          .then(response => response.json())
          .then(data => {
            this.weatherModule.temperature = data.temperature;
            this.weatherModule.wind = data.wind_speed;
            this.weatherModule.weather_description = data.weather_description;
            this.weatherModule.location = data.location;
          })
          .catch(error => console.error("Error fetching weather data:", error));
      },
      
      getDefinition() {
        // Fetch the definition of the word from the API
        // and update the dictionaryModule data object
        fetch(`http://comp6062.liamstewart.ca/define?word=${this.dictionaryWord}`)
          .then(response => response.json())
          .then(data => {
            const firstResult = data[0]; 
      
            this.dictionaryModule.word = firstResult.word || this.dictionaryWord;
            this.dictionaryModule.phonetic = firstResult.phonetic || "N/A";
            this.dictionaryModule.definition = firstResult.definition || "Definition not found.";
          })
          .catch(error => {
            console.error("Error fetching definition:", error);
            this.dictionaryModule.word = this.dictionaryWord;
            this.dictionaryModule.phonetic = "N/A";
            this.dictionaryModule.definition = "Error fetching definition.";
          });
      }
    },
  
    created() {
      this.newRandomProfile();
      this.getWeather(); 
      
    }
  });
  
  app.mount("#app");


  