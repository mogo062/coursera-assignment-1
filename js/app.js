(function(){
 'use strict';

var app = angular.module('LunchCheck',[])

app.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject=['$scope','$filter','$injector'];
function LunchCheckController($scope,$filter,$injector){
  $scope.items=""
  $scope.checkValidItems=function(){
    if($scope.items === "" ){
      $scope.msg="Please enter data first";
      return;
    }
   var itemLength=$scope.items.split(",").length;
   if(itemLength <= 3){
      $scope.msg="Enjoy !";
    }else{
      $scope.msg="Too much !";
    }
  };
};

})();
