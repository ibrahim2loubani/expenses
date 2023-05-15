'use client'

import { FC, ReactNode, useEffect, useState } from 'react'
import { Input } from '@components/ui/Input'
import { Textarea } from '@components/ui/Textarea'
import Button from '@components/ui/Button'
import {
  setModal,
  selectedModal,
  selectedModalId,
} from '@redux/slices/modalSlice'
import { useAppDispatch, useAppSelector } from '@redux/hooks'
import { toast } from '@components/ui/Toast'
import { useRouter } from 'next/navigation'
import { CreateInputBody, createSchema } from '@/schema/expenses.schema'
import axios from 'axios'
import { useFormik } from 'formik'
import { IncomingMessage } from 'http'
interface DrawerProps {
  children: ReactNode
  isOpen: boolean
  toggle: () => void
}

const Drawer: FC<DrawerProps> = ({ children, isOpen, toggle }) => {
  const router = useRouter()
  const model = useAppSelector(selectedModal)
  const popupId = useAppSelector(selectedModalId)
  // const dispatch = useAppDispatch()

  const [isChecked, setIsChecked] = useState<boolean>(isOpen)
  const [isLoading, setIsLoading] = useState<boolean>(isOpen)
  // const [name, setName] = useState<string>('')
  // const [amount, setAmount] = useState<number>(0)
  // const [description, setDescription] = useState<string>('')

  useEffect(() => {
    setIsChecked(isOpen)
  }, [isOpen])

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
    toggle()
  }

  const refreshData = async () => {
    // const router = useRouter()
    await router.refresh()
  }

  // const handleSubmit = async () => {
  //   if (name && amount && description) {
  //     setIsLoading((prev) => !prev)

  //     try {
  //       const data = {
  //         name: name!,
  //         amount: amount!,
  //         description: description!,
  //       } as CreateInputBody

  //       const response = await axios.post('/api/expenses/create', data)
  //       console.log(response)
  //       if (response.status !== 201) {
  //         toast({
  //           type: 'error',
  //           message: response.statusText,
  //         })
  //         return
  //       }
  //       // refreshData()
  //     } catch (error: any) {
  //       console.error('Error creating expense:', error.message)
  //     } finally {
  //       setIsLoading((prev) => !prev)
  //     }
  //   } else {
  //     toast({
  //       type: 'error',
  //       message: 'All fields required!',
  //     })
  //   }
  // }
  async function pFetch(
    url: string,
    data?: {},
    req?: IncomingMessage | undefined
  ) {
    const baseURl = process.env.NEXT_PUBLIC_BASE_URL
    const cookies = req?.headers
    const res = await axios
      .post(`${baseURl}${url}`, data, {
        headers: cookies as any,
      })
      .catch(function (error) {
        return error
      })
    return res
  }

  const onSubmit = async (values: {
    name: string
    amount: number
    description: string
  }): Promise<any | void> => {
    try {
      setIsLoading((prev) => !prev)
      const response = await axios.post('api/expenses/create', values)

      if (response?.status === 201) {
        toggle()
        refreshData()
        toast({
          type: 'success',
          message: 'Expense added successfully',
        })
        values.name = ''
        values.amount = 0
        values.description = ''
      } else {
        toast({
          type: 'error',
          message: 'Error',
        })
      }
    } catch (error) {
      toast({
        type: 'error',
        message: error as string,
      })
    } finally {
      setIsLoading((prev) => !prev)
    }
  }

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: '',
      amount: 0,
      description: '',
    },
    validationSchema: createSchema.body,
    onSubmit,
  })

  return (
    <form
      className='drawer drawer-end'
      onSubmit={handleSubmit}
      autoComplete='off'
    >
      <input
        id='my-drawer-4'
        type='checkbox'
        className='drawer-toggle'
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <div className='drawer-content'>{children}</div>
      <div className='drawer-side'>
        <label htmlFor='my-drawer-4' className='drawer-overlay'></label>
        <div className='menu p-4 w-80 bg-base-100 text-base-content'>
          <div className='w-full flex-start flex-col gap-5'>
            <h3 className='text-primary font-medium'>Add New Expense</h3>
            <Input
              name='name'
              placeholder='Expense name...'
              value={values.name}
              onChange={handleChange}
              className='w-full'
            />
            <Input
              name='amount'
              type='number'
              placeholder='Expense amount...'
              value={values.amount}
              onChange={handleChange}
              className='w-full'
            />
            <Textarea
              name='description'
              className='resize-none'
              placeholder='Expense description...'
              value={values.description}
              onChange={handleChange}
            />
            <div className='w-full flex-between'>
              <Button type='submit' isLoading={isLoading}>
                Submit
              </Button>
              <label
                htmlFor='my-drawer-4'
                className='drawer-button h-10 py-2 px-4 bg-red-600 text-white font-medium transition-color outline-none rounded-md text-sm flex-center cursor-pointer hover:bg-opacity-80 active:scale-95'
              >
                Cancel
              </label>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Drawer
