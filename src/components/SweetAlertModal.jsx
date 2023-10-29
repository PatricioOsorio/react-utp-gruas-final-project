import Swal from 'sweetalert2';

const SweetAlertModal = async ({
  title,
  textDescription,
  icon,
  iconColor = 'var(--bs-warning)',
  confirmButtonColor = 'var(--bs-primary)'
}) => {
  await Swal.fire({
    title: title,
    text: textDescription,
    icon: icon,
    iconColor: iconColor,
    confirmButtonColor: confirmButtonColor,
    confirmButtonText: 'Entiendo',
  });
};

export default SweetAlertModal;
