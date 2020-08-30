

    const productos =[
    {nombre:'Platano', valor:`<a href="#">Platano</a>`},
    {nombre:'Pera', valor:500},
    {nombre:'Sandia', valor:500},
    {nombre:'Limon', valor:500},
    {nombre:'Melon', valor:500},
    {nombre:'Frutas', valor:500},

    ]






    const formulario=document.querySelector('#formulario1');
    const boton=document.querySelector('#boton1');
    const resultado=document.querySelector('#resultado');


    const filtrar=()=>{

      resultado.innerHTML ='';
      //console.log(formulario.value);
      const texto =formulario.value.toLowerCase();
      for (let producto  of productos){
        let nombre=producto.nombre.toLowerCase();

          if(nombre.indexOf(texto) !==-1){
                          //Las comillas especiales es para escribir cod html
            resultado.innerHTML +=`    
              <li>${producto.nombre} - valor: ${producto.valor}</li>
            `
          }
      }
        if(resultado.innerHTML===''){
          resultado.innerHTML +=`    
            <li>Producto no encontrado...</li>
          `
        }
    } 

    boton.addEventListener('click',filtrar)
    formulario.addEventListener('keyup',filtrar)

    filtrar();
  
  