<template>
  <div id="center" :class="classBar">
    <span class="content">
      <slot :count="animatedCount" />
    </span>
    <div id="main" :style="{'width':`${animatedCount/maxValue*100}%`}"></div>
    <div class="container-pixel" :class="{'disabled':count/maxValue*100===100}">
      <div class="row" id="r-four">
        <span class="sq" id="sq-10"></span>
        <span class="sq" id="sq-11"></span>
        <span class="sq" id="sq-12"></span>
      </div>
      <div class="row" id="r-three">
        <span class="sq" id="sq-7"></span>
        <span class="sq" id="sq-8"></span>
        <span class="sq" id="sq-9"></span>
      </div>
      <div class="row" id="r-two">
        <span class="sq" id="sq-4"></span>
        <span class="sq" id="sq-5"></span>
        <span class="sq" id="sq-6"></span>
      </div>
      <div class="row" id="r-one">
        <span class="sq" id="sq-1"></span>
        <span class="sq" id="sq-2"></span>
        <span class="sq" id="sq-3"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pixel-bar",
  props: {
    value: {
      type: Number,
      default: 0,
    },
    maxValue: {
      type: Number,
      default: 2000,
    },
    duration: {
      type: Number,
      default: 4,
    },
    play: {
      type: Boolean,
    },
    classBar: {
      type: String,
    },
  },
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    animatedCount: function () {
      return this.count.toFixed(0);
    },
  },
  methods: {
    countTo() {
      const _c = this.value / this.maxValue;

      const interval = setInterval(() => {
        if (this.count > this.value) clearInterval(interval);

        this.count += this.value / (_c * 100);
      }, parseInt((this.duration * 1000) / (_c * 100)));
    },
  },
  watch: {
    play() {
      this.countTo();
    },
  },
};
</script>

<style>
#center {
  height: 2vw;
  width: 100%;
  display: flex;
  position: relative;
  justify-content: flex-start;
  background: rgba(0, 0, 0, 1);
  border: 1px solid rgba(255, 255, 255, 1);
  border-radius: 2px;
  transition: 1s;
}
.content {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  z-index: 10;
  left: 0px;
  right: 0px;
  display: flex;
  justify-content: center;
}
#main {
  width: 200px;
  height: 100%;
  background: #92c81a;
  float: left;
  position: relative;
  box-sizing: border-box;
}

.container-pixel {
  height: 100%;
  display: flex;
  flex-direction: row;
}
.row {
  width: 5px;
  height: 33%;
  background: #92c81a;
  float: right;
}

.sq {
  height: 100%;
  width: 5px;
  float: left;
}

#sq-2 {
  background: #4a672f;
}
#sq-3 {
  background: #1d2019;
}
#sq-6 {
  background: #2c341c;
}
#sq-1,
#sq-5,
#sq-9 {
  background: #74b215;
}
#sq-4,
#sq-8,
#sq-12 {
  background: #7bc415;
}

#sq-7,
#sq-10,
#sq-11 {
  background: #92c81a;
}
.disabled {
  display: none;
}
</style>