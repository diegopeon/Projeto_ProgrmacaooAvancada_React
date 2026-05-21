import { useMemo, useState } from 'react';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import VehicleCard from './components/VehicleCard/VehicleCard.jsx';
import Accordion from './components/Accordion/Accordion.jsx';
import Pagination from './components/Pagination/Pagination.jsx';
import ProgressBar from './components/ProgressBar/ProgressBar.jsx';
import Tabs from './components/Tabs/Tabs.jsx';
import Dropdown from './components/Dropdown/Dropdown.jsx';
import Toast from './components/Toast/Toast.jsx';
import Footer from './components/Footer/Footer.jsx';
import StatCard from './components/StatCard/StatCard.jsx';
import { cars } from './data/cars.js';
import { faqItems } from './data/faq.js';
import { useToast } from './context/ToastContext.jsx';

const categoryOptions = [
  { label: 'Todos os veículos', value: 'Todos' },
  { label: 'Superesportivos', value: 'Superesportivo' },
  { label: 'SUVs de luxo', value: 'SUV de luxo' },
  { label: 'Sedãs executivos', value: 'Sedã executivo' },
  { label: 'Colecionáveis', value: 'Colecionável' }
];

const carsPerPage = 3;

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [currentPage, setCurrentPage] = useState(1);
  const { showToast } = useToast();

  const filteredCars = useMemo(() => {
    if (selectedCategory === 'Todos') return cars;
    return cars.filter((car) => car.category === selectedCategory);
  }, [selectedCategory]);

  const totalPages = Math.ceil(filteredCars.length / carsPerPage);
  const startIndex = (currentPage - 1) * carsPerPage;
  const visibleCars = filteredCars.slice(startIndex, startIndex + carsPerPage);
  const featuredCar = cars[0];

  const tabs = [
    {
      title: 'Visão geral',
      content: `${featuredCar.name} combina engenharia de precisão, assinatura visual marcante e acabamento artesanal para uma experiência de condução rara.`
    },
    {
      title: 'Performance',
      content: `${featuredCar.engine}, ${featuredCar.power}, aceleração de 0 a 100 km/h em ${featuredCar.acceleration}.` 
    },
    {
      title: 'Interior',
      content: 'Cabine com couro premium, fibra de carbono, bancos esportivos, iluminação ambiente e interface digital voltada ao motorista.'
    },
    {
      title: 'Condição',
      content: 'Veículo com histórico verificado, documentação analisada, baixa quilometragem e disponibilidade para visita agendada.'
    }
  ];

  function handleCategoryChange(option) {
    setSelectedCategory(option.value);
    setCurrentPage(1);
    showToast({
      type: 'info',
      message: `Filtro aplicado: ${option.label}.`
    });
  }

  function handleInterest(carName) {
    showToast({
      type: 'success',
      message: `Interesse registrado para ${carName}. Um consultor entrará em contato.`
    });
  }

  return (
    <div className="app-shell">
      <Header />
      <main>
        <Hero onPrimaryAction={() => showToast({ type: 'success', message: 'Solicitação de curadoria enviada com sucesso.' })} />

        <section className="section section--compact" aria-labelledby="stats-title">
          <div className="container">
            <p className="eyebrow">Autoridade e curadoria</p>
            <h2 id="stats-title">Uma experiência desenhada para quem não compra apenas transporte.</h2>
            <div className="stats-grid" aria-label="Indicadores da Aurum Motors">
              <StatCard value="120+" label="veículos negociados" />
              <StatCard value="18" label="marcas premium" />
              <StatCard value="7 anos" label="de curadoria especializada" />
              <StatCard value="100%" label="documentação verificada" />
            </div>
          </div>
        </section>

        <section className="section" id="catalogo" aria-labelledby="catalog-title">
          <div className="container catalog-heading">
            <div>
              <p className="eyebrow">Catálogo selecionado</p>
              <h2 id="catalog-title">Máquinas raras, filtradas por categoria.</h2>
            </div>
            <Dropdown
              label="Filtrar categoria"
              options={categoryOptions}
              selectedValue={selectedCategory}
              onSelect={handleCategoryChange}
            />
          </div>

          <div className="container vehicle-grid" aria-live="polite">
            {visibleCars.map((car) => (
              <VehicleCard key={car.id} car={car} onInterest={handleInterest} />
            ))}
          </div>

          <div className="container pagination-area">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </section>

        <section className="section section--featured" id="experiencia" aria-labelledby="featured-title">
          <div className="container featured-layout">
            <div className="featured-copy">
              <p className="eyebrow">Veículo em destaque</p>
              <h2 id="featured-title">{featuredCar.name}</h2>
              <p>
                Um superesportivo que transforma aerodinâmica, brutalidade e presença em uma experiência de direção memorável.
              </p>
              <Tabs tabs={tabs} />
            </div>
            <div className="featured-panel" aria-label="Resumo técnico do veículo em destaque">
              <span className="status-pill">Disponível para visita</span>
              <h3>{featuredCar.brand}</h3>
              <ul>
                <li><strong>Ano:</strong> {featuredCar.year}</li>
                <li><strong>Motor:</strong> {featuredCar.engine}</li>
                <li><strong>Potência:</strong> {featuredCar.power}</li>
                <li><strong>Preço:</strong> {featuredCar.price}</li>
              </ul>
              <button className="button button--primary" onClick={() => handleInterest(featuredCar.name)}>
                Solicitar proposta
              </button>
            </div>
          </div>
        </section>

        <section className="section section--compact" aria-labelledby="progress-title">
          <div className="container process-card">
            <div>
              <p className="eyebrow">Processo premium</p>
              <h2 id="progress-title">Jornada de aquisição exclusiva</h2>
              <p>
                Da curadoria inicial até a entrega, o processo é conduzido com análise documental, visita agendada e proposta personalizada.
              </p>
            </div>
            <ProgressBar value={60} label="Progresso da jornada" />
          </div>
        </section>

        <section className="section" id="faq" aria-labelledby="faq-title">
          <div className="container faq-layout">
            <div>
              <p className="eyebrow">Dúvidas frequentes</p>
              <h2 id="faq-title">Clareza antes da decisão.</h2>
              <p>
                Um comprador premium não precisa de pressão. Precisa de informação, confiança e precisão.
              </p>
            </div>
            <Accordion items={faqItems} />
          </div>
        </section>
      </main>
      <Footer />
      <Toast />
    </div>
  );
}

export default App;
