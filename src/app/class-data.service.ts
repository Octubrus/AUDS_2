import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassDataService {

  constructor() { }

  classes = [{
    'style': 'Salsa LA',
    'fbLink': 'https://www.facebook.com/groups/177950765595848/',
    'level': 'Advanced',
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
    'style': 'Salsa LA',
    'fbLink': 'https://www.facebook.com/groups/177950765595848/',
    'level': 'Intermediate',
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
  },
  {
    'style': 'Bachata',
    'fbLink': 'https://www.facebook.com/groups/177950765595848/',
    'level': 'Beginners',
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
    'style': 'Bachata',
    'fbLink': 'https://www.facebook.com/groups/177950765595848/',
    'level': 'Intermediate',
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
  },
  {
    'style': 'Tango',
    'fbLink': 'https://www.facebook.com/groups/177950765595848/',
    'level': 'Improvers',
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
    'style': 'Tango',
    'fbLink': 'https://www.facebook.com/groups/177950765595848/',
    'level': 'Intermediate',
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
  },
  {
    'style': 'Kizomba',
    'fbLink': 'https://www.facebook.com/groups/177950765595848/',
    'level': 'Improvers',
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
    'style': 'Kizomba',
    'fbLink': 'https://www.facebook.com/groups/177950765595848/',
    'level': 'Intermediate',
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
  },
  {
    'style': 'Zouk',
    'fbLink': 'https://www.facebook.com/groups/177950765595848/',
    'level': 'Beginners',
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
    'style': 'Zouk',
    'fbLink': 'https://www.facebook.com/groups/177950765595848/',
    'level': 'Improvers',
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

  getClasses() {
    return this.classes;
  }

}
