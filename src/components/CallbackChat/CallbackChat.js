import CallbackChat_UI from './CallbackChat_UI'

export default class CallbackChat {
  #ui

  constructor(element) {
    this.#ui = new CallbackChat_UI(element)

    this.#init()
  }

  #init() {
    this.#addListeners()
  }

  #addListeners() {
    this.#ui.btnShow.addEventListener('click', () => {
      this.#ui.toggleHidden()
    })
  }
}
