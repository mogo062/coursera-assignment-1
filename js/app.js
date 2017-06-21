(function(){
 'use strict';

var app = angular.module('courseraAssignment1',[])

app.controller('courseraAssignmentController',courseraAssignmentController);

courseraAssignmentController.$inject=['$scope','$filter','$injector'];
function courseraAssignmentController($scope,$filter,$injector){
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
