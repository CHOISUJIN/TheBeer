<template>
    <div>
        <ul>
            <li v-for="(beer, index) in BeerList" v-bind:key="index"></li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    created() {
        this.$store.dispatch("FETCH_BEER");
    },
    computed : {
        ...mapGetters({
            BeerList : 'fetchBeerList'
        })
    }
}
</script>

<style>

</style>
