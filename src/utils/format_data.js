import dayjs from 'dayjs'

export function formatMonthDay(data,formatStr = "MM月DD日") {
  return dayjs(data).format(formatStr)
}

export function dateDiff(start, end) {
  return dayjs(end).diff(start,"day")
}