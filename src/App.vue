<!-- eslint-disable prettier/prettier -->
<template>
  <header>
    <img src="https://logodownload.org/wp-content/uploads/2018/07/world-cup-2022-logo-1.png" alt="qatar 2022"
      width="130" class="img-mundial" />
    <router-link to="/" class="link-matches">INICIO</router-link>
    <router-link to="/partidos" class="link-matches">PARTIDOS</router-link>
    <a href="/selecciones" class="link-matches">SELECCIONES</a>
    <a href="https://www.fifa.com/worldcup/" class="link-matches">CLASIFICACIÓN</a>
    <a href="https://www.fifa.com/worldcup/" class="link-matches">JUGADORES</a>
    <a href="https://www.fifa.com/worldcup/" class="link-matches">ENTRENADORES</a>
    <a href="https://www.fifa.com/worldcup/" class="link-matches">ESTADIOS</a>
  </header>
  <router-view></router-view>
</template>

<style>
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
  font-family: "Sansita", sans-serif;
}

.img-mundial {
  margin-right: 1em;
}
</style>
