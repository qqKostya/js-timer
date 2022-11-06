import { JSBlock } from "./js-block";
import { TimerBlock } from "./timer-block";

export default class App {
  #JSBlock
  #TimerBlock

  constructor () {
    this.#JSBlock = new JSBlock();
    this.#TimerBlock = new TimerBlock(new Date());
  }

  run() {
    const jsBlockHTML = this.#JSBlock.render();
    const timerBlockHTML = this.#TimerBlock.render()
    document.body.append(jsBlockHTML, timerBlockHTML);
  }
};
