import { createApp } from 'vue'
import App from './componet/app/App.vue'
import uiComponents from './ui-componet/'
import "./index.css"



const app = createApp(App)
uiComponents.map(component => app.component(component.name, component))
app.mount('#app')
