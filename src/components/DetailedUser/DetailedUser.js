import "./DetailedUser.css";

const DetailedUser = (props) => {
  return (
    <>
      <div className="user-details">
        <img
          src={props.itemUs.imageUrl + `?v=${props.itemUs.id}`}
          alt="charImage"
          className="detailed-image"
        />

        <div className="user-info">
          <h3 className="my-title">info</h3>
          {/* <h2>
            {props.itemUs.prefix} {props.itemUs.name} {props.itemUs.lastName}
          </h2>
          <p>
            <u>email:</u> {props.itemUs.email}
          </p>
          <p>
            <u>ip address:</u> {props.itemUs.ip}
          </p>
          <p>
            <u>job area:</u> {props.itemUs.jobArea}
          </p>
          <p>
            <u>job type:</u> {props.itemUs.jobType}
          </p> */}
        </div>
        <div className="user-address">
          <h3 className="my-title">address</h3>
          <h2>
            {props.itemUs.company.name} {props.itemUs.company.suffix}
          </h2>
          <p>
            <u>City:</u> {props.itemUs.address.city}
          </p>
          <p>
            <u>Country:</u> {props.itemUs.address.country}
          </p>
          <p>
            <u>State:</u> {props.itemUs.address.state}
          </p>
          <p>
            <u>Street address:</u> {props.itemUs.address.streetAddress}
          </p>
          <p>
            <u>ZIP:</u> {props.itemUs.address.zipCode}
          </p>
        </div>
      </div>
    </>
  );
};

export default DetailedUser;
