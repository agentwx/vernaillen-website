<template>
  <q-page padding class="flex flex-center" >
    <q-timeline layout="loose" color="primary">
      <q-timeline-entry
        title="Kind en Gezin"
        subtitle="April 2019 - present"
        side="right"
        color="kindengezin"
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy2dgl6zPZfpCL5fBoVlPgFvLRMY6p44-HSKEgxk4a7ufVIghy"
        class="always-show"
      >
        <div>
          <label class="text-grey-6">project</label>Governmental portal<br/>
          <label class="text-grey-6">role</label>Senior Full Stack Java Developer<br/>
          <label class="text-grey-6">stack</label>Java, Spring, Angular, Liferay, Docker, Kubernetes<br/>
          <br/>
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Aristo"
        subtitle="2019"
        side="left"
        color="aristo"
        avatar="https://test.aristolivingoutdoors.com/documents/89923/90356/aristo_icon_pale.svg"
        class="always-show"
      >
        <div>
          <label class="text-grey-6">project</label>E-commerce website<br/>
          <label class="text-grey-6">role</label>Senior Full Stack Java Developer<br/>
          <label class="text-grey-6">stack</label>Liferay Commerce<br/>
          <br/>
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="IDEWE"
        subtitle="2018 - 2019"
        side="right"
        color="idewe"
        avatar="https://www.tarieven-externe-diensten.be/documents/448485/448840/over_Idewe.png"
        v-waypoint="{ active: true, callback: onWaypoint }"
      >
        <div>
          <label class="text-grey-6">project</label>bla bla bla<br/>
          <label class="text-grey-6">role</label>Senior Full Stack Java Developer<br/>
          <label class="text-grey-6">stack</label>Java, Spring, Angular, Liferay, Docker, Kubernetes<br/>
          <br/>
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Kind en Gezin"
        subtitle="2014 - 2017"
        side="left"
        color="kindengezin"
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy2dgl6zPZfpCL5fBoVlPgFvLRMY6p44-HSKEgxk4a7ufVIghy"
        v-waypoint="{ active: true, callback: onWaypoint }"
      >
        <div>
          <label class="text-grey-6">project</label>bla bla bla<br/>
          <label class="text-grey-6">role</label>Senior Full Stack Java Developer<br/>
          <label class="text-grey-6">stack</label>Java, Spring, Angular, Liferay, Docker, Kubernetes<br/>
          <br/>
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Colruyt"
        subtitle="2013"
        side="right"
        color="orange"
        avatar="http://www.logotypes101.com/logos/535/9C96544F5B74F971610B02BE4F727A29/Colruyt.png"
        v-waypoint="{ active: true, callback: onWaypoint }"
      >
        <div>
          <label class="text-grey-6">project</label>bla bla bla<br/>
          <label class="text-grey-6">role</label>Senior Full Stack Java Developer<br/>
          <label class="text-grey-6">stack</label>Java, Spring, Angular, Liferay, Docker, Kubernetes<br/>
          <br/>
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        side="left"
        v-waypoint="{ active: true, callback: onWaypoint }"
      >
        <div>
          <label class="text-grey-6">project</label>bla bla bla<br/>
          <label class="text-grey-6">role</label>Senior Full Stack Java Developer<br/>
          <label class="text-grey-6">stack</label>Java, Spring, Angular, Liferay, Docker, Kubernetes<br/>
          <br/>
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        side="right"
        v-waypoint="{ active: true, callback: onWaypoint }"
      >
        <div>
          <label class="text-grey-6">project</label>bla bla bla<br/>
          <label class="text-grey-6">role</label>Senior Full Stack Java Developer<br/>
          <label class="text-grey-6">stack</label>Java, Spring, Angular, Liferay, Docker, Kubernetes<br/>
          <br/>
        </div>
      </q-timeline-entry>
    </q-timeline>
  </q-page>
</template>

<script>
export default {
  name: 'Career',

  methods: {
    onWaypoint ({ el, going }) {
      // going: in, out
      // direction: top, right, bottom, left
      if (going === this.$waypointMap.GOING_IN) {
        el.classList.add('show-element')
      }
    }
  }
}
</script>

<style type="scss" scoped>
  .q-timeline__entry {
    opacity: 0;
  }
  .q-timeline__entry.always-show {
    opacity: 1 !important;
  }
  .q-timeline__entry.show-element {
    opacity: 1;
    transition: opacity 1s;
    transition-delay: .5s;
  }
  .q-timeline__content label {
    width: 60px;
    display: inline-block;
  }
  .q-timeline__entry--left .q-timeline__content label {
    text-align: left;
    padding-left: 10px;
    float: right;
  }
  .q-timeline__entry--right .q-timeline__content label {
    text-align: right;
    padding-right: 10px;
  }
</style>
