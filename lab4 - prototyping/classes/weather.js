export default class Weather {
    constructor() {
        this.getLocation();
        this.latitude;
        this.longitude;
        this.temperature = JSON.parse(localStorage.getItem("weather")).temperature;
        ;
    }

    getLocation() {

        if(!navigator.geolocation) {
            console.log('Geolocation is not supported by your browser');
          } else {
                console.log('Locating…');
            navigator.geolocation.getCurrentPosition(
                this.confirmLocation.bind(this)
                , this.errorLocation);
            
          }
    }

    confirmLocation(location) {
        this.latitude = location.coords.latitude;
        this.longitude = location.coords.longitude;
        this.getTemp();

    }




    getTemp(){
        let url = `https://api.open-meteo.com/v1/forecast?latitude=${this.latitude}&longitude=${this.longitude}&current_weather=true`;
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                localStorage.setItem("weather", JSON.stringify(data.current_weather));
                return this.temperature = data.current_weather.temperature;
            })
            .catch(err => {
                console.log(err);
            });

    }

    logWeather() {
        console.log(this.temperature);
    }

    errorLocation(e){
        console.log(e);
    }
}