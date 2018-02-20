'use strict';

function ClassesController(danceData) {
  "ng-inject";
  this.danceData = danceData;
  this.levels = [
    {
      'label': 'beginners'
    },
    {
      'label': 'improvers'
    },
    {
      'label': 'intermediate'
    },
    {
      'label': 'advanced'
    }
  ];

}

angular
  .module('app')
  .controller('ClassesController', ClassesController);
