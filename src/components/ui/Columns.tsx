'use client'

import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, Edit, Trash2 } from 'lucide-react'
import Button from '@components/ui/Button'

import {
  setModal,
  selectedModal,
  selectedModalId,
} from '@redux/slices/modalSlice'
import { useAppDispatch, useAppSelector } from '@redux/hooks'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
  email: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <Button
          variant='outline'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Email
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      )
    },
  },
  {
    accessorKey: 'amount',
    header: () => <div className='text-right'>Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'))
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount)

      return <div className='text-right font-medium'>{formatted}</div>
    },
  },
  {
    accessorKey: 'Actions',
    id: 'actions',
    cell: ({ row }) => {
      const payment = row.original
      const dispatch = useAppDispatch()

      const handleDeleteClick = () => {
        dispatch(setModal(payment.id))
      }

      return (
        <div className='flex-start gap-4'>
          <label
            htmlFor='my-drawer-4'
            className='drawer-button w-9 h-9 rounded-full bg-primary flex-center cursor-pointer hover:bg-opacity-80 active:scale-95'
          >
            <Edit className='text-white w-[18px]' />
          </label>
          <Button
            size={'sm'}
            className='bg-red-600 rounded-full'
            onClick={handleDeleteClick}
          >
            <Trash2 className='w-[18px]' />
          </Button>
        </div>
      )
    },
  },
]
