import VueLocalStorage from 'vue-localstorage';

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.use(VueLocalStorage);

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
}