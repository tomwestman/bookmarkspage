angular.module('Eggly', ['ngRoute'

])
  .controller('MainCtrl', function ($scope, $routeParams, $location) {


        //http://localhost:63342/egghead-angularjs-from-scratch-getting-started/index.finish.html#/user/fredd/moser/mred/
            var url = $location.path().split('/');
            $scope.userName = url[2];
        //window.alert("1 " + url[2]);
        //window.alert(url[1]);
        //window.alert(url[2]);
        //window.alert(url[3]);
        //window.alert(url[4]);
        $scope.imggg = "assets/img/" + $scope.userName + ".jpg";
        //window.alert("2 " + $scope.imggg);
        if  ($scope.userName == "TomWestman") {
            $scope.categories = [
                {"id": 0, "name": "Education"},
                {"id": 1, "name": "Jobs"},
                {"id": 2, "name": "Computer Science"},
                {"id": 3, "name": "Other Hobbies"}
            ];

            $scope.bookmarks = [
                {"id":0, "title": "Broadcast Center", "url": "http://www.broadcastcenterinfo.com/", "category": "Education", "user": "Tom Westman" },
                {"id":1, "title": "Half Price Books", "url": "http://hpb.com/120/", "category": "Other Hobbies", "user": "Tom Westman" },
                {"id":2, "title": "Heights School", "url": "https://heights.edu/", "category": "Jobs", "user": "Tom Westman" },
                {"id":3, "title": "LaunchCode", "url": "https://www.launchcode.org/", "category": "Computer Science", "user": "Tom Westman" },
                {"id":4, "title": "McGraw-Hill Education", "url": "http://www.mheducation.com/", "category": "Jobs", "user": "Tom Westman" },
                {"id":5, "title": "Midtown Center", "url": "http://www.midtown-metro.org/midtown/", "category": "Jobs", "user": "Tom Westman" },
                {"id":6, "title": "St. Louis Cardinals", "url": "http://stlouis.cardinals.mlb.com/", "category": "Other Hobbies", "user": "Tom Westman" },
                {"id":7, "title": "St. Louis University", "url": "http://www.slu.edu/", "category": "Education", "user": "Tom Westman" },
                {"id":8, "title": "St. Louis University High School", "url": "http://www.sluh.org/", "category": "Education", "user": "Tom Westman" },
                {"id":9, "title": "University of Dallas", "url": "http://udallas.edu/", "category": "Education", "user": "Tom Westman" },
                {"id":10, "title": "Vatterott College", "url": "http://www.vatterott.edu/", "category": "Jobs", "user": "Tom Westman" },
                {"id":11, "title": "W3C", "url": "http://www.w3.org/", "category": "Computer Science", "user": "Tom Westman" }
            ];
        } else if  ($scope.userName == "JohnWeller") {
            $scope.categories = [
                {"id": 0, "name": "Education"},
                {"id": 1, "name": "Jobs"},
                {"id": 2, "name": "Computer Science"},
                {"id": 3, "name": "Other Hobbies"}
            ];

            $scope.bookmarks = [
                {"id":12, "title": "Being a Bad Ass", "url": "http://www.chucknorris.com/", "category": "Other Hobbies", "user": "John Weller" },
                {"id":13, "title": "Github", "url": "https://github.com/", "category": "Computer Science", "user": "John Weller" },
                {"id":14, "title": "MDN", "url": "https://developer.mozilla.org/", "category": "Computer Science", "user": "John Weller" },
                {"id":15, "title": "The Muny", "url": "http://muny.org/", "category": "Jobs", "user": "John Weller" },
                {"id":16, "title": "Sony", "url": "http://www.sony.com/", "category": "Jobs", "user": "John Weller" },
                {"id":17, "title": "St. Louis University High School", "url": "http://www.sluh.org/", "category": "Education", "user": "John Weller" },
                {"id":18, "title": "University of Tulsa", "url": "http://utulsa.edu/", "category": "Education", "user": "John Weller" },
                {"id":19, "title": "Zubaz", "url": "http://zubaz.com/", "category": "Other Hobbies", "user": "John Weller" }
            ];
        } else if  ($scope.userName == "JoeFingerhut") {
            $scope.categories = [
                {"id": 0, "name": "Education"},
                {"id": 1, "name": "Jobs"},
                {"id": 2, "name": "Computer Science"},
                {"id": 3, "name": "Other Hobbies"}
            ];

            $scope.bookmarks = [
                {"id":20, "title": "Being a Spy", "url": "http://www.seanconnery.com/", "category": "Other Hobbies", "user": "Joe Fingerhut" },
                {"id":21, "title": "Loyola University Chicago", "url": "http://www.luc.edu/", "category": "Education", "user": "Joe Fingerhut" },
                {"id":22, "title": "Magician", "url": "http://www.allmagic.com/", "category": "Jobs", "user": "Joe Fingerhut" },
                {"id":23, "title": "National Basketball Association", "url": "http://www.nba.com", "category": "Other Hobbies", "user": "Joe Fingerhut" },
                {"id":24, "title": "Scratch", "url": "https://scratch.mit.edu/", "category": "Computer Science", "user": "Joe Fingerhut" },
                {"id":25, "title": "St. Louis University High School", "url": "http://www.sluh.org/", "category": "Education", "user": "Joe Fingerhut" },
                {"id":26, "title": "Toastmasters", "url": "https://www.toastmasters.org/", "category": "Jobs", "user": "Joe Fingerhut" },
                {"id":27, "title": "Treehouse", "url": "https://teamtreehouse.com/", "category": "Computer Science", "user": "Joe Fingerhut" }
            ];
        } else {
            $scope.categories = [
                {"id": 0, "name": "Education"},
                {"id": 1, "name": "Jobs"},
                {"id": 2, "name": "Computer Science"},
                {"id": 3, "name": "Other Hobbies"}
            ];

            $scope.bookmarks = [
                {"id":28, "title": "Association for Middle Level Education", "url": "https://www.amle.org/", "category": "Jobs", "user": "Doug Wassilak" },
                {"id":29, "title": "Being the Duke", "url": "http://johnwayne.com/", "category": "Other Hobbies", "user": "Doug Wassilak" },
                {"id":30, "title": "Best Teacher Supply", "url": "http://www.bestteachersupply.com/", "category": "Jobs", "user": "Doug Wassilak" },
                {"id":31, "title": "HackerRank", "url": "https://www.hackerrank.com", "category": "Computer Science", "user": "Doug Wassilak" },
                {"id":32, "title": "Lynda.com", "url": "https://www.lynda.com/", "category": "Computer Science", "user": "Doug Wassilak" },
                {"id":33, "title": "St. Louis University High School", "url": "http://www.sluh.org/", "category": "Education", "user": "Doug Wassilak" },
                {"id":34, "title": "Washington State University", "url": "https://wsu.edu/", "category": "Education", "user": "Doug Wassilak" },
                {"id":35, "title": "YouTube", "url": "https://www.youtube.com/", "category": "Other Hobbies", "user": "Doug Wassilak" }
            ];
        }

        // Using $routeParams
        //window.alert('hi' + $routeParams.user);
      $scope.isCreating = false;
      $scope.isEditing = false;
      $scope.currentCategory = null;
      $scope.editedBookmark = null;

      function isCurrentCategory(category) {
          return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
      }

      function setCurrentCategory(category) {
          $scope.currentCategory = category;

          cancelCreating();
          cancelEditing();
      }

      $scope.isCurrentCategory = isCurrentCategory;
      $scope.setCurrentCategory = setCurrentCategory;

      function setEditedBookmark(bookmark) {
          $scope.editedBookmark = angular.copy(bookmark);
      }

      function isSelectedBookmark(bookmarkId) {
          return $scope.editedBookmark !== null && $scope.editedBookmark.id === bookmarkId;
      }

      $scope.setEditedBookmark = setEditedBookmark;
      $scope.isSelectedBookmark = isSelectedBookmark;

      function resetCreateForm() {
          $scope.newBookmark = {
              title: '',
              url: '',
              category: $scope.currentCategory.name
          };
      }

      //-------------------------------------------------------------------------------------------------
      // CRUD
      //-------------------------------------------------------------------------------------------------
      function createBookmark(bookmark) {
          bookmark.id = $scope.bookmarks.length;
          $scope.bookmarks.push(bookmark);

          resetCreateForm();
      }

      function updateBookmark(bookmark) {
          var index = _.findIndex($scope.bookmarks, function (b) {
              return b.id == bookmark.id
          });
          $scope.bookmarks[index] = bookmark;

          $scope.editedBookmark = null;
          $scope.isEditing = false;
      }

      function deleteBookmark(bookmark) {
          _.remove($scope.bookmarks, function (b) {
              return b.id == bookmark.id;
          });
      }

      $scope.createBookmark = createBookmark;
      $scope.updateBookmark = updateBookmark;
      $scope.deleteBookmark = deleteBookmark;

      //-------------------------------------------------------------------------------------------------
      // CREATING AND EDITING STATES
      //-------------------------------------------------------------------------------------------------
      function shouldShowCreating() {
          return $scope.currentCategory && !$scope.isEditing;
      }

      function startCreating() {
          $scope.isCreating = true;
          $scope.isEditing = false;
          resetCreateForm();
      }

      function cancelCreating() {
          $scope.isCreating = false;
      }

      $scope.shouldShowCreating = shouldShowCreating;
      $scope.startCreating = startCreating;
      $scope.cancelCreating = cancelCreating;

      function shouldShowEditing() {
          return $scope.isEditing && !$scope.isCreating;
      }

      function startEditing() {
          $scope.isCreating = false;
          $scope.isEditing = true;
      }

      function cancelEditing() {
          $scope.isEditing = false;
          $scope.editedBookmark = null;
      }

      $scope.startEditing = startEditing;
      $scope.cancelEditing = cancelEditing;
      $scope.shouldShowEditing = shouldShowEditing;
  })
;
