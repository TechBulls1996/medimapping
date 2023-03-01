import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Post from "../components/user/post";
import RecentDonars from "../components/user/recentDonars";
import { faShareSquare } from "@fortawesome/free-solid-svg-icons";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
  TelegramIcon,
  TelegramShareButton,
} from "react-share";

const RequestDetails = () => {
  const title = "Need a Blood Donar, Emergency !!";
  const url = window.location.href;
  const desc =
    "I need a Help, I am Looking for Blood Donar if you are near by me, Please consider it emergency.";
  return (
    <>
      <section className="container container-fluid benefits-section pt-7 pb-7 px-0 ">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 pt-4 ">
              <h2 className="title-lg text-center">Blood Request</h2>
              <p className="text-muted text-center mb-5">
                Donar Needed at Vasant Kunj, New Delhi, South Delhi, Delhi,
                India
              </p>
              {/* start listing */}
              <div className="row">
                <Post />

                <div className="col-sm-12 m-auto  mb-2 pt-3 pl-3">
                  <h5>More Details</h5>
                </div>
                <div className="col-sm-12 p-3">
                  <table className="table table-sm table-stripped table-hover  ">
                    <tbody>
                      <tr>
                        <th>Request Status : </th>
                        <td className="">
                          {" "}
                          <code>Requirement not fulfilled</code>
                        </td>
                      </tr>
                      <tr>
                        <th>Blood Type : </th>
                        <td className="">Blood </td>
                      </tr>

                      <tr>
                        <th>Blood Required : </th>
                        <td className="">1 Units </td>
                      </tr>
                      <tr>
                        <th>Hospital Name : </th>
                        <td className=""> Indian Spinal Injuries Center </td>
                      </tr>
                      <tr>
                        <th>Hospital Address : </th>
                        <td className="">Vasant Kunj </td>
                      </tr>

                      <tr>
                        <th>City : </th>
                        <td className="">New Delhi </td>
                      </tr>

                      <tr>
                        <th>State : </th>
                        <td className="">Delhi </td>
                      </tr>
                      <tr>
                        <th>Country : </th>
                        <td className="">India </td>
                      </tr>

                      <tr>
                        <th>Date : </th>
                        <td className="border-bottom">02 Apr, 2022 </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-sm-12  mb-2 pt-5 pl-3">
                  <h5>
                    Share us on Social Media{" "}
                    <FontAwesomeIcon icon={faShareSquare} />{" "}
                  </h5>

                  <div className="d-flex">
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
                </div>
              </div>
            </div>
            <div className="col-sm">
              <RecentDonars />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RequestDetails;
