var about = {
  bindings: {},
  controller: 'AboutController',
  templateUrl: 'about/about.html'
};

angular
  .module('aboutModule')
  .component('about', about);
