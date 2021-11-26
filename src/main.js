import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FocusDirective from "@/directives/focus";

const app = createApp(App);
app.use(store).use(router).mount('#app')

// Curtom Directives
app.directive("focus", FocusDirective)