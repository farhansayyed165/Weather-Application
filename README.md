# Web Application

This an application bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 


#### It meets all the requirements for a Web Application:
- Has a search bar for searching by city name and city suggestions
- Displays current weather conditions and provides additional details.
- Forecasts the weather for upcoming week
<br>
<!--Image will come here-->
<img src="https://github.com/farhansayyed165/Weather-Application-/blob/main/Final_img.jpg">

## APIs used:
[GeoDB Cities API](https://rapidapi.com/wirefreethought/api/geodb-cities)

[Open Weather API](https://openweathermap.org/current)
<br>
<br>

## Overview
This App contains three components:
- Search Component
- Current Weather Component
- Future Forecast Component

### How does this work?
The <strong>Search</strong> component uses a wrapper [`Async Pagianate`](https://github.com/vtaits/react-select-async-paginate/tree/master/packages/react-select-async-paginate) which helps making suggestions easy
 
Our app pull city names from <strong>GeoDB Cities API</strong> as they are being typed in the search box and displays similar city names as suggestions. Once the city name is submited, the city name passes on to the `Current and Future forecast Component`



