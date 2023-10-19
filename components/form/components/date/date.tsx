import React, { useCallback, useEffect, useState } from 'react'
import { TimeContainer, Container, DayContainer, Dates } from './style'
import { SelectInput } from '../../../components'
import { UseFormRegister } from 'react-hook-form'
import { getDates, sendTimes } from '../../../../helpers/scheduling'

interface DateProps {
  register: UseFormRegister<any>
  errors: FieldErrors
}

const Date = ({ register, errors }: DateProps) => {
  const [dates, setDates] = useState<string[]>([])
  const [times, setTimes] = useState<string[]>([])

  useEffect(() => {
    getDates().then((response) => setDates(response))
    sendTimes('').then((response) => setTimes(response))
  }, [])

  return (
    <Container>
      <Dates>
        <DayContainer>
          <SelectInput
            label="Data para Atendimento"
            placeholder="Selecione uma data"
            options={dates}
            {...register('date')}
            error={errors.date?.message as string}
          />
        </DayContainer>
        <TimeContainer>
          <SelectInput
            options={times}
            label="Selecione um horário"
            placeholder="Selecione um horário"
            {...register('time')}
            error={errors.time?.message as string}
          />
        </TimeContainer>
      </Dates>
    </Container>
  )
}

export default Date
