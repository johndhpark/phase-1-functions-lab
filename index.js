// Code your solution in this file!
function distanceFromHqInBlocks(value) {
	return Math.abs(42 - value);
}

function distanceFromHqInFeet(value) {
	return distanceFromHqInBlocks(value) * 264;
}

function distanceTravelledInFeet(start, end) {
	const blocks = Math.abs(start - end);

	return blocks * 264;
}

function calculatesFarePrice(start, end) {
	const feetDist = distanceTravelledInFeet(start, end);

	if (feetDist <= 400) {
		return 0;
	} else if (feetDist > 400 && feetDist <= 2000) {
		const remDist = feetDist - 400;

		return remDist * 0.02;
	} else if (feetDist > 2000 && feetDist <= 2500) {
		return 25;
	} else {
		return "cannot travel that far";
	}
}
