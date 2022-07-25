import { FormInputLabel, Input, Group } from './form-input.styles.jsx';

const FormInput = ({ label, ...otherProps }) => {
  // const FormInput = ({ label, inputOptions }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {/* <input className="form-input" {...inputOptions} /> */}
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
