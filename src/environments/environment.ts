// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

let browserWindow = window as any;
export const environment = {
  production: false,
  environmentName: "",
  BACKEND_API_URL: browserWindow['env']['BACKEND_API_URL'],
  TRIAL_APPLICATION_URL: browserWindow['env']['TRIAL_APPLICATION_URL'],
  COMPLIANCE_APPLICATION_URL: browserWindow['env']['COMPLIANCE_APPLICATION_URL'],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
