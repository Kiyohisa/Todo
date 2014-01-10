function doClick(evt) {
	Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);
	
	if(evt.clicksource == 'leftButton' || evt.clicksource== 'leftPane' ||
	evt.clicksource == 'leftView') {
		Ti.API.info("Annotation " + evt.title + ", left button clicked.");
	}
};

function setRegion(evt) {
	if (OS_IOS) {
		$.mapView.region = {
			latitude:37.390749, longitude:-122.081651,
			latitudeDelta:0.01, longitudeDelta:0.01
		};
	}
}

$.mapView.annotations = [$.mountainView];
$.mapView.region = {latitude:37.390749, longitude:-122.081651, latitudeDelta:0.01, longitudeDelta:0.01};

$.map.open;
