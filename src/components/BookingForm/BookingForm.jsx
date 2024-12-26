import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { BookingSchema } from '../../utils/validation';
import {Section, Title, Text, StyledForm, InputField, TextAreaField, 
    ErrorText,
    SubmitButton} from '../BookingForm/BookingForm.styled';

export default function BookingForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = async (values, actions) => {
      setIsSubmitting(true);
      try {
        await axios.post('/api/bookings', values);
        toast.success('Booking successful!');
        actions.resetForm();
      } catch {
        toast.error('Booking error!');
      } finally {
        setIsSubmitting(false);
      }
    };
  
    return (
        <Section>
          <Title>Book your campervan now</Title>
          <Text>
            Stay connected! We are always ready to help you.
          </Text>
          <Formik
            initialValues={{ name: '', email: '', date: '', comment: '' }}
            validationSchema={BookingSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <StyledForm autoComplete="off">
                <Field  as={InputField}
                  type="text"
                  name="name"
                  placeholder="Name*"
                />
                <ErrorMessage name="name" component={ErrorText} />
                <Field  as={InputField}
                  type="email"
                  name="email"
                  placeholder="Email*"
                />
                <ErrorMessage name="email" component={ErrorText} />
                <Field  as={InputField}
                  type="date"
                  name="date"
                  placeholder="Booking date*"
                />
                <ErrorMessage  name="date" component={ErrorText} />
                <Field
                 as={TextAreaField} 
                  name="comment"
                  placeholder="Comment"
                />
                <ErrorMessage
                  name="comment"
                  component={ErrorText}
                />
                <SubmitButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send'}
                </SubmitButton>
              </StyledForm>
            )}
          </Formik>
        </Section>
      );
    }