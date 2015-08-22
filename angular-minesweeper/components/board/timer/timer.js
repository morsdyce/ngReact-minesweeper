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
  constructor($interval) {
    this.time = 0;

    $interval(() => {
      this.time++;
    }, 1000);
  }
}