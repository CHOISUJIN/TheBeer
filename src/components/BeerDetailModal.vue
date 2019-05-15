<template>
    <div class="beer-modal" v-if="visible">
        <div class="beer-modal__dialog">
            <div class="modal__header">
                <h1> {{beerInfo.name}} </h1>
            </div>
            <div class="modal__body">
                <div class="beer__contents">
                    <div class="beer__img">
                        <img :src="beerInfo.image_url" title="Trashy Blonde">
                    </div>
                    <div class="beer__description">
                        {{beerInfo.description}}
                    </div>
                </div>
                
            </div>
            <div class="modal__footer">
                <button type="button" @click="closeModal">닫기</button>
            </div>
        </div>
        
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import bus from '../utils/bus.js'

export default {
    props :{
        visible : {
            type: Boolean,
            required: true
        },
        beerInfo : {
            type : Object,
            required: true,
        }
    },
    methods: {
        closeModal() {
            bus.$emit("closeModal", this.visible);
        }
    },
    beforeDestroy() { 
      bus.$off("closeModal", this.visible);
    }
}
</script>

<style scoped>
.beer-modal{
  background-color: rgba(0,0,0,.7);
  top: 0; right: 0; bottom: 0; left: 0;
  position: fixed;
  overflow: auto;
  margin: 0;
}

.beer-modal__dialog{
    left: 25%;
    top: 75px;
    width: 800px;
    position: absolute;
    background: #fff;
    margin-bottom: 50px;
    border-radius: 15px;
}

.beer__img > img {width: 100px;}

.modal__header{
    height: 80px;
    text-align: center;
}

.modal__header h1 {margin: 0; padding: 20px 0;}
.beer__contents{display: flex;}
.beer__img {display: flex; flex: 1; align-items: center; justify-content: center;}
.beer__description{flex: 2;}
.modal__footer {height: 80px;text-align: center;}
.modal__footer > button {margin-top: 20px; height: 35px; width:150px;}
</style>
