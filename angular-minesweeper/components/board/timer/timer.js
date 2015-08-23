import template from 'angular-minesweeper/components/board/timer/timer.html';

export default function Timer() {
  return {
    restrict: 'E',
    template,
    controller: TimerController,
    controllerAs: 'Timer',
    bindToController: true
  };
}

class TimerController {
  constructor($scope, $interval) {
    this.$scope    = $scope;
    this.$interval = $interval;
    this.time      = 0;

    this.init();
  }

  init() {
    this._registerEvents();
    this._startTimer();
  }

  _registerEvents() {
    this.$scope.$on('game-over', () => this._stopTimer() );
    this.$scope.$on('reset-timer', () => this._resetTimer() );
  }

  _stopTimer() {
    this.$interval.cancel(this.intervalId);
    this.intervalId = null;
  }

  _resetTimer() {
    this.time = 0;
    if (!this.intervalId) {
      this._startTimer();
    }
  }

  _startTimer() {
    this.intervalId = this.$interval(() => this.time++, 1000);
  }
}