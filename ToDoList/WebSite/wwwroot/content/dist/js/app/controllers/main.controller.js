app.controller('mainCtrl', function ($scope, $timeout, $window) {

    var dataKey = 'tasks';

    $scope.model = {
        button: {
            animation: false
        }
    };

    var tasksInMemory = $window.localStorage.getItem(dataKey);
    if (typeof tasksInMemory !== 'undefined' && tasksInMemory != null) {
        $scope.model.tasks = angular.fromJson(tasksInMemory);
    }
    else {
        $scope.model.tasks = [{
            description: '',
            isCompleted: false
        }];
    }

    $scope.$watch('model.tasks', function (newVal, oldVal) {
        $window.localStorage.setItem(dataKey, angular.toJson($scope.model.tasks));
    }, true);

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

    $scope.model.button.animateButton = function () {

        $scope.model.button.animation = true;
        $timeout(function () {
            $scope.model.button.animation = false;
        }, 700);
    };

    particlesJS("particles-js",
        {
            "particles": {
                "number": {
                    "value": 150,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#fff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 1,
                        "color": "#ffffff"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 2.8771228771228774,
                        "opacity_min": 0.26373626373626374,
                        "sync": false
                    }
                },
                "size": {
                    "value": 30,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 31.168831168831172,
                        "size_min": 6.393606393606394,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": false,
                    "distance": 200,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 2
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "top",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 1657.2100474277727,
                        "rotateY": 2840.9315098761817
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": false,
                        "mode": "bubble"
                    },
                    "resize": true
                },
                "modes": {
                    "bubble": {
                        "distance": 200,
                        "size": 4,
                        "duration": 0.3,
                        "opacity": 1,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        }
    );



    


});