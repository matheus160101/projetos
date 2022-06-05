window.onload = function(){
    
    var map;
    function initialize(){
        var mapProp = {
            center: new google.maps.LatLng(-25.4730059, -49.2167837),
            scrollwheel:false,
            zoom:12,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        }

        map = new google.maps.Map(document.getElementById("mapa"),mapProp);
    }

    function addMarker(lat,lng,icon,content,click){
        var latLng = {'lat':lat, 'lng':lng};

        var marker = new google.maps.Marker({
            position:latLng,
            map:map,
            icon:icon
        });

        var infoWindow = new google.maps.InfoWindow({
            content:content,
            maxWidth:200,
            pixelOffset: new google.maps.Size(0,20)
        });

        google.maps.event.addListener(marker,'click',function(){
            infoWindow.open(map,marker);
        });
        
    }

    initialize();

    var conteudo = '<p style="color:black; font-size: 13px; padding:10px 0;border-bottom:1px solid black;">Meu endereço</p>';
    addMarker(-25.4730059, -49.2167837,'',conteudo,true) ;
    

}