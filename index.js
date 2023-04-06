// Code your solution in this file!
const returnFirstTwoDrivers = arr => {
    return arr.slice(0, 2);
};

const returnLastTwoDrivers = arr => {
    return arr.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = int => {
    return function(fare) {
        return fare * int;
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (driversArr, twoDriversFunc) => {
    if (twoDriversFunc === returnFirstTwoDrivers) {
        return driversArr.slice(0, 2);
    } else {
        return driversArr.slice(-2);
    }
};