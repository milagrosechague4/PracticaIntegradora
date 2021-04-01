/* REQUERIR MODULOS DE BANDAS */
const bandas = require('../modulos/bandas');
const bandasArray = bandas.lista

module.exports = {

    listadoBandas: (req, res) => {
        return res.render('listadoBandas', {bandasArray});
    },
   
    porID: (req, res) => {
        let id = req.params.id;
    
        for(let i = 0; i < bandasArray.length; i++){
            if(bandasArray[i].id == id){
                return res.render('detalleBanda', bandasArray[i] );
            } 
        }
    },

    porGenero : (req, res)=>{
        let genero = req.params.genero
        let generos = []

        bandasArray.forEach(element =>{
            if (element.genero == genero){
                generos.push(element)
            }
        })

        return res.render(generos);

    }
    
    
    //porColor: (req, res) => {
        //PRUEBA DE CONECCIÓN -- res.send('Hollaaa fnifeo');}
    //    let color = req.params.color;
    //    let autosPorColor = autos.porColor(color);

    //    if (autosPorColor.length > 0) {
    //        res.send(autosPorColor);
    //    } else {
    //        res.send(`Por el momento no tenemos autos de el color ${marca}.`);
    //    }
    //},

    //prueba: (req, res) => {
    //console.log(res.send(autos.lista));
    //}
}