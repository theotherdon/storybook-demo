<template>
  <form @submit.prevent="onSubmit">
    <label for="email">Email:</label>
    <input type="text" v-model="email" id="email" placeholder="Email" />
    <label for="password">Password:</label>
    <input type="password" v-model="password" id="password" placeholder="Password" />
    <button type="submit">Login</button>
    <p v-for="item in someReallyCrazyLongOutputThatWillBeTruncatedInTheTerminal">{{ item }}</p>
    <p v-if="submitted">Form submitted!</p>
  </form>
</template>
<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const submitted = ref(false);
const someReallyCrazyLongOutputThatWillBeTruncatedInTheTerminal = ref(Array(350).fill('Some really crazy long output that will be truncated in the terminal'));

const onSubmit = () => {
  setTimeout(() => {
    submitted.value = true;
  }, 1000);
};
</script>