'use client'

import React, { useState } from 'react'
// import { XCircleIcon } from '@heroicons/react/24/solid'
// import { dFetch } from '@lib/api-manager'
import { useRouter } from 'next/router'
import { XCircle } from 'lucide-react'
import Button from '@components/ui/Button'
// import { toast } from 'react-toastify'
// import { useAppDispatch } from '../../hooks'
// import { setModals } from 'slices/modalSlice'

interface DeleteProps {
  // toggle?: () => void
  // id: number
  // for: string
  // refresh?: () => void
}

const Delete = (props: DeleteProps) => {
  // const router = useRouter()
  // const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(false)

  const toggleOpen = () => {
    // dispatch(setModals(''))
    // props.toggle()
  }

  // const refreshCategories = async () => {
  //   await router.push(router.asPath)
  // }

  // const DeleteItem = (id: number) => {
  //   setLoading((prev) => !prev)
  //   if (
  //     props.for === 'Employee' ||
  //     props.for === 'Client' ||
  //     props.for === 'Invoice' ||
  //     props.for === 'Payment' ||
  //     props.for === 'Expense' ||
  //     props.for === 'Receiver'
  //   ) {
  //     dFetch(
  //       `/api/${
  //         router.query.view === 'receivers' ? 'clients' : router.query.view
  //       }/${id}/delete`
  //     ).then((res) => {
  //       if (res?.status === 201) {
  //         toggleOpen()
  //         refreshCategories()
  //         toast.success(res.data.message)
  //       } else {
  //         toast.error(res.response.data.message)
  //       }
  //       setLoading((prev) => !prev)
  //     })
  //   } else {
  //     dFetch(`/api/departments/${id}/delete`).then((res) => {
  //       if (res?.status === 201) {
  //         toggleOpen()
  //         props.refresh && props.refresh()
  //         toast.success(res.data.message)
  //       } else {
  //         toast.error(res.response.data.message)
  //       }
  //       setLoading((prev) => !prev)
  //     })
  //   }
  // }

  return (
    <div className='fixed flex justify-center items-center top-0 left-0 z-50 w-full h-full'>
      <div
        className='w-full h-full bg-black opacity-40'
        onClick={toggleOpen}
      ></div>
      <div className='absolute max-w-[90vw] w-[500px] h-[250px] max-h-[90%] bg-white flex flex-col rounded-[20px] p-5 overflow-y-auto'>
        <div className='w-full flex justify-end items-end'>
          <XCircle
            className='w-7 text-red-600 cursor-pointer'
            onClick={toggleOpen}
          />
        </div>
        <div className='w-full h-full flex justify-evenly items-start flex-col px-5'>
          <div className='w-full flex justify-center items-center'>
            <h1 className='md:text-xl text-center text-primary font-interBold'>
              Are you sure you want to delete this Expense?
            </h1>
          </div>
          <Button size={'lg'} className='w-full'>
            Delete
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Delete
