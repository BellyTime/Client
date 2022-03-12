export const ModalButton = ({onClick,label,modal,disabled}) => {
    return <button
      onClick={onClick}
      data-modal-toggle={modal}
      type="button"
      className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg border border-gray-200 text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      disabled={disabled}
    >
      {label}
    </button>;
}