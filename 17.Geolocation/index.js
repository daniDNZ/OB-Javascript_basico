let marker, map;

function initMap() {
    const position = {
        lat: -25.363,
        lng: 131.044
    };

    map = new google.maps.Map(document.querySelector('#map'), {
        zoom: 4,
        center: position
    });

    marker = new google.maps.Marker({
        position: position,
        map,
        title: "Posición Inicial"
    });

    new google.maps.Marker({
        position: {
            lat: 41.8980142,
            lng: 12.4365471
        },
        map, 
        title: 'Tiramisú muy rico'
    });

    new google.maps.Marker({
        position: {
            lat: -37.8577003,
            lng: 175.6457378
        },
        map,
        title: 'Hobbiton'
    });
    
    new google.maps.Marker({
        position: {
            lat: 43.2542052,
            lng: 1-7.0786285
        },
        map,
        title: 'Ruta del Cares'
    });
    

    geoPosition();
}

function geoPosition() {
    if(navigator.geolocation) {
        const geoLoc = navigator.geolocation;
        const options = { timeout: 60000 };
        const watchPos = geoLoc.watchPosition(centerMap, onError, options);
    } else {
        alert('Tu navegador no admite geolocalización');
    }
}

function centerMap(position) {
    const newPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    };

    console.log(newPosition);
    marker.setPosition(newPosition);
    map.setCenter(newPosition);
}

function onError(error) {
    console.log('Se ha producido un error');
    console.log(error);
}