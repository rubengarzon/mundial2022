<script>
import NationalTeams from "@/components/NationalTeams.vue";
export default {
  name: "ComponentePrincipal",
  components: {
    NationalTeams,
  },
};
</script>
<!-- eslint-disable prettier/prettier -->
<template>
  <header>
    <img src="https://logodownload.org/wp-content/uploads/2018/07/world-cup-2022-logo-1.png" alt="qatar 2022"
      width="130" />
  </header>
  <NationalTeams />
</template>
<!-- eslint-disable prettier/prettier -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Sansita&display=swap");

header {
  text-align: center;
}

h1 {
  color: white;
  text-align: center;
  font-size: 80px;
  font-family: "Sansita", sans-serif;
}
</style>
