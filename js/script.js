window.addEventListener('load', () =>{
    let loader = document.querySelector('.loader');
    loader.classList.add('loaderHidden');
    loader.addEventListener('transitionend', () =>{
        document.body.removeChild('.loader');
    })
})

// the social media button 
function button () {
    var options = {
        instagram: "md_angelwhite", // Instagram username
        whatsapp: "+2348102678284", // WhatsApp number
        call_to_action: "Message me", // Call to action
        button_color: "#000000", // Color of button
        position: "left", // Position may be 'right' or 'left'
        order: "instagram,whatsapp", // Order of buttons
        pre_filled_message: "Hello, I want to make an enquiry, my name is ...", // WhatsApp pre-filled message
    };
    var proto = 'https:', host = "getbutton.io", url = proto + '//static.' + host;
    var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
    s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
    var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
}
button();


async function weather(){
    try{
        let loca = document.getElementById('location').value;
        let area = document.getElementById('area')
        let region = document.getElementById('region')
        let temp = document.getElementById('temp')
        let country = document.getElementById('country')
        let local_t = document.getElementById('local_t')
        let l_update = document.getElementById('l_update')
   
        let lon = document.getElementById('lon')
        let lat = document.getElementById('lat')

        
        const data = await fetch("https://api.weatherapi.com/v1/current.json?key=111bffb47d424ca398492351232701&q="+loca+"&aqi=no")
        const result = await data.json()
        let areaName =result.location.name
        area.innerHTML = "Area: " + areaName 

        let areaRegion = result.location.region
        region.innerText ="Region: " + areaRegion

        let areaCountry = result.location.country
        country.innerHTML = "Country: " + areaCountry

        let areaLon = result.location.lon
        lon.innerHTML = "Longitude: " + areaLon

        let areaLat = result.location.lat
        lat.innerHTML = "Latitude: " + areaLat

        let temp_C = result.current.temp_c
        temp.innerHTML = "Temperature: " + temp_C + " °C"

        let localTime = result.location.localtime
        local_t.innerHTML = "Local Time: " + timeDateFormat(localTime)

        let lastUpdated = result.current.last_updated
        l_update.innerHTML = "Last Updated: " + timeDateFormat(lastUpdated)


    }catch {

        swal({
            title: "ERROR!",
            text: "INVALID INPUT",
            icon: "error",
            button: "Okay",
          });
    }

}



function timeDateFormat(d){
    let getDays = new Date(d).getDay();
    let getDate = new Date(d).getDate();
    let getMonth = new Date(d).getMonth();
    let getYear = new Date(d).getFullYear();
    let Hours = new Date(d).getHours();
    let Mins = new Date(d).getMinutes();

    dayOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let getDayName = dayOfTheWeek[getDays];

    monthsOfTheYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'Deceomber'];
    getMonth = monthsOfTheYear[getMonth];

    // To convert to a 12 hour format (AM and PM) 
    let session = "AM";  
    if(Hours == 0){
        Hours = 12;
    }
    if(Hours > 12){
        Hours -= 12;
        session = "PM";
    }

    Hours = (Hours < 10) ? "0" + Hours : Hours;
    Mins = (Mins < 10) ? "0" + Mins : Mins;

    return getDayName +" "+ getDate +", "+ getMonth +" "+ getYear +" "+ Hours +":"+ Mins +" "+ session;
}


