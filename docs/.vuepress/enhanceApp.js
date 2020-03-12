import VueLocalStorage from 'vue-localstorage';

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.use(VueLocalStorage);

  /*
  router.beforeEach((to, from, next) => {
    console.log('here route goes');
    console.log(to);

    if (to.path === '/') {
      if (typeof window !== "undefined") {
        window.setTimeout(function () {
          next();
        }, 1000)
      } else {
        next();
      }
    }
    else {
      next();
    }
  });


  router.afterEach((to, from) => {
    let auth = Vue.localStorage && Vue.localStorage.get('p');

    // If not authorized redirect to login page
    if (!auth) {
      // On SSR window is not defined
      if (typeof window !== "undefined") {
        window.location.href = '/login.html';
      }
    }
  });

  */


  router.beforeEach((to, from, next) => {
    let auth = Vue.localStorage && Vue.localStorage.get('p');

    // If not authorized redirect to login page
    if (!auth) {
      // On SSR window is not defined
      if (typeof window !== "undefined") {
        window.location.href = '/login.html';
      }
    } else {
      document.body.style.display = 'block';
      document.title = 'Before we get started';
    }

    if (auth && to.path == '/') {
      window.setTimeout(function () {
        document.title = 'Before we get started';
      }, 1200);
    }

    if (to.path === '/' && typeof window !== "undefined") {
      window.setTimeout(function () {
        console.log('next is called 1second later');
        next();
      }, 1000);
      return;
    }

    next();
  });
}