// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appName: 'SKIM NEWZ',
  newsApi: '2fd05daf61a74b1794b5e38ca736d370',
  stocksApi: 'MVQU6LIHBF9XNSRP',
  gnewsApi: '1f7fb4c0c3bd774d67696915a2bfed26',
  weatherApi: 'dcc0efb17be6595de1d0542673002c86'
};

// NEWS API 2fd05daf61a74b1794b5e38ca736d370 (300 calls per day)
// STOCKS API MVQU6LIHBF9XNSRP
// GNEWS API 1f7fb4c0c3bd774d67696915a2bfed26 (100 calls per day)
// http://api.openweathermap.org/data/2.5/weather?q=Virginia,USA&APPID=dcc0efb17be6595de1d0542673002c86 (60 calls per second)

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
