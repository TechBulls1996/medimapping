import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { getErrorMsg } from "../../helpers";

const ShareModal = ({ modalStatus, setModalStatus }: any) => {
  const [show, setShow] = useState(false);

  const [errors, setErrors]: any = useState([]);

  const handleClose = () => {
    setShow(false);
    setModalStatus(false);
  };

  useEffect(() => {
    setShow(modalStatus);
  }, [modalStatus]);

  const globalError = getErrorMsg(errors, "global");
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false} size="lg">
        <Modal.Header closeButton>
          <h4 className="text-center text-uppercase mb-0">
            Share Request with Your Network
          </h4>
        </Modal.Header>
        <Modal.Body></Modal.Body>
      </Modal>
    </>
  );
};

export default ShareModal;
