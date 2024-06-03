import getElement from '@/js/getElement'
import styles from './BtnShow.module.css'

/**
 * Creates a button element with the class "btn-show" and returns it.
 *
 * @return {HTMLElement} The created button element.
 */
export const BtnShow = () => {
  const btnShow = getElement({
    tag: 'button',
    classes: styles['btn-show'],
  })

  return btnShow
}

export default BtnShow
