// Mock data transformation logic
function processSensorData(records) {
  return records.map((record) => ({
    ...record,
    riskLevel: record.waterLevel > 50 ? "high" : "normal",
    needsReview: record.temperatureCelsius > 30
  }));
}

function summarizeRecords(records) {
  return {
    total: records.length,
    highRisk: records.filter((r) => r.riskLevel === "high").length,
    needsReview: records.filter((r) => r.needsReview).length
  };
}

module.exports = { processSensorData, summarizeRecords };
