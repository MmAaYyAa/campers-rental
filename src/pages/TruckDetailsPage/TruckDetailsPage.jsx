import { useEffect, useState, useRef, Suspense } from 'react';
import {
  Outlet,
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import TruckInfo from '../../components/TruckInfo/TruckInfo';
import BookingForm from '../../components/BookingForm/BookingForm';
import {
    selectTruck,
    selectLoading,
    selectError,
  } from '../../redux/catalog/catalogSelectors';
  import { fetchTruckById } from '../../redux/catalog/catalogOperations';
  import {
    Container,
    ListLinks,
    LinkItem,
    NavLinkStyled,
  } from '../TruckDetailsPage/TruckDetailsPage.styled';


  export default function TruckDetailsPage() {
    const dispatch = useDispatch();
    const truck = useSelector(selectTruck);
    const isLoading = useSelector(selectLoading);
    const isError = useSelector(selectError);
    const location = useLocation();
    const { id } = useParams();
    const navigate = useNavigate();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      dispatch(fetchTruckById(id));
    }, [dispatch, id]);

    useEffect(() => {
      if (!isLoading && truck && !isLoaded) {
        setIsLoaded(true);
        navigate('features');
      }
    }, [isLoading, truck, isLoaded, navigate]);
  
    return (
      <>
        <Container>
          {isLoading && <Loader />}
          {truck && <TruckInfo truck={truck} />}
          <ListLinks>
            <LinkItem>
              <NavLinkStyled  to="features"
            state={{ ...location.state }}>
                Features
              </NavLinkStyled>
            </LinkItem>
            <LinkItem>
              <NavLinkStyled
                to="reviews"
                state={{ ...location.state }}
              >
                Reviews
              </NavLinkStyled>
            </LinkItem>
          </ListLinks>
          <BookingForm />
          <Suspense fallback={isLoading && <Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </>
    );
  }