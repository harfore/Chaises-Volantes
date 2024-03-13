// Import des modules React nécessaires
import React, { useState } from "react";

// Composant FiltreBar
const FiltreBar = ({ options, onFilterChange }) => {
  // State pour gérer les filtres
  const [filters, setFilters] = useState({});

  // Gestion du changement de filtre
  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  // Rendu du composant FiltreBar
  return (
    <div className="flex justify-between items-center rgb(247, 236, 217) p-3 space-x-4 mt-11">
      <div className="flex-grow ">
        <p class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black ">
          Filtres :{" "}
        </p>
      </div>
      {/* Options de filtre */}
      {Object.keys(options).map((key) => (
        <div
          className="flex-grow mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black  hover:shadow-lg "
          key={key}
        >
          <FilterOption
            label={key}
            options={options[key]}
            onSelect={(value) => handleFilterChange(key.toLowerCase(), value)}
          />
        </div>
      ))}
      {/* Bouton pour réinitialiser les filtres */}
      <button
        onClick={() => setFilters({})}
        className="bg-orange-300 text-black px-4 py-2 rounded shadow hover:shadow-lg"
      >
        Réinitialiser
      </button>
    </div>
  );
};

// Composant FilterOption
const FilterOption = ({ label, options, onSelect }) => {
  // Rendu du composant FilterOption
  return (
    <div>
      <label className="font-bold">{label}</label>
      {/* Sélecteur d'options */}
      <select
        onChange={(e) => onSelect(e.target.value)}
        className="block w-full p-2 border border-orange-300 rounded mt-2"
      >
        {/* Option par défaut */}
        <option value="">Tous</option>
        {/* Options disponibles */}
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

// Options de filtre par défaut
const options = {
  Prix: ["Croissant", "Décroissant"],
  Couleurs: ["Noir", "Bleu", "Marron", "Blanc", "Orange", "Gris"],
  Types: ["Canapé", "Chaise", "Lit", "Etagère", "Table"],
  Materiels: ["Bois", "Métal", "Velour", "Verre"],
};

// Composant Filtre
const Filtre = () => {
  // Fonction pour gérer le changement de filtre
  const handleFilterChange = (filters) => {
    console.log("Filters changed:", filters);
  };

  // Rendu du composant Filtre
  return (
    <div>
      <FiltreBar options={options} onFilterChange={handleFilterChange} />
    </div>
  );
};

// Export du composant Filtre
export default Filtre;
