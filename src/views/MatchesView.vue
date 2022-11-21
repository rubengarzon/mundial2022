<!-- eslint-disable prettier/prettier -->
<script>
export default {
  name: "MatchesView",
  data() {
    return {
      matches: [],
      selected: 'group',
      hoy: new Date(),
    };
  },
  methods: {
  },
  mounted() {
    fetch("https://backend-mundial.vercel.app/api/matches")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.matches = data.matches;
      });
    this.hoy = this.hoy.toLocaleDateString("es-ES");
  },
};
</script>
<!-- eslint-disable prettier/prettier -->
<template>
  <div class="filter-match">
    <div class="filter-match__container">
      <div class="filter-match__container--title">
        <h1>Partidos</h1>
      </div>
      <div class="filter-match__container--filter">
        <div class="filter-match__container--filter__item">
          <label for="filter">Filtrar por:</label>
          <select name="filter" id="filter" v-model="selected">
            <option value="group">Fase de grupos</option>
            <option value="round">Octavos de final</option>
            <option value="quarter">Cuartos de final</option>
            <option value="semi">Semifinal</option>
            <option value="final">Final</option>
          </select>
        </div>
      </div>
    </div>
    <div v-if="selected === 'round'">
      <p class="no-matches">Los partidos de Octavos de Final están por decidir.</p>
    </div>
    <div v-if="selected === 'quarter'">
      <p class="no-matches">Los partidos de Cuartos de Final están por decidir.</p>
    </div>
    <div v-if="selected === 'semi'">
      <p class="no-matches">Los partidos de Semifinales están por decidir.</p>
    </div>
    <div v-if="selected === 'final'">
      <p class="no-matches">Los partidos de la Final están por decidir.</p>
    </div>
    <!-- <div class="matches-mobile">
      <div v-for="match in matches" :key="match.id">
        <div v-if="match.fecha === hoy" class="hoy">
          <span>HOY - {{ match.hora }}</span>
          <div class="hoy-match">
            <img :src=match.banderaLocal alt="">
            <span>{{ match.partido }}</span>
            <img :src=match.banderaVisitante alt="">
          </div>
        </div>
      </div>
    </div> -->
    <div class="matches" v-if="selected === 'group'">
      <div class="matches__container">
        <div class="matches__container--item" v-for="match in matches" :key="match.id">
          <div class="matches__container--item__date">
            <p>{{ match.fecha }}</p>
            <span>{{ match.hora }}</span>
          </div>
          <div class="matches__container--item__score">
            <img :src="match.banderaLocal" alt="bandera local" width="50"
              class="matches__container--item__score__flagLocal">
            <p>{{ match.partido }}</p>
            <img :src="match.banderaVisitante" alt="bandera visitante" width="50"
              class="matches__container--item__score__flagAway">
          </div>
          <div class="matches__container--item__group">
            <p>Grupo {{ match.grupo }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<style>
.hoy {
  color: white;
  font-size: 22px;
  margin-bottom: 2em;
}

.hoy-match {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 100%;
}

.no-matches {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 2rem;
}

.filter-match {
  margin-top: 4em;
  text-align: center;
  margin-bottom: 2em;
}

.filter-match__container--title {
  width: 100%;
  margin-bottom: 2em;
}

.filter-match__container--title h1 {
  font-size: 30px;
  color: white;
  font-weight: 700;
}

.filter-match__container--filter {
  width: 100%;
}

.filter-match__container--filter__item {
  width: 100%;
  display: flex;
  justify-content: center;
}

.filter-match__container--filter__item label {
  font-size: 1.2em;
  color: white;
  font-weight: 700;
  margin-right: 1em;
}

.filter-match__container--filter__item select {
  width: 11%;
  padding: 0.5em;
  border: 1px solid #000;
  border-radius: 0.5em;
  font-size: 1em;
  font-weight: 700;
}

.matches {
  width: 100%;
  margin-top: 2em;
}

.matches__container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1em;
}

.matches__container--item {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
  padding: 1em;
  border: 1px solid #000;
  border-radius: 1.5em;
  background-color: white;
}

.matches__container--item__team {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.matches__container--item__date {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-weight: 700;
}

.matches__container--item__group {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-weight: 700;
}

.matches__container--item__group p {
  color: dimgray;
}

.matches__container--item__date span {
  margin-left: 0.5em;
  color: dimgray;
}

.matches__container--item__date p {
  color: dimgray;
}

.matches__container--item__team__flag {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.matches__container--item__team__flag img {
  width: 2em;
}

.matches__container--item__score__flagLocal {
  margin-right: 3px;
}

.matches__container--item__score__flagAway {
  margin-left: 3px;
}

.matches__container--item__team__name {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.matches__container--item__team__name p {
  font-size: 1.2em;
  font-weight: 700;
}

.matches__container--item__score {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: white;
  border-radius: 9px;
  padding: 2em;
}

.matches__container--item__score p {
  font-size: 1.5em;
  font-weight: 700;
  padding: 10px;
}

@media screen and (max-width: 768px) {
  .matches__container--item {
    width: 20em;
    border-radius: 5px;
  }

  .matches__container {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0;
    place-items: center;
  }

  .filter-match__container--filter__item {
    display: none;
  }

  .hoy-match img {
    width: 50px;
    margin: 0 10px;
  }

  .matches__container--item__score img {
    width: 30px;
  }

  .matches__container--item__score p {
    font-size: 1em;
  }

  .matches__container--item__score {
    flex-direction: row;
    padding: 0;
  }

  .matches__container--item__group p {
    font-size: 0.8em;
  }

  .matches__container--item__date p {
    font-size: 0.8em;
  }
}
</style>
