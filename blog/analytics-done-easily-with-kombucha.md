---
title: 'Analytics Done Easily with Kombucha'
authors:
  - 'ChristopherMarroquin'
date: '2026-05-27'
category: 'Product'
heroImage: 'https://images.unsplash.com/photo-1709547228697-fa1f424a3f39?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
imageAuthor: 'Volodymyr Dobrovolskyy'
imageAuthorLink: 'https://unsplash.com/@vladimir_d'
subtitle: 'Tracking user events in SODA using a flexible and open source analytics platform'
tags:
  - analytics
  - kombucha
  - open source
---

# What is Kombucha Analytics?

[Kombucha analytics](https://github.com/fairdataihub/analytics) is an open source analytics platform developed by the FAIR Data Innovations Hub. It can be used to easily gather usage data, user events data, and error/success information for workflows across multiple applications.

It achieves this by giving you a flexible event structure that the Kombucha server will read in and allow you to define how it is read for reporting purposes. The structure looks like this:

```json
{
  aid: appId,
  category: category,
  action: action,
  status: status,
  label: label,
  data: eventData

}
```

In the above you provide an app id (typically a UUID), a category (string), an action (string), a label (string), and a free form data field that takes in a custom object.

# Why did we make it?

Kombucha Analytics was born from our frustrations with using larger analytics platforms, like Google Analytics, that would evolve to meet new requirements (i.e., GDPR) or new objectives while fundamentally changing their event structure - giving little leeway for backwards compatibility and requiring a full rewrite of the event tracking in our clients. We also did not require a full feature set from something like Umami for our use case.

# How do we use Kombucha Analytics?

To illustrate how we use Kombucha Analytics, here is an example of a real use case from our application, SODA (Software to Organize Data Automatically). SODA is a cross-platform desktop application we are developing to help researchers easily prepare and share standardized data on the NIH-supported sparc.science data repository. In SODA our main goal while using Kombucha Analytics is to anonymously track how much data (number of files and number of bytes) are processed by our users. This allows us to share usage with the NIH in direct reports and on our website.

SODA is an electron app. Here is how we go about setting up Kombucha in SODA and using it to track upload data:

1. Setup Kombucha in the main process:

```javascript
const kombuchaServer = axios.create({
  baseURL: kombuchaURL,
  timeout: 0,
});
```

2. In the same script, create a user id or retrieve it if it is already created (This will be sent to the Kombucha Analytics server to know if the data comes from some anonymous user and for roughly tracking the number of users):

```javascript
let userId;
try {
  userId = nodeStorage.getItem('userId');
} catch (e) {
  userId = null;
}
if (userId === null) {
  userId = uuid();
}
```

3. Explicitly set an appId so Kombucha Analytics server knows which application is sending data:

```javascript
let appId = 'f85e3098-d7f6-4a89-988a-eac945fdc320';
```

4. Setup the event structure in the client:

```javascript
const trackKombuchaEvent = (category, action, label, status, eventData) => {
  if (!dnt) {
    userIdGeneratorForKombucha().then((token) => {
      const kombuchaTrackingEventData = {
        aid: appId,
        category: category,
        action: action,
        status: status,
        label: label,
        data: eventData,
      };
      sendKombuchaAnalyticsEvent(kombuchaTrackingEventData, token);
    });
  }
};
```

NOTE: sendKombuchaAnalyticsEvent is a custom function that checks if that sends data to this endpoint

```javascript
kombuchaServer.post('harvest/events', eventData, {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${userToken}`,
  },
});
```

5. Send the custom event for tracking data size of an upload as follows:

```javascript
window.electron.ipcRenderer.send(
  'track-kombucha',
  kombuchaEnums.Category.GUIDED_MODE,
  kombuchaEnums.Action.GENERATE_DATASET,
  kombuchaEnums.Label.FILES,
  kombuchaEnums.Status.SUCCESS,
  createEventData(
    fileValueToLog,
    'Pennsieve',
    'Local',
    window.sodaJSONObj['generate-dataset']['dataset-name'],
    guidedGetDatasetId(window.sodaJSONObj),
  ),
);
```

- In this example ipcRenderer (an Electron object used to talk between the renderer and main processes) sends a message to the track-kombucha handler.
- The category is GUIDED_MODE. This tells us what feature of the app the upload happened in.
- The Action is GENERATE_DATASET. This tells us the data is going to be related to an upload action.
- The label is FILES. This tells us we are dealing with files in a dataset upload.
- The status is SUCCESS. This is used to indicate the upload was successful and we can count these files in our reporting.
- The createEventData sends a custom nested object with keys relevant to our upload analytics.
  - We track the number of files uploaded with the first entry
  - We indicate the upload is to Pennsieve
  - We indicate the source is Local
  - We provide the dataset name
  - We provide the dataset id

With the following setup we can easily track other details about a dataset upload. For example if we change the Label to SIZE we are indicating to the reporter that we are tracking bytes. Then we only have to change the fileValueToLog to an accurate accounting of the number of bytes uploaded by the current user to the particular dataset.

# In Closing

Kombucha Analytics has given us a lot of value in our applications by providing a simple way to manage usage tracking. Its flexibility allows it to be used in a variety of applications for tracking many different kinds of data. In the above case study you have seen how we use it in house to track upload information. However in the same application we also use it to track errors, the OS spread of our users to help determine which OS versions to support and which to drop support for, and more.

If you are interested in a self hosted, open source, and lightweight platform that you can easily customize and expand we believe it has value for you. For more information on using Kombucha Analytics please refer to our github page [here](https://github.com/fairdataihub/analytics).
