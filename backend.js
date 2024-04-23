// const controller = ("/consultas", "Method")=>{
//     data = request.json()
//     consulta = data.consulta
//     idUsuario = data.idUsuario

//     /** 
//      * data = {
//      * idUsuario: 123456,
//      * consuta: "Fecha de corte"}
//      */

//    MotorDebusqueda(data.consulta, data.idUsuario)

// }

// const MotorDebusqueda= (consulta, idUsuario)=>{

//     // en que tabla encuentro la informacion y la redirecciona a base de conocimiento

//    if(consulta === "Fecha de corte" || consulta === "fecha de corte" || consulta === "Pago mínimo" || consulta === "Pago total" || consulta === "Pago anticipado" || consulta === "Estado de cuenta"){
//       return  baseConocimiento.tarjetas(idUsuario)
//    }

//    if(consulta === "Cupo disponible"){
//       return baseConocimiento.cupoDisponible(idUsuario)
//    }

//    if(consulta === "Ultimos movimientos"){
//        return baseConocimiento.ultimosMovimientos(idUsuario)
//    }

   
// }

// class baseConocimiento{

//     static tarjetas (consulta){
//         // Consulta a la base de datos
//         //filtra en la tabla donde este la informacion relacionada a la fecha de corte 
//         // retorna la informacion envia la informacio
//         /**
//          * {
//          * fechaCorte: "2021-10-10",
//          * pagoMinimo: 100000,
//          * pagoTotal: 200000,
//          * pagoAnticipado: 300000,
//          * estadoCuenta: 400000
//          * }
//          */
//         if(consulta === "Fecha de corte"){
//             return this.Analitics.fechaCorte(data)
//         }

//         if(consulta === "Pago mínimo"){
//             this.Analitics.pagoMinimo()
//         }
//     }

//     static cupoDisponible(){
//          // Consulta a la base de datos
//         //filtra en la tabla donde este la informacion relacionada a cupo disponible 
//         // retorna la informacion envia la informacio
//     }

//     static ultimosMovimientos(){}

//     static quejas(){}

// }

// class Analitics {

//     static fechaCorte(data){
//         // data 
//         /**
//          * {
//          * fechaCorte: "2021-10-10",
//          * pagoMinimo: 100000,
//          * pagoTotal: 200000,
//          * pagoAnticipado: 300000,
//          * estadoCuenta: 400000
//          * }
//          */

//         // fecha de cortes
//         return data.fechaCorte
//     }

//     static cupoDisponible(){}

//     static ultimosMovimientos(){}

//     static estadoCuenta(){}
// }