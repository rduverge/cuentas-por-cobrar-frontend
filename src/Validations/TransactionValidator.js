import * as yup from 'yup';

const TransactionSchema = yup.object().shape({

    movementType: yup.string()
    .required("Debe seleccionar un Tipo de Movimiento."),
    
    document: yup.number()
    .required("Debe seleccionar un documento."),
    
    transactionDate: yup.date()
    .max(new Date(), "La fecha no puede ser en el futuro."),
    
    customer: yup.number()
    .required("Debe seleccionar un cliente."),
    
    amount: yup.number()
    .required("Debe ingresar un monto").positive("El monto no puede ser menor a 0.")
})