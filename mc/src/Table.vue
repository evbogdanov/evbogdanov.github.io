<template>
  <div class="table">
    <div class="table__head">
      <div class="table__column-name">Day</div>
      <div class="table__column-name">Quantity</div>
      <div class="table__column-name">Price</div>
      <div class="table__column-name">Daily revenue</div>
      <div class="table__column-name">Total revenue</div>
    </div>
    <div class="table__body">
      <div class="table__days">
        <app-day
          v-for="(day, i) in days"
          v-on:recordAdded="addNewRecordForDay"
          v-on:recordChanged="updateRecord"
          v-on:dayNameChanged="updateDayName"
          :key="i"
          :index="i"
          :name="day.name"
          :records="day.records"
          :daily-revenue="dailyRevenues[i]"
        ></app-day>
        <div class="table__day">
          <a class="table__new-day" href="#" @click="addNewDay">New day</a>
        </div>
      </div>
      <div class="table__total-revenue">{{ totalRevenue }}</div>
    </div>
  </div>
</template>

<script>
  import Day from './Day.vue'

  export default {
    components: {
      'app-day': Day
    },

    data() {
      return {
        days: []
      }
    },

    computed: {
      dailyRevenues() {
        return this.days.map(day => {
          return day.records.reduce((revenue, record) => {
            const price = parseFloat(record.price) || 0,
                  quantity = parseInt(record.quantity, 10) || 0
            return revenue + price * quantity
          }, 0)
        })
      },
      totalRevenue() {
        return this.dailyRevenues.reduce((total, daily) => total + daily, 0)
      }
    },

    methods: {
      addNewDay(ev) {
        ev.preventDefault()
        this.days.push({name: '', records: []})
      },
      addNewRecordForDay(dayIndex) {
        this.days[dayIndex].records.push({price: '', quantity: ''})
      },
      updateRecord(dayIndex, recordIndex, price, quantity) {
        this.days[dayIndex].records[recordIndex].price = price
        this.days[dayIndex].records[recordIndex].quantity = quantity
      },
      updateDayName(dayIndex, dayName) {
        this.days[dayIndex].name = dayName
      }
    }
  }
</script>

<style>
.table {
  width: 100%;
}
.table__head {
  display: flex;
}
.table__column-name {
  text-align: center;
  padding: 15px 0;
  flex: 0 0 20%;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: bold;
  background: #f4f4f4;
}
.table__body {
  display: flex;
}
.table__days {
  flex: 0 0 80%;
  border-right: 1px solid black;
}
.table__day {
  display: flex;
  border-bottom: 1px solid black;
}
.table__day-name {
  flex: 0 0 25%;
  border-right: 1px solid black;
}
.table__records {
  flex: 0 0 50%;
  border-right: 1px solid black;
}
.table__record {
  display: flex;
}
.table__record:not(:last-child) {
  border-bottom: 1px solid black;
}
.table__quantity, .table__price {
  flex: 0 0 50%;
}
.table__quantity {
  border-right: 1px solid black;
}
.table__daily-revenue {
  flex: 0 0 25%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.table__total-revenue {
  flex: 0 0 20%;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.table__new-day, .table__new-record {
  margin: auto;
  padding: 10px 0;
}
.table__new-day {
  padding: 20px 0;
}
.table__input {
  text-align: center;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border: none;
  font-size: inherit;
  font-family: inherit;
}
.table__input:focus {
  outline: none;
}
.table__input_big {
  height: 100%;
  line-height: 100%;
}
</style>
