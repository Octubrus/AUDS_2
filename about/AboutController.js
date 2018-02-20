'use strict';

function AboutController() {
  this.viewName = 'Venclovas';
}

angular
  .module('aboutModule', [])
  .controller('AboutController', AboutController);
