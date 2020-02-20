// var myApp = window.singleSpaAngularjs.default({
//     angular: window.angular,
//     domElementGetter: function () {
//       return document.getElementById('here')
//     },
//     mainAngularModule: 'myApp',
//     uiRouter: false,
//     preserveGlobal: true,
//     template: '<p>Hi There</p>',
//   })

  var myApp = {
    bootstrap: function() {
      return Promise.resolve()
    },
    mount: function() {
      return Promise.resolve().then(function() {
        document.getElementById('here').innerHTML = "Hello";
      })
    },
    unmount: function() {
      console.log("unmounted");
      return Promise.resolve()
    },
  }
  
  window.singleSpa.registerApplication('myApp', myApp, function activityFunction(location) {
    return location.hash.startsWith('#/view1');
  })
  
  // var helloWorldApp = {
  //   bootstrap: function() {
  //     return Promise.resolve()
  //   },
  //   mount: function() {
  //     return Promise.resolve().then(function() {
  //       alert('hello world')
  //     })
  //   },
  //   unmount: function() {
  //     console.log("unmounted");
  //     return Promise.resolve()
  //   },
  // }
  // window.singleSpa.registerApplication('hello-world', helloWorldApp, function activityFunction(location) {
  //   return location.hash.startsWith('#/hello');
  // })
  
  window.singleSpa.start()