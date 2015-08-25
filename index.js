import 'common/assets/stylesheets/global.css';

import angular from 'angular';
import React from 'react';

import AngularMinesweeper from 'angular-minesweeper';
import ReactMinesweeper from 'react-minesweeper/app.jsx';

let angularContainer = document.getElementById('angular');
let reactContainer   = document.getElementById('react');

angular.bootstrap(angularContainer, [AngularMinesweeper.name]);

React.render(<ReactMinesweeper />, reactContainer);
