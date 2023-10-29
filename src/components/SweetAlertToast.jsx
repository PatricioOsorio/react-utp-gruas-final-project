import Swal from 'sweetalert2';

// Crea un mixin de Toast
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});

// Función para mostrar un Toast
const SweetAlertToast = (icon, title) => {
  Toast.fire({
    icon: icon,
    title: title,
  });
};

export default SweetAlertToast;