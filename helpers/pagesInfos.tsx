interface AboutPage {
  path: string
  title: string
  description: string
}

export const pagesInfos: AboutPage[] = [
  {
    path: 'about',
    description: 'A maior rede de tratamento pokémon.',
    title: 'Quem Somos',
  },
  {
    path: 'schedule',
    description: 'Recupere seus pokémons em 5 segundos',
    title: 'Agendar Consulta',
  },
  {
    path: 'getSchedules',
    description: 'Confira seus agendamentos em um rapidamente',
    title: 'Seus Agendamentos',
  },
]
