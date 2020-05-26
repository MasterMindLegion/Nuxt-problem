
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/tailwind.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
      './plugins/mixins/user.js',
      './plugins/mixins/axios.js',
      './plugins/mixins/validation.js',
      '~/plugins/packages/vue-placeholders.js',
      '~/plugins/packages/vue-observe-visibility.client.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',

    '@nuxtjs/auth',
    'nuxt-polyfill',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
 router: {


    middleware: [
      'clearValidationErrors'
    ]

  },
  axios: {
    baseURL: 'http://www.pravopress.test:8080/api',
    credentials: true,
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/login', method: 'post', propertyName: 'meta.token'},
          user: { url: '/auth/me', method: 'get', propertyName: 'data' },
          logout: { url: '/auth/logout', method: 'post'}
        }
      }
    },
    redirect: {
      login: 'auth/sign-in',
      // home: '/'
    }

  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js'
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

   polyfill: {
        features: [
            /*
                Feature without detect:

                Note:
                  This is not recommended for most polyfills
                  because the polyfill will always be loaded, parsed and executed.
            */
            {
                require: 'url-polyfill' // NPM package or require path of file
            },

            /*
                Feature with detect:

                Detection is better because the polyfill will not be
                loaded, parsed and executed if it's not necessary.
            */
            {
                require: 'intersection-observer',
                detect: () => 'IntersectionObserver' in window,
            },

            /*
                Feature with detect & install:

                Some polyfills require a installation step
                Hence you could supply a install function which accepts the require result
            */

        ]
    },
}
