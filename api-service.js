// Mock API service for Agua Inc.
function getWaterData() {
  return {
    region: "ANZ",
    waterLevel: "stable",
    temperatureCelsius: 22,
    pressureKpa: 101
  };
}

function getProjectHealth() {
  return {
    status: "green",
    incidentsOpen: 1,
    activeDeployments: 3
  };
}

module.exports = { getWaterData, getProjectHealth };

// Fix for sensor sync issue pull request test
function syncSensorData() {
  return "Sensor data synced successfully";
}
