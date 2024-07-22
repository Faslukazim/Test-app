<template>
  <div class="flex h-screen w-screen justify-center bg-gray-100">
    <div class="mt-32 w-full px-4">
      <div class="mt-6 flex items-center justify-center space-x-1.5">
        <span class="text-3xl font-semibold text-gray-900">Login</span>
        <span class="h-6 text-gray-900"></span>
      </div>
      <div class="mx-auto mt-6 w-full px-4 sm:w-96">
        <form @submit.prevent="submit">
          <div>
            <input v-model="email" placeholder="Email or username" :disabled="loading" class="w-full px-3 py-2 border outline-none rounded-md" />
          </div>
          <div class="mt-4">
            <input v-model="password" placeholder="Password" :disabled="loading" type="password" class="w-full px-3 py-2 border outline-none rounded-md" />
          </div>
          <div class="mt-2">
            <span class="text-red-500">{{ error }}</span>
          </div>
          <button class="mt-6 w-full px-4 py-2 bg-blue-500 text-white rounded-md" :disabled="loading">
            Login
          </button>
          
        </form>
        <button v-if="authProviders.length" class="mt-2 w-full py-2 text-base text-gray-600 underline" @click="showEmailLogin = !showEmailLogin">
            {{ showEmailLogin ? 'Login using other methods' : 'Login via email' }}
          </button>
        <!-- <div class="mx-auto space-y-2" v-if="authProviders.length && !showEmailLogin">
          <button @click="showEmailLogin = true" class="w-full py-2 text-white bg-blue-500 rounded-md">
            Login via email
          </button>
          <a
            v-for="provider in authProviders"
            :key="provider.name"
            :href="provider.auth_url"
            class="block w-full rounded border bg-gray-900 px-3 py-1 text-center text-base h-7 text-white transition-colors hover:bg-gray-700"
          >
            Login via {{ provider.provider_name }}
          </a>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const showEmailLogin = ref(false);
    const email = ref('');
    const password = ref('');
    const loading = ref(false);
    const error = ref('');
    const authProviders = ref([]);
    const router = useRouter();

    const submit = async () => {
      loading.value = true;
      const headers = {
        'Accept': 'application/json',
        'Authorization': 'token 437e73915e0c74e:13ae08f51f1c67d',
        'Content-Type': 'application/json'
      };

      const apiUrl = 'https://meet.earthianslive.com/api/method/login';
      const requestBody = { usr: email.value, pwd: password.value };

      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers,
          body: JSON.stringify(requestBody),
        });

        if (response.ok) {
          error.value = '';
          router.push({
            path: '/test',
            query: {
              usr: email.value,
            },
          });

        } else {
          error.value = 'Invalid credentials';
        }
      } catch (error) {
        console.error('Error during login:', error);
        error.value = 'An error occurred during login';
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      // Simulate fetching data
      setTimeout(() => {
        authProviders.value = [
          { name: 'Provider1', provider_name: 'Provider 1', auth_url: '#' },
          { name: 'Provider2', provider_name: 'Provider 2', auth_url: '#' },
        ];
      }, 500);
    });

    return {
      showEmailLogin,
      email,
      password,
      loading,
      error,
      authProviders,
      submit,
    };
  },
};
</script>

<style scoped>
.dark-mode {
  background-color: #1a1a1a;
  color: #ffffff;
}
</style>
