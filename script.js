var app = angular.module('Calculator', []);

app.controller('DisplayController', ['$scope', function($scope) {

	$scope.display = "";

}]);

app.controller('ArthmeticController', ['$scope', function($scope){

	$scope.operatorLastUsed = false;
	$scope.equation = "0";
	$scope.isFloat = false;
	$scope.isInit = true;
	$scope.isOff = false;

	$scope.concatOperator = function(operator) {
		
		if(operator === 'AC')
		{
			$scope.equation = "0";
			$scope.isInit = true;
		}
		else
		{
			if(!$scope.equation[$scope.equation.length - 1].match(/[-+*\/]/))
			{
				$scope.equation += operator;
				$scope.isFloat = false;
			}	
		}
	}
	
	$scope.command = function(command) {
		if(command === 'Off')
		{
			if($scope.isOff === false)
			{
				$(".display").css("color", 'rgba(0,0,0,.2)');
				$("button:contains('OFF')").text("ON");
				$scope.isOff = true;
			} else 
			{
				$(".display").css("color", 'white');
				$("button:contains('ON')").text("OFF");
				$scope.isOff = false;
			}
		} else if(command === '%') 
		{
			if(!$scope.equation[$scope.equation.length - 1].match('%'))
			{
				$scope.equation += "%";
			}
		} else if(command === 'DEL')
		{
			if($scope.equation.length == 1)
			{
				$scope.equation = $scope.equation.substring(0,$scope.equation.length - 1);
				$scope.equation = "0";
				$scope.isInit = true;
			} else {
				$scope.equation = $scope.equation.substring(0,$scope.equation.length - 1);
			}
		} 
	}
	
	$scope.addDecimal = function() {
		$scope.isFloat = true;
		$scope.equation += ".";
	}

	$scope.updateCurrNum = function(num) {
		if($scope.isInit)
		{
			$scope.equation = num.toString();
			$scope.isInit = false;
		} else 
			$scope.equation += num;
		
	}

	$scope.calculate = function() {
		$scope.equation = eval($scope.equation).toString();
	}

}]);

$(document).ready(function(){
  
  $('.aqua').click(function(){
    $('.container').removeClass('purple-bg');
    $('.container').removeClass('fuchsia-bg');
    $('.container').addClass('aqua-bg');
  });
  
  $('.purple').click(function(){
    $('.container').removeClass('aqua-bg');
    $('.container').removeClass('fuchsia-bg');
    $('.container').addClass('purple-bg');
  });
  
  $('.fuchsia').click(function(){
    $('.container').removeClass('aqua-bg');
    $('.container').removeClass('purple-bg');
    $('.container').addClass('fuchsia-bg');
  });
});