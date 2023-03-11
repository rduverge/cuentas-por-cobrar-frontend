import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

import useAccountingEntry from "../hooks/useAccountingEntry";

const AccountingChart = () => {
  const { accountingEntries } = useAccountingEntry();
  const [data, setData] = useState([]);

  useEffect(() => {
    let debit = 0;
    let credit = 0;

    accountingEntries.forEach((accountingEntry) => {
      if (accountingEntry.movementType === "Debito") {
        debit += accountingEntry.accountEntryAmount;
      } else if (accountingEntry.movementType === "Credito") {
        credit += accountingEntry.accountEntryAmount;
      }
    });

    setData([debit, credit]);
  }, [accountingEntries]);

  const options = {
    chart: {
      type: "pie",
    },
    labels: ["Debito", "Credito"],
    colors: ["#10B981", "#EF4444"],
  };

  return (
    <div className="bg-gray-200 p-16 flex flex-col items-center">
      <h1 className="text-center text-xl font-bold mb-8">
        Debitos y Creditos de los asientos contables
      </h1>

      <div className="w-2/3 h-64">
        <ReactApexChart options={options} series={data} type="pie" height={300} />
      </div>
    </div>
  );
};

export default AccountingChart;
