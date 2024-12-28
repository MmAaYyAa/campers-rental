import { Formik, Form } from 'formik';
import toast from 'react-hot-toast';
import FormField from '../FormField/FormField';
import Datepicker from '../DatePicker/DatePicker';
import { BookingSchema } from '../../utils/validation';
import {Section, Title, Text, StyledForm, SubmitButton} from '../BookingForm/BookingForm.styled';

export default function BookingForm() {
  
  const initialValues = {
    name: '',
    email: '',
    bookingDate: '',
    comment: '',
  };

  const mockPostRequest = values => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ data: 'Success' });
      }, 1000);
    });
  };

    const handleSubmit = async (values, actions) => {
      try {
        await mockPostRequest(values);
        toast.success('Booking successful!');
        actions.resetForm();
      } catch {
        toast.error('Booking error!');
      }
    };
  
    return (
        <Section>
          <Title>Book your campervan now</Title>
          <Text>
            Stay connected! We are always ready to help you.
          </Text>
          <Formik
            initialValues={initialValues}
            validationSchema={BookingSchema}
            onSubmit={handleSubmit}
          >
             {({ values, setFieldValue }) => (
              <Form as={StyledForm} autoComplete="off">
                <FormField 
                  type="text"
                  name="name"
                  placeholder="Name*"
                />
                <FormField
                  type="email"
                  name="email"
                  placeholder="Email*"
                />
                <Datepicker
              selected={values.bookingDate}
              onChange={date => setFieldValue('bookingDate', date)}
            />
                <FormField 
                  name="comment"
                  placeholder="Comment"
                />
             
                <SubmitButton type="submit">
                  Send
                </SubmitButton>
              </Form>
            )}
          </Formik>
        </Section>
      );
    }