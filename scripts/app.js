const app = Vue.createApp({
    data() {
        return {
            firstName: '',
            lastName: '',
            age: null,
            profilePhoto: null,
        };
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        },
    },    
    computed: {
        
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
    */