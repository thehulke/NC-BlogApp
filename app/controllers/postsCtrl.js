(function() {
	angular.module('blogApp')
		.controller('postsCtrl', function($route, $routeParams, postsService, postData) {
			console.log('postsCtrl active');

			this.storageFilter = sessionStorage.getItem('searchParam');
			this.startAt = parseInt($routeParams.start || 0);
			this.startAtIndex = this.startAt * 3 || 0;
			this.posts = postData;
			this.postNum = postsService.countPosts(this.posts);
			this.postLimit = parseInt($routeParams.showAll * this.postNum || 3);
			this.isBigger = postsService.isBigger(this.postNum, this.startAtIndex);
			this.isSmaller = postsService.isSmaller(this.postNum, $routeParams.start);
			this.routeParamStart = $routeParams.start;
			console.log(this.routeParamStart);
		}) //end of controller
})();
