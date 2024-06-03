import BaseUI from '@/js/Classes/BaseUI'
import getElement from '@/js/getElement'
import BtnShow from '@ui/BtnShow/BtnShow'
import CallbackForm from '@ui/CallbackForm/CallbackForm'
import styles from './CallbackChat.module.css'

/**
 * CallbackChat_UI class
 *
 * @class
 * @extends BaseUI
 */
export default class CallbackChat_UI extends BaseUI {
  /**
   * Constructor
   *
   * @param {HTMLElement|string} element - Element or selector of element
   */
  constructor(element) {
    super(element)

    this.#init()
  }

  /**
   * Initialize the CallbackChat_UI instance
   *
   * @private
   */
  #init() {
    this.#addElements()
  }

  /**
   * Add elements to the UI
   *
   * @private
   */
  #addElements() {
    this.btnSend = this.form.querySelector(`button[type="submit"]`)
    this.btnClose = this.form.querySelector(`button[class^=btn-close]`)
    this.textarea = this.form.querySelector('textarea')
  }

  /**
   * Create the app element
   *
   * @returns {HTMLElement} - App element
   */
  createApp() {
    const app = getElement({
      tag: 'div',
      classes: styles['callback-chat'],
    })

    this.form = CallbackForm(styles['hidden'])
    this.btnShow = BtnShow()

    app.append(this.form, this.btnShow)
    return app
  }

  /**
   * Toggle the hidden state of the UI elements
   */
  toggleHidden() {
    this.btnShow.classList.toggle(styles['hidden'])
    this.form.classList.toggle(styles['hidden'])
  }

  /**
   * Clear the textarea input
   */
  clearInput() {
    this.textarea.value = ''
  }
}
