const gastos = document.querySelector('#gastos')
const ingresos = document.querySelector('#ingresos')
const buttonCalcular = document.querySelector('#button')
const iconMessage = document.querySelector('#icon')
const message = document.querySelector("#message")

const gastosMonto = document.querySelector('#gastos-monto')
const ingresosMonto = document.querySelector('#ingresos-monto')
const buttonMontoEndeudamiento = document.querySelector("#button-monto")
const messageMonto = document.querySelector("#message-monto")
const iconMessageMonto = document.querySelector('#icon-monto')

buttonCalcular.addEventListener('click', enviarFormulario)
buttonMontoEndeudamiento.addEventListener('click', montoDeEndeudamiento)

console.log(f);

function enviarFormulario(event){
    event.preventDefault();
    capacidadEndeudamiento()
}

function capacidadEndeudamiento(){
    const gastosTotales = gastos.value
    const ingresosTotales = ingresos.value
    
    if(gastosTotales && ingresosTotales){

        const capacidadPorcentaje = Math.floor((gastosTotales / ingresosTotales) * 100)

        gastos.style.cssText = "border-radius: 0; border: 1px solid #80808063; border-top: none; border-left: none; border-right: none"
        ingresos.style.cssText = "border-radius: 0; border: 1px solid #80808063; border-top: none; border-left: none; border-right: none"
        console.log({
            capacidadPorcentaje
        })
        
        if(capacidadPorcentaje <= 40){
            message.innerText = `Felicidades, tienes un porcentaje de capacidad de endeudamiento de ${capacidadPorcentaje}%.`;
            icon.classList.remove('icon-message-warn', 'message-icon-warn')
            icon.classList.add('icon-message', 'message-icon')
            icon.setAttribute("src", 'https://i.postimg.cc/XpfcWYf2/5289675.png')

        }else{
            message.innerText = `Lo sentimos, tu porcentaje ha sido de un ${capacidadPorcentaje}%; es mayor al estándar permitido.`;
            icon.classList.remove('icon-message-warn', 'message-icon-warn')
            icon.classList.add('icon-message', 'message-icon')
            icon.setAttribute("src", 'https://i.postimg.cc/qgzQnr8w/6711656.png')
        }
    }else{
        message.innerText = 'Por favor ingresa datos validos.'
        
        icon.classList.remove('icon-message', 'message-icon')
        icon.classList.add('icon-message-warn', 'message-icon-warn')
        icon.setAttribute("src", 'https://i.postimg.cc/JsGP3LVM/497738.png')
        
        gastos.classList.add('input-warn')
        ingresos.classList.add('input-warn')
    }
}

function montoDeEndeudamiento(event){
    event.preventDefault()
    const ingresosTotales = ingresosMonto.value 
    const gastosTotales = gastosMonto.value
    
    if(gastosTotales && ingresosTotales){
        
        const montoEndeudamiento = (ingresosTotales - gastosTotales) * 0.4
        const montoValido = Math.sign(montoEndeudamiento)
        console.log(montoEndeudamiento);
        
        gastosMonto.style.cssText = "border-radius: 0; border: 1px solid #80808063; border-top: none; border-left: none; border-right: none"
        ingresosMonto.style.cssText = "border-radius: 0; border: 1px solid #80808063; border-top: none; border-left: none; border-right: none"

        if(montoValido === 1){
            messageMonto.innerText = `Felicidades, cuentas con un monto de endeudamiento de ${montoEndeudamiento}.`
            iconMessageMonto.classList.remove('icon-message-warn', 'message-icon-warn')
            iconMessageMonto.classList.add('icon-message', 'message-icon')
            iconMessageMonto.setAttribute("src", 'https://i.postimg.cc/XpfcWYf2/5289675.png')
        }else{
            messageMonto.innerText = `Lo sentimos, el resultado ha sido ${montoEndeudamiento}; no cuentas con capacidad de endeudamiento.`;
            iconMessageMonto.classList.remove('icon-message-warn', 'message-icon-warn')
            iconMessageMonto.classList.add('icon-message', 'message-icon')
            iconMessageMonto.setAttribute("src", 'https://i.postimg.cc/qgzQnr8w/6711656.png')
        }
        
    }else{
        messageMonto.innerText = 'Por favor ingresa datos validos.'
        
        iconMessageMonto.classList.remove('icon-message', 'message-icon')
        iconMessageMonto.classList.add('icon-message-warn', 'message-icon-warn')
        iconMessageMonto.setAttribute("src", 'https://i.postimg.cc/JsGP3LVM/497738.png')
        
        gastosMonto.classList.add('input-warn')
        ingresosMonto.classList.add('input-warn')
    }
}