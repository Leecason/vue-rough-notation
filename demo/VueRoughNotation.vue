<template>
  <div id="app">
    <div class="content">
      <h1>
        <RoughNotation
          :is-show="true"
          type="highlight"
          color="#fff176"
        >
          Vue Rough Notation
        </RoughNotation>
      </h1>

      <p>
        <a target="_blank" href="https://github.com/Leecason/vue-rough-notation">
          <button>View on Github + docs</button>
        </a>
      </p>

      <p>Following are the different styles of annotations. Hit the <b>annotate</b> button in each section to see the animated annotation</p>
    </div>

    <div
      v-for="item in annotations"
      :key="item.type"
      :style="{ 'background-color': item.bg }"
      class="section"
    >
      <div class="content">
        <h3>
          <RoughNotation
            :type="item.type"
            :color="item.color"
            :is-show="item.show"
          >{{ item.content.title }}</RoughNotation>
        </h3>
        <p>
          {{ item.content.p1 }} {{ ' ' }}
          <RoughNotation
            :type="item.type"
            :color="item.color"
            :is-show="item.show"
          >{{ item.content.draw }}</RoughNotation>
          {{ '' }} {{ item.content.p2 }}
        </p>
        <button @click="item.show = !item.show">annotate</button>
      </div>
    </div>

    <div class="section" style="background-color: #fbe9e7;">
      <RoughNotationGroup :is-show="showGroup">
        <div class="content">
          <h3>
            <RoughNotation type="box" color="#bf360c" :strokeWidth="5" order="2">
              Annotation Group
            </RoughNotation>
          </h3>
          <p>
            Rough Notation provides a way to order the animation of annotations
            by creating an{{ '' }}
            <RoughNotation type="highlight" color="yellow" order="1">annotation-group</RoughNotation>
            . Pass the list of annotations to create a group. When{{ '' }}
            <i>
              <RoughNotation type="underline" color="#bf360c" order="3">show</RoughNotation>
            </i>
            {{ '' }}
            is called on the group, the annotations are animated in order.
          </p>
          <button @click="showGroup = !showGroup">annotate</button>
        </div>
      </RoughNotationGroup>
    </div>

    <div class="section" style="background-color: #eceff1;">
      <div class="content">
        <h3>
          <RoughNotation
            :is-show="showNoAnim"
            :animate="false"
            type="box"
            color="#263238"
          >No Animation</RoughNotation>
        </h3>
        <p>
          Of course you don't have to animate the annotation, it just shows up when {{ ' ' }}
          <i>
            <RoughNotation
              :is-show="showNoAnim"
              :stroke-width="4"
              :animate="false"
              type="underline"
              color="#263238"
            >show</RoughNotation>
          </i>
          {{ '' }} is called
        </p>
        <button @click="showNoAnim = !showNoAnim">annotate</button>
      </div>
    </div>

    <div class="content">
      <p>
        <a target="_blank" href="https://github.com/Leecason/vue-rough-notation/tree/master/demo">
          <button>View demo code on Github</button>
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueRoughNotation',

  data: () => ({
    annotations: [
      {
        show: false,
        type: "underline",
        bg: "#ffebee",
        color: "#b71c1c",
        content: {
          title: "underline",
          p1: "Create a sketchy",
          draw: "underline",
          p2: "below an element."
        }
      },
      {
        show: false,
        type: "box",
        bg: "#f3e5f5",
        color: "#4a148c",
        content: {
          title: "box",
          p1: "This style draws a",
          draw: "box",
          p2: "around the element."
        }
      },
      {
        show: false,
        type: "circle",
        bg: "#e3f2fd",
        color: "#0d47a1",
        content: {
          title: "circle",
          p1: "Draw a",
          draw: "circle",
          p2: "around the element."
        }
      },
      {
        show: false,
        type: "highlight",
        bg: "#f5f5f5",
        color: "#ffd54f",
        content: {
          title: "highlight",
          p1: "Creates a",
          draw: "highlight",
          p2: "effect as if marked by a highlighter."
        }
      },
      {
        show: false,
        type: "strike-through",
        bg: "#e8f5e9",
        color: "#1b5e20",
        content: {
          title: "strike-through",
          p1: "Draw a hand-drawn line through an element creating a",
          draw: "strike-through",
          p2: "effect."
        }
      },
      {
        show: false,
        type: "crossed-off",
        bg: "#fffde7",
        color: "#f57f17",
        content: {
          title: "crossed-off",
          p1: "To symbolize rejection, use a",
          draw: "crossed-off",
          p2: "effect on an element."
        }
      }
    ],
    showGroup: false,
    showNoAnim: false,
  }),
};
</script>
