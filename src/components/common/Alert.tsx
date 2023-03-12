const MyAlert = (props: { message: string; alertType: string }): any => {
  return (
    <>
      <div className={`alert alert-${props?.alertType || "info"}`}>
        {props.message}
      </div>
    </>
  );
};
export default MyAlert;

export const InputErrorMessage = (props: {
  message: string;
  alertType: string;
}): any => {
  return (
    <>
      <small className={` text-${props?.alertType || "info"}`}>
        {props.message}
      </small>
    </>
  );
};
