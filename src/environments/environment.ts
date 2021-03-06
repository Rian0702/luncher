// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBYqHEdFCoWfFiTTVN4zIbbQdQDAiyJChc',
    authDomain: 'luncher-test.firebaseapp.com',
    databaseURL: 'https://luncher-test.firebaseio.com',
    projectId: 'luncher-test',
    storageBucket: 'luncher-test.appspot.com',
    messagingSenderId: '357488186272'
  },
  pubkey: 'BA_wOJLtF3JqkGjsWc3M9-AQ2ZXOgQjB9JtlvZSdVBPp1EArT6t-Qo76cHSvSEOl3-EXATGL941KufDvwhJo2wQ'
};
