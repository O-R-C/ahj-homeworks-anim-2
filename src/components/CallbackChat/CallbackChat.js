import CallbackChat_UI from './CallbackChat_UI'

/**
 * CallbackChat component
 *
 * @class
 */
export default class CallbackChat {
  /**
   * UI instance
   * @type {CallbackChat_UI}
   * @private
   */
  #ui

  /**
   * Constructor
   *
   * @param {HTMLElement|string} element - Element or selector of element
   */
  constructor(element) {
    this.#ui = new CallbackChat_UI(element)

    this.#init()
  }

  /**
   * Initializes the component
   *
   * @private
   */
  #init() {
    this.#addListeners()
  }

  /**
   * Adds event listeners
   *
   * @private
   */
  #addListeners() {
    this.#ui.btnShow.addEventListener('click', this.#handleToggleHidden)
    this.#ui.form.addEventListener('submit', this.#handleSubmit)
  }

  /**
   * Handles toggle hidden event
   *
   * @private
   */
  #handleToggleHidden = () => {
    this.#ui.toggleHidden()
  }

  /**
   * Handles submit event
   *
   * @param {Event} event - Submit event
   * @private
   */
  #handleSubmit = (event) => {
    event.preventDefault()
    this.#ui.clearInput()
    this.#ui.toggleHidden()
  }
}
