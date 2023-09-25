import { faker } from '@faker-js/faker'

const range = (len) => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = () => {
  return {
    id: faker.finance.accountNumber(3),
    type: faker.helpers.shuffle(['Medical', 'Accident', 'Dental', 'Wellness', 'Critical Illness', 'Property', 'Others'])[0],
    'submission_date': faker.date.recent(),
    amount: faker.number.int(1000),
    status: faker.helpers.shuffle(['Accepted', 'In Progress', 'Rejected'])[0]
  }
}

export function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens
    return range(len).map((d) => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel()
}

const data = makeData(20)

export async function fetchData(options) {
  // Simulate some network latency
  await new Promise(r => setTimeout(r, 500))

  return {
    rows: data.slice(
      options.pageIndex * options.pageSize,
      (options.pageIndex + 1) * options.pageSize
    ),
    pageCount: Math.ceil(data.length / options.pageSize),
  }
}
