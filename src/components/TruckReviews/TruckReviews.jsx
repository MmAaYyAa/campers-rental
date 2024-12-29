import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectTruck } from '../../redux/catalog/catalogSelectors';
import { fetchTruckById } from '../../redux/catalog/catalogOperations';
import {StyledStarIcon, Avatar, Section, Item, ReviewInfo, Name, Comment} from '../TruckReviews/TruckReviews.styled'

export default function TruckReviews() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const truck = useSelector(selectTruck);
    const reviews = truck?.reviews || [];
    useEffect(() => {
      dispatch(fetchTruckById(id));
    }, [dispatch, id]);
    const renderStars = rating => {
      const stars = [];
      for (let i = 0; i < 5; i++) {
        stars.push(
          <StyledStarIcon
            key={i}
            className={i < rating ? 'filled' : 'notFilled'}
            width={20}
            height={20}
          />
        );
      }
      return stars;
    };
    const renderAvatar = name => {
      const initial = name.charAt(0).toUpperCase();
      return <Avatar>{initial}</Avatar>;
    };

    return (
      <Section>
        <ul>
          {reviews.map((review, index) => (
            <Item key={index}>
              <ReviewInfo>
                {renderAvatar(review.reviewer_name)}
                <div>
                  <Name>{review.reviewer_name}</Name>
                  <div>
                    {renderStars(review.reviewer_rating)}
                  </div>
                </div>
              </ReviewInfo>
              <Comment>{review.comment}</Comment>
            </Item>
          ))}
        </ul>
      </Section>
    );
  }