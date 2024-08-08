import { Driver } from './types/types';

export function getResultFromSession(session: any, drivers: Driver[]) {
  const raceResult = Object.keys(session).map((driverNumber) => {
    const driverStandings = session[driverNumber];
    const lastPosition = driverStandings[driverStandings.length - 1].position;
    const startingPosition = driverStandings[0].position;
    const points = getRacePoints(lastPosition);
    const driverData = drivers.find((driver: Driver) => driver.driver_number === +driverNumber);

    return { ...driverData, raceResult: lastPosition, startingPosition, points };
  });
  return raceResult.sort((a, b) => a.raceResult - b.raceResult);
}

export function getRacePoints(position: number) {
  switch (position) {
    case 1:
      return 25;
    case 2:
      return 18;
    case 3:
      return 15;
    case 4:
      return 12;
    case 5:
      return 10;
    case 6:
      return 8;
    case 7:
      return 6;
    case 8:
      return 4;
    case 9:
      return 2;
    case 10:
      return 1;
    default:
      return 0;
  }
}

export function getSprintracePoints24(position: number) {
  switch (position) {
    case 1:
      return 10;
    case 2:
      return 8;
    case 3:
      return 6;
    case 4:
      return 5;
    case 5:
      return 4;
    case 6:
      return 3;
    case 7:
      return 2;
    case 8:
      return 1;
    default:
      return 0;
  }
}

export function getSprintracePoints23(position: number) {
  switch (position) {
    case 1:
      return 8;
    case 2:
      return 6;
    case 3:
      return 5;
    case 4:
      return 4;
    case 5:
      return 3;
    case 6:
      return 2;
    case 7:
      return 1;
    default:
      return 0;
  }
}

export function getSprintracePoints22(position: number) {
  switch (position) {
    case 1:
      return 6;
    case 2:
      return 5;
    case 3:
      return 4;
    case 4:
      return 3;
    case 5:
      return 2;
    case 6:
      return 1;
    default:
      return 0;
  }
}

export function getSprintracePoints21(position: number) {
  switch (position) {
    case 1:
      return 3;
    case 2:
      return 2;
    case 3:
      return 1;
    default:
      return 0;
  }
}
