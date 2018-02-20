'use strict';

const danceData = [
  {
    'style': 'Salsa LA',
    'classes': 2,
    'level': 'improvers'
  },
  {
    'style': 'Salsa NY',
    'classes': 1,
    'level': 'advanced'
  },
  {
    'style': 'Cuban Salsa',
    'classes': 3,
    'level': 'beginners'
  },
  {
    'style': 'Bachata Sensual',
    'classes': 4,
    'level': 'intermediate'
  },
  {
    'style': 'Bachata Moderna',
    'classes': 2,
    'level': 'beginners'
  },
  {
    'style': 'Urban Kiz',
    'classes': 3,
    'level': 'intermediate'
  },
  {
    'style': 'Kizomba',
    'classes': 1,
    'level': 'improvers'
  },
  {
    'style': 'Tango',
    'classes': 4,
    'level': 'improvers'
  },
  {
    'style': 'Zouk',
    'classes': 2,
    'level': 'improvers'
  }

];

angular
  .module('app')
  .value('danceData', danceData);
