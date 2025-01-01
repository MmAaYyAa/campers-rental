
import { useSelector } from 'react-redux';
import { selectError } from '../../redux/catalog/catalogSelectors';
import {Text, ErrorBox, ErrorMessage} from '../Error/Error.styled';
export default function Error() {
  const error = useSelector(selectError);

  if (error === 'Items matching your filter not found') {
    return <Text>{`${error}!`}</Text>;
  } else {
    return (
      <ErrorBox>
        <ErrorMessage>
          <Text>Ooops... Something went wrong! Try to reload this page</Text>
        </ErrorMessage>
      </ErrorBox>
    );
  }
}

