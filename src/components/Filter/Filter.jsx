import React, { useState, useEffect  } from 'react';
import {
    FilterContainer,
    IconList,
    IconItem
  } from './Filter.styled'

const Filter = ({ onChange, selectedFilters }) => {
    const [filters, setFilters] = useState(selectedFilters);

    useEffect(() => {
        setFilters(selectedFilters);
    }, [selectedFilters]);

    // Обработчик изменения полей формы
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFilters((prev) => {
            if (type === 'checkbox') {
                return {
                    ...prev,
                    [name]: checked
                        ? [...(prev[name] || []), value]
                        : prev[name].filter((item) => item !== value),
                };
            }
            return { ...prev, [name]: value };
        });
    };

    // Обработчик применения фильтров
    const handleApply = () => {
        if (onChange) {
            onChange(filters);
        }
    };
    return (
        <FilterContainer>
          <div>
            <h3>Filters</h3>
            <label>
              <span>Location:</span>
              <input
                type="text"
                name="location"
                value={filters.location || ''}
                onChange={handleChange}
                placeholder="Select a city"
              />
            </label>
          </div>
    
          <div>
            <span>Vehicle Equipment</span>
            <IconList>
              {['AC', 'Heater', 'Solar'].map((equipment) => (
                <IconItem
                  key={equipment}
                  selected={filters.equipment?.includes(equipment) || false}
                  onClick={() =>
                    handleChange({
                      target: {
                        name: 'equipment',
                        value: equipment,
                        type: 'checkbox',
                        checked: !filters.equipment?.includes(equipment),
                      },
                    })
                  }
                >
                  <span>{equipment}</span>
                </IconItem>
              ))}
            </IconList>
          </div>
    
          <div>
            <span>Vehicle Type</span>
            <IconList>
              {['Van', 'Fully Integrated', 'Alcove'].map((type) => (
                <IconItem
                  key={type}
                  selected={filters.type?.includes(type) || false}
                  onClick={() =>
                    handleChange({
                      target: {
                        name: 'type',
                        value: type,
                        type: 'checkbox',
                        checked: !filters.type?.includes(type),
                      },
                    })
                  }
                >
                  <span>{type}</span>
                </IconItem>
              ))}
            </IconList>
          </div>
    
          <button onClick={handleApply}>Search</button>
        </FilterContainer>
      );
};

export default Filter;



// import React from 'react';
// import { FilterContainer, IconItem, IconList, IconLabel } from '../Filter/IconFilter.styled';
// import { FaFan, FaCogs, FaUtensils, FaTv, FaShower, FaCaravan } from 'react-icons/fa';

// const filterOptions = [
//     { id: 'ac', label: 'AC', icon: <FaFan /> },
//     { id: 'automatic', label: 'Automatic', icon: <FaCogs /> },
//     { id: 'kitchen', label: 'Kitchen', icon: <FaUtensils /> },
//     { id: 'tv', label: 'TV', icon: <FaTv /> },
//     { id: 'bathroom', label: 'Bathroom', icon: <FaShower /> },
//     { id: 'van', label: 'Van', icon: <FaCaravan /> },
//   ];

//   const IconFilter = ({ selectedFilters, onFilterChange }) => {
//     const toggleFilter = (filterId) => {
//       const updatedFilters = selectedFilters.includes(filterId)
//         ? selectedFilters.filter((id) => id !== filterId)
//         : [...selectedFilters, filterId];
//       onFilterChange(updatedFilters);
//     };
  
//     return (
//       <FilterContainer>
//         <IconList>
//           {filterOptions.map(({ id, label, icon }) => (
//             <IconItem
//               key={id}
//               selected={selectedFilters.includes(id)}
//               onClick={() => toggleFilter(id)}
//             >
//               {icon}
//               <IconLabel>{label}</IconLabel>
//             </IconItem>
//           ))}
//         </IconList>
//       </FilterContainer>
//     );
//   };
  
//   export default IconFilter;