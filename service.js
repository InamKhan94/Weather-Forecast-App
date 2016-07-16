/**
 * Created by inam ullah khan on 11/07/2016.
 */
app.service('cityService',function(){
    this.city="";
});

app.service('weatherService',['$resource',function($resource){
    this.GetWeather=function(city,days){

         var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily",
            { APPID: '295c923427b4024721d1f8d44c40dbde',
                callback: "JSON_CALLBACK",
                cnt: 5
            },


            { get: { method: "JSONP" }});

        return weatherAPI.get({q:city,cnt:days});

    }
}]);
