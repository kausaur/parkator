/* Get 'home' page */

module.exports.homelist = function(req, res) {
  res.render('locations-list', {
      title: "Parkator: find a place to park your car",
      pageHeader: {
          title: "Parkator",
          strapline: "Find places to park your car, wherever you are!"
      },
      sidebar: "Looking for a parking space near you? Parkator helps you find places to park when out and about. Perhaps need a break from a long drive? Let Parkator help you find the place you're looking for.",
      locations: [{
          name: "Select Citywalk",
          address: "A-3 District Centre, Saket, Sector 6, Pushp Vihar, New Delhi-110017",
          rating: 5,
          facilities: ["Drinks", "Food", "Shopping"],
          distance: "250m"
      },{
          name: "PVR Saket",
          address: "A-3 District Centre, Saket, Sector 6, Pushp Vihar, New Delhi-110017",
          rating: 4,
          facilities: ["Drinks", "Food", "Movie"],
          distance: "500m"
      },{
          name: "DLF Place Saket",
          address: "A-3 District Centre, Saket, Sector 6, Pushp Vihar, New Delhi-110017",
          rating: 3,
          facilities: ["Drinks", "Food", "Movie", "Shopping"],
          distance: "300m"
      },]
  });  
};

/* Get 'location info' page */

module.exports.locationInfo = function(req, res) {
  res.render('location-info', {
      title: 'Select Citywalk',
        pageHeader: {
            title: 'Select Citywalk'
        },
        sidebar: {
            context: 'is on Parkator because it has accessible parking and space to relax, have a break, eat sumptuous and shop.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Select Citywalk',
            address: "A-3 District Centre, Saket, Sector 6, Pushp Vihar, New Delhi-110017",
            rating: 4,
            facilities: ["Drinks", "Food", "Shopping"],
            coords: {
                lat: 28.5286024,
                lng: 77.2170676
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '08:00am',
                closing: '01:00am',
                closed: false
            }, {
                days: 'Saturday',
                opening: '06:00am',
                closing: '12:00am',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Kumud Shekhar',
                rating: 5,
                timestamp: '16 January 2017',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }, {
                author: 'Gaurav Chawla',
                rating: 3,
                timestamp: '16 December 2016',
                reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
            }, {
                author: 'Saurabh Kaushik',
                rating: 5,
                timestamp: '16 July 2016',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }]
        }
  });  
};

/* Get 'location review' page */

module.exports.addReview = function(req, res) {
  res.render('location-review-form', {
      title: 'Review Select Citywalk on Parkator',
      pageHeader: {
        title: 'Review Select Citywalk'
      }
  });  
};

