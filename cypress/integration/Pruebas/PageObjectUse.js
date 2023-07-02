/// <reference types="Cypress"  />
// con la sentencia superior nosotros le indicamos al software que estamos trabajando con cypress, por ende, nos ayudará con las referencias. 
require('cypress-plugin-tab') //Esta es la funcion tab. Con el require y su previa instalación a traves de la terminal (npm install -D cypress-plugin-tab) podremos usarla.
require('cypress-xpath') //Este require nos permite elegir elementos por el Xpath. 
require('@4tw/cypress-drag-drop') //para usar el drag and drop.
import"cypress-file-upload" //Plugin para subir imagenes a una web. 

import ProyectoEjemplo_PO from "./PageObjectModelExample" //Estamos importando los métodos que hay en la clase PO.

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  }); //Una gran cantidad de páginas da error de este tipo. Con estas sentencias se arregla. 

describe("",()=>{  //El describe es solo para describir que proyecto estamos realizando, se suele utilizar para el nombre del proyecto. 

    const master = new ProyectoEjemplo_PO; //Creamos un objeto PO.

it("Ejecutamos un método del PageObjecModel",()=>{  
    master.visitHome("https://demoqa.com/automation-practice-form","ToolsQA") // le pasamos los parámetros.
    master.cogerAlgo("#firstName", "texto variable")
    master.metodoQueQuierasCrear()
})

})