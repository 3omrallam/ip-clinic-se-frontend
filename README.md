# Intellectual Properties Main Micro-Frontend (Internal - Employees)

## Runs on PORT 4000

## What's inside?

This micro-frontend contains the basic and essential features like
container, store, auth, etc. It also compose the whole app with other micro-frontends.

## Setup and How-To Start

In order to run the app locally with other micro-frontends you will need to:

- Run the live development app [here](http://gp-iprights-app-container-se-frontend.development.internal.saip.gov.sa/), to grant the auth cookie
- Run the app `yarn dev` from inside the directory
- Run any other micro-frontend you need, `yarn dev` from there

<b style="color:#F1A801;">You must add the following lines to your system's hosts file</b>\
This is essential to run all micro-frontends under the same `.saip.gov.sa` domain, and share the same storage\
Also the system will loop back these domain names to `localhost`

```
127.0.0.1 admin.app.local.iprs.saip.gov.sa
127.0.0.1 admin.customer-code.local.iprs.saip.gov.sa
127.0.0.1 admin.trademarks.local.iprs.saip.gov.sa
127.0.0.1 admin.patents.local.iprs.saip.gov.sa
127.0.0.1 admin.copyrights.local.iprs.saip.gov.sa
127.0.0.1 admin.ics.local.iprs.saip.gov.sa
127.0.0.1 admin.designs.local.iprs.saip.gov.sa
127.0.0.1 admin.plants.local.iprs.saip.gov.sa
127.0.0.1 admin.geographics.local.iprs.saip.gov.sa
127.0.0.1 admin.tahaqaq.local.iprs.saip.gov.sa
127.0.0.1 admin.complaint.local.iprs.saip.gov.sa
127.0.0.1 admin.inspection.local.iprs.saip.gov.sa
127.0.0.1 admin.statistics.local.iprs.saip.gov.sa
127.0.0.1 admin.assistive-services.local.iprs.saip.gov.sa
127.0.0.1 admin.eqm.local.iprs.saip.gov.sa
```

### Develop

To run the micro-frontend, run the following command:

```
yarn dev
```

### Prettify

To prettify your code, run the following command:

```
yarn format
```

### Lint

To lint your code, run the following command:

```
yarn lint
```

### Fix Linting Issues

To fix issues comes by linting your code, run the following command:

```
yarn lint:fix
```

### Build

To prettify your code, run the following command:

```
yarn build
```

### Serving Build

To prettify your code, run the following command:

```
yarn preview
```
