import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import angular from 'angular';

import AngularMinesweeper from 'angular-minesweeper';


let angularContainer = document.getElementById('angular');

angular.bootstrap(angularContainer, [AngularMinesweeper.name]);

