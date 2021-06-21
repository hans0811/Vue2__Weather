/*
  ask:http://wthrcdn.etouch.cn/weather_mini
  method:get
  parm:city(城市名)
  data:weather

  1. keyup.enter
  2. seach data
  3. render data
  */
 var app = new Vue({
     el:"#app",
     data:{
         city:'',
         weatherList:[],
     },
     methods: {
         searchWeather:function(){
             console.log("weather", this.city)

             // save this
             var that = this;
             // call api
             axios.get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city)
             .then(function(response){
                 //console.log(response.data.data.forecast);
                 that.weatherList = response.data.data.forecast;
             })
             .catch(function(err){})
         },
         changeCity:function(city){
             this.city = city;
             this.searchWeather();
         }
     },
 })