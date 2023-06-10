<template>
  <div class="flex flex-col card-section">
    <div class="flex justify-start">
      <img class="flex item-start w-96 relative" :src="frontImgCard" />
      <div class="card-content-icon">
        <img :src="cardIcon" />
      </div>

      <div class="card-content-number flex flex-col w-96">
        <div class="flex justify-center">
          <span class="contents text-white" style="font-size: 18px">
            {{ getDataObj.cardNumber }}
          </span>
        </div>
        <div class="flex justify-between px-12 mt-6">
          <div>
            <span class="contents text-white text-xs">
              {{ getDataObj.mm }} / {{ getDataObj.yy }}
            </span>
          </div>
          <div>
            <span class="text-white text-xs">
              {{ getDataObj.cardName }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end w-full relative">
      <img class="flex item-end mt-12 w-96" :src="backImgCard" />
      <div class="flex justify-center card-content-cvc">
        <span class="contents text-white bold" style="font-size: 18px">
          {{ getDataObj.cvc }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardSection",
  props: {
    getDataObj: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      frontImgCard: "/image/card-front.png",
      backImgCard: "/image/card-back.png",
      cardIcon: "/image/card-icon.png",
    };
  },
};
</script>
<style scoped>
.card-section {
  min-width: 460px;
  max-width: 460px;
  position: absolute;
  top: 20%;
  left: 25%;
}
.card-content-icon {
  position: absolute;
  top: 8%;
  left: 10%;
}
.card-content-number {
  position: absolute;
  top: 25%;
}
.card-content-cvc {
  position: absolute;
  top: 135px;
  right: 50px;
}
</style>
