// 1. Identificar el contenedor que va a usar vue
// 2. Crear la app de vue en el contenedor del paso 1
// 3. Crear la estructura del framework vue

const appVue={
    // Controlar los componentes del DOM
    // El Estado 
    data(){
        return{
            lblAlerta:"",
            usuario:{
                correo:null
            }
           
            
        }

    }, 
    // Métodos y funciones que voy a utilizar en mi aplicacin
    methods:{
        obtenerValoresFormulario(){
            console.log(this.usuario)
        }

    }
}
Vue.createApp(appVue).mount('#app-vue')