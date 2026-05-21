import { useEffect } from 'react';
import { useToast } from '../../context/ToastContext.jsx';
import './Toast.css';

function Toast() {
  const { toast, hideToast } = useToast();

  useEffect(() => {
    if (!toast) return undefined;

    const timerId = setTimeout(() => {
      hideToast();
    }, 4200);

    return () => clearTimeout(timerId);
  }, [toast, hideToast]);

  if (!toast) return null;

  return (
    <aside className={`toast toast--${toast.type}`} role="status" aria-live="polite">
      <p>{toast.message}</p>
      <button type="button" aria-label="Fechar notificação" onClick={hideToast}>
        ×
      </button>
    </aside>
  );
}

export default Toast;
