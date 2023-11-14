import { toast } from 'react-toastify';

/**
 * NOTE: if light dynamic theme is needed take theme as parameter
 *  
 */

export const toastSuccess = (toastMsg: string) => toast.success(toastMsg, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    theme: "dark",
});

export const toastError = (toastMsg: string) => toast.error(toastMsg, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    theme: "dark",
});