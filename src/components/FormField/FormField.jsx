import { forwardRef } from 'react';
import { useField, Field, ErrorMessage } from 'formik';
import { InputField, FieldWrapper, ErrorText } from './FormField.styled';

const FormField = forwardRef(({ extraClass, icon, ...props }, ref) => {
    const [field, meta, helpers] = useField(props);
  
    const handleChange = event => {
      const { value } = event.target;
      helpers.setValue(value);
    };
  
    return (
      <FieldWrapper>
        <InputField
          ref={ref}
          $hasError={meta.touched && meta.error}
          $extraClass={extraClass}
          name={props.name}
          placeholder={props.placeholder}
          {...field}
          {...props}
          onChange={handleChange}
        />
        {icon && icon}
        <ErrorMessage name={props.name} component={ErrorText} />
      </FieldWrapper>
    );
  });
  
  FormField.displayName = 'FormField';
  
  export default FormField;