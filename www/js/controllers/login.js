'use strict';

app.controller('LoginCtrl', function($scope, $ionicPopup) {
	$scope.emailLogin = function(){
		console.log('button was clicked on login');
		  $scope.data = {};

		  // An elaborate, custom popup
		  var myPopup = $ionicPopup.show({
		    templateUrl: 'templates/partials/login.html',
		    title: 'Enter Wi-Fi Password',
		    subTitle: 'Please use normal things',
		    scope: $scope,
		    buttons: [
		      { text: 'Cancel' },
		      {
		        text: '<b>Save</b>',
		        type: 'button-positive',
		        onTap: function(e) {
		          if (!$scope.data.wifi) {
		            //don't allow the user to close unless he enters wifi password
		            e.preventDefault();
		          } else {
		            return $scope.data.wifi;
		          }
		        }
		      }
		    ]
		  });

		  myPopup.then(function(res) {
		    console.log('Tapped!', res);
		  });
		 };
});