import { useState } from 'react';
import './Accordion.css';

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  function handleToggle(index) {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  }

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const contentId = `accordion-content-${index}`;

        return (
          <div className="accordion__item" key={item.title}>
            <button
              className="accordion__trigger"
              type="button"
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => handleToggle(index)}
            >
              <span>{item.title}</span>
              <strong aria-hidden="true">{isOpen ? '−' : '+'}</strong>
            </button>
            <div id={contentId} className={`accordion__content ${isOpen ? 'is-open' : ''}`}>
              <p>{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
