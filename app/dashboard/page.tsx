import React from 'react'
import { Bell, ChevronDown, CreditCard, DollarSign, Home, PieChart, Plus, Wallet } from 'lucide-react'
import Appbar from '../components/Appbar'

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-300">
      <Appbar />
      <main className="flex-grow p-6">
        <div className="container mx-auto space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold text-yellow-500">Welcome back, Budget Buddy!</h2>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-green-500 text-black rounded-md hover:bg-green-600 flex items-center">
                <Plus className="mr-2 h-4 w-4" /> New Income
              </button>
              <button className="px-4 py-2 bg-red-500 text-black rounded-md hover:bg-red-600 flex items-center">
                <Plus className="mr-2 h-4 w-4" /> New Expense
              </button>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Total Balance', icon: Wallet, value: '$5,231.89', change: '+20.1% from last month', color: 'text-yellow-500' },
              { title: 'Income', icon: DollarSign, value: '$7,650.00', change: '+5% from last month', color: 'text-green-500' },
              { title: 'Expenses', icon: CreditCard, value: '$2,418.11', change: '-2.5% from last month', color: 'text-red-500' },
            ].map((item, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-medium text-gray-400">{item.title}</h3>
                  <item.icon className={`h-4 w-4 ${item.color}`} />
                </div>
                <div className="text-2xl font-bold text-yellow-500">{item.value}</div>
                <p className="text-xs text-gray-500">{item.change}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {['Income by Category', 'Expenses by Category'].map((title, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-500 mb-4">{title}</h3>
                <div className="text-center py-10">
                  <PieChart className="h-16 w-16 mx-auto text-gray-700" />
                  <p className="mt-2 text-sm text-gray-400">No data for the selected period</p>
                  <p className="text-xs text-gray-500">Try selecting a different period or add new {title.toLowerCase()}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-500 mb-4">Transaction History</h3>
            <div className="flex justify-between items-center mb-4">
              {['2023', 'September'].map((label, index) => (
                <div key={index} className="relative">
                  <button className="px-4 py-2 bg-gray-800 text-yellow-500 rounded-md hover:bg-gray-700 flex items-center border border-yellow-500">
                    {label} <ChevronDown className="ml-2 h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
            <div className="text-center py-10">
              <Home className="h-16 w-16 mx-auto text-gray-700" />
              <p className="mt-2 text-sm text-gray-400">No transactions for the selected period</p>
              <p className="text-xs text-gray-500">Try selecting a different period or add new transaction</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
