class Timer {
  constructor() {
    this.currentTime = currentTime;
    this.intervalId = 0;
  }

  startCount(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime--;
    }, 1000);
  }

  // getMinutes() {
  //   return Math.floor(this.currentTime / 60);
  // }

  getSeconds() {
    return this.currentTime;
  }

  twoDigitsNumber(number) {
    return ('0' + number).slice(-2);
  }

  printTime() {

    return `${this.twoDigitsNumber(this.getSeconds())}`;
  }
}


