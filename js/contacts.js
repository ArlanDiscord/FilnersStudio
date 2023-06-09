navigator.geolocation.getCurrentPosition(function(position) {
    coords = position.coords;
    console.log(coords);
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let map = new ol.Map({
        target: "map",
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([37.41, 8.82]),
            zoom: 10
        })
    });
});

let links = document.querySelectorAll(".scroll");
let targetID;
links.forEach(function (element) {
    element.addEventListener('click', function (event) {
        event.preventDefault();
        targetID = element.getAttribute('href');
        document.querySelector(targetID).scrollIntoView({
            behavior: "smooth",
            block: 'start'
        })
    })
})