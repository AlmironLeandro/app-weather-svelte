import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/AlmironLeandro/app-weather-svelte', // Update to point to your repository
  user: {
   name: 'AlmironLeandro', // update to use your name
   email: 'leandroealmiron@hotmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);