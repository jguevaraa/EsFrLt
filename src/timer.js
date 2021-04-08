class Timer {
  constructor(startingTime) {
  
    this.currentTime = startingTime;
    this.intervalId = 0;
  }

  startCount(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime--;

    }, 1000);
  }

  kmCount(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime--;
   
    },);
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

  printkm() {

    return `${this.getSeconds()}`;
  }
  
}


