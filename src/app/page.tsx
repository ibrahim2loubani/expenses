import { Payment } from '@components/ui/Columns'
import App from '@components/App'

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  // return new Array(50).fill(null).map(() => ({
  //   id: JSON.stringify(Math.random() * 1000),
  //   amount: Math.random() * 1000,
  //   status: 'pending',
  //   email: `idk${Math.random() * 1000}@gmail.com`,
  // }))
  return new Array(50).fill(null).map(() => ({
    id: JSON.stringify(Math.random() * 1000),
    amount: Math.random() * 1000,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, ut! Incidunt quam doloremque magni quidem excepturi nisi voluptas molestiae? Ducimus optio consequatur tempore cupiditate amet voluptas, ullam alias cum eligendi.',
    name: `idk${Math.random() * 1000}`,
  }))
}

const Page = async () => {
  const data = await getData()

  return <App data={data} />
}

export default Page
