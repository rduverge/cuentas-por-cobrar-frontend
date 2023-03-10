import * as yup from 'yup'; 

const CustomerSchema = yup.object().shape({

    name: yup.string().required("Debe llenar este campo").min(5, "La cantidad de caracteres debe ser mayor a 5"),
    creditLimit: yup.number().required().positive("La cantidad debe ser mayor que 0.").integer(),
    identification: yup
    .string()
    .test("validar-cedula", "La Cedula no es valida", function(value){
        return validar_cedula(value)
    })
})