import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";

import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LineShareButton,
  LinkedinIcon,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { MyButton } from "../common/MyButton";

const ShareModal = ({
  modalStatus,
  setModalStatus,
  shareUrl,
  shareTitle,
  shareDesc,
}: any) => {
  const [show, setShow] = useState(false);

  const [desc]: any = useState(
    shareDesc ||
      "I need a Help, I am Looking for Blood Donar if you are near by me, Please consider it emergency."
  );
  const [url] = useState(
    window.location.href + shareUrl || window.location.href
  );
  const [title] = useState(shareTitle || "Need a Blood Donar, Emergency !!");

  const handleClose = () => {
    setShow(false);
    setModalStatus(false);
  };

  useEffect(() => {
    setShow(modalStatus);
  }, [modalStatus]);

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false} size="sm">
        <Modal.Header closeButton>
          <h4 className="text-center text-uppercase mb-0">
            Share Request with Your Network
          </h4>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-sm-12 m-auto text-center d-flex justify-content-around">
              <FacebookShareButton
                url={url}
                quote={desc}
                hashtag="#medimapping #blood #donar #help"
              >
                <FacebookIcon size={50} round={false} />
              </FacebookShareButton>
              <TwitterShareButton
                url={url}
                hashtags={["medimapping", "blood", "donar", "help"]}
                title={title}
              >
                <TwitterIcon size={50} round={false} />
              </TwitterShareButton>

              <LineShareButton url={url} title={title}>
                <LinkedinIcon size={50} round={false} />
              </LineShareButton>

              <WhatsappShareButton url={url}>
                <WhatsappIcon size={50} round={false} />
              </WhatsappShareButton>

              <EmailShareButton url={url} subject={title} body={desc}>
                <EmailIcon size={50} round={false} />
              </EmailShareButton>

              <TelegramShareButton url={url}>
                <TelegramIcon size={50} round={false}></TelegramIcon>
              </TelegramShareButton>
            </div>
            <div className=" pb-2 text-center col-sm-12">
              <MyButton
                type="button"
                text="CLICK TO COPY LINK"
                onClick={(e: any) => navigator.clipboard.writeText(url)}
                afterText="Link Copied"
                extraClass="btn btn-outline-primary mt-5"
              />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ShareModal;
