import React from 'react'
import Expense from '../components/budget/Expense'
import TotalExpenses from '../components/budget/TotalExpenses'

const BudgetPage = () => {
  return (
    <section className=" pt-20 min-h-[80vh] px-52 ">
      <h1 className='text-3xl font-semibold mt-4'>Budget</h1>
      <div className='flex  '>
        <Expense/>
        <TotalExpenses/>
      </div>
    </section>
  )
}

export default BudgetPage