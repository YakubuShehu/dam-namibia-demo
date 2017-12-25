/* Google Maps scripts */
function initMap() {
	var mapLatLngFT = new google.maps.LatLng(-22.548344, 27.087817); /* Latitude & Longitude Coordinates */
    
    var mapLatLngGC = new google.maps.LatLng(-22.548344, 27.087817); /* Latitude & Longitude Coordinates */
  
	var mapOptionsFT = {
		zoom: 18,
		center: mapLatLngFT,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: 0
	}
    
    var mapOptionsGC = {
		zoom: 18,
		center: mapLatLngGC,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: 0
	}

	var mapFT = new google.maps.Map(document.getElementById('map-location-ftown'), mapOptionsFT);
    
    var mapGC = new google.maps.Map(document.getElementById('map-location-gc'), mapOptionsGC);
  
	var markerLocation = new google.maps.Marker({
		position: mapLatLngFT,
		map: mapFT,
		title: 'Security Services Botswana (Francistown)'
    });
    
    var markerLocation = new google.maps.Marker({
		position: mapLatLngGC,
		map: mapGC,
		title: 'Security Services Botswana (Gaborone)'
    });
    
    
    
	
	
}