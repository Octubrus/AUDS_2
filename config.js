angular
  .module('app')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeController as ctrl',
        templateUrl: 'home/home.html'
      })
      .state('about', {
        url: '/about',
        controller: 'AboutController',
        template: `<about></about>`
      })
      .state('classes', {
        url: '/classes',
        controller: 'ClassesController as ctrl',
        templateUrl: 'classes/classes.html'
      });
      $urlRouterProvider.otherwise('/');
  });
