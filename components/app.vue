<template>
  <div class="introduction">
    <div class="texts">
      <type-it :speed="120" :loop="false" :break-lines="true">
        <div>
          <span>Hi,</span>
          <br />
          <span class="bold">I'm Elias Rhouzlane,</span>
          <span>a french guy born in Bordeaux who lived in Paris for 4 years before DAE.</span>
          <br />
          <br />
          <span class="bold">01. What is my background ?</span>
          <span class="bold">02. What are my interests ?</span>
          <span class="bold">03. What do I expect from the coming years ?</span>
        </div>
      </type-it>
      <div>
        <li @click="focus = 'cognitive'">Cognitive Science</li>
        <li @click="focus = 'ml'">Machine Learning</li>
        <li @click="focus = 'web'">Modern Web</li>
        <li @click="focus = 'ceramics'">Ceramics</li>
        <!-- <li>Emotions, consciousness, sleep, digital connextions with materiality   ...</li> -->
        <li @click="focus = 'vjing'">VJing (live-visuals)</li>
        <li @click="focus = 'nocomputer'">Without computer...</li>
        <li @click="focus = 'foods'">Food, outfits, emotions, self, tools, digital/material, ...</li>
      </div>
      <!-- <span>and now I'm willing to put some</span>
      <span class="bold">volume, sounds, stories and life</span>
      <span>on my doing.</span>-->
    </div>
    <div class="images">
      <img v-bind="image" v-for="image in images[focus || 'me']" :key="image.src" />
      <div class="camera" v-if="!focus">
        <webcam @cameras="setCameras" :device-id="camera" class="video" />
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  components: {
    webcam: "url:./webcam.vue"
  },
  data() {
    return {
      cameras: null,
      focus: null,
      images: {
        me: [
          {
            src: "/assets/images/me.gif",
            class: "bw scale"
          },
          {
            src: "/assets/images/bordeaux.png",
            class: "bw w10",
            style: "position: absolute; bottom: 0;"
          }
        ],
        nocomputer: [
          {
            src: "/assets/images/fruits.jpg",
            class: "bw w10"
          },
          {
            src: "/assets/images/tickets.jpeg",
            class: "bw w10"
          }
        ],
        foods: [
          {
            src: "/assets/images/bourdieu.jpg",
            class: "bw w10"
          }
        ],
        cognitive: [
          {
            src: "/assets/images/dennett.png",
            class: "w10 bw"
          },
          {
            src: "/assets/images/eeg.jpg",
            class: "w10 bw"
          },
          {
            src: "/assets/images/opto.jpg",
            class: "w10 bw"
          }
        ],
        ml: [
          {
            src: "/assets/images/pix.jpg",
            class: "w10 bw"
          },
          {
            src: "/assets/images/edmond.jpg",
            class: "w10 bw",
            style: "max-width: 15rem"
          },
          {
            src: "/assets/images/fool.png",
            class: "w10 bw",
            style: "max-width: 20rem"
          },
          {
            src: "/assets/images/ganpaper.png",
            class: "w10 bw",
            style: "max-width: 10rem"
          },
          {
            src: "/assets/images/dialogue.png",
            class: "w10 bw",
            style: "max-width: 10rem"
          }
        ],
        ceramics: [
          {
            src: "/assets/images/olivier.jpg",
            class: "bw"
          }
        ],
        vjing: [
          {
            src: "/assets/images/kraft.jpg",
            class: "bw"
          }
        ]
      }
    };
  },
  methods: {
    setCameras(cameras) {
      this.cameras = cameras;
    }
  },
  computed: {
    camera() {
      console.log(this.cameras && this.cameras[0].deviceId);
      return this.cameras && this.cameras[0].deviceId;
    }
  }
};
</script> 

<style>
.introduction {
  font-size: 2rem;
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
}

.texts {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.w10 {
  max-width: 20rem;
  margin: 1rem;
}

.images {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: gainsboro;
  animation: fadein 10s;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

img {
  max-width: 100%;
  background: white;
}

.bw {
  filter: grayscale(1);
  transform: scale(1.5);
}

.scale {
  filter: grayscale(1);
}

.bold {
  font-weight: bold;
}

.margin-left {
  margin-left: 2rem;
}

.margin-bottom {
  margin-bottom: 2rem;
}

li {
  margin: 0;
  padding: 0;
  list-style-type: arabic-indic;
  cursor: pointer;
}

.camera {
  width: 325px;
  height: 610px;
  overflow: hidden;
  position: relative;
  /* border-radius: 39px; */
  border-radius: 3px;
  filter: grayscale(1);
}

.video {
  min-width: 100%;
  min-height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%) scale(-2.5, 2.5);
}
</style>