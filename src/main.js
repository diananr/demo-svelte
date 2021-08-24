import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    userName: 'Diana',
    petName: 'Kira',
  },
});

export default app;
