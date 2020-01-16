const nonStopFlights = [{
  departure: 'Melbourne',
  arrival: 'Beijing' 
}]

const oneStopFlights = [{
  departure: 'Melbourne',
  arrival: 'Guangzhou' 
}, {
  departure: 'Guangzhou',
  arrival: 'Beijing' 
}]

const twoStopsFlights = [{
  departure: 'Melbourne',
  arrival: 'Singapore' 
}, {
  departure: 'Singapore',
  arrival: 'Guangzhou' 
}, {
  departure: 'Guangzhou',
  arrival: 'Beijing'
}]

const threeStopsFlights = [{
  departure: 'Melbourne',
  arrival: 'Sydney' 
}, {
  departure: 'Sydney',
  arrival: 'Singapore'

}, {
  departure: 'Singapore',
  arrival: 'Guangzhou' 
}, {
  departure: 'Guangzhou',
  arrival: 'Beijing'
}]

function getStops(flights) {
  var ans = flights.length - 1
  if (ans === -1){
    return "non-stop";
  }
  if (ans === 0){
    return "1 stop";
  }
  else {
    return ans + " stops";
  }
}

getStops(nonStopFlights);
// non-stop

getStops(oneStopFlights);
// 1 stop

getStops(twoStopsFlights);
// 2 stops

getStops(threeStopsFlights);
// 3 stops test