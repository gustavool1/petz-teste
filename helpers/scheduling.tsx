import { api } from './apis'

export const sendTimes = (date: string): Promise<string[]> => {
  return api
    .post('/scheduling/time', { date })
    .then((response) => response.data)
}

export const getDates = (): Promise<string[]> => {
  return api.get('/scheduling/date').then((response) => response.data)
}
