import { Payment } from '@components/ui/Columns'
import App from '@components/App'

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return new Array(50).fill(null).map(() => ({
    id: JSON.stringify(Math.random() * 1000),
    amount: Math.random() * 1000,
    status: 'pending',
    email: `idk${Math.random() * 1000}@gmail.com`,
  }))
}

const Page = async () => {
  const data = await getData()

  return <App data={data} />
}

export default Page
