import * as yup from 'yup';

const transactionSchema = yup.object().shape({

    movementType: yup.string()
        .required("Debe seleccionar un Tipo de Movimiento.")
    .matches(/(Debito|Credito)/,"Los movimientos no cumplen con lo requerido"),
    
    documentId: yup.number("Debe elegir un tipo de documento!")
    .required("Debe seleccionar un documento."),
    
    transactionDate: yup.date()
    .max(new Date(), "La fecha no puede ser en el futuro."),
    
    customerId: yup.number("Debe elegir un cliente")
    .required("Debe seleccionar un cliente."),
    
    amount: yup.number()
    .required("Debe ingresar un monto").positive("El monto no puede ser menor a 0.")
})

export default transactionSchema; 