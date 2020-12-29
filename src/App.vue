<template>
  <div id="app">
    <div class="container mx-auto mt-2 py-3 px-2 sm:px-0">
      <div class="flex justify-around">
        <button class="btn-accent-icon">
          <i class="material-icons" @click="addMarker">room</i>
        </button>
        <button class="btn-warning-icon">
          <i class="material-icons" @click="deleteMarker">delete</i>
        </button>
      </div>
    </div>
    <Viewer class="relief-primary" v-if="null !== marker" :marker="marker" />
    <div v-else>
      <p>Pas de marker</p>
    </div>
  </div>
</template>

<script>
import Viewer from "@/components/Viewer";
export default {
  name: "App",
  components: { Viewer },
  data: () => {
    return {
      marker: "null"
    };
  },
  created() {
    const marker = localStorage.getItem("ar_marker");
    this.marker = null !== marker ? JSON.parse(marker) : null;
  },
  methods: {
    addMarker() {
      this.marker = {
        lat: 43.513256,
        long: 5.438665
      };
      localStorage.setItem("ar_marker", JSON.stringify(this.marker));
    },
    deleteMarker() {
      this.marker = null;
      localStorage.removeItem("ar_marker");
    }
  }
};
</script>

<style lang="scss">
#app {
  @apply bg-primary text-primary-contrast fixed inset-0 grid overflow-hidden grid;
  grid-template-rows: auto 1fr;
}
</style>
