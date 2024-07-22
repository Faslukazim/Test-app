<template>
  <div>
    <!-- Tailwind Navbar -->
    <nav class="bg-white p-4 flex items-center justify-between shadow-md">
      <!-- Left Side - Avatar and Doctor's Name -->
      <div class="flex items-center">
        <button
          @click="toggleSidebar"
          class="z-50 p-2 text-gray-900 bg-white rounded-lg"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <!-- Avatar Image (Replace with actual image or use initials) -->
        <div class="rounded-full overflow-hidden w-10 h-10">
          <img
            :src="
              'https://meet.earthianslive.com/' +
              (responseData !== null && responseData.data.length > 0
                ? responseData.data[0][5]
                : 'Loading...')
            "
            alt="Doctor's Avatar"
            class="w-full h-full object-cover"
          />
        </div>
        <!-- Doctor's Name -->
        <div class="ml-3 text-dark">
          <span class="block font-bold">{{
            responseData !== null && responseData.data.length > 0
              ? responseData.data[0][3]
              : 'Loading...'
          }}</span>
          <span class="block text-sm">{{
            responseData !== null && responseData.data.length > 0
              ? responseData.data[0][4]
              : 'Loading...'
          }}</span>
        </div>
      </div>

      <!-- Right Side - Notification Elements -->
      <div class="flex items-center">
        <!-- Notification Buttons with Numbers -->
        <div class="flex items-center space-x-2 lg:space-x-4">
          <!-- Total Appointments -->
          <div class="notification-button">
            <span class="font-semibold text-sm">Total Appointments</span>
            <span
              class="bg-gray-300 text-dark text-xs font-medium mx-1 px-1 py-0.5 rounded"
              >3</span
            >
          </div>

          <!-- Total Patients Seen -->
          <div class="notification-button">
            <span class="font-semibold text-sm">Total Patients Seen</span>
            <span
              class="bg-gray-300 text-dark text-xs font-medium mx-1 px-1 py-0.5 rounded"
              >5</span
            >
          </div>

          <!-- Waiting Patients -->
          <div class="notification-button">
            <span class="font-semibold text-sm">Waiting Patients</span>
            <span
              class="bg-gray-300 text-dark text-xs font-medium mx-1 px-1 py-0.5 rounded"
              >5</span
            >
          </div>

          <!-- Pending Consultation -->
          <div class="notification-button">
            <span class="font-semibold text-sm">Pending Consulation</span>
            <span
              class="bg-gray-300 text-dark text-xs font-medium mx-1 px-1 py-0.5 rounded"
              >5</span
            >
          </div>

          <!-- Number of In Patients -->
          <div class="notification-button">
            <span class="font-semibold text-sm">No. of In Patients</span>
            <span
              class="bg-gray-300 text-dark text-xs font-medium mx-1 px-1 py-0.5 rounded"
              >5</span
            >
          </div>
        </div>

        <!-- Logo (Replace with your actual logo) -->
        <img src="/favicon.png" alt="Logo" class="w-8 h-8" />
      </div>
    </nav>

    <!-- Main Content -->
    <div class="flex">
      <!-- Hamburger button -->

      <!-- Sidebar -->
      <aside
        v-if="isSidebarOpen"
        id="default-sidebar"
        class="top-0 left-0 z-40 w-64 h-screen bg-indigo-100 mt-1"
        aria-label="Sidebar"
      >
        <!-- Sidebar content -->
        <div class="h-full px-3 py-4 overflow-y-auto">
          <!-- Sidebar links -->
          <ul class="space-y-1 text-sm">
            <li>
              <a
                href="#"
                class="flex items-center gap-2 p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <svg
                  class="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path
                    d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"
                  />
                  <path
                    d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"
                  />
                </svg>
                <span class="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 gap-2 rounded-lg hover:bg-gray-100 group"
              >
                <svg
                  class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path
                    d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"
                  />
                </svg>
                <span class="flex-1 ms-3 whitespace-nowrap">Doctors</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 gap-2 rounded-lg hover:bg-gray-100 group"
              >
                <!-- <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                </svg> -->
                <span class="flex-1 ms-3 whitespace-nowrap">Transactions</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 gap-2 rounded-lg hover:bg-gray-100 group"
              >
                <!-- <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                </svg> -->
                <span class="flex-1 ms-3 whitespace-nowrap">Reports</span>
              </a>
            </li>
            <!-- Add other sidebar items as needed -->
          </ul>
        </div>
      </aside>
      <div class="container mx-auto my-8">
        <!-- Patient Appointments Cards -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4"
        >
          <!-- Card 1 -->
          <!-- hover:bg-indigo-100 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer -->
          <div
            class="bg-white p-3 rounded-lg shadow-md hover:bg-indigo-100 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
          >
            <div
              class="flex justify-between mb-7 bg-gray-100 place-items-center rounded-lg p-1"
            >
              <h2 class="text-sm font-semibold pl-2 text-dark p-2">
                Appointment
              </h2>
              <div>
                <!-- <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-300 text-xs rounded-lg text-sm p-1 text-center">All</button> -->
                <!-- <Button class="bg-gray-300"><span class="text-xs">Recall</span></Button> -->
              </div>
            </div>
            <div v-if="responseData !== null && !loading">
              <ul
                class="h-40 overflow-y-auto scrollbar-thin scrollbar-track-Neutral scrollbar-thumb-gray-100"
              >
                <li
                  v-for="employee in responseData.data"
                  :key="employee[0]"
                  class="pb-3 sm:pb-4"
                >
                  <div class="flex items-center space-x-4 rtl:space-x-reverse">
                    <div class="flex-shrink-0">
                      <img
                        class="w-8 h-8 rounded-full"
                        :src="'https://meet.earthianslive.com/' + employee[2]"
                        alt="Profile Image"
                      />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate">
                        {{ employee[1] }}
                      </p>
                      <p class="text-sm text-gray-500 truncate">
                        {{ employee[0] }}
                      </p>
                    </div>
                    <div
                      class="inline-flex items-center text-base font-semibold text-gray-900"
                    >
                      <Button icon="chevron-right"></Button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <!-- Cards  -->

          <!-- Card 3 -->
          <div
            class="bg-white p-3 rounded-lg shadow-md hover:bg-indigo-100 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
          >
            <div
              class="flex justify-between mb-7 bg-gray-100 place-items-center rounded-lg p-1"
            >
              <h2 class="text-sm font-semibold pl-2 text-dark p-2">
                Walk-in-Patients
              </h2>
              <div>
                <!-- <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-300 text-xs rounded-lg text-sm p-1 text-center">All</button> -->
                <!-- <Button class="bg-gray-300"><span class="text-xs">Recall</span></Button> -->
              </div>
            </div>
            <div v-if="responseData !== null && !loading">
              <ul
                class="h-40 overflow-y-auto scrollbar-thin scrollbar-track-Neutral scrollbar-thumb-gray-100"
              >
                <li
                  v-for="employee in responseData.data"
                  :key="employee[0]"
                  class="pb-3 sm:pb-4"
                >
                  <div class="flex items-center space-x-4 rtl:space-x-reverse">
                    <div class="flex-shrink-0">
                      <img
                        class="w-8 h-8 rounded-full"
                        :src="'https://meet.earthianslive.com/' + employee[2]"
                        alt="Profile Image"
                      />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate">
                        {{ employee[1] }}
                      </p>
                      <p class="text-sm text-gray-500 truncate">
                        {{ employee[0] }}
                      </p>
                    </div>
                    <div
                      class="inline-flex items-center text-base font-semibold text-gray-900"
                    >
                      <Button icon="chevron-right"></Button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- Card 4 -->
          <div
            class="bg-white p-3 rounded-lg shadow-md hover:bg-indigo-100 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
          >
            <div
              class="flex justify-between mb-7 bg-gray-100 place-items-center rounded-lg p-1"
            >
              <h2 class="text-sm font-semibold pl-2 text-dark p-2">
                Indoor Patients
              </h2>
              <div>
                <!-- <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-300 text-xs rounded-lg text-sm p-1 text-center">All</button> -->
                <!-- <Button class="bg-gray-300"><span class="text-xs">Recall</span></Button> -->
              </div>
            </div>
            <div v-if="responseData !== null && !loading">
              <ul
                class="h-40 overflow-y-auto scrollbar-thin scrollbar-track-Neutral scrollbar-thumb-gray-100"
              >
                <li
                  v-for="employee in responseData.data"
                  :key="employee[0]"
                  class="pb-3 sm:pb-4"
                >
                  <div class="flex items-center space-x-4 rtl:space-x-reverse">
                    <div class="flex-shrink-0">
                      <img
                        class="w-8 h-8 rounded-full"
                        :src="'https://meet.earthianslive.com/' + employee[2]"
                        alt="Profile Image"
                      />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate">
                        {{ employee[1] }}
                      </p>
                      <p class="text-sm text-gray-500 truncate">
                        {{ employee[0] }}
                      </p>
                    </div>
                    <div
                      class="inline-flex items-center text-base font-semibold text-gray-900"
                    >
                      <Button icon="chevron-right"></Button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <!-- Card 5 -->
          <div
            class="bg-white p-3 rounded-lg shadow-md hover:bg-indigo-100 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
          >
            <div
              class="flex justify-between mb-7 bg-gray-100 place-items-center rounded-lg p-1"
            >
              <h2 class="text-sm font-semibold pl-2 text-dark p-2">
                Daycare Patients
              </h2>
              <div>
                <!-- <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-300 text-xs rounded-lg text-sm p-1 text-center">All</button> -->
                <!-- <Button class="bg-gray-300"><span class="text-xs">Recall</span></Button> -->
              </div>
            </div>
            <div v-if="responseData !== null && !loading">
              <ul
                class="h-40 overflow-y-auto scrollbar-thin scrollbar-track-Neutral scrollbar-thumb-gray-100"
              >
                <li
                  v-for="employee in responseData.data"
                  :key="employee[0]"
                  class="pb-3 sm:pb-4"
                >
                  <div class="flex items-center space-x-4 rtl:space-x-reverse">
                    <div class="flex-shrink-0">
                      <img
                        class="w-8 h-8 rounded-full"
                        :src="'https://meet.earthianslive.com/' + employee[2]"
                        alt="Profile Image"
                      />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate">
                        {{ employee[1] }}
                      </p>
                      <p class="text-sm text-gray-500 truncate">
                        {{ employee[0] }}
                      </p>
                    </div>
                    <div
                      class="inline-flex items-center text-base font-semibold text-gray-900"
                    >
                      <Button icon="chevron-right"></Button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- Card 6 -->

          <div
            class="bg-white p-3 rounded-lg shadow-md hover:bg-indigo-100 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
          >
            <div
              class="flex justify-between mb-7 bg-gray-100 place-items-center rounded-lg p-1"
            >
              <h2 class="text-sm font-semibold pl-2 text-dark p-2">
                Pending Discharge
              </h2>
              <div>
                <!-- <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-300 text-xs rounded-lg text-sm p-1 text-center">All</button> -->
                <!-- <Button class="bg-gray-300"><span class="text-xs">Recall</span></Button> -->
              </div>
            </div>
            <div v-if="responseData !== null && !loading">
              <ul
                class="h-40 overflow-y-auto scrollbar-thin scrollbar-track-Neutral scrollbar-thumb-gray-100"
              >
                <li
                  v-for="employee in responseData.data"
                  :key="employee[0]"
                  class="pb-3 sm:pb-4"
                >
                  <div class="flex items-center space-x-4 rtl:space-x-reverse">
                    <div class="flex-shrink-0">
                      <img
                        class="w-8 h-8 rounded-full"
                        :src="'https://meet.earthianslive.com/' + employee[2]"
                        alt="Profile Image"
                      />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate">
                        {{ employee[1] }}
                      </p>
                      <p class="text-sm text-gray-500 truncate">
                        {{ employee[0] }}
                      </p>
                    </div>
                    <div
                      class="inline-flex items-center text-base font-semibold text-gray-900"
                    >
                      <Button icon="chevron-right"></Button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <!-- cards-------------------------------------- -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  data() {
    return {
      responseData: null,
      loading: false,
      error: null,
      isSidebarOpen: false,
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen
    },
    fetchData() {
      this.loading = true
      this.error = null

      // Make an API request using axios
      axios
        .get('https://meet.earthianslive.com/api/method/test_api', {
          headers: {
            Accept: 'application/json',
            Authorization: 'token 437e73915e0c74e:13ae08f51f1c67d',
            'Content-Type': 'application/json',
          },
          params: {
            args: this.$route.query.usr,
          },
        })
        .then((response) => {
          // Handle the successful response
          this.responseData = response.data
        })
        .catch((error) => {
          // Handle the error
          console.error('Error fetching data:', error)

          if (error.response) {
            // The request was made and the server responded with a status code
            if (error.response.status === 401) {
              // Unauthorized access, handle accordingly
              this.error = 'Unauthorized access. Please log in.'
            } else {
              // Other errors (4xx, 5xx), handle accordingly
              this.error = 'Error fetching data. Please try again.'
            }
          } else if (error.request) {
            // The request was made but no response was received
            this.error = 'No response from the server. Please try again later.'
          } else {
            // Something happened in setting up the request that triggered an Error
            this.error = 'Unexpected error. Please try again.'
          }
        })
        .finally(() => {
          // Set loading to false regardless of success or failure
          this.loading = false
        })
    },
  },
  mounted() {
    // Load data when the component is mounted (on page load or reload)
    this.fetchData()
  },
}
</script>
