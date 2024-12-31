
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrucks } from '../../redux/catalog/catalogOperations';
import { selectFilters } from '../../redux/filters/filterSelector';
import { addFilters, clearFilters } from '../../redux/filters/filterSlice';
import { clearTrucks } from '../../redux/catalog/catalogSlice';
import { FormWrapper, InputWrapper, Title, FilterTitle, FilterList, BtnFilter, Input, Button } from '../Filter/Filter.styled';
import toast from 'react-hot-toast';
import { formatString, equipmentIcons, typeIcons } from '../../utils/utils';
export default function Filter() {
  // const [trucksFiltered, setTrucksFiltered] = useState(false);
  // const filters = useSelector(selectFilters);

  // const dispatch = useDispatch();

  // const initialValues = {
  //   location: '',
  //   transmission: false,
  //   truckEquipment: [],
  //   form: '',
  // };

  // const handleSubmit = (values, { setSubmitting }) => {
  //   const { location, transmission, truckEquipment, form } = values;

  //   if (!location && !truckEquipment.length && !form && !transmission) {
  //     toast.error('At least one filter should be chosen');
  //     setSubmitting(false);
  //     return;
  //   }

  //   const newFilters = {
  //     location,
  //     transmission: transmission ? 'automatic' : '',
  //     truckEquipment,
  //     form,
  //   };

  //   dispatch(addFilters(newFilters));

  //   dispatch(fetchTrucks({ page: 1, filters: newFilters, reset: true }))
  //     .unwrap()
  //     .then(() => {
  //       setTrucksFiltered(true);
  //     })
  //     .catch(() => {
  //       dispatch(clearTrucks());
  //       setTrucksFiltered(false);
  //     })
  //     .finally(() => {
  //       setSubmitting(false);
  //     });
  // };

  // const handleReset = resetForm => {
  //   dispatch(clearFilters());
  //   dispatch(fetchTrucks({ page: 1, filters, reset: true }));
  //   resetForm();
  //   setTrucksFiltered(false);
  // };
  const [formState, setFormState] = useState({
    location: '',
    transmission: false,
    truckEquipment: [],
    form: '',
  });

  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();

  const handleChange = (field, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleTruckEquipmentChange = (equipment) => {
    setFormState((prevState) => {
      const isSelected = prevState.truckEquipment.includes(equipment);
      const updatedEquipment = isSelected
        ? prevState.truckEquipment.filter((item) => item !== equipment)
        : [...prevState.truckEquipment, equipment];

      return {
        ...prevState,
        truckEquipment: updatedEquipment,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { location, transmission, truckEquipment, form } = formState;

    if (!location && !truckEquipment.length && !form && !transmission) {
      toast.error('At least one filter should be chosen');
      return;
    }

    const newFilters = {
      location,
      transmission: transmission ? 'automatic' : '',
      truckEquipment,
      form,
    };

    dispatch(addFilters(newFilters));

    dispatch(fetchTrucks({ page: 1, filters: newFilters, reset: true }))
      .unwrap()
      .catch(() => {
        dispatch(clearTrucks());
      });
  };

  const handleReset = () => {
    setFormState({
      location: '',
      transmission: false,
      truckEquipment: [],
      form: '',
    });
    dispatch(clearFilters());
    dispatch(fetchTrucks({ page: 1, filters, reset: true }));
  };


  return (
    <FormWrapper onSubmit={handleSubmit}>
    <Title>Location</Title>
    <InputWrapper>
      <Input
        type="text"
        placeholder="Kyiv, Ukraine"
        value={formState.location}
        onChange={(e) => handleChange('location', e.target.value)}
      />
    </InputWrapper>

    <Title>Filters</Title>
      <FilterTitle>Vehicle Equipment</FilterTitle>
      <FilterList>
  {['kitchen', 'AC', 'TV', 'bathroom'].map((equipment) => (
    <label key={equipment}>
      <input
        type="checkbox"
        checked={formState.truckEquipment.includes(equipment)}
        onChange={() => handleTruckEquipmentChange(equipment)}
      />
      {formatString(equipment)}
    </label>
  ))}
</FilterList>


<FilterList>
  {['van', 'fullyIntegrated', 'alcove'].map((type) => (
    <label key={type}>
      <input
        type="radio"
        name="vehicleType"
        value={type}
        checked={formState.form === type}
        onChange={() => handleChange('form', type)}
      />
      {formatString(type)}
    </label>
  ))}
</FilterList>

      <FilterTitle>Transmission</FilterTitle>
      <FilterList>
        <BtnFilter
          $active={formState.transmission}
          onClick={() => handleChange('transmission', !formState.transmission)}
        >
          <svg width={32} height={32}>
            <use xlinkHref="#icon-diagram" />
          </svg>
          Automatic
        </BtnFilter>
      </FilterList>

      <div>
      <Button type="submit" disabled={!(formState.location || formState.truckEquipment.length || formState.form || formState.transmission)}>
          Filter
        </Button>
        <Button type="button" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </FormWrapper>
  );
}
