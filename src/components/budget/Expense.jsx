import React from "react";
import { FaPlus } from "react-icons/fa";
import { IoMdMic } from "react-icons/io";
import { budgetData } from "../../data/budgetData";

const ExpenseList = ({ img, payerName, paidFor, amount }) => {
  return (
    <div className="flex items-center py-4 px-6 mt-4 justify-between bg-[#FFDEDE] rounded-full">
      <img
        className="h-10 w-10 rounded-full "
        src={img}
        alt="profile-pic"
      />
      <h1>
        Paid by {payerName} for {paidFor}
      </h1>
      <h1 className="font-semibold">{amount}</h1>
    </div>
  );
};

const Expense = () => {
  return (
    <div>
      <div className="flex flex-col   ">
        <div className="flex items-center justify-between w-full pt-4 ">
          <input
            className=" gap-4 w-full border-b-2"
            type="text"
            placeholder="E.g 500 Paid by Shubham"
          />

          <div className="flex items-center gap-4 px-5 py-3 border w-72 border-black rounded-lg">
            <FaPlus />
            <button className="">Add Expense</button>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4  px-7 py-3 mt-4 border w-full border-black rounded-lg">
          <IoMdMic />
          <button>Voice search for Expenses</button>
        </div>

        {/* -----------------user expense list start------------ */}
        <div className="max-h-[50vh] min-h-[50vh] overflow-y-scroll">
          {budgetData.map((item, idx) => (
            <div key={idx}>
              <ExpenseList
                img={item.thumbnail}
                payerName={item.name}
                paidFor={item.paidFor}
                amount={item.amount}
              />
            </div>
          ))}
        </div>

        {/* -----------------user expense list end------------ */}
      </div>
    </div>
  );
};

export default Expense;
