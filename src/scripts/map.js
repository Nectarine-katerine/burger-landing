(function(){
  ymaps.ready(init);

  var placemarks = [
    {
      latitude: 59.97,
      longitude: 30.31,
      hintContent: '<div class="map__hint"> ул.Литералов, д. 19 </div>',
      ballonContent: [
        '<div class="map__balloon">',
        '<img class="map__burger-img" src="img/" alt="Burger"/>',
        'Самые вкусные бургеры у нас! Заходите по адресу: ул.Литералов, д. 19',
        '</div>'
      ]
    },
    {
      latitude: 59.94,
      longitude: 30.25,
      hintContent: '<div class="map__hint"> Малый проспект В 0, д. 64 </div>',
      ballonContent: [
        '<div class="map__balloon">',
        '<img class="map__burger-img" src="img/" alt="Burger"/>',
        'Самые вкусные бургеры у нас! Заходите по адресу: Малый проспект В 0, д. 64',
        '</div>'
      ]
    },
    {
      latitude: 59.93,
      longitude: 30.34,
      hintContent: '<div class="map__hint"> наб. реки Фонтанки, д. 56 </div>',
      ballonContent: [
        '<div class="map__balloon">',
        '<img class="map__burger-img" src="img/" alt="Burger"/>',
        'Самые вкусные бургеры у нас! Заходите по адресу: наб. реки Фонтанки, д. 56',
        '</div>'
      ]
    },
    {
      latitude: 59.91,
      longitude: 30.32,
      hintContent: '<div class="map__hint"> наб. реки Фонтанки, д. 56 </div>',
      ballonContent: [
        '<div class="map__balloon">',
        '<img class="map__burger-img" src="img/" alt="Burger"/>',
        'Самые вкусные бургеры у нас! Заходите по адресу: наб. реки Фонтанки, д. 56',
        '</div>'
      ]
    }
  ];
  
  function init() {
    var map = new ymaps.Map('map', {
      center: [59.94, 30.32],
      zoom: 12,
      controls: ['zoomControl'],
      behaviors: ['drag']
    });
  
    placemarks.forEach(function(obj) {
      var placemark = new ymaps.Placemark([obj.latitude, obj.longitude], {
        hintContent: obj.hintContent,
        ballonContent: obj.ballonContent.join('')
      },
      {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-marker',
        iconImageSize: [46, 57],
        iconImageOffset: [-23, -57]
      });
      map.geoObjects.add(placemark);
    });
  }
})()

