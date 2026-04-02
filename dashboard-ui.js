// Mock dashboard UI rendering
const { getWaterData, getProjectHealth } = require("./api-service");
const { formatTemperature, statusLabel } = require("./utils");

function renderDashboard() {
  const waterData = getWaterData();
  const projectHealth = getProjectHealth();

  console.log("=== Agua Operations Dashboard ===");
  console.log(`Region: ${waterData.region}`);
  console.log(`Water level: ${waterData.waterLevel}`);
  console.log(`Temperature: ${formatTemperature(waterData.temperatureCelsius)}`);
  console.log(`Project status: ${statusLabel(projectHealth.status)}`);
}

renderDashboard();
