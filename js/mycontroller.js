angular.module('myApp',[]).controller('myCtrl',function($scope,$location,$timeout,$interval){
        $scope.username="";
        $scope.firstname="kobe";
        $scope.names=[{name:'kobe',country:'America'},{name:'Tracy',country:'America'}];
        $scope.myURL=$location.absUrl();
        $scope.i=1;
        $timeout(function(){
             console.log($scope.i);
        },2000)
        $interval(function(){
	      console.log(new Date().toLocaleTimeString());
        },2000)
});