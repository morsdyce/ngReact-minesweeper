import 'common/assets/stylesheets/global.css';

import angular from 'angular';
import React from 'react';
import ReactDOM from 'react-dom';

import AngularMinesweeper from 'angular-minesweeper';
import ReactMinesweeper from 'react-minesweeper/app';

let angularContainer = document.getElementById('angular');
let reactContainer   = document.getElementById('react');

// render angular to #angular dom node
angular.bootstrap(angularContainer, [AngularMinesweeper.name]);

// render react into #react dom node
ReactDOM.render(<ReactMinesweeper />, reactContainer);
