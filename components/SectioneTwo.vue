<template>
  <div class="h-full">
    <v-tabs v-model="tab" align-tabs="end" color="deep-purple-accent-4">
      <v-container>
        <p class="text-2xl font-bold">My Projects</p>
      </v-container>
      <v-tab value="1">Web App</v-tab>
      <v-tab value="2">Mobile App</v-tab>
      <v-tab value="3">Responsive App</v-tab>
    </v-tabs>

    <v-tabs-window class="pt-10" v-model="tab">
      <v-tabs-window-item v-for="n in 3" :key="n" :value="n">
        <v-container fluid>
          <div class="container">
  <div class="button" @click="shiftLeft()"><img src="https://image.ibb.co/mRsEb7/left_arrow.png" alt=""></div>
  <div class="cards-wrapper">
    <ul class="cards__container">
                <li v-for="project in projects" :key="project.id" class="box move-to-position1-from-right">
                  <v-hover v-slot="{ isHovering, props }">
                    <v-img
                      rounded="xl"
                      v-bind="props"
                      :src="project.image"
                      class="align-end cursor-pointer"
                      cover
                      :href="project.link"
                    >
                      <v-card-title class="text-white">{{ project.name }}</v-card-title>
                      <v-overlay
                        :model-value="isHovering"
                        class="align-center justify-center text-white"
                        contained
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      >
                        <p>{{ project.name }}</p>
                        <p>{{ project.description }}</p>
                        <v-btn target="_blank" :href="project.link">Go to website</v-btn>
                      </v-overlay>
                    </v-img>
                  </v-hover>
                </li>
              </ul>
      
  </div>
  <div class="button" @click="shiftRight()"><img src="https://image.ibb.co/dfPSw7/right_arrow.png" alt=""></div>
</div>
          
        </v-container>
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Project } from "@/src/assets/data/project.ts";

const tab = ref(null);
const projects = Project;

function shiftLeft() {
    const boxes = document.querySelectorAll(".box");
    const tmpNode = boxes[0];

    boxes[0].className = "box move-out-from-left";

    setTimeout(function() {
        if (boxes.length > 3) {
            tmpNode.classList.add("box--hide"); 
            boxes[1].className = "box move-to-position2-from-left";
            boxes[2].className = "box move-to-position3-from-left";
            boxes[3].className = "box move-to-position4-from-left";
            boxes[0].remove(); 

            document.querySelector(".cards__container").appendChild(tmpNode);
        }
    }, 500);
}


function shiftRight() {
    const boxes = document.querySelectorAll(".box");

    boxes[2].className = "box move-out-from-right";

    setTimeout(function() {
        const noOfCards = boxes.length;

        if (noOfCards > 3) {
            boxes[2].className = "box box--hide"; 
        }

        const tmpNode = boxes[noOfCards - 1];
        tmpNode.classList.remove("box--hide");

        boxes[noOfCards - 1].remove();
        let parentObj = document.querySelector(".cards__container");
        parentObj.insertBefore(tmpNode, parentObj.firstChild);
        tmpNode.className = "box move-to-position2-from-right";
        boxes[0].className = "box move-to-position3-from-right";
        boxes[1].className = "box move-to-position4-from-right";
    }, 500);
}


</script>

<style lang="css">
html {
    font-size: 16px;
}

* {
    margin: 0px;
    padding: 0px;
}

body {
    font-family: "Lato", sans-serif;
}

.container {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.button {
    margin-left: 0 3%;
    width: 2rem;
    cursor: pointer;
}

.button--inactive {
    opacity: 0.2;
}

.button img {
    width: 60%;
}

.cards-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    overflow: hidden;
}

.cards__container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35rem;
    
}

.box {
    width: 800px;
    height: 30rem;
    border-radius: 24px;
    box-shadow: 0px 0px 2rem 0px #888888;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: 1s all;
}

.box:nth-child(1){
  right: -15%;
}

.box:nth-child(3){
  right: 15%;
}

.box:nth-child(2n + 1) {
    transform: scale(0.75);
    z-index: -2;
}

.box--hide {
    display: none;
}

.move-out-from-left {
    animation: moveOutLeft 0.5s ease-in-out;
}

.move-out-from-right {
    animation: moveOutRight 0.5s ease-in-out;
}


.move-to-position4-from-left {
    animation: moveToP4Left 0.5s ease-in-out;
}

.move-to-position3-from-left {
    animation: moveToP3Left 0.5s ease-in-out;
}

.move-to-position2-from-left {
    animation: moveToP2Left 0.5s ease-in-out;
}



.move-to-position4-from-right{
    animation: moveToP4Right 0.5s ease-in-out;
}
.move-to-position3-from-right{
    animation: moveToP3Right 0.5s ease-in-out;
}
.move-to-position2-from-right{
    animation: moveToP2Right 0.5s ease-in-out;
}


@keyframes moveOutLeft {
    0% {
        transform: scale(0.75) translateX(0%);
        opacity: 1;
    }
    50% {
        transform: scale(0.5) translateX(-150%);
        opacity: 0.5;
    }
    100% {
        transform: scale(0.25) translateX(0%);
        opacity: 0;
    }
}

@keyframes moveOutRight {
    0% {
        transform: scale(0.75) translateX(0%);
        opacity: 1;
    }
    50% {
        transform: scale(0.5) translateX(150%);
        opacity: 0.5;
    }
    100% {
        transform: scale(0.25) translateX(0%);
        opacity: 0;
    }
}


@keyframes moveToP4Left {
    from {
        transform: scale(1) translateX(100%);
    }
    to {
        transform: scale(0.75) translateX(0);
    }
}

@keyframes moveToP3Left {
    from {
        transform: scale(0.75) translateX(100%);
    }
    to {
        transform: scale(1) translateX(0);
    }
}

@keyframes moveToP2Left {
    from {
        transform: scale(1) translateX(100%);
    }
    to {
        transform: scale(0.75) translateX(0);
    }
}



@keyframes moveToP2Right {
    from {
        transform: scale(1) translateX(-100%);
    }
    to {
        transform: scale(0.75) translateX(0);
    }
}

@keyframes moveToP3Right {
    from {
        transform: scale(0.75) translateX(-100%);
    }
    to {
        transform: scale(1) translateX(0);
    }
}

@keyframes moveToP4Right {
    from {
        transform: scale(1) translateX(-100%);
    }
    to {
        transform: scale(0.75) translateX(0);
    }
}

</style>
