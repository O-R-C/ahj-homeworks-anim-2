import getElement from '@/js/getElement'
import styles from './BtnShow.module.css'

export const BtnShow = () => {
  const btnShow = getElement({
    tag: 'button',
    classes: styles['btn-show'],
  })

  return btnShow
}

export default BtnShow
