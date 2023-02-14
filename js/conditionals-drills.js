//************************************************************************* <LEGAL DRIVER EXERCISE> ********************************************************** */
const isLegalDriver = (age, isInsured) => {
  return age >= 16 && isInsured;
};

const canGetRideshare = (driversNearby, enoughMoney) => {
  return driversNearby && enoughMoney;
};

const getToDestination = (age, isInsured, hasCar, canGetRideShare) => {
  let driversNearby = true;
  let enoughMoney = true;
  let rideShare = canGetRideshare(driversNearby, enoughMoney);

  if (isLegalDriver(age, isInsured) && hasCar) {
    console.log(`The rider can take their own car`);
  } else if (rideShare) {
    console.log("The rider can take a rideshare.");
  } else {
    console.log("The rider should call a friend for a ride.");
  }
};

