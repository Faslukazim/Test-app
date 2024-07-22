<template>
  <div class="max-w-3xl py-12 mx-auto">
    <div v-if="loading">
      Loading data...
    </div>

    <div v-if="responseData !== null && !loading">
      <ul>
        <li v-for="patient in responseData.data" :key="patient[0]">
          {{ patient[0] }} - {{ patient[1] }}
        </li>
      </ul>
    </div>
    <LoadingIndicator  class="w-12"/>
    <Button
  class="bg-gray-900 text-white hover:bg-blue-400 hover:text-gray-900"
>
  Button
</Button>
<Card>
  <Button
    class="bg-gray-900 text-white hover:bg-blue-400 hover:text-dark-400"
  >
    Button
  </Button>
</Card>
<Dialog>
  sdsdd
</Dialog>


<Badge
  :variant="'outline'"
  theme="gray"
  size="sm"
  label="Badge"
>
  Badge
</Badge>
    

    <div v-if="error">
      {{ error }}
    </div>
  </div>
  
</template>

<script>
import axios from 'axios';
import { Button,Badge,LoadingIndicator,Card,Dialog } from 'frappe-ui'
export default {
  name: 'Home',
  data() {
    return {
      responseData: null,
      loading: false,
      error: null,
    };
  },
  components: {
      Button,
      Badge,
      LoadingIndicator,
      Card,
      Dialog
    },
  
  methods: {
    fetchData() {
      this.loading = true;
      this.error = null;

      // Make an API request using axios
      axios.get('https://meet.earthianslive.com/api/method/test_api', {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'token 437e73915e0c74e:13ae08f51f1c67d',
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          // Handle the successful response
          this.responseData = response.data;
        })
        .catch((error) => {
          // Handle the error
          console.error('Error fetching data:', error);

          if (error.response) {
            // The request was made and the server responded with a status code
            if (error.response.status === 401) {
              // Unauthorized access, handle accordingly
              this.error = 'Unauthorized access. Please log in.';
            } else {
              // Other errors (4xx, 5xx), handle accordingly
              this.error = 'Error fetching data. Please try again.';
            }
          } else if (error.request) {
            // The request was made but no response was received
            this.error = 'No response from the server. Please try again later.';
          } else {
            // Something happened in setting up the request that triggered an Error
            this.error = 'Unexpected error. Please try again.';
          }
        })
        .finally(() => {
          // Set loading to false regardless of success or failure
          this.loading = false;
        });
    },

    
  },
  mounted() {
    // Load data when the component is mounted (on page load or reload)
    this.fetchData();
  },
};
</script>
