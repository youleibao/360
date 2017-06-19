var app = angular.module('shouApp',[])
app.controller('shouCtrl',['$scope','$http',function($scope,$http){
	
function move(){
     		$(".moddle").delay(1000)
     		$(".moddle").animate({
     			left:-100+'%'
     		},1000,"linear",function(){
     			$(".moddle").css("left",0);
     			$(".moddle>img:first").appendTo($(".moddle"));
     			move();
     		})
     	}
   	move();
   $http.get('data/1.json').then(function(data){
   	     $scope.arr = data.data.shop_data
   	     console.log(data.data.shop_data)
   })
}])