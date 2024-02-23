This project is a solution to the Social Links Profile challenge on Frontend Mentor. The challenge aimed to enhance coding skills by building a realistic project focusing on creating a social links profile.

Users should be able to:

See hover and focus states for all interactive elements on the page
Solution URL
Live Site URL
Note: Analytics have been implemented using TinyURL for tracking purposes.

In this project, I used various technologies and techniques, including:

Vue 3 - JS Framework
TailwindCSS - For Styles
Vite
Mobile-first workflow
Sample Code I liked

   <div class="flex flex-col px-[25px] my-[30px]">
              <a v-for="(link, index) in data" :key="index" :href="link.link" target="_blank" class="w-full h-[45px] bg-grey hover:bg-green  text-[14px] border-0 text-white hover:text-grey font-bold rounded-[7px] my-[7px] cursor-pointer flex justify-center items-center no-underline"> {{ link.name }}</a>
      </div>
Website - Bruck Demissie
Frontend Mentor - @bruck-3
# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
