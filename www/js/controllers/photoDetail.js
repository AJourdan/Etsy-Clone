'use strict';

app.controller('PhotoDetailCtrl', function($scope, Chats, Products) {

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };

  $scope.image = 'http://productshots2.modcloth.net/productshots/0024/2697/a7f50a7b443a4b8571a9c3b0e89bc890.jpg?1258578886'
  
   $scope.button = function(product) {
    console.log("button was clicked", product, $scope.image);
    Products.saveProduct(product, $scope.image)
   }
});