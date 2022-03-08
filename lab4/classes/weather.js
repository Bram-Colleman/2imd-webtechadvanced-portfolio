export default class Weather {
    constructor() {
        this.getLocation();
        this.latitude;
        this.longitude;
    }

    getLocation() {
        const status = document.querySelector('#status');

        if(!navigator.geolocation) {
            console.log('Geolocation is not supported by your browser');
          } else {
            console.log('Locating…');
            navigator.geolocation.getCurrentPosition(
                this.confirmLocation.bind(this)
                , this.errorLocation());
            
          }
    }

    confirmLocation(location) {
        this.latitude = location.coords.latitude;
        this.longitude = location.coords.longitude;
        this.getWeather();
    }

    errorLocation(e){
        console.log(e);
    }

    getWeather(){
        //https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m
    }
}