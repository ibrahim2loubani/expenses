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

interface DrawerProps {
  children: ReactNode
  isOpen: boolean
  toggle: () => void
}

const Drawer: FC<DrawerProps> = ({ children, isOpen, toggle }) => {
  const model = useAppSelector(selectedModal)
  const popupId = useAppSelector(selectedModalId)
  const dispatch = useAppDispatch()

  const [isChecked, setIsChecked] = useState<boolean>(isOpen)

  useEffect(() => {
    setIsChecked(isOpen)
  }, [isOpen])

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
    toggle()
  }

  return (
    <div className='drawer drawer-end'>
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
              placeholder='Expense name...'
              // value={''}
              // onChange={() => {}}
              className='w-full'
            />
            <Input
              type='number'
              placeholder='Expense amount...'
              // value={''}
              // onChange={() => {}}
              className='w-full'
            />
            <Textarea
              className='resize-none'
              placeholder='Expense description...'
            />
            <div className='w-full flex-between'>
              <Button className=''>Submit</Button>
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
    </div>
  )
}

export default Drawer
