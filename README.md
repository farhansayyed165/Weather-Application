# A Simple Weather Web Application

This an application bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

#### `npm install`
Installs all the dependecies needed

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.



### It meets all the requirements for a Web Application:
- Has a search bar for searching by city name and city suggestions
- Displays current weather conditions and provides additional details.
- Forecasts the weather for upcoming week

<!--Image will come here-->
<img src="https://github.com/farhansayyed165/Weather-Application-/blob/main/Final_img.jpg">
<br>

## APIs used:
[<strong>GeoDB Cities API</strong>](https://rapidapi.com/wirefreethought/api/geodb-cities): For getting city names and city coordinates(Longitutde and Latitude)

[<strong>Open Weather API</strong>](https://openweathermap.org/current): For getting weather reports
<br>
<br>


## Overview
This App contains three components:
- Search Component
- Current Weather Component
- Future Forecast Component

### How does this work?
The <strong>Search</strong> component uses a wrapper [`AsyncPaginate`](https://github.com/vtaits/react-select-async-paginate/tree/master/packages/react-select-async-paginate) which helps making suggestions easy
 
Our app pulls city names and location Cordinates(Lattitude and Longitutde) from <strong>GeoDB Cities API</strong> as they are being typed in the search box and displays similar city names as suggestions. Once the city name is submited, the city name passes on to the `Current` and `Future Component`

Once we have the city name and cordinates, we fetch weather reports both <strong>current and future</strong> from <strong>Open Weather API</strong>, and using `States` we can display the details of the reports.

