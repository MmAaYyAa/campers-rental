import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectTruck } from '../../redux/catalog/catalogSelectors';
import { fetchTruckById } from '../../redux/catalog/catalogOperations';
import { formatDimension } from '../../utils/utils';

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
                <svg  width={20} height={20}>
                  <use xlinkHref={`${icons}#icon-diagram`} />
                </svg>
                <p>Automatic</p>
              </ListItem>
            )}
            {petrol && (
              <ListItem>
                <svg  width={20} height={20}>
                  <use xlinkHref={`${icons}#icon-fuel-pump`} />
                </svg>
                <p>Petrol</p>
              </ListItem>
            )}
            {gas && (
              <ListItem>
                <svg  width={20} height={20}>
                  <use xlinkHref={`${icons}#icon-fuel-pump`} />
                </svg>
                <p>Gas</p>
              </ListItem>
            )}
            {kitchen && (
              <ListItem>
                <svg width={20} height={20}>
                  <use xlinkHref={`${icons}#icon-cup-hot`} />
                </svg>
                <p>Kitchen</p>
              </ListItem>
            )}
            {microwave && (
              <ListItem>
                <svg width={20} height={20}>
                  <use xlinkHref={`${icons}#icon-tv`} />
                </svg>
                <p>Microwave</p>
              </ListItem>
            )}
            {AC && (
              <ListItem>
                <svg  width={20} height={20}>
                  <use xlinkHref={`${icons}#icon-wind`} />
                </svg>
                <p>AC</p>
              </ListItem>
            )}
            {TV && (
              <ListItem>
                <svg className={css.icon} width={20} height={20}>
                  <use xlinkHref={`${icons}#icon-tv`} />
                </svg>
                <p>TV</p>
              </ListItem>
            )}
            {radio && (
              <ListItem>
                <svg  width={20} height={20}>
                  <use xlinkHref={`${icons}#icon-ui-radios`} />
                </svg>
                <p>Radio</p>
              </ListItem>
            )}
            {bathroom && (
              <ListItem>
                <svg width={20} height={20}>
                  <use xlinkHref={`${icons}#icon-bi_droplet`} />
                </svg>
                <p>Bathroom</p>
              </ListItem>
            )}
            {water && (
              <ListItem>
                <svg width={20} height={20}>
                  <use xlinkHref={`${icons}#icon-bi_droplet`} />
                </svg>
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