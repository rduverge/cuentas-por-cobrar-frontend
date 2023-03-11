import Swal from 'sweetalert2'; 

const swalButton = Swal.mixin({
    customClass: {
        confirmButton: 'bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full',
        cancelButton: 'bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full',
      },
      buttonsStyling: false,
});


export { swalButton };
