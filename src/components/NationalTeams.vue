<!-- eslint-disable prettier/prettier -->
<script>
export default {
  name: "NationalTeams",
  data() {
    return {
      teamsA: [],
      teamsB: [],
      teamsC: [],
      teamsD: [],
      teamsE: [],
      teamsF: [],
      teamsG: [],
      teamsH: [],
    }
  },
  methods: {
    goToPageTeam: function (teamName) {
      this.$router.push({ name: 'Team', params: { teamName } })
    },
  },
  mounted() {
    fetch("https://backend-mundial.vercel.app/api/teams")
      .then((res) => res.json())
      .then((data) => {
        data.teams.forEach(element => {
          if (element.grupo === "A") {
            this.teamsA.push(element)
            this.teamsA.sort((a, b) => b.puntos - a.puntos)
          } else if (element.grupo === "B") {
            this.teamsB.push(element)
            this.teamsB.sort((a, b) => b.puntos - a.puntos)
          } else if (element.grupo === "C") {
            this.teamsC.push(element)
            this.teamsC.sort((a, b) => b.puntos - a.puntos)
          } else if (element.grupo === "D") {
            this.teamsD.push(element)
            this.teamsD.sort((a, b) => b.puntos - a.puntos)
          } else if (element.grupo === "E") {
            this.teamsE.push(element)
            this.teamsE.sort((a, b) => b.puntos - a.puntos)
          } else if (element.grupo === "F") {
            this.teamsF.push(element)
            this.teamsF.sort((a, b) => b.puntos - a.puntos)
          } else if (element.grupo === "G") {
            this.teamsG.push(element)
            this.teamsG.sort((a, b) => b.puntos - a.puntos)
          } else if (element.grupo === "H") {
            this.teamsH.push(element)
            this.teamsH.sort((a, b) => b.puntos - a.puntos)
          }
        });
      });
  },
};
</script>
<!-- eslint-disable prettier/prettier -->
<template>
  <div class="teams">
    <div class="teamA">
      <div class="group">
        <h3>Grupo A</h3>
      </div>
      <div v-for="team in teamsA" :key="team.id">
        <div class="block">
          <img :src="team.bandera" alt="bandera" width="22" class="flag" />
          <span class="name">{{ team.nombre }} {{ team.puntos }}</span>
        </div>
      </div>
    </div>
    <div class="teamA">
      <div class="group">
        <h3>Grupo B</h3>
      </div>
      <div v-for="team in teamsB" :key="team.id">
        <div class="block">
          <img :src="team.bandera" alt="bandera" width="22" class="flag" />
          <span class="name">{{ team.nombre }} {{ team.puntos }}</span>
        </div>
      </div>
    </div>
    <div class="teamA">
      <div class="group">
        <h3>Grupo C</h3>
      </div>
      <div v-for="team in teamsC" :key="team.id">
        <div class="block">
          <img :src="team.bandera" alt="bandera" width="22" class="flag" />
          <span class="name">{{ team.nombre }} {{ team.puntos }}</span>
        </div>
      </div>
    </div>
    <div class="teamA">
      <div class="group">
        <h3>Grupo D</h3>
      </div>
      <div v-for="team in teamsD" :key="team.id">
        <div class="block">
          <img :src="team.bandera" alt="bandera" width="22" class="flag" />
          <span class="name">{{ team.nombre }} {{ team.puntos }}</span>
        </div>
      </div>
    </div>
    <div class="teamA">
      <div class="group">
        <h3>Grupo E</h3>
      </div>
      <div v-for="team in teamsE" :key="team.id">
        <div class="block">
          <img :src="team.bandera" alt="bandera" width="22" class="flag" />
          <span class="name">{{ team.nombre }} {{ team.puntos }}</span>
        </div>
      </div>
    </div>
    <div class="teamA">
      <div class="group">
        <h3>Grupo F</h3>
      </div>
      <div v-for="team in teamsF" :key="team.id">
        <div class="block">
          <img :src="team.bandera" alt="bandera" width="22" class="flag" />
          <span class="name">{{ team.nombre }} {{ team.puntos }}</span>
        </div>
      </div>
    </div>
    <div class="teamA">
      <div class="group">
        <h3>Grupo G</h3>
      </div>
      <div class="team" v-for="team in teamsG" :key="team.id" v-on:click="goToPageTeam(team.nombre)">
        <div class="block">
          <img :src="team.bandera" alt="bandera" width="22" class="flag" />
          <span class="name">{{ team.nombre }} {{ team.puntos }}</span>
        </div>
      </div>
    </div>
    <div class="teamA">
      <div class="group">
        <h3>Grupo H</h3>
      </div>
      <div v-for="team in teamsH" :key="team.id">
        <div class="block">
          <img :src="team.bandera" alt="bandera" width="22" class="flag" />
          <span class="name">{{ team.nombre }} {{ team.puntos }}</span>
        </div>
      </div>
    </div>
  </div>

</template>
<!-- eslint-disable prettier/prettier -->
<style>
.teams {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  margin: 0 auto;
  width: 100%;
  margin-top: 3em;
  place-items: center;
  margin-bottom: 3em;
}

.team {
  cursor: pointer;
}

.teamA {
  background-color: inherit;
  width: 189px;
  height: 210px;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  border: 2px solid white;
}

.group {
  font-weight: bold;
  background-color: white;
  color: black;
  width: 189px;
  margin-left: -12px;
  text-align: center;
  margin-top: -12px;
}

.group h3 {
  font-size: 25px;
}

.name {
  font-size: 20px;
  margin-left: 3px;
  color: white;
}

.flag {
  border: 3px solid white;
  border-radius: 15px;
}

.block {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

@media (min-width: 800px) and (max-width: 939px) {
  .teams {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 500px) and (max-width: 800px) {
  .teams {
    grid-template-columns: repeat(2, 1fr);
  }
}


@media (max-width: 468px) {
  .teams {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
