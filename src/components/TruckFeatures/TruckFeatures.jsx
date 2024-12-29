import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectTruck } from '../../redux/catalog/catalogSelectors';
import { fetchTruckById } from '../../redux/catalog/catalogOperations';
import { formatDimension } from '../../utils/utils';
import {TransmissionIcon} from '../Icons/TransmissionIcon';
import {PetrolIcon} from '../Icons/PetrolIcon';
import {KitchenIcon} from '../Icons/KitchenIcon';
import {MicrowaveIcon} from '../Icons/MicrowaveIcon';
import {WindIcon} from '../Icons/WindIcon';
import {TvIcon} from '../Icons/TvIcon';
import {RadioIcon} from '../Icons/RadioIcon';
import {ShowerIcon} from '../Icons/ShowerIcon'; 
import {WaterIcon} from '../Icons/WaterIcon';

import { Section, List, ListItem, Title,  DetailsList, DetailsItem, Details} from '../TruckFeatures/TruckFeatures.styled';


export default function TruckFeatures() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const truck = useSelector(selectTruck);

    const {
        radio = false,
        microwave = false,
        petrol = false,
        gas = false,
        water = false,
        transmission = '',
        kitchen = false,
        AC = false,
        TV = false,
        bathroom = false,
        form = '',
        length = '',
        width = '',
        height = '',
        tank = '',
        consumption = '',
      } = truck || {};


      useEffect(() => {
        dispatch(fetchTruckById(id));
      }, [dispatch, id]);
    
      return (
        <Section>
          <List>
            {transmission === 'automatic' && (
              <ListItem>
                <TransmissionIcon />
                <p>Automatic</p>
              </ListItem>
            )}
            {petrol && (
              <ListItem>
                <PetrolIcon />
                <p>Petrol</p>
              </ListItem>
            )}
            {gas && (
              <ListItem>
                <p>Gas</p>
              </ListItem>
            )}
            {kitchen && (
              <ListItem>
                <KitchenIcon />
                Kitchen
              </ListItem>
            )}
            {microwave && (
              <ListItem>
                <MicrowaveIcon />
                <p>Microwave</p>
              </ListItem>
            )}
            {AC && (
              <ListItem>
                <WindIcon />
                <p>AC</p>
              </ListItem>
            )}
            {TV && (
              <ListItem>
               <TvIcon />
                <p>TV</p>
              </ListItem>
            )}
            {radio && (
              <ListItem>
                <RadioIcon />
                <p>Radio</p>
              </ListItem>
            )}
            {bathroom && (
              <ListItem>
                <ShowerIcon />
                <p>Bathroom</p>
              </ListItem>
            )}
            {water && (
              <ListItem>
                <WaterIcon />
                <p>Water</p>
              </ListItem>
            )}
          </List>
          <Title>Vehicle details</Title>
          <DetailsList>
            <DetailsItem>
              <Details>Form</Details>
              <Details>{form}</Details>
            </DetailsItem>
            <DetailsItem>
              <Details>Length</Details>
              <Details>{formatDimension(length)}</Details>
            </DetailsItem>
            <DetailsItem>
              <Details>Width</Details>
              <Details>{formatDimension(width)}</Details>
            </DetailsItem>
            <DetailsItem>
              <Details>Height</Details>
              <Details>{formatDimension(height)}</Details>
            </DetailsItem>
            <DetailsItem>
              <Details>Tank</Details>
              <Details>{formatDimension(tank)}</Details>
            </DetailsItem>
            <DetailsItem>
              <Details>Consumption</Details>
              <Details>{consumption}</Details>
            </DetailsItem>
          </DetailsList>
        </Section>
      );
}