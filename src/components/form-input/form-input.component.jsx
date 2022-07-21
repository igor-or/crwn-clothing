import './form-input.styles.scss';

const FormInput = ({ label, ...otherProps }) => {
  // const FormInput = ({ label, inputOptions }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {/* <input className="form-input" {...inputOptions} /> */}
      {label && (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
            // inputOptions.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
