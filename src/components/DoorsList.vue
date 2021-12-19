<template>
  <b-container>
    <br>
    <h1>All Doors</h1>
    <br>
    <door-new @door-added="addDoor"></door-new>
    <br>
    <b-row>
      <b-col class="col-md-6" v-for="door in doors" :key="door.id">
        <doors-list-item
            :doorData="door"
            @door-updated="updateDoor"
            @door-deleted="deleteDoor">
        </doors-list-item>
      </b-col>
    </b-row>
  </b-container>

</template>


<script>
import axios from 'axios';
import {API_HOST} from '../config';
import DoorsListItem from './DoorsListItem';
import DoorNew from './DoorNew.vue';

export default {
  components: {
    DoorsListItem,
    DoorNew
  },
  name: 'DoorsList',
  data: function () {
    return {
      /* Initialize doors with an empty array, while waiting for actual data to be retrieved from the API */
      doors: []
    }
  },
  created: async function () {
    let response = await axios.get(`${API_HOST}/door`);
    let doors = response.data;
    this.doors = doors;
  },
  methods: {
    updateDoor(newDoor) {
      /* Find the place of door object ith the same Id in the array, and replace it */
      let index = this.doors.findIndex(door => door.id === newDoor.id);
      this.doors.splice(index, 1, newDoor);
    },
    deleteDoor(doorId) {
      let index = this.doors.findIndex(door => door.id === doorId);
      if (index > -1) {
        this.doors.splice(index, 1);
      }
    },
    addDoor(newDoor) {
      this.doors.push(newDoor);
    }
  }
}
</script>
<style scoped>

h2,
h5,
.h2,
.h5 {
  font-family: inherit;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: .5rem;
  color: #32325d;
}

h2,
.h2 {
  font-size: 1.25rem;
}

h5,
.h5 {
  font-size: .8125rem;
}

.card {
  min-width: fit-content;
}

.bg-info {
  background-color: #11cdef !important;
}

a.bg-info:hover,
a.bg-info:focus,
button.bg-info:hover,
button.bg-info:focus {
  background-color: #0da5c0 !important;
}

.bg-warning {
  background-color: #fb6340 !important;
}

a.bg-warning:hover,
a.bg-warning:focus,
button.bg-warning:hover,
button.bg-warning:focus {
  background-color: #fa3a0e !important;
}

.bg-danger {
  background-color: #f5365c !important;
}

a.bg-danger:hover,
a.bg-danger:focus,
button.bg-danger:hover,
button.bg-danger:focus {
  background-color: #ec0c38 !important;
}

.bg-default {
  background-color: #172b4d !important;
}

a.bg-default:hover,
a.bg-default:focus,
button.bg-default:hover,
button.bg-default:focus {
  background-color: #0b1526 !important;
}

.text-white {
  color: #fff !important;
}

.text-success {
  color: #2dce89 !important;
}

a.text-success:hover,
a.text-success:focus {
  color: #24a46d !important;
}

.text-warning {
  color: #fb6340 !important;
}

a.text-warning:hover,
a.text-warning:focus {
  color: #fa3a0e !important;
}

.text-danger {
  color: #f5365c !important;
}

a.text-danger:hover,
a.text-danger:focus {
  color: #ec0c38 !important;
}

.text-white {
  color: #fff !important;
}

a.text-white:hover,
a.text-white:focus {
  color: #e6e6e6 !important;
}

.text-muted {
  color: #8898aa !important;
}

.bg-yellow {
  background-color: #ffd600 !important;
}

a.bg-yellow:hover,
a.bg-yellow:focus,
button.bg-yellow:hover,
button.bg-yellow:focus {
  background-color: #ccab00 !important;
}

.bg-gradient-primary {
  background: linear-gradient(87deg, #5e72e4 0, #825ee4 100%) !important;
}

.bg-gradient-primary {
  background: linear-gradient(87deg, #5e72e4 0, #825ee4 100%) !important;
}

.text-sm {
  font-size: .875rem !important;
}

.text-white {
  color: #fff !important;
}

a.text-white:hover,
a.text-white:focus {
  color: #e6e6e6 !important;
}

.card-stats .card-body {
  padding: 1rem 1.5rem;
}

.icon {
  width: 3rem;
  height: 3rem;
}

.icon i {
  font-size: 2.25rem;
}

.icon-shape {
  display: inline-flex;
  padding: 12px;
  text-align: center;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
}


</style>