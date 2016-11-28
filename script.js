
var app = angular.module("mainApp",['ui.bootstrap']);

app.controller("infoSectionCtrl",function($scope){


  $scope.sectionInfo = [
  {
    headline: "Fan Site",
    link: "https://bergstromcbb.github.io/Bergstrom/Bergstrom_Bootstrap",
    photo: "images/designatedsurvivor.png",
    description: "gsdfgsdfg"
  },
  {
    headline: "Movie Theatre App",
    link: "https://bergstromcbb.github.io/midterm_project",
    photo: "images/grandcircustheaters.png",
    description: "sdfgdsfg"
  },
  {
    headline: "Mill's Grocery",
    link: "https://bergstromcbb.github.io/midterm_project",
    photo: "images/grocery.png",
    description: "sdfgsdfg"
  },
  {
    headline: "is it or not",
    link: "https://bergstromcbb.github.io/codechallenge4",
    photo: "images/isitornot.png",
    description: "sdfgsdg"
  },{
    headline: "Mushy Madlibs",
    link: "https://bergstromcbb.github.io/lab_15_madlibs",
    photo: "images/madlibs.png",
    description: "sdfgsd"
  },{
    headline: "Angular Routing",
    link: "https://bergstromcbb.github.io/lab_14/#/cat",
    photo: "images/angularRouting.png",
    description: "sdfg"
  },{
    headline: "Poorman's Reddit",
    link: "https://bergstromcbb.github.io/reddit_lab",
    photo: "images/poormans.png",
    description: "sdfgsdf"
  }
  ];
  
});

app.directive("project", function(){
  return {
    restrict: 'E',
    templateUrl: 'portsection.html'
  };
});

app.controller('ModalDemoCtrl', function ($uibModal, $log, $document) {
  var $ctrl = this;
  $ctrl.items = ['Please Visit'];

  $ctrl.open = function (link, description, headline) {
    var modalInstance = $uibModal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      resolve: {
        items: function () {
          return $ctrl.items;
        },
        headline: function () {
          return headline;
        },
        link: function () {
          return link;
        },
        description: function () {
          return description;
        },
      }
    });
  };
});

app.controller('ModalInstanceCtrl', function ($uibModalInstance, items, link, description, headline) {
  var $ctrl = this;
  $ctrl.items = items;
  $ctrl.link = link;
  $ctrl.description = description;
  $ctrl.headline = headline;
  $ctrl.selected = {
    item: $ctrl.items[0]
  };

  $ctrl.ok = function () {
    $uibModalInstance.close($ctrl.selected.item);
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});

app.component('modalComponent', {
  templateUrl: 'myModalContent.html',
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },
  controller: function () {
    var $ctrl = this;

    $ctrl.$onInit = function () {
      $ctrl.items = $ctrl.resolve.items;
      $ctrl.selected = {
        item: $ctrl.items[0]
      };
    };

    $ctrl.ok = function () {
      $ctrl.close({$value: $ctrl.selected.item});
    };

    $ctrl.cancel = function () {
      $ctrl.dismiss({$value: 'cancel'});
    };
  }
})