<template>
  <div>
    <div>

      <div class="card card-stats mb-3" align="left">
        <div class="row card-header ">
          <div class="col">
            <h5 class="card-title text-uppercase text-muted mb-0">{{ buildingName }}</h5>
            <span class="h2 font-weight-bold mb-0">{{ name }}</span>
          </div>
          <div class="col-auto">
            {{ roomData.currentTemperature }}
            <a class="icon icon-shape text-white rounded-circle shadow" :class="roomStatusData.bgClass">
              <icon :icon="roomStatusData.icon" />
            </a>
          </div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-4">
              id :
            </div>
            <div class="col-auto">
             {{ roomData.id }}
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              floor :
            </div>
            <div class="col-auto">
              {{ roomData.floor }}
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              Target Temp. :
            </div>
            <div class="col-auto">
              {{ roomData.targetTemperature }}
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              Current Temp. :
            </div>
            <div class="col-auto">
              {{ roomData.currentTemperature }}
            </div>
          </div>

          <p class="mt-3 mb-0 text-muted text-sm">
            <a @click="deleteRoom" class="text-danger mr-2"><icon icon="trash" />Delete this room</a>
          </p>
        </div>
      </div>
    </div>
      </div>

    </template>

    <script>
    import axios from "axios";
    import { API_HOST } from "../config";

    export default {
      name: "RoomItem",
      props: {
        roomData: {
          type: Object,
          default: () => ({
            "id": 0,
            "name": "string_0_0_1",
            "buildingId": 0,
            "floor": 0,
            "currentTemperature": 0,
            "targetTemperature": 0
          }),
        },
      },
      methods: {
        async deleteRoom()
        {
          await axios.delete(
              `${API_HOST}/room/${this.roomData.id}`
          );
          this.$emit("room-deleted", this.roomData.id);
        }

      },
      computed: {
        id() {
          return this.roomData.id;
        },
        name() {
          return this.roomData.name.replaceAll("_"," ");
        },
        buildingName() {
          let buildingName = "building " + this.roomData.buildingId;
          return buildingName
        },
        roomStatusData() {
          let diff = Math.abs(this.roomData.currentTemperature-this.roomData.targetTemperature);
          let icon = diff>5 ? "temperature-low" : "temperature-high";
          let bgClass = diff>5 ? "bg-primary" : "bg-warning";
          let color = diff>5 ? "primary" : "warning";
          return {"status":status,"bgClass":bgClass,"color":color,"icon":icon};
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

    .card-header {
      padding: 1rem 1.5rem;
      margin-bottom: 0;
      background-color: rgba(0, 0, 0, 0.03);
      border-bottom: 1px solid rgba(0, 0, 0, 0.125);
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