import BaseUI from '@/js/Classes/BaseUI'
import getElement from '@/js/getElement'
import BtnShow from '@ui/BtnShow/BtnShow'
import styles from './CallbackChat.module.css'

export default class CallbackChat_UI extends BaseUI {
  createApp() {
    const app = getElement({
      tag: 'div',
      classes: styles['callback-chat'],
    })

    this.btnShow = BtnShow()

    app.append(this.btnShow)
    return app
  }

  toggleHidden() {
    this.app.classList.toggle(styles['hidden'])
  }
}
