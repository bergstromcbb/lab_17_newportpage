
var app = angular.module("mainApp",[]);

app.controller("infoSectionCtrl",function($scope){
  
  
  $scope.sectionInfo = [
  {
    headline: "Fan Site",
    link: "https://bergstromcbb.github.io/Bergstrom/Bergstrom_Bootstrap",
    photo: "images/designatedsurvivor.png",
    description: ""
  },
  {
    headline: "Movie Theatre App",
    link: "https://bergstromcbb.github.io/midterm_project",
    photo: "images/grandcircustheaters.png",
    description: ""
  },
  {
    headline: "Mill's Grocery",
    link: "https://bergstromcbb.github.io/midterm_project",
    photo: "images/grocery.png",
    description: ""
  },
  {
    headline: "is it or not",
    link: "https://bergstromcbb.github.io/codechallenge4",
    photo: "images/isitornot.png",
    description: ""
  },{
    headline: "Mushy Madlibs",
    link: "https://bergstromcbb.github.io/lab_15_madlibs",
    photo: "images/madlibs.png",
    description: ""
  },{
    headline: "Angular Routing",
    link: "https://bergstromcbb.github.io/lab_14/#/cat",
    photo: "images/angularRouting.png",
    description: ""
  },{
    headline: "Poorman's Reddit",
    link: "https://bergstromcbb.github.io/reddit_lab",
    photo: "images/poormans.png",
    description: ""
  }
  ];
  
});

app.directive("project", function(){
    return {
        restrict: 'E',
        templateUrl: 'portsection.html'
        };
});
