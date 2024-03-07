import React, { useState } from 'react';




    const FiltreBar = ({ options, onFilterChange }) => {
        const [filters, setFilters] = useState({});
      
        const handleFilterChange = (filterType, value) => {
          const newFilters = { ...filters, [filterType]: value };
          setFilters(newFilters);
          onFilterChange(newFilters);
        };
      
        return (
          <div className="flex justify-between items-center rgb(247, 236, 217) p-3 space-x-4">
            <div className="flex-grow">
              <p class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Filtres : </p>
              
              </div>
            <div className="flex-grow mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              <FilterOption
                label="Prix"
                options={options.prices}
                onSelect={(value) => handleFilterChange('price', value)}
              />
              </div>
              <div className="flex-grow mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              <FilterOption
                label="Couleur"
                options={options.colors}
                onSelect={(value) => handleFilterChange('color', value)}
              />
              </div>
              <div className="flex-grow mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              <FilterOption
                label="Type"
                options={options.types}
                onSelect={(value) => handleFilterChange('type', value)}
              />
              </div>
              <div className="flex-grow mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              <FilterOption
                label="Matière"
                options={options.materials}
                onSelect={(value) => handleFilterChange('material', value)}
              />
              
            </div>
            <button
              onClick={() => setFilters({})}
              className="bg-orange-300 text-white px-4 py-2 rounded"
            >
              Réinitialiser
            </button>
          </div>
        );
      };
      
      const FilterOption = ({ label, options, onSelect }) => {
        return (
          <div>
            <label className="font-bold">{label}</label>
            <select
              onChange={(e) => onSelect(e.target.value)}
              className="block w-full p-2 border border-orange-300 rounded mt-2"
            >
              <option value="">Tous</option>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        );
      };
      
      // Example usage:
      const options = {
        prices: ['Croissant','Décroissant'],
        colors: ['Noir', 'Bleu', 'Marron', 'Blanc', 'Orange'],
        types: ['Canapés', 'Chaise', 'Lit', 'Etagère', 'Table', ],
        materials: ['Bois', 'Métal', 'Velour'],
      };
      
      const Filtre = () => {
        const handleFilterChange = (filters) => {
          // Do something with the filters, like updating a list of items
          console.log('Filters changed:', filters);
        };
      
        return (
          <div>
            <FiltreBar options={options} onFilterChange={handleFilterChange} />
            {/* Other components rendering filtered items */}
          </div>
        );
      };
    

export default Filtre