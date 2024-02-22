<script setup>
const data = [
  { name: 'GitHub', link: "http://tinyurl.com/bruck-github" },
  { name: 'Frontend Mentor', link: "http://tinyurl.com/bruck-frontend-mentor" },
  { name: 'LinkedIn', link: "http://tinyurl.com/bruck-linkedin" },
  { name: 'Website', link: "http://tinyurl.com/bruck-website" },
  {name: 'Instagram', link: "#"},
]
</script>

<template>
  <!-- Used <main> to wrap the main content instead of <div> -->
  <main class="min-h-[100vh] p-5 flex justify-center items-center font-sans">
    <div
      class="bg-darkGrey w-[350px] md-[380px] rounded-[10px] pt-[30px]"
    >
    <div class="flex justify-center mb-[20px]">
      <img src="./assets/profile.png" alt="" class="rounded-full h-[70px] w-[70px]">
    </div>
      <!-- Used <h1> for the main heading -->
      <h1 class="text-white font-bold text-[26px] text-center my-0">
        Bruck Demissie
      </h1>
      <!-- Used <h2> for subheadings -->
      <h2 class="font-bold text-[16px] text-center text-green my-0 pt-3">
        Addis Ababa, Ethiopia
      </h2>
      <p class="font-normal text-[12px] text-center text-white pt-3">
        "Full Stack Developer and avid reader."
      </p>
      <div class="flex flex-col px-[25px] my-[30px]">
        <!-- Iterate over the data using v-for -->
        <a v-for="(link, index) in data" :key="index" :href="link.link" target="_blank" class="w-full h-[45px] bg-grey hover:bg-green text-[14px] border-0 text-white hover:text-grey font-bold rounded-[7px] my-[7px] cursor-pointer flex justify-center items-center no-underline"> {{ link.name }}</a>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
