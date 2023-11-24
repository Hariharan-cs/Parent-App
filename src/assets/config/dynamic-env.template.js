(function (window) {
  window["env"] = window["env"] || {};
  // Environment variables
  // window["env"]["production"] = "${IS_PRODUCTION}" || true;
  // window["env"]["environmentName"] = "${ENVIRONMENT_NAME}" || "production";
  // window["env"]["BACKEND_API_URL"] = "${BACKEND_API_URL}" || "https://auth-api.onedpo-poc.com";
  // window["env"]["TRIAL_APPLICATION_URL"] = "${TRIAL_APPLICATION_URL}" || "https://trial.onedpo-poc.com";
  // window["env"]["COMPLIANCE_APPLICATION_URL"] = "${COMPLIANCE_APPLICATION_URL}" || "https://compliance.onedpo-poc.com";
  window["env"]["production"] = "${IS_PRODUCTION}" || true;
  window["env"]["environmentName"] = "production";
  window["env"]["BACKEND_API_URL"] = "https://auth-api.onedpo-poc.com";
  window["env"]["TRIAL_APPLICATION_URL"] ="https://trial.onedpo-poc.com";
  window["env"]["COMPLIANCE_APPLICATION_URL"] = "https://compliance.onedpo-poc.com";
  })(this);


// auth.onedpo-poc.com
// trial.onedpo-poc.com
// compliance.onedpo-poc.com
// auth-api.onedpo-poc.com - API