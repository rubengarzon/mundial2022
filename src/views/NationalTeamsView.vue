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
    <div class="card-iran" v-on:click="goToPage('/iran')">
      <img
        src="https://digitalhub.fifa.com/transform/2df44737-2fd2-4d92-824b-0193c225eac1/FIFAPLS_WorldCup22Analysis_01_Hero_10_Iran_00?io=transform:fill,height:648,width:1440&quality=75"
        alt="" width="710" />
      <span>¿Tercera vez afortunada para Irán y Queiroz?</span>
    </div>
    <div class="card-camerun" v-on:click="goToPage('/camerun')">
      <img
        src="https://digitalhub.fifa.com/transform/f90bcd2a-a30c-4a24-8bc2-9a1346884342/FIFAPLS_WorldCup22Analysis_01_Hero_31_Cameroon_00?io=transform:fill,height:648,width:1440&quality=75"
        alt="" width="710" />
      <span>Camerún cantando de la misma hoja de canciones</span>
    </div>
    <div class="card-canada" v-on:click="goToPage('/canada')">
      <img
        src="https://digitalhub.fifa.com/transform/8a59dc23-bb34-45f1-9d98-1c243f8f834c/FIFAPLS_WorldCup22Analysis_01_Hero_14_Canada_00?io=transform:fill,height:648,width:1440&quality=75"
        alt="" width="710" />
      <span>Emocionantes canadienses que sorprenden al deporte</span>
    </div>
    <div class="card-holanda" v-on:click="goToPage('/holanda')">
      <img
        src="https://digitalhub.fifa.com/transform/48ea2813-1810-496e-bc01-cb4c3dc0a3a1/FIFAPLS_WorldCup22Analysis_01_Hero_25_Netherlands_00?io=transform:fill,height:648,width:1440&quality=75"
        alt="" width="710" />
      <span>Los holandeses buscan redescubrir su identidad en el regreso de la Copa del Mundo</span>
    </div>
    <div class="card-serbia" v-on:click="goToPage('/serbia')">
      <img
        src="https://digitalhub.fifa.com/transform/cc12ada6-a3e7-4736-8e6a-901a8282be3f/Serbia-Team-Analysis-graphic?io=transform:fill,height:648,width:1440&quality=75"
        alt="" width="710" />
      <span>La Serbia de Stojkovic lista para entretener</span>
    </div>
    <div class="card-ghana" v-on:click="goToPage('/ghana')">
      <img
        src="https://digitalhub.fifa.com/transform/19d478a0-1714-4fcd-a19d-f2392e02c8fc/FIFAPLS_WorldCup22Analysis_01_Hero_16_Ghana_00?io=transform:fill,height:648,width:1440&quality=75"
        alt="" width="710" />
      <span>Venganza en el radar para los nuevos Black Stars</span>
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

.card-iran {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #24A53A;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.card-iran:hover {
  background-color: #1E8A2F;
  transform: scale(1.05);
}

.card-iran span {
  color: white;
  padding: 14px;
  font-size: 18px;
  font-weight: 600;
}

.card-camerun {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #028247;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.card-camerun:hover {
  background-color: #026B3E;
  transform: scale(1.05);
}

.card-camerun span {
  color: white;
  padding: 14px;
  font-size: 18px;
  font-weight: 600;
}

.card-canada {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #E70322;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.card-canada:hover {
  background-color: #C6021D;
  transform: scale(1.05);
}

.card-canada span {
  color: white;
  padding: 14px;
  font-size: 18px;
  font-weight: 600;
}

.card-holanda {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F17D02;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.card-holanda:hover {
  background-color: #D16B01;
  transform: scale(1.05);
}

.card-holanda span {
  color: white;
  padding: 14px;
  font-size: 18px;
  font-weight: 600;
}

.card-serbia {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #570068;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.card-serbia:hover {
  background-color: #4A005C;
  transform: scale(1.05);
}

.card-serbia span {
  color: white;
  padding: 14px;
  font-size: 18px;
  font-weight: 600;
}

.card-ghana {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1F1C1D;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.card-ghana:hover {
  background-color: #1A1718;
  transform: scale(1.05);
}

.card-ghana span {
  color: white;
  padding: 14px;
  font-size: 18px;
  font-weight: 600;
}

.card span {
  color: black;
  padding: 14px;
  font-size: 18px;
}

@media screen and (max-width: 400px) {
  .cards {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 4em;
    margin-bottom: 2em;
    place-content: center;
    place-items: center;
  }

  .card-iran,
  .card-camerun,
  .card-canada,
  .card-holanda,
  .card-serbia,
  .card-ghana {
    width: 100%;
  }

  .card-iran img,
  .card-camerun img,
  .card-canada img,
  .card-holanda img,
  .card-serbia img,
  .card-ghana img {
    width: 100%;
  }

  .card-iran span,
  .card-camerun span,
  .card-canada span,
  .card-holanda span,
  .card-serbia span,
  .card-ghana span {
    font-size: 16px;
    text-align: center;
  }
}
</style>
