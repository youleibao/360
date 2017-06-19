var app = angular.module('myApp',['ui.router','angularCSS','shouApp'])
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/shou');
	
	$stateProvider
	.state({
		name:'shou',
		url:'/shou',
		css:'css/shou.css',
		templateUrl:'shou.html',
		controller:'shouCtrl'
	})
	.state({
		name:'youpin',
		url:'/youpin',
		template:'<p>12</p>'
	})
	.state({
		name:'huishou',
		url:'/huishou',
		template:'<p>123</p>'
	})
	.state({
		name:'weixiu',
		url:'/weixiu',
		template:'<p>124</p>'
	})
	.state({
		name:'naoweixiu',
		url:'/naoweixiu',
		template:'<p>125</p>'
	})
	.state({
		name:'huanxin',
		url:'/huanxin',
		template:'<p>126</p>'
	})
	.state({
		name:'naohuishou',
		url:'/naohuishou',
		template:'<p>127</p>'
	})
}])
app.controller('myCtrl',['$scope','$http',function($scope,$http){
	alert(1)
}])
