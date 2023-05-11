const Home = () => {
  return (
    // <main className='flex min-h-screen flex-col items-center justify-between p-24'>
    // <h1>Hello World!!</h1>
    // <div className='w-full h-screen'>
    <main className='w-full flex-start flex-col gap-5 p-10'>
      <h1 className='text-primary font-semibold text-2xl z-0'>Expenses</h1>
      <label htmlFor='my-drawer-4' className='drawer-button btn btn-primary'>
        Add new expense
      </label>
    </main>
    // </div>
    // </main>
  )
}

export default Home
