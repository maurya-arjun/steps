import React, { useState } from "react";
import BillAmount from "./BillAmount";
import ServiceRating from "./ServiceRating";
import OutPut from "./OutPut";
import Reset from "./Reset";

const TipCalculator = () => {
  const [bill, setBill] = useState("");
  const [serviceRating, setServiceRating] = useState(0);
  const [friendServiceRating, setFriendServiceRating] = useState(0);

  const tip = bill * ((serviceRating + friendServiceRating) / 2 / 100);

  function handleReset() {
    setBill("");
    setServiceRating(0);
    setFriendServiceRating(0);
  }

  return (
    <>
      <div>
        <BillAmount bill={bill} onSetBill={setBill} />
        <ServiceRating
          serviceRating={serviceRating}
          onServiceRating={setServiceRating}
        >
          How did you like the service?
        </ServiceRating>
        <ServiceRating
          serviceRating={friendServiceRating}
          onServiceRating={setFriendServiceRating}
        >
          How did your friend like the service?
        </ServiceRating>
      </div>

      {bill > 0 && (
        <>
          <OutPut bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </>
  );
};

export default TipCalculator;
