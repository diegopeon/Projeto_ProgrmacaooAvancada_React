import './Pagination.css';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  if (totalPages <= 1) return null;

  return (
    <nav className="pagination" aria-label="Paginação do catálogo">
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Anterior
      </button>

      {pages.map((page) => (
        <button
          key={page}
          type="button"
          className={page === currentPage ? 'is-active' : ''}
          aria-current={page === currentPage ? 'page' : undefined}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Próxima
      </button>
    </nav>
  );
}

export default Pagination;
