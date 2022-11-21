<!-- eslint-disable prettier/prettier -->
<template>
  <header>
    <img
      src="https://digitalhub.fifa.com/transform/3a170b69-b0b5-4d0c-bca0-85880a60ea1a/World-Cup-logo-landscape-on-dark?io=transform:fill&quality=75"
      alt="logo" width="100" class="img-mundial-mobile" />
    <img src="https://logodownload.org/wp-content/uploads/2018/07/world-cup-2022-logo-1.png" alt="qatar 2022"
      width="130" class="img-mundial" />
    <router-link to="/" class="link-matches">INICIO</router-link>
    <router-link to="/partidos" class="link-matches">PARTIDOS</router-link>
    <router-link to="/selecciones" class="link-matches">SELECCIONES</router-link>
    <router-link to="/estadios" class="link-matches">ESTADIOS</router-link>
  </header>

  <div class="nav-block">
    <nav>
      <ul>
        <li>
          <router-link to="/" class="link-mobile">
            <img src="https://cdn-icons-png.flaticon.com/512/15/15730.png" alt="inicio" width="30" />INICIO
          </router-link>
        </li>
        <li>
          <router-link to="/partidos" class="link-mobile"><img
              src="https://cdn-icons-png.flaticon.com/512/4486/4486444.png" alt="partidos" width="30" />Partidos
          </router-link>
        </li>
        <li>
          <router-link to="/selecciones" class="link-mobile"><img
              src="https://cdn-icons-png.flaticon.com/512/3461/3461124.png" alt="selecciones" width="30" />Selecciones
          </router-link>
        </li>
        <li>
          <router-link to="/estadios" class="link-mobile"><img
              src="https://cdn-icons-png.flaticon.com/512/4050/4050241.png" alt="estadios" width="30" />Estadios
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
  <router-view></router-view>
</template>
<!-- eslint-disable prettier/prettier -->
<style>
@import url("https://fonts.googleapis.com/css2?family=Sansita&display=swap");

.menu {
  display: none;
}

nav {
  display: none;
}

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

.img-mundial-mobile {
  display: none;
}

@media (max-width: 768px) {

  .link-mobile {
    font-size: .5rem;
  }

  .img-mundial-mobile {
    display: block;
  }

  .img-mundial {
    display: none;
  }

  .menu {
    display: block;
    width: 3em;
    height: 3em;
    place-self: center;
    margin-right: 1em;
    cursor: pointer;
  }

  .menu:hover {
    transform: scale(1.1);
  }

  .link-matches {
    display: none;
  }

  .nav-block {
    width: 100%;
    height: 64px;
    place-self: center;
    margin-right: 1em;
    border-top: 1px solid black;
    position: fixed;
    z-index: 1040;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: white;
  }

  nav {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
  }

  ul {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 0;
    margin-left: 17px;
    margin-right: 17px;
    margin-top: 5px;
  }

  li {
    list-style: none;
    margin-bottom: 1em;
    text-align: -webkit-center;
  }

  li a {
    text-decoration: none;
    color: black;
  }

  li img {
    display: block;
  }
}
</style>
