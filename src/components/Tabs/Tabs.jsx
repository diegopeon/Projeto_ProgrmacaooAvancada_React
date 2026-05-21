import { useState } from 'react';
import './Tabs.css';

function Tabs({ tabs }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="tabs">
      <div className="tabs__list" role="tablist" aria-label="Detalhes do veículo">
        {tabs.map((tab, index) => (
          <button
            key={tab.title}
            type="button"
            role="tab"
            aria-selected={activeIndex === index}
            aria-controls={`tab-panel-${index}`}
            id={`tab-${index}`}
            className={activeIndex === index ? 'is-active' : ''}
            onClick={() => setActiveIndex(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div
        className="tabs__panel"
        role="tabpanel"
        id={`tab-panel-${activeIndex}`}
        aria-labelledby={`tab-${activeIndex}`}
      >
        <p>{tabs[activeIndex].content}</p>
      </div>
    </div>
  );
}

export default Tabs;
