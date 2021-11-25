
function updateMap() {

    fetch("data.json")
        .then(response => response.json())
        .then(resp => {
            console.log(resp.data)

            resp.data.forEach(element => {

                latitude = element.latitude;
                longitude = element.longitude;

                cases = element.infected;
                if (cases > 255) {
                    color = "rgb(255, 0, 0)";
                }
                else {
                    color = `rgb(${cases}, 0, 0)`;
                }

                //Mark on the Map
                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map);

            });


        })

}
console.log("Updating map with realtime data")
setInterval(updateMap,10000);
