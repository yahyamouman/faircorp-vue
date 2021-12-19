<template>
  <div>
    <div>

      <div class="card card-stats mb-3" align="left">
        <div class="row card-header ">
          <div class="col">
            <h5 class="card-title text-uppercase text-muted mb-0">{{ roomName }}</h5>
            <span class="h2 font-weight-bold mb-0">{{ name }}</span>
          </div>
          <div class="col-auto">
            switch
            <a @click="switchWindow" class="icon icon-shape text-white rounded-circle shadow" :class="windowStatusData.bgClass">
              <icon :icon="windowStatusData.icon" />
            </a>
          </div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-3">
              id :
            </div>
            <div class="col-auto">
             {{ windowData.id }}
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              status :
            </div>
            <div class="col-auto">
              <icon :icon="windowStatusData.icon" />
              {{ windowData.windowStatus }}
            </div>
          </div>

          <p class="mt-3 mb-0 text-muted text-sm">
            <a @click="deleteWindow" class="text-danger mr-2"><icon icon="trash" />Delete this window</a>
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
      name: "WindowItem",
      props: {
        windowData: {
          type: Object,
          default: () => ({
            "id": 0,
            "name": "string_0_0_1",
            "roomId": 0,
            "roomName": "string_0_1",
            "windowStatus": "OPEN"
          }),
        },
      },
      methods: {
        async switchWindow() {
          let response = await axios.put(
              `${API_HOST}/window/${this.windowData.id}/switch`
          );
          let updatedWindow = response.data;
          this.$emit("window-updated", updatedWindow);
        },
        async deleteWindow()
        {
          await axios.delete(
              `${API_HOST}/window/${this.windowData.id}`
          );
          this.$emit("window-deleted", this.windowData.id);
        }

      },
      computed: {
        id() {
          return this.windowData.id;
        },
        name() {
          return this.windowData.name.replaceAll("_"," ");
        },
        roomName() {
          return this.windowData.roomName.replaceAll("_"," ");
        },
        windowStatusData() {
          let status = this.windowData.windowStatus;
          let bgClass = status=="OPEN" ? "bg-primary" : "bg-warning";
          let color = status=="OPEN" ? "primary" : "warning";
          let icon = status=="OPEN" ? "lock-open" : "lock";
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