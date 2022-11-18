<!-- eslint-disable prettier/prettier -->
<script>
export default {
  methods: {
    goToPage(page) {
      window.location = page;
    },
  },
}
</script>
<!-- eslint-disable prettier/prettier -->
<template>
  <div class="cards">
    <div class="card" v-on:click="goToPage('/iran')">
      <img
        src="https://digitalhub.fifa.com/transform/2df44737-2fd2-4d92-824b-0193c225eac1/FIFAPLS_WorldCup22Analysis_01_Hero_10_Iran_00?io=transform:fill,height:648,width:1440&quality=75"
        alt="" width="710" />
      <span>¿Tercera vez afortunada para Irán y Queiroz?</span>
    </div>
    <div class="card" v-on:click="goToPage('/camerun')">
      <img
        src="https://digitalhub.fifa.com/transform/f90bcd2a-a30c-4a24-8bc2-9a1346884342/FIFAPLS_WorldCup22Analysis_01_Hero_31_Cameroon_00?io=transform:fill,height:648,width:1440&quality=75"
        alt="" width="710" />
      <span>Camerún cantando de la misma hoja de canciones</span>
    </div>
    <div class="card" v-on:click="goToPage('/canada')">
      <img
        src="https://digitalhub.fifa.com/transform/8a59dc23-bb34-45f1-9d98-1c243f8f834c/FIFAPLS_WorldCup22Analysis_01_Hero_14_Canada_00?io=transform:fill,height:648,width:1440&quality=75"
        alt="" width="710" />
      <span>Emocionantes canadienses que sorprenden al deporte</span>
    </div>
    <div class="card" v-on:click="goToPage('/holanda')">
      <img
        src="https://digitalhub.fifa.com/transform/48ea2813-1810-496e-bc01-cb4c3dc0a3a1/FIFAPLS_WorldCup22Analysis_01_Hero_25_Netherlands_00?io=transform:fill,height:648,width:1440&quality=75"
        alt="" width="710" />
      <span>Los holandeses buscan redescubrir su identidad en el regreso de la Copa del Mundo</span>
    </div>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<style>
.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 4em;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 10px;
  cursor: pointer;
}

.card span {
  color: black;
  padding: 14px;
  font-size: 18px;
}
</style>
