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
    <router-link to="/iran" class="card-iran">
      <img
        src="https://digitalhub.fifa.com/transform/2df44737-2fd2-4d92-824b-0193c225eac1/FIFAPLS_WorldCup22Analysis_01_Hero_10_Iran_00?io=transform:fill,height:648,width:1440&quality=75"
        alt="" width="710" />
      <span>¿La tercera será la vencida para el Irán de Queiroz?</span>
    </router-link>
    <router-link to="/polonia" class="card-polonia">
      <img
        src="https://digitalhub.fifa.com/transform/00d7950c-674a-490e-adf7-41da8ec8a194/FIFAPLS_WorldCup22Analysis_01_Hero_27_Poland_00?io=transform:fill,height:648,width:1440&quality=75"
        alt="" width="710" />
      <span>Polonia y Lewandowski quieren olvidar Rusia 2018</span>
    </router-link>
    <router-link to="/canada" class="card-canada">
      <img
        src="https://digitalhub.fifa.com/transform/8a59dc23-bb34-45f1-9d98-1c243f8f834c/FIFAPLS_WorldCup22Analysis_01_Hero_14_Canada_00?io=transform:fill,height:648,width:1440&quality=75"
        alt="" width="710" />
      <span>Canadá tiene un solo objetivo: sorprender al mundo</span>
    </router-link>
    <router-link to="/australia" class="card-australia">
      <img
        src="https://digitalhub.fifa.com/transform/d5e01f90-9109-482a-8959-985cadfbae0a/FIFAPLS_WorldCup22Analysis_01_Hero_12_Australia_00?io=transform:fill,height:648,width:1440&quality=75"
        alt="" width="710" />
      <span>Australia: de bajas expectativas a la ilusión como bandera</span>
    </router-link>
    <router-link to="/serbia" class="card-serbia">
      <img
        src="https://digitalhub.fifa.com/transform/cc12ada6-a3e7-4736-8e6a-901a8282be3f/Serbia-Team-Analysis-graphic?io=transform:fill,height:648,width:1440&quality=75"
        alt="" width="710" />
      <span>Serbia en Catar: calidad y espectáculo a la búsqueda de un resultado histórico</span>
    </router-link>
    <router-link to="/ghana" class="card-ghana">
      <img
        src="https://digitalhub.fifa.com/transform/19d478a0-1714-4fcd-a19d-f2392e02c8fc/FIFAPLS_WorldCup22Analysis_01_Hero_16_Ghana_00?io=transform:fill,height:648,width:1440&quality=75"
        alt="" width="710" />
      <span>Ghana se medirá a un viejo conocido en su regreso al Mundial</span>
    </router-link>
    <router-link to="/uruguay" class="card-uruguay">
      <img
        src="https://digitalhub.fifa.com/transform/9ce00770-0671-45b5-bfcf-420955dce0ea/FIFAPLS_WorldCup22Analysis_01_Hero_24_Uruguay_00?io=transform:fill,height:648,width:1440&quality=75"
        alt="" width="710" />
      <span>Uruguay y su Garra Charrúa irán en busca del título en Catar 2022</span>
    </router-link>
    <router-link to="/spain" class="card-spain">
      <img
        src="https://digitalhub.fifa.com/transform/be37538e-495d-4773-b566-b7c24aa090ed/FIFAPLS_WorldCup22Analysis_01_Hero_05_Spain_00?io=transform:fill,height:648,width:1440&quality=75"
        alt="" width="710" />
      <span>La rejuvenecida España quiere sorprender al mundo en Catar</span>
    </router-link>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<style>
.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 4em;
}

a {
  text-decoration: none;
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

.card-polonia {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #E90222;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.card-polonia:hover {
  background-color: #C6011E;
  transform: scale(1.05);
}

.card-polonia span {
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

.card-australia {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFD203;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.card-australia:hover {
  background-color: #FFC000;
  transform: scale(1.05);
}

.card-australia span {
  color: black;
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

.card-uruguay {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #027ECB;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.card-uruguay:hover {
  background-color: #0269A9;
  transform: scale(1.05);
}

.card-uruguay span {
  color: white;
  padding: 14px;
  font-size: 18px;
  font-weight: 600;
}

.card-spain {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #E50322;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.card-spain:hover {
  background-color: #C6021D;
  transform: scale(1.05);
}

.card-spain span {
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

@media screen and (max-width: 700px) {
  .cards {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 4em;
    margin-bottom: 2em;
    place-content: center;
    place-items: center;
  }

  .card-iran,
  .card-polonia,
  .card-canada,
  .card-australia,
  .card-serbia,
  .card-ghana,
  .card-uruguay,
  .card-spain {
    width: 100%;
  }

  .card-iran img,
  .card-polonia img,
  .card-canada img,
  .card-australia img,
  .card-serbia img,
  .card-ghana img,
  .card-uruguay img,
  .card-spain img {
    width: 100%;
  }

  .card-iran span,
  .card-polonia span,
  .card-canada span,
  .card-australia span,
  .card-serbia span,
  .card-ghana span,
  .card-uruguay span,
  .card-spain span {
    font-size: 18px;
    text-align: center;
  }
}
</style>
