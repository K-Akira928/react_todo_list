import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { InputText } from "../atoms/input/InputText";

export const InputAndButtonForm = (props) => {
  const {
    formClassName,
    onSubmit,
    placeholder,
    buttonType,
    buttonText,
    defaultValue,
  } = props;

  return (
    <>
      <form className={formClassName} onSubmit={onSubmit}>
        <InputText placeholder={placeholder} defaultValue={defaultValue} />
        <PrimaryButton type={buttonType}>{buttonText}</PrimaryButton>
      </form>
    </>
  );
};
