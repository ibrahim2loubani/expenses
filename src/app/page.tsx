import { DataTable } from '@components/ui/DataTable'
import { Payment, columns } from '@components/ui/Columns'
import Delete from '@components/models/Delete'

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return new Array(50).fill(null).map(() => ({
    id: JSON.stringify(Math.random() * 1000),
    amount: Math.random() * 1000,
    status: 'pending',
    email: `idk${Math.random() * 1000}@gmail.com`,
  }))
}

const Home = async () => {
  const data = await getData()

  return (
    // <main className='flex min-h-screen flex-col items-center justify-between p-24'>
    // <h1>Hello World!!</h1>
    // <div className='w-full h-screen'>
    <main className='w-full flex-start flex-col gap-5 p-5 max-w-6xl mx-auto'>
      <h1 className='text-primary font-semibold text-2xl'>Expenses</h1>
      <label htmlFor='my-drawer-4' className='drawer-button btn btn-primary'>
        Add new expense
      </label>
      <div className='container'>
        <DataTable columns={columns} data={data} />
      </div>
      {/* <Delete /> */}
    </main>
    // </div>
    // </main>
  )
}

export default Home
