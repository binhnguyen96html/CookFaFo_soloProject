import { Alert } from "flowbite-react";

const AlertCom = ({err}) => {
  return (
    <Alert color="info">
      {err}
    </Alert>
  );
};

export default AlertCom;
