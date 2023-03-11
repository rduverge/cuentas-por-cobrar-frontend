import Swal from 'sweetalert2'

const savingChangesAlert = () => {
    Swal.fire({
        position: 'center', 
        icon: 'success', 
        title: 'Se han guardado los cambios', 
        showConfirmButton: false, 
        timer:1500
    })
} 


export default savingChangesAlert;