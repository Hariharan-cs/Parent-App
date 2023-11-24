let browserWindow = window as any;
export const environment = {
  production: true || browserWindow['env']['IS_PRODUCTION'],
  environmentName: "production" || browserWindow['env']['ENVIRONMENT_NAME'],
  BACKEND_API_URL: browserWindow['env']['BACKEND_API_URL'],
  TRIAL_APPLICATION_URL: browserWindow['env']['TRIAL_APPLICATION_URL'],
  COMPLIANCE_APPLICATION_URL: browserWindow['env']['COMPLIANCE_APPLICATION_URL'],
};
