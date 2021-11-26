import { createStore } from 'vuex'
import youtube from './modules/youtube'

export default createStore({
  modules: {
    youtube
  }
})

// Aquí simplemente registramos el módulo que creamos para que la aplicación pueda empezar a reconocerlo