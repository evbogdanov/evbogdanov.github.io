/*******************************************************************************
 *** Calculator
 ******************************************************************************/

class Calculator {
  constructor(el) {
    this.el = el
    this.records = [
      {dateStr: '', quantity: '', price: ''}
    ]
  }

  recordChanged(index, key, val) {
    const oldDateStr = this.records[index].dateStr,
          oldQuantity = this.records[index].quantity,
          oldPrice = this.records[index].price

    this.records[index][key] = val

    const newDateStr = this.records[index].dateStr,
          newQuantity = this.records[index].quantity,
          newPrice = this.records[index].price

    if (!newDateStr && !newQuantity && !newPrice) {
      this.maybeDeleteRecord(index)
    }
    else if ((!oldDateStr && newDateStr && !newQuantity && !newPrice) ||
             ((!oldQuantity || !oldPrice) && newQuantity && newPrice)) {
      this.addRecordAfter(index)
    }

    this.render()
  }
  
  addRecordAfter(index, dateStr='', quantity='', price='') {
    this.records.splice(index+1, 0, {dateStr, quantity, price})
  }

  maybeDeleteRecord(index) {
    // Don't delete the only one
    if (index !== this.records.length-1) {
      this.records.splice(index, 1)
    }
  }

  render() {
    const dailyRowspans = {0: 0}, // How many records with the same date starts at index
          dailyRevenues = {0: 0}

    let ind = 0,
        currDateStr = this.records[ind]

    // Is there a better place to calculate total revenue?
    let totalRevenue = 0

    this.records.forEach((rec, i) => {
      const p = parseFloat(rec.price) || 0,
            q = parseFloat(rec.quantity) || 0,
            r = p * q
      if (rec.dateStr && rec.dateStr !== currDateStr) {
        ind = i
        currDateStr = rec.dateStr
        dailyRowspans[ind] = 1
        dailyRevenues[ind] = r
      }
      else {
        dailyRowspans[ind] += 1
        dailyRevenues[ind] += r
      }
      totalRevenue += r
    })

    this.el.innerHTML = ''
    const frag = document.createDocumentFragment()
    this.records.forEach((rec, i) => {
      const elRec = this.renderRecord(i, rec.dateStr, rec.quantity, rec.price,
                                      dailyRowspans, dailyRevenues, totalRevenue)
      frag.appendChild(elRec)
    })
    this.el.appendChild(frag)
  }
  
  renderRecord(index, dateStr, quantity, price, dailyRowspans, dailyRevenues, totalRevenue) {
    const el = document.createElement('tr'),
          elDateCell = document.createElement('td'),
          elDateInput = document.createElement('input'),
          elQuantityCell = document.createElement('td'),
          elQuantityInput = document.createElement('input'),
          elPriceCell = document.createElement('td'),
          elPriceInput = document.createElement('input')

    elDateCell.setAttribute('class', 'table__cell')
    elQuantityCell.setAttribute('class', 'table__cell')
    elPriceCell.setAttribute('class', 'table__cell')

    elDateInput.setAttribute('class', 'table__input')
    elQuantityInput.setAttribute('class', 'table__input')
    elPriceInput.setAttribute('class', 'table__input')
    
    elDateInput.value = dateStr
    elQuantityInput.value = quantity
    elPriceInput.value = price

    elDateInput.onblur = () => this.recordChanged(index, 'dateStr', elDateInput.value)
    elQuantityInput.onblur = () => this.recordChanged(index, 'quantity', elQuantityInput.value)
    elPriceInput.onblur = () => this.recordChanged(index, 'price', elPriceInput.value)
    
    elDateCell.appendChild(elDateInput)
    elQuantityCell.appendChild(elQuantityInput)
    elPriceCell.appendChild(elPriceInput)

    el.appendChild(elDateCell)
    el.appendChild(elQuantityCell)
    el.appendChild(elPriceCell)

    // Daily revenue
    if (dailyRowspans[index]) {
      const elDailyRevenueCell = document.createElement('td')
      elDailyRevenueCell.setAttribute('class', 'table__cell')
      elDailyRevenueCell.setAttribute('rowspan', dailyRowspans[index])
      elDailyRevenueCell.textContent = dailyRevenues[index].toFixed(2)
      el.appendChild(elDailyRevenueCell)
    }

    // Total revenue
    if (index === 0) {
      const elTotalRevenueCell = document.createElement('td')
      elTotalRevenueCell.setAttribute('class', 'table__cell')
      elTotalRevenueCell.setAttribute('rowspan', this.records.length)
      elTotalRevenueCell.textContent = totalRevenue.toFixed(2)
      el.appendChild(elTotalRevenueCell)
    }
    
    return el
  }
}


/*******************************************************************************
 *** Main
 ******************************************************************************/

function main() {
  const el = document.querySelector('.table__body'),
        calc = new Calculator(el)
  calc.render()
}

document.addEventListener('DOMContentLoaded', main)
