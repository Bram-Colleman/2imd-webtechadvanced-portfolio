import Weather from "./weather";

export default class Clothing {
    constructor(){
        this.weather = new Weather();
        this.selectAd();

        //TODO: bekijken om dit 1u in cache op te slaan en workaround delay 7500
        const delay = ms => new Promise(res => setTimeout(res, ms));
        const waitforAPI = async () => {
            await delay(7500);  
            this.selectAd();
        };
        waitforAPI();
    }

    selectAd() {
        let temperature = this.weather.temperature;
        // let temperature = 2;
        if(parseInt(temperature) < 20 && parseInt(temperature) > 0) {
            this.fillAd("https://images.unsplash.com/photo-1470217957101-da7150b9b681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2xvdWR5JTIwY2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80",
                        temperature,
                        `<i class="fa-solid fa-cloud weather-icon"></i>`,
                        "https://cdn.iconscout.com/icon/free/png-512/raincoat-2667112-2212693.png",
                        "It's coat time."
            );

        } 
        else if(parseInt(temperature) < 0){
            this.fillAd(
                        "https://wallpapercave.com/wp/wp2295993.jpg",
                        temperature,
                        `<i class="fa-solid fa-snowflake weather-icon"></i>`,
                        "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/71270/jacket-clipart-xl.png",
                        "It's jacket time."
            );
        } 
        else if(parseInt(temperature) > 20){
            this.fillAd(
                        "https://i.pinimg.com/originals/10/6d/21/106d21ae6c3996d51ddd4c578b1668fb.jpg",
                        temperature,
                        `<i class="fa-regular fa-sun weather-icon"></i>`,
                        "https://www.nicepng.com/png/full/30-301812_svg-stock-dress-clipart-girl-dress-princess-dress.png",
                        "It's dress time."
            );        
        }
    }

    /**
     * @param {background image} bg 
     * @param {current temperature} temperature 
     * @param {icon based on weathertype} weatherIcon 
     * @param {clothing item shown} clothingItem 
     * @param {message shown with clothing item} message 
     */
    fillAd(bg, temperature, weatherIcon, clothingItem, message) {
        let weatherType;

        if(temperature > 20) {
            weatherType = "sunny";
        }
        else if (temperature < 0) {
            weatherType = "freezing";
        }
        else {
            weatherType = "cloudy";
        }
        


        document.querySelector("#ad").classList.add(weatherType);
        document.querySelector("#ad").innerHTML = `
            <img class="bg" src="${bg}">
            <div class="panel"></div>
            <h2 class="temperature">${temperature}°C</h2>
            <h3 class="weather-type">${weatherType}</h3>
            ${weatherIcon}
            <img class="clothing-item" src="${clothingItem}">
            <div class="flex">
                <p class="message ">It's ${weatherType}.</p>
                <p class="message ">${message}</p>
            </div>
        `;
    }

}