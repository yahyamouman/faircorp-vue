<template>
  <div class="card">
    <div class="card-header">
      <h2 class="mb-0">
        <button
          class="btn btn-link btn-block text-left d-flex"
          type="button"
          @click="toggleExpand"
        >
          <div class="mr-2">Create New Door</div>
          <div class="expand-button ml-auto ">
            {{ isExpanded ? "&#9660;" : "&#9658;" }}
          </div>
        </button>
      </h2>
    </div>

    <template class="collapse show" v-if="isExpanded">
      <form class="p-4">
        <div class="form-group">
          <label for="door_name">Door Name: </label>
          <input
            v-model="door_name"
            type="text"
            class="form-control"
            name="door_name"
            id="door_name"
            placeholder="door"
          />
        </div>
        <div class="form-group">
          <label for="door_status">Door Status: </label>
          <select
            v-model="door_status"
            class="form-control"
            id="door_status"
            name="door_status"
          >
            <option value="CLOSED">Closed</option>
            <option value="OPEN">Open</option>
          </select>
        </div>
        <div class="form-group">
          <label for="door_room">Door Room: </label>
          <select
            class="form-control"
            v-model="door_room"
            id="door_room"
            name="door_room"
          >
            <option v-for="room in rooms" v-bind:value="room">
              {{ room.name }}
            </option>
          </select>
        </div>
        <button type="button" class="btn btn-primary" @click="addDoor">
          Create Door
        </button>
      </form>
    </template>
  </div>
</template>


<script>
import axios from "axios";
import { API_HOST } from "../config";

export default {
  name: "DoorNew",
  data: function () {
    return {
      isExpanded: false,
      door_name: "",
      door_status: "CLOSED",
      door_room: "",
      rooms: [],
    };
  },
  created: async function () {
    let response = await axios.get(`${API_HOST}/room`);
    let rooms = response.data;
    this.rooms = rooms;
    this.door_room = rooms[0];
  },
  methods: {
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
    },
    async addDoor() {
      let newDoor = {
        name: this.door_name,
        room: this.door_room,
        doorStatus: this.door_status,
      };
      let headers = {
        "Content-Type": "application/json",
      };
      let response = await axios.post(`${API_HOST}/door`, newDoor, {
        headers,
      });
      this.$emit("door-added", response.data);
    },
  },
};
</script>