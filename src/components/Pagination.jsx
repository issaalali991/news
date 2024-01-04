
const Pagination = ({ currentPage, entriesPerPage, totalEntries, onPageChange }) => {
  const totalPages = Math.ceil(totalEntries / entriesPerPage);
  const visiblePages = 4; 

  // Berechnen den Bereich der sichtbaren Seitenzahlen
  const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
  const endPage = Math.min(totalPages, startPage + visiblePages - 1);

  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
    <div>
     <button key={startPage} onClick={() => onPageChange(startPage)}>erste Page {' | '}</button>

        {pageNumbers.map((number) => (
         
            <button key={number} onClick={() => onPageChange(number)}>{number} {' | '}</button>
          
        ))}
        
        <button key={totalPages} onClick={() => onPageChange(endPage)}>{" "}letzte Page </button>
     
    </div>
  );
};

export default Pagination;
