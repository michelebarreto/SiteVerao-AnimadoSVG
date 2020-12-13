class Footer{
    constructor(){
        this.filtroTurbulencia = document.getElementyById("filtro-turbulencia");

    }
    efeitoOnda(){
        /**o TweenMax é para usar repetição */
        TweenMax.to(this.filtroTurbulencia,20,{
            attr:{
                baseFrequency:0.03,
            },
            repeat:-1,
            yoyo:true
        })

    }

}
export {Footer }