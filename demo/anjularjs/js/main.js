/*!
 * Marmik Desai - Live Single Search - Angular Js
 * Original author: @Marmik Desai
 * Further changes, comments: @Marmik Desai
 * Licensed under the MIT license
 */

var app = angular.module("liveSearch", []);
function escapeRegExp(string) {
	return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}
function MyController($scope) {
	$scope.names = [
		{
			name:'Marmik Desai',
			image:'images/marmik.jpg',
			movie:'Front End Developer',
			wood:'-'
		},
		{
			name:'Renée Zellweger',
			image:'images/image1.jpg',
			movie:'Bridget Jones"s Diary',
			wood:'Hollywood'
		},
		{
			name:'Rosamund Pike',
			image:'images/image2.jpg',
			movie:'Pride & Prejudice',
			wood:'Hollywood'
		},
		{
			name:'Naomi Grossman',
			image:'images/image3.jpg',
			movie:'#Rip',
			wood:'Hollywood'
		},
		{
			name:'Shailene Woodley',
			image:'images/image4.jpg',
			movie:'Divergent',
			wood:'Hollywood'
		},
		{
			name:'Jennifer Lawrence',
			image:'images/image5.jpg',
			movie:'The Hunger Games',
			wood:'Hollywood'
		},
		{
			name:'Chloë Grace Moretz',
			image:'images/image6.jpg',
			movie:'Kick-Ass',
			wood:'Hollywood'
		},
		{
			name:'Adrianne Palicki',
			image:'images/image7.jpg',
			movie:'G.I. Joe: Retaliation',
			wood:'Hollywood'
		},
		{
			name:'Evan Peters',
			image:'images/image8.jpg',
			movie:'Kick-Ass',
			wood:'Hollywood'
		},
		{
			name:'Aaron Taylor-Johnson',
			image:'images/image9.jpg',
			movie:'Kick-Ass',
			wood:'Hollywood'
		},
		{
			name:'Danielle Panabaker',
			image:'images/image10.jpg',
			movie:'Friday the 13th',
			wood:'Hollywood'
		},
		{
			name:'Ranbir Kapoor',
			image:'images/image11.jpg',
			movie:'Barfi!',
			wood:'Bollywood'
		},
		{
			name:'Priyanka Chopra',
			image:'images/image12.jpg',
			movie:'Barfi!',
			wood:'Bollywood'
		},
		{
			name:'Katrina Kaif',
			image:'images/image13.jpg',
			movie:'Zindagi Na Milegi Dobara',
			wood:'Bollywood'
		},
		{
			name:'Imran Khan',
			image:'images/image14.jpg',
			movie:'Jaane Tu... Ya Jaane Na',
			wood:'Bollywood'
		},
		{
			name:'Shah Rukh Khan',
			image:'images/image15.jpg',
			movie:'Kal Ho Naa Ho',
			wood:'Bollywood'
		},
		{
			name:'Aamir Khan',
			image:'images/image16.jpg',
			movie:'3 Idiots',
			wood:'Bollywood'
		},
		{
			name:'Saif Ali Khan',
			image:'images/image17.jpg',
			movie:'Dil Chahta Hai',
			wood:'Bollywood'
		},
		{
			name:'Anushka Sharma',
			image:'images/image18.jpg',
			movie:'Rab Ne Bana Di Jodi',
			wood:'Bollywood'
		},
		{
			name:'Parineeti Chopra',
			image:'images/image19.jpg',
			movie:'Born to Hate... Destined to Love',
			wood:'Bollywood'
		},
		{
			name:'Varun Dhawan',
			image:'images/image20.jpg',
			movie:'Student of the Year',
			wood:'Bollywood'
		}
	];
	
	$scope.filterBySearch = '';
	var regex;
	$scope.$watch('filterBySearch', function(value) {
		viewSuggestion(value);
		//		console.log(value);
		regex = new RegExp('\\b' + escapeRegExp(value), 'i');
	});
	$scope.MyController = function(name) {
		//		console.log(value);
		if (!$scope.filterBySearch) return true;
		return regex.test(name);
	};
}
function viewSuggestion(value) {
	if (value == "") {
		$(".live-result").hide();
	} else {
		$(".live-result").show();
	}
};
