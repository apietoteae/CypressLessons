/// <reference types="Cypress"  />
// con la sentencia superior nosotros le indicamos al software que estamos trabajando con cypress, por ende, nos ayudará con las referencias. 
require('cypress-plugin-tab') //Esta es la funcion tab. Con el require y su previa instalación a traves de la terminal (npm install -D cypress-plugin-tab) podremos usarla.
require('cypress-xpath') //Este require nos permite elegir elementos por el Xpath. 
require('@4tw/cypress-drag-drop') //para usar el drag and drop.
require('cypress-delete-downloads-folder').addCustomCommand();

import"cypress-file-upload" //Plugin para subir imagenes a una web. 

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  }); //Una gran cantidad de páginas da error de este tipo. Con estas sentencias se arregla. 

const { deleteDownloadsFolderAfterAll } = require('cypress-delete-downloads-folder');


describe('delete downloads folder after all', () => {
    deleteDownloadsFolderAfterAll()
  
    it('should work', () => {})
  })