import moment from "moment";

const { Card } = require("react-bootstrap");

const NotificationCard = ({ show, data }) => {
  return (
    <>
      {show && (
        <Card
          className="position-fixed"
          style={{
            width: "310px",
            right: "5px",
            top: "70px",
            maxHeight: "600px",
            borderRadius: "30px",
            zIndex: "123",
          }}
        >
          <div className="overflow-auto py-3 notif-scroll">
            {data &&
              data?.map((item) => {
                return (
                  <>
                    <div className="d-flex align-items-center w-100 pe-2">
                      <div>
                        <div className="mx-3 p-1 profile-photo">
                          <img
                            width="36px"
                            height="36px"
                            src={
                              item?.from_photo
                                ? `${process.env.img_url}${item?.from_photo}`
                                : "/images/profile-photo.png"
                            }
                            alt="photo"
                            className="rounded-circle img-profile"
                          />
                        </div>
                      </div>
                      <div className="ms-1 w-100 pt-3">
                        {item?.type === "like" || item?.type === "comment" ? (
                          <p className="pb-2 m-0">{`${
                            item?.from_username != null ||
                            item?.from_username != "null"
                              ? item?.from_username
                              : "Anomymous"
                          } ${item?.message}`}</p>
                        ) : (
                          <p className="pb-2 m-0">{item?.message}</p>
                        )}
                        <p className="text-muted">
                          {moment(item?.created_at).fromNow()}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
          <hr />
          <div className="text-center pb-3">
            <button className="border-0 bg-transparent text-primary">
              See more
            </button>
          </div>
        </Card>
      )}
    </>
  );
};

export default NotificationCard;
