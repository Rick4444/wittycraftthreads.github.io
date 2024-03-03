clevertap.notifications.push({
  titleText: "Would you like to receive Notification?",
  bodyText: "Will send you only trusted notifcations and updates",
  okButtonText: "OK",
  rejectButtonText: "Cancel",
  okButtonColor: "#0697BE",
  serviceWorkerPath: "/clevertap_sw.js",
  okCallback: function () {
    console.log("Soft Popup");
    Notification.requestPermission().then(function (getperm) {
      console.log("Hard Popup Permission granted", getperm);
    });
  },
  rejectCallback: function () {
    console.log("NO Popup");
  },
  subscriptionCallback: function () {
    console.log("For Chrome Hard Popup");
  },
});