app.controller('mainCtrl', function ($scope) {

    $scope.model = {
        tasks: [{
            description: '',
            isCompleted: false
        }]
    };


    $scope.addNote = function () {
        $scope.model.tasks.push({
            description: '',
            isCompleted: false
        });
    }

    $scope.deleteNote = function (task) {
        var index = $scope.model.tasks.indexOf(task);
        if (index > -1) {
            $scope.model.tasks.splice(index, 1);
        }
    }

   

});