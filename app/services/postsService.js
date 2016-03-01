(function() {
  'use strict';
	angular.module('blogApp')
		.service('postsService', function($http) {
			this.countPosts = function(posts) {
				return posts.length;
			};
      this.isBigger = function(postLen, startAtIndex) {
        if(startAtIndex+3 > postLen){
          return false;
        } else {
          return true;
        }
      };

      this.isSmaller = function(postLen, route) {
        if (route <= 0){
          return false;
        } else {
          return true;
        }
      };

      this.loadPosts = function() {
        return $http.get('data/posts.json').then(function(data) {
          return data.data.posts;
        });
      };
      this.resetSearchParam = function() {
        localStorage.setItem('searchParam', '');
      };

		}); //end of service
})();
