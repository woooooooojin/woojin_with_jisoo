window.addEventListener("load", function () {
  console.log("kakao:", window.kakao);

  var container = document.getElementById("map");

  var options = {
    center: new kakao.maps.LatLng(35.196, 129.0794),
    level: 3,
  };

  var map = new kakao.maps.Map(container, options);

  var markerPosition = new kakao.maps.LatLng(35.196, 129.0794);

  // 마커
  var marker = new kakao.maps.Marker({
    position: markerPosition,
  });

  // 마커가 지도 위에 표시
  marker.setMap(map);
});
