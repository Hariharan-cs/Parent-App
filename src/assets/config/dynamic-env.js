(function (window) {
  window["env"] = window["env"] || {};
  // Environment variables
  window["env"]["production"] = false;
  window["env"]["environmentName"] = "local";
  window["env"]["BACKEND_API_URL"] = "http://localhost:3000";
  window["env"]["TRIAL_APPLICATION_URL"] = "http://localhost:4200";
  window["env"]["COMPLIANCE_APPLICATION_URL"] = "http://localhost:4300";
})(this);