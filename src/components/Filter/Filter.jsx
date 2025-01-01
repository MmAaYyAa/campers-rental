
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrucks } from '../../redux/catalog/catalogOperations';
import { selectFilters } from '../../redux/filters/filterSelector';
import { addFilters, clearFilters } from '../../redux/filters/filterSlice';
import { clearTrucks } from '../../redux/catalog/catalogSlice';
import { FormWrapper, StyledInputLocationIcon, InputWrapper, Title, FilterTitle, FilterList, Input, StyledCheckbox, StyledRadio, HiddenInput, ButtonBlock, Button } from '../Filter/Filter.styled';
import toast from 'react-hot-toast';
import { formatString } from '../../utils/utils';
import {LocationIcon} from '../Icons/LocationIcon';
import { equipmentIcons, typeIcons } from '../../utils/iconsgroup';
export default function Filter() {
  
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
    <StyledInputLocationIcon className={formState.location ? 'inputFilled' : 'inputEmpty'}>
    <LocationIcon />
  </StyledInputLocationIcon>
      <Input
        type="text"
        placeholder="City"
        value={formState.location}
        onChange={(e) => handleChange('location', e.target.value)}
        className={formState.location ? 'inputFilled' : 'inputEmpty'}
     />
    </InputWrapper>

    <Title>Filters</Title>
      <FilterTitle>Vehicle Equipment</FilterTitle>
      <FilterList>
      {Object.keys(equipmentIcons).map((equipment) => {
      const IconComponent = equipmentIcons[equipment];
      return (
        <StyledCheckbox
          key={equipment}
          checked={formState.truckEquipment.includes(equipment)}
        >
          <HiddenInput
            type="checkbox"
            onChange={() => handleTruckEquipmentChange(equipment)}
          />
          <IconComponent />
          <span>{formatString(equipment)}</span>
        </StyledCheckbox>
      );
    })}
</FilterList>

<FilterTitle>Vehicle Type</FilterTitle>
<FilterList>
{Object.keys(typeIcons).map((type) => {
      const IconComponent = typeIcons[type];
      return (
        <StyledRadio
          key={type}
          checked={formState.form === type}
        >
          <HiddenInput
            type="radio"
            name="vehicleType"
            onChange={() => handleChange('form', type)}
          />
          <IconComponent />
          <span>{formatString(type)}</span>
        </StyledRadio>
      );
    })}
</FilterList>

<ButtonBlock>
    <Button
      type="submit"
      disabled={
        !(
          formState.location ||
          formState.truckEquipment.length ||
          formState.form ||
          formState.transmission
        )
      }
    >
      Search
    </Button >
    <Button type="button" 
    disabled={
      !(
        formState.location ||
        formState.truckEquipment.length ||
        formState.form ||
        formState.transmission
      )
    }
    onClick={handleReset}>
      Reset
    </Button>
  </ButtonBlock>
    </FormWrapper>
  );
}
