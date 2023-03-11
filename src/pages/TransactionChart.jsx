import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import useTransaction from "../hooks/useTransaction";

const TransactionChart= () => {
  const { transactions } = useTransaction();
  const [data, setData] = useState([]);

  useEffect(() => {
    let debit = 0;
    let credit = 0;

    transactions.forEach((transaction) => {
      if (transaction.movementType === "Debito") {
        debit += transaction.amount;
      } else if (transaction.movementType === "Credito") {
        credit += transaction.amount;
      }
    });

    setData([debit, credit]);
  }, [transactions]);

  const options = {
    chart: {
      type: "pie",
    },
    labels: ["Debito", "Credito"],
    colors: ["#10B981", "#EF4444"],
  };

    return (
        <div className="bg-gray-200 p-16  flex justify-center">
           
            <div className=" w-full mb-5 h-64">
            <h1 className='text-center text-xl font-bold'>Debitos y Creditos de las transacciones</h1>
           
      <ReactApexChart
        options={options}
        series={data}
        type="pie"
        height={300}
      />
            </div>
            </div>
  );
};

export default TransactionChart;
