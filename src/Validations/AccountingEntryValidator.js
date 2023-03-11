import * as Yup from 'yup';

const accountingEntrySchema = Yup.object().shape({

    description: Yup.string().
    nonNullable()
    .required('La descripcion es obligatoria!'),
    movementType: Yup.string()
        .required("Debe seleccionar un Tipo de Movimiento.")
    .matches(/(Debito|Credito)/,"Los movimientos no cumplen con lo requerido"),
    
    account:
    Yup.number("Este campo debe ser un numero")
        .positive('El campo no puede ser negativo')
        .required('El campo es requerido!'),
    state: Yup.string()
    .matches(/(Pendiente|Aprobado|Rechazado)/, "El campo estado no cumple con los requeridos")
    .required('El estado es requerido!'),
    
    
    customerId: Yup.number("Debe elegir un cliente")
    .required("Debe seleccionar un cliente."),
    
    accountEntryAmount: Yup.number()
    .required("Debe ingresar un monto").positive("El monto no puede ser menor a 0.")
})

export default accountingEntrySchema; 