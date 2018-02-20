'use strict';

const danceData = [{
    'style': 'Salsa LA',
    'fbLink': 'https://www.facebook.com/groups/177950765595848/',
    'classes': [
      {
        'level': 'Advanced'
        'day': 'Monday',
        'time': '7pm',
        'tutors': [{
            'name': 'Kenneth',
            'surename': 'Graham'
          },
          {
            'name': 'Kira',
            'surename': 'Beneke'
          }
        ]
      },
      {
        'level': 'Intermediate'
        'day': 'Monday',
        'time': '6pm',
        'tutors': [{
            'name': 'Kenneth',
            'surename': 'Graham'
          },
          {
            'name': 'Kira',
            'surename': 'Beneke'
          }
        ]
      }
    ]
  },

  {
    'style': 'Bachata',
    'fbLink': 'https://www.facebook.com/groups/177950765595848/',
    'classes': [{
        'level': 'Beginners'
        'day': 'Tuesday',
        'time': '6pm',
        'tutors': [{
            'name': 'Martyn',
            'surename': 'Needham'
          },
          {
            'name': 'Letizia',
            'surename': 'Olivero'
          }
        ]
      },
      {
        'level': 'Intermediate'
        'day': 'Tuesday',
        'time': '7pm',
        'tutors': [{
            'name': 'Martyn',
            'surename': 'Needham'
          },
          {
            'name': 'Letizia',
            'surename': 'Olivero'
          }
        ]
      }
    ]
  },

  {
    'style': 'Tango',
    'fbLink': 'https://www.facebook.com/groups/177950765595848/',
    'classes': [{
        'level': 'Improvers'
        'day': 'Saturday',
        'time': '3pm',
        'tutors': [{
            'name': 'Luca',
            'surename': 'Italianisimo'
          },
          {
            'name': 'Elisabeta',
            'surename': 'Italianisimo'
          }
        ]
      },
      {
        'level': 'Intermediate'
        'day': 'Saturday',
        'time': '4pm',
        'tutors': [{
            'name': 'Luca',
            'surename': 'Italianisimo'
          },
          {
            'name': 'Elisabeta',
            'surename': 'Italianisimo'
          }
        ]
      }
    ]
  },

  {
    'style': 'Kizomba',
    'fbLink': 'https://www.facebook.com/groups/177950765595848/',
    'classes': [{
        'level': 'Improvers'
        'day': 'Thurday',
        'time': '5pm',
        'tutors': [{
            'name': 'Radost',
            'surename': 'Pencheva'
          },
          {
            'name': 'Janita',
            'surename': 'Lotz'
          }
        ]
      },
      {
        'level': 'Intermediate'
        'day': 'Monday',
        'time': '5pm',
        'tutors': [{
            'name': 'Radost',
            'surename': 'Pencheva'
          },
          {
            'name': 'Janita',
            'surename': 'Lotz'
          }
        ]
      }
    ]
  },

  {
    'style': 'Zouk',
    'fbLink': 'https://www.facebook.com/groups/177950765595848/',
    'classes': [{
        'level': 'Beginners'
        'day': 'Friday',
        'time': '8pm',
        'tutors': [{
            'name': 'Shaun',
            'surename': 'Londoner'
          },
          {
            'name': 'Vilgaile',
            'surename': 'Petrikaite'
          }
        ]
      },
      {
        'level': 'Improvers'
        'day': 'Friday',
        'time': '9pm',
        'tutors': [{
            'name': 'Shaun',
            'surename': 'Londoner'
          },
          {
            'name': 'Vilgaile',
            'surename': 'Petrikaite'
          }
        ]
      }
    ]
  }
];

angular
  .module('app')
  .value('danceData', danceData);
