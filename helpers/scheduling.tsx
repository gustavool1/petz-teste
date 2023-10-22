import { api } from './apis'

export interface Schedule {
  pokemonsNames: string[]
  userFullName: string
  city: string
  region: string
  time: string
  date: string
  value: string
}
export const sendTimes = async (date: string): Promise<string[]> => {
  const response = await api.post('/scheduling/time', { date })
  return response.data.map((time: string) => {
    const timeArray = time.split(':')
    return `${timeArray[0]}h${timeArray[1]}m`
  })
}

export const getDates = async (): Promise<string[]> => {
  const response = await api.get('/scheduling/date')
  return response.data
}

export const setSchedule = (schedule: Schedule): void => {
  const localStorageSchedules = getSchedules()
  localStorage.setItem(
    'schedules',
    JSON.stringify([schedule, ...localStorageSchedules])
  )
}
export const getSchedules = (): Schedule[] => {
  const data = localStorage.getItem('schedules')

  if (data) {
    return JSON.parse(data)
  }

  return []
}
