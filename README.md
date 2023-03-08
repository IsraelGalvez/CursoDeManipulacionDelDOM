# Snowpack Tailwind

> ✨ Bootstrapped with Create Snowpack App (CSA).

Ready-to-go template to create awesome websites using Tailwind on top of Snowpack and autopublish to GitHub pages using GitHub Actions.

- [Quick start](#quick-start)
- [Features](#features)
- [Available Scripts](#available-scripts)

## Quick start

```sh
# Bootstrap the template into a new folder called `my-app`
npx create-snowpack-app my-app --template snowpack-template-tailwind

# Enable Prettier on git-commit
cd my-app
npm run install:husky

# Start the development server
npm start
```
```
Leer nodos
--> document.getElementById('id')
--> document.getElementByTagName('div') # Te entrega todas las etiquetas de la pagina
--> parent.getElementByTagName('input') # Te entrega todas las etiquetas hijos del nodo seleccionado
--> parent.getElementByClassName('class')
--> document.querySelector('id' or 'class' or 'tag')
-- document.querySelectorAll('id' or 'class' or 'tag') # Devuleve un nodeList

Convertir nodeList a array
--> [...nodeList]

Crear nodos
--> document.createElement('tag')
--> document.createTextNode('texto')

Agregar nodos
--> parentElement.appendChild()
--> parentElement.append() # No es soportado por internet explorer
--> parentElement.insertBefore()
--> parentElement.insertAdjacentElement('beforebegin',node)
	['beforebegin', 'afterbegin', 'beforeend', 'afterend']
  
	
  Otras formas de agregar
  Estos elementos pueden tener problemas de seguridad, se puede inyectar Html
  maligno XSS, Evitar que usarlo cuando el usuario pueda escribir
  --> node.outerHTML #Te devuleve HTML en forma de texto "<h1>hola</h1>"
  --> node.innerHTML #Te entrega el valor del nodo "hola", tambien le puedes
      asignar nuevos valores nodo.innerHTML = "HOLA 2"


Eliminar nodos del Dom
--> parentElement.removeChild(nodoAEliminar)
--> nodoAEliminar.remove() #No es soportado por internet explorer
--> document.remove()
--> document.replaceChild()
  
  Formas de identificar al nodo padre
  --> nodoAEliminar.parentElement
  Identicar el nodo padre y aliminar el nodo hijo
  --> nodoAEliminar.parentElement.removeChild(nodoAEliminar)
```
