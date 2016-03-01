(function() {
	'use strict';
	angular.module('blogApp')
		.controller('sidebarCtrl', function($routeParams, $route) {
			console.log('sidebar ctrl active');
			console.log(sessionStorage);
			this.searchBar = sessionStorage.searchParam;
			this.searchQuery = function() {
				$route.updateParams({search : this.searchBar, start:0});
				sessionStorage.setItem('searchParam', this.searchBar);
				console.log($routeParams);
				console.log(sessionStorage);
			};




		});
})();
