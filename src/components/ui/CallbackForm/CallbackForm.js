import getElement from '@/js/getElement'
import styles from './CallbackForm.module.css'

/**
 * CallbackForm
 *
 * @param {string=} className - Class name
 * @returns {HTMLElement}
 */
export const CallbackForm = (className) => {
  const callbackForm = getElement({
    tag: 'form',
    classes: [styles['callback-form'], className],
  })

  const header = getElement({
    tag: 'h3',
    textContent: 'Напишите нам',
  })

  const text = getElement({
    tag: 'textarea',
    cols: 30,
    rows: 10,
  })

  const btnSend = getElement({
    tag: 'button',
    type: 'submit',
    textContent: 'Отправить',
    classes: styles['btn-send'],
  })

  const btnClose = getElement({
    tag: 'button',
    textContent: 'X',
    classes: styles['btn-close'],
  })

  callbackForm.append(header, text, btnSend, btnClose)

  return callbackForm
}

export default CallbackForm
