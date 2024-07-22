<template>
  <div class="mx-auto py-8 px-8 bg-gray-100 font-sans">
    <!-- Header -->
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-6xl font-bold bg-blue-300 rounded-lg p-2 text-gray-100">
        Patel Hospital
      </h1>
    </div>

    <!-- Token Rows -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
      <!-- Tokens -->
      <div class="flex flex-col items-center justify-center">
        <h2 class="text-gray-800 mb-4 text-center rounded-lg">
          <span class="font-bold text-blue-500 text-4xl"
            >Dr. Mathew Tharakan</span
          >
          <br />Radiology <br />
          L12
        </h2>
        <div
          class="h-40 w-80 flex items-center mb-2 justify-center token-card priority-1"
        >
          <h2 class="text-5xl font-bold text-gray-800">T 001</h2>
        </div>
        <div
          class="h-40 w-80 flex items-center mb-2 justify-center token-card priority-2"
        >
          <h2 class="text-5xl font-bold text-gray-800">Token 2</h2>
        </div>
        <div class="h-40 w-80 flex items-center mb-2 justify-center token-card">
          <h2 class="text-5xl font-bold text-gray-800">Token 0</h2>
        </div>
        <div class="h-40 w-80 flex items-center mb-2 justify-center token-card">
          <h2 class="text-5xl font-bold text-gray-800">Token 0</h2>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center">
        <h2 class="text-gray-800 mb-4 text-center rounded-lg">
          <span class="font-bold text-blue-500 text-4xl">Dr. Binoy J Paul</span>
          <br />Urology <br />
          L13
        </h2>
        <div
          class="h-40 w-80 flex items-center mb-2 justify-center token-card priority-1"
        >
          <h2 class="text-5xl font-bold text-gray-800">Token 1</h2>
        </div>
        <div
          class="h-40 w-80 flex items-center mb-2 justify-center token-card priority-2"
        >
          <h2 class="text-5xl font-bold text-gray-800">Token 2</h2>
        </div>
        <div class="h-40 w-80 flex items-center mb-2 justify-center token-card">
          <h2 class="text-5xl font-bold text-gray-800">Token 0</h2>
        </div>
        <div class="h-40 w-80 flex items-center mb-2 justify-center token-card">
          <h2 class="text-5xl font-bold text-gray-800">Token 0</h2>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center">
        <h2 class="text-l text-gray-800 mb-4 text-center rounded-lg">
          <span class="font-bold text-blue-500 text-4xl"
            >Dr. Santhosh George</span
          >
          <br />Oncology <br />
          L54
        </h2>
        <div
          class="h-40 w-80 flex items-center mb-2 justify-center token-card priority-1"
        >
          <h2 class="text-5xl font-bold text-gray-800">Token 1</h2>
        </div>
        <div
          class="h-40 w-80 flex items-center mb-2 justify-center token-card priority-2"
        >
          <h2 class="text-5xl font-bold text-gray-800">Token 2</h2>
        </div>
        <div
          class="h-40 w-80 flex items-center mb-2 justify-center token-card priority-3"
        >
          <h2 class="text-5xl font-bold text-gray-800">Token 4</h2>
        </div>
        <div class="h-40 w-80 flex items-center mb-2 justify-center token-card">
          <h2 class="text-5xl font-bold text-gray-800">Token 0</h2>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center">
        <h2 class="text-l text-gray-800 mb-4 text-center rounded-lg font-bold">
          <span class="font-bold text-blue-500 text-4xl">Dr. Beena </span>
          <br />Gynecology <br />
          L57
        </h2>
        <div
          class="h-40 w-80 flex items-center mb-2 justify-center token-card priority-1"
        >
          <h2 class="text-5xl font-bold text-gray-800">Token 1</h2>
        </div>
        <div
          class="h-40 w-80 flex items-center mb-2 justify-center token-card priority-2"
        >
          <h2 class="text-5xl font-bold text-gray-800">Token 2</h2>
        </div>
        <div class="h-40 w-80 flex items-center mb-2 justify-center token-card">
          <h2 class="text-5xl font-bold text-gray-800">Token 0</h2>
        </div>
        <div class="h-40 w-80 flex items-center mb-2 justify-center token-card">
          <h2 class="text-5xl font-bold text-gray-800">Token 0</h2>
        </div>
      </div>
    </div>

    <p class="text-sm text-gray-600 text-right mt-3">Powered by earthians</p>
  </div>
</template>

<style scoped>
/* Token Card Styles */

.token-card {
  padding: 20px;
  border-radius: 30px;
  background: #e0e0e000;
  box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
  margin-bottom: 25px;
}
.token-card:hover {
  scale: 1.05;
}

/* Blink Animation for Priority 1 (Red) */
@keyframes blink-green {
  from {
    background-color: #ffffff; /* White */
  }
  to {
    background-color: #6fcf72; /* Red */
  }
}

/* Blink Animation for Priority 2 (Orange) */

@keyframes blink-red {
  from {
    background-color: #ffffff; /* White */
  }
  to {
    background-color: #ff0000b5; /* Orange */
  }
}

/* Priority 1 (Red) */
.priority-1 {
  animation: blink-green 2s infinite alternate;
}

/* Priority 2 (Orange) */
.priority-2 {
  animation: blink-orange 1s infinite alternate;
}
.priority-3 {
  animation: blink-red 1s infinite alternate;
}

/* Mobile Responsiveness */
@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}
</style>
