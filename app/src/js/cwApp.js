
var app = angular.module('cwApp',[]);

app.controller('reqDataCtrl', function ($scope,$http){
	
	$http.get("http://127.0.0.1:8090/json/reqData.json").then(function(response){		
		$scope.reqData = response.data.reqData;
	});
	
});	

	
	
app.controller('patientsCtrl', function ($scope,$http){
	
	$http.get("http://127.0.0.1:8090/json/patients.json").then(function(response){		
		$scope.patients = response.data.patients;
	});
	
});	

app.controller('actTypeDataCtrl', function ($scope,$http){
	
	$http.get("http://127.0.0.1:8090/json/actTypeData.json").then(function(response){		
		$scope.actTypeData = response.data.actTypeData;
	});
	
});	