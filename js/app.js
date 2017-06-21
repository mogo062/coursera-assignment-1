(function(){
 'use strict';

var app = angular.module('LunchCheck',[])

app.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject=['$scope','$filter','$injector'];
function LunchCheckController($scope,$filter,$injector){
  $scope.lunchMenu="";
  $scope.menuLength=0;
  $scope.checkValidItems=function(){
   if($scope.lunchMenu === "" ){
      $scope.msg="Please enter data first";
      $scope.msgClass="has-error";
      return;
    }

   var menu = $scope.lunchMenu.split(",");
   $scope.menuLength=menu.length;
   detectEmptyItem(menu);
/*   if(detectEmptyItem(menu)){
     return;
   }*/
   if($scope.menuLength <= 3){
      $scope.msg="Enjoy !";
    }else{
      $scope.msg="Too much !";
    }
    $scope.msgClass="has-success";
  };

 var detectEmptyItem=function(items){
    var emptyRegex = /^ *$/;
    for(var i = 0 ; i< items.length ;i++){
      if(emptyRegex.test(items[i])){
        $scope.menuLength--;
        //    $scope.msg="Empty item detected in position "+i;
        //  $scope.msgClass="has-warning";
      }
    }
    if($scope.menuLength != items.length){
      return true;
    }
    return false;
  };

};

})();
