
function initPage() {

    function showWeatherByPosition(position) {

        var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&units=metric&APPID=35d49c6ea9f910e54c8a6b249ca5bce9";
        
        $.get(url, function (data) {
            
            //console.log(data);
            
            $("#location").html(data.name);
            $("#weather").html(data.main.temp + " C");
            
            $("article").show();
        })
        
    }

	function getCurrentLocation() {
        
        if (Modernizr.geolocation) 
            navigator.geolocation.getCurrentPosition(showWeatherByPosition);
        else 
            alert("The geolocation api was not supported by your browser");
        
    }

    $("article").hide();

    getCurrentLocation();

};