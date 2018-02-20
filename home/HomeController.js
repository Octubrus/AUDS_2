'use strict';

function HomeController() {
  this.viewName = 'Augustinas';
}

angular
  .module('app')
  .controller('HomeController', HomeController);
