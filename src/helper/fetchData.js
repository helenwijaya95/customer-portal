import { faker } from '@faker-js/faker'

const range = (len) => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newData = () => {
  return {
    id: faker.finance.accountNumber(3),
    type: faker.helpers.shuffle(['Medical', 'Accident', 'Dental', 'Wellness', 'Critical Illness', 'Property', 'Others'])[0],
    'submission_date': new Date(faker.date.recent()).toLocaleDateString('en-GB'),
    amount: faker.number.int(1000),
    status: faker.helpers.shuffle(['Accepted', 'In Progress', 'Rejected'])[0]
  }
}
const newTransData = () => {
  return {
    id: faker.finance.accountNumber(3),
    type: faker.helpers.shuffle(['Medical', 'Accident', 'Dental', 'Wellness', 'Critical Illness', 'Property', 'Others'])[0],
    date: new Date(faker.date.recent()).toLocaleDateString('en-GB'),
    category: faker.helpers.shuffle(['Accepted', 'In Progress', 'Rejected'])[0]
  }
}

export function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens
    return range(len).map((d) => {
      return {
        ...newData(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel()
}

export function makeTransData(len) {
  return range(len).map((d) => {
    return {
      ...newTransData(),
    }
  })
}

const data = makeData(20)

const transactionData = makeTransData(20)

export async function fetchData(options) {
  const modifiedData = (d) => {
    return {
      rows: d.slice(
        options.pageIndex * options.pageSize,
        (options.pageIndex + 1) * options.pageSize
      ),
      pageCount: Math.ceil(data.length / options.pageSize),
    }
  }
  let generatedData;
  // Simulate some network latency
  await new Promise(r => setTimeout(r, 500))
  if (options.type === 'trans') {
    generatedData = modifiedData(transactionData)
  } else {
    generatedData = modifiedData(data)
  }
  return generatedData
}
