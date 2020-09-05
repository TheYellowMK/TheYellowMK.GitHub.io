

/*La URL actual se puede obtener mediante este código:
var URLactual = window.location;
alert(URLactual);


obtendría el mismo resultado:

var URLactual = window.location.href;
alert(URLactual);*/

/*Con jQuery se puede obtener con:

var URLactual = jQuery(location).attr('href');*/

/*si queremos obtener sólo el pathname (ruta):

var pathname = window.location.pathname;
alert(pathname);*/

/*Obtener la ruta absoluta
        function getAbsolutePath() {
            var loc = window.location;
            var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
            return loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
        }

Por ejemplo,en la URL http://unsitio.com/directorio/pagina.html, la ruta absoluta es http://unsitio.com/directorio/
*/




    const valores1 =[
    {nombre:'Vídeos Tutoriales', valor:`<a href="docs/Videos/index.html#Videos_Tutoriales">Vídeos Tutoriales</a>`},
    {nombre:'Pera', valor:500},
    {nombre:'Sandia', valor:500},
    {nombre:'Limon', valor:500},
    {nombre:'Melon', valor:500},
    {nombre:'Frutas', valor:500},

    ]
    const valores2 =[
    {nombre:'Vídeos Tutoriales', valor:`<a href="#Videos_Tutoriales">Vídeos Tutoriales</a>`},
    {nombre:'Pera', valor:500},
    {nombre:'Sandia', valor:500},
    {nombre:'Limon', valor:500},
    {nombre:'Melon', valor:500},
    {nombre:'Frutas', valor:500},

    ]
    const valores3 =[
    {nombre:'Vídeos Tutoriales', valor:`<a href="../Videos/index.html#Videos_Tutoriales">Vídeos Tutoriales</a>`},
    {nombre:'Pera', valor:500},
    {nombre:'Sandia', valor:500},
    {nombre:'Limon', valor:500},
    {nombre:'Melon', valor:500},
    {nombre:'Frutas', valor:500},

    ]






    const formulario1=document.querySelector('#formulario1');
    const boton1=document.querySelector('#boton1');
    const resultado1=document.querySelector('#resultado1');


    const filtrar=()=>{

      resultado1.innerHTML ='';
      //console.log(formulario1.value);
      const texto1 =formulario1.value.toLowerCase();

ruta='';
var ruta =RutaAbsoluta()

function RutaAbsoluta() {
            var loc = window.location;
            var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
            return loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
        }


                      if (ruta=="file:///C:/xampp/htdocs/Programacion/Git/GitHub/b/"){
                        valores=valores1;
                      } else if (ruta=="file:///C:/xampp/htdocs/Programacion/Git/GitHub/b/docs/Videos/"){
                        valores=valores2;
                      } else if (ruta=="file:///C:/xampp/htdocs/Programacion/Git/GitHub/b/docs/AcercaDe/"){
                        valores=valores3;
                      }


      for (let valor1  of valores ){
        let nombre1=valor1.nombre.toLowerCase();

          if(nombre1.indexOf(texto1) !==-1){
                          //Las comillas especiales es para escribir cod html
            resultado1.innerHTML +=`    
              <li>${valor1.nombre} - valor: ${valor1.valor}</li>
            `
          }
      }
        if(resultado1.innerHTML===''){
          resultado1.innerHTML +=`    
            <li>Resultado no encontrado o pruebe con otra palabra...</li>
          `
        }
    } 

    boton1.addEventListener('click',filtrar)
    formulario1.addEventListener('keyup',filtrar)

    filtrar();
  
  