export const useConfirm = (message = '', onConfirm, onCancle) => {
  if (typeof onConfirm !== 'function') {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      try {
        onCancle();
      } catch (error) {
        return;
      }
    }
  };
  return confirmAction;
};
