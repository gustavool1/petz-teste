import { headers } from 'next/headers'

export async function POST(req: Request) {
  try {
    const { date } = await req.json()
    const headersList = headers()

    if (
      headersList.get('Content-Type')?.toLowerCase() !== 'application/json' &&
      !date
    ) {
      return new Response('An error Ocurred', { status: 400 })
    }
  } catch (_) {
    return new Response('An error Ocurred', { status: 400 })
  }

  return Response.json([
    '10:00:00',
    '10:30:00',
    '11:00:00',
    '11:30:00',
    '13:00:00',
    '13:30:00',
    '14:00:00',
    '14:30:00',
    '15:00:00',
    '15:30:00',
    '16:00:00',
    '16:30:00',
    '17:00:00',
    '17:30:00',
    '18:00:00',
    '18:30:00',
  ])
}
