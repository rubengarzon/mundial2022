<!-- eslint-disable prettier/prettier -->
<script>
import NationalTeams from "@/components/NationalTeams.vue";
export default {
  name: "HomeView",
  components: {
    NationalTeams,
  },
};
</script>
<!-- eslint-disable prettier/prettier -->
<template>
  <NationalTeams />
  <router-view></router-view>
</template>
<!-- eslint-disable prettier/prettier -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Sansita&display=swap");

header {
  display: flex;
  place-content: center;
}

.link-matches {
  border: 2px solid white;
  background-color: white;
  color: black;
  padding: 10px;
  text-decoration: none;
  font-weight: bold;
  height: 3em;
  place-self: center;
  margin-right: 1em;
}

.img-mundial {
  margin-right: 1em;
}

h1 {
  color: white;
  text-align: center;
  font-size: 80px;
  font-family: "Sansita", sans-serif;
}
</style>