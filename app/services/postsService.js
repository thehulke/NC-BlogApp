(function() {
	'use strict';
	angular.module('blogApp')
		.factory('postsService', postsService);

	function postsService($http) {

		function countPosts(posts) {
			return posts.length;
		}

		function isBigger(postLen, startAtIndex) {
			if (startAtIndex + 3 > postLen) {
				return false;
			} else {
				return true;
			}
		}

		function isSmaller(postLen, route) {
			if (route <= 0) {
				return false;
			} else {
				return true;
			}
		}

		function loadPosts() {
			return $http.get('data/posts.json').then(function(data) {
				return data.data.posts;
			});
		}

		function resetSearchParam() {
			localStorage.setItem('searchParam', '');
		}
		return {
			countPosts: countPosts,
			isBigger: isBigger,
			isSmaller: isSmaller,
			loadPosts: loadPosts,
			resetSearchParam: resetSearchParam
		};

	}
})();
