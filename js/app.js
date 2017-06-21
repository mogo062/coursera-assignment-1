(function(){
 'use strict';

var app = angular.module('LunchCheck',[])

app.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject=['$scope','$filter','$injector'];
function LunchCheckController($scope,$filter,$injector){
  $scope.lunchMenu="";
  $scope.menuLength=0;
  $scope.checkValidItems=function(){
    /*
    * Check Empty field
    */
   if($scope.lunchMenu === "" ){
      $scope.msg="Please enter data first";
      $scope.msgClass="has-error";
      $scope.menuLength=0;
      return;
    }
    /** convert text to array : split content field by ',' */
   var menu = $scope.lunchMenu.split(",");
   $scope.menuLength=menu.length;

   /** Detect empty Item : if exist decrease menuLength */
   detectEmptyItem(menu);
   /** Check menu length */
   if($scope.menuLength <= 3){
      $scope.msg="Enjoy !";
    }else{
      $scope.msg="Too much !";
    }
    $scope.msgClass="has-success";
  };
  /** function : detectEmptyItem
   * input : array (menu)
   * desc: validate input array item(one by one) by using regular expression
   */
 var detectEmptyItem=function(items){
    var emptyRegex = /^ *$/;
    for(var i = 0 ; i< items.length ;i++){
      if(emptyRegex.test(items[i])){
        $scope.menuLength--;
      }
    }
  };

};

})();
