import * as Yup from 'yup'; 





const documentSchema = Yup.object().shape({
    description: Yup.string().
        nonNullable()
        .required('La descripcion es obligatoria!'),
    ledgerAccount:
        Yup.number("Este campo debe ser un numero")
            .positive('El campo no puede ser negativo')
            .required('El campo es requerido!'),
    state: Yup.string().required('Elige un estado!')
        .matches(/(Pendiente|Aprobado|Rechazado)/,"El campo estado no cumple con los requeridos")

}); 

export  default documentSchema; 