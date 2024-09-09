import { ColumnDef } from '@tanstack/vue-table'
import { h } from 'vue'
import DropdownAction from '@/components/demos/DataTableDropdown.vue'

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: 'email',
    header: () => h('div', { class: 'text-start' }, 'email'),
    cell: ({ row }) => h('div', { class: 'text-start' }, row.getValue('email')),
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original

      return h('div', { class: 'relative' }, h(DropdownAction, {
        payment,
      }))
    },
  },
]