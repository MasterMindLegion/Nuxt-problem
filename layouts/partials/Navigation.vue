<template>
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <button @click='isOpenNavigation = !isOpenNavigation' class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out">
              <!-- Icon when menu is closed. -->
              <!-- Menu open: "hidden", Menu closed: "block" -->
              <svg class="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <!-- Icon when menu is open. -->
              <!-- Menu open: "block", Menu closed: "hidden" -->
              <svg class="hidden h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex-shrink-0">
              <img class="block lg:hidden h-8 w-auto" src="/img/logos/workflow-mark-on-dark.svg" alt="" />
              <img class="hidden lg:block h-8 w-auto" src="/img/logos/workflow-logo-on-dark.svg" alt="" />
            </div>
            <div class="hidden sm:block sm:ml-6">
              <div class="flex">
                <a href="#" class="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Dashboard</a>
                <a href="#" class="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Team</a>
                <a href="#" class="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Projects</a>
                <a href="#" class="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Calendar</a>
              </div>
            </div>
          </div>

          <!-- Show if user is not authenticated -->
          <template v-if='!authenticated'>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
               <nuxt-link
               :to='{
                  name: "auth-sign-in"
                }'
                class='ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-100 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-400 transition duration-150 ease-in-out'

                >Log In</nuxt-link>

               <nuxt-link
               :to='{
                  name: "auth-sign-up"
               }'
               class='ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out'
              >Sign Up</nuxt-link>
            </div>
          </template>

          <!-- Show if user is authenticated -->
          <template v-if='authenticated'>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button class="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
              <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <!-- Profile dropdown -->
            <div class="ml-3 relative">
              <div>
                <button @click='isOpenDropdown = !isOpenDropdown' class="relative z-10 flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out">
                  <img class="h-8 w-8 rounded-full" :src=" user.info.url " alt="" />
                </button>
              </div>
              <!--
                Profile dropdown panel, show/hide based on dropdown state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              -->

                <button v-if='isOpenDropdown' @click='isOpenDropdown = false' tabindex="-1" class="fixed inset-0 h-full w-full opacity-50 bg-black cursor-default">
                </button>

                <transition name='fade'>
                <div v-if='isOpenDropdown' class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                  <div class="py-1 rounded-md bg-white shadow-xs">
                    <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">Your Profile</a>
                    <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">Settings</a>
                    <a @click.prevent= 'logout' href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">Sign out</a>
                  </div>
                </div>
              </transition>
            </div>
          </div>
          </template>
        </div>
      </div>

      <!--
        Mobile menu, toggle classes based on menu state.

        Menu open: "block", Menu closed: "hidden"
      -->
        <template>
          <div
             class='sm:hidden'
             :class='{
                    block: isOpenNavigation,
                    "hidden": !isOpenNavigation
                    }
                    '>
            <transition name='fadeNav'>
            <div v-if='isOpenNavigation' class="px-2 pt-2 pb-3">
              <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out cursor-pointer">Dashboard</a>
              <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out cursor-pointer">Team</a>
              <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out cursor-pointer">Projects</a>
              <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out cursor-pointer">Calendar</a>
            </div>
            </transition>
          </div>
        </template>

</nav>
</template>

<script>
    export default {
        data() {
            return {
                isOpenDropdown: false,
                isOpenNavigation: false,
            }
        },
        methods: {
          logout () {
            this.$auth.logout();
          }
        },



    };
</script>

<style scoped>

  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.85s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }




  .fadeNav-enter-active,
  .fadeNav-leave-active {
    transition: all ease-in 0.85s;
  }
  .fadeNav-enter,
  .fadeNav-leave-to {
    opacity: 0;
  }
</style>
