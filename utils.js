// Shared helper utilities
function formatTemperature(value) {
  return `${value}°C`;
}

function statusLabel(status) {
  const labels = {
    green: "On Track",
    amber: "Needs Attention",
    red: "At Risk"
  };

  return labels[status] || "Unknown";
}

module.exports = { formatTemperature, statusLabel };
