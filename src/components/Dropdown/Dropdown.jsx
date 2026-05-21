import { useEffect, useRef, useState } from 'react';
import './Dropdown.css';

function Dropdown({ label, options, selectedValue, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const selectedOption = options.find((option) => option.value === selectedValue);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleSelect(option) {
    onSelect(option);
    setIsOpen(false);
  }

  return (
    <div className="dropdown" ref={dropdownRef}>
      <span className="dropdown__label">{label}</span>
      <button
        className="dropdown__button"
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        {selectedOption?.label ?? 'Selecionar'}
        <span aria-hidden="true">⌄</span>
      </button>

      {isOpen && (
        <ul className="dropdown__menu" role="listbox">
          {options.map((option) => (
            <li key={option.value} role="option" aria-selected={option.value === selectedValue}>
              <button type="button" onClick={() => handleSelect(option)}>
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
