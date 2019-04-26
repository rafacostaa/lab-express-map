const directionsService = new google.maps.DirectionsService;
const directionsDisplay = new google.maps.DirectionsRenderer;

function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const myLoc = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      startMap(myLoc);
    }, (err) => {
      console.log('Error in the geolocation service.', err);
    });
  } else {
    console.log('Browser does not support geolocation.');
  }
}

function startMap(myLoc = null) {
  console.log('AAA')
  const map = new google.maps.Map(
    document.getElementById('map'),
    {
      zoom: 11,
      center: {
        lat: -23.552133,
        lng: -46.6375192,
      },
    },
  );

  // const whereamI = new google.maps.Marker({
  //   position: myLoc,
  //   map,
  //   title: 'Where I am',
  // });

  const myHome = {
    lat: -23.576363,
    lng: -46.649341,
  };


  // const directionRequest = {
  //   origin: myLoc,
  //   destination: myHome,
  //   travelmode: 'DRIVING',
  // };

  // directionsService.route(
  //   directionRequest,
  //   (response, status) => {
  //     if (status === 'OK') {
  //       // everything is ok
  //       directionsDisplay.setDirections(response);
  //     } else {
  //       // something went wrong
  //       window.alert(`Directions request failed due to ${  status}`);
  //     }
  //   },
  // );
  // directionsDisplay.setMap(map);
}

getUserLocation();
