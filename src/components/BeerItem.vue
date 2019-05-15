<template>
    <div>
        <div class="beerlist" >
            <div class="beer__item" v-for="(beer, index) in BeerList" v-bind:key="index">
                <img :src="beer.image_url" :title="beer.name" @click="toggleModal(beer)">
            </div>
        </div>
        <beer-detail-modal :visible="visible" :beerInfo="beerInfo"></beer-detail-modal>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BeerDetailModal from "./BeerDetailModal.vue";
import bus from '../utils/bus.js';''

export default {
    components : {
        BeerDetailModal
    },
    data () {
        return {
            visible: false,
            beerInfo : {}
        }
    },
    created() {
        this.$store.dispatch("FETCH_BEERS");
        bus.$on("closeModal", visible => {
            this.visible = !visible;
        })
        
    },
    methods: {
      toggleModal(beer) {
       this.visible = !this.visible;
       this.beerInfo = beer;
      }
    },
    computed : {
        ...mapGetters({
            BeerList : 'fetchBeerList'
        })
    }
}
</script>

<style scoped>
.beerlist{display: flex;flex-wrap: wrap; width: 80%; margin: 20px auto; border: 1px solid #000; }
.beerlist img {width: 200px; height: 570px; cursor: pointer;}
.beer__item {flex-basis: 20%; display: flex; justify-content: center; align-content: center;padding: 50px 0}
</style>
