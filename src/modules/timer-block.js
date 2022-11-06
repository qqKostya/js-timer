export class TimerBlock {
  #date
  #timerContainer
  #timerTextHTML

  constructor(date) {
    this.#date = date;
    this.#timerContainer = document.createElement('div');
    this.#timerTextHTML = document.createElement('h2');
  }

  render () {
    this.#timerContainer.id = 'timer';
    this.#timerTextHTML.className = 'timer-text';
    this.#timerTextHTML.textContent = 'TIME';

    const todayHTML = document.createElement('div');
    todayHTML.className = 'today-date';
    todayHTML.textContent = new Date();

    this.#timerContainer.append(this.#timerTextHTML, todayHTML);

    return this.#timerContainer;
  }
}