import * as Yup from 'yup'; 
import validar_cedula from './Validar_Cedula';

const customerSchema = Yup.object().shape({

    name: Yup.string().required("Debe llenar este campo").min(5, "La cantidad de caracteres debe ser mayor a 5"),
    creditLimit: Yup.number().required().positive("La cantidad debe ser mayor que 0.").integer(),
  
    state: Yup.string()
        .matches(/(Pendiente|Aprobado|Rechazado)/, "El campo estado no cumple con los requeridos")
        .required('El estado es requerido!'),
        identification: Yup
        .string()
            .test("validar-cedula", "La Cedula no es valida", (value) => {
                return validar_cedula(value) == true;
            
        }),
    

})
export default customerSchema;