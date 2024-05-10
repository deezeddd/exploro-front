import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const data = [
    {
      
      sr: 1,
      month: "January",
      marketing: "$250.00",
      engineering: "Paid",
      sales: "Credit Card",
    },
    {
        sr: 2,
        month: "Feburary",
        marketing: "$250.00",
        engineering: "Paid",
        sales: "Credit Card",
      },
      {
        sr: 3,
        month: "March",
        marketing: "$250.00",
        engineering: "Paid",
        sales: "Credit Card",
      },
      {
        sr: 4,
        month: "April",
        marketing: "$250.00",
        engineering: "Paid",
        sales: "Credit Card",
      },
      {
        sr: 5,
        month: "May",
        marketing: "$250.00",
        engineering: "Paid",
        sales: "Credit Card",
      },
      {
        sr: 6,
        month: "June",
        marketing: "$250.00",
        engineering: "Paid",
        sales: "Credit Card",
      },
      {
        sr: 7,
        month: "July",
        marketing: "$250.00",
        engineering: "Paid",
        sales: "Credit Card",
      },
      {
        sr: 8,
        month: "August",
        marketing: "$250.00",
        engineering: "Paid",
        sales: "Credit Card",
      },
      {
        sr: 9,
        month: "September",
        marketing: "$250.00",
        engineering: "Paid",
        sales: "Credit Card",
      },
      {
        sr: 10,
        month: "October",
        marketing: "$250.00",
        engineering: "Paid",
        sales: "Credit Card",
      },
      {
        sr: 11,
        month: "November",
        marketing: "$250.00",
        engineering: "Paid",
        sales: "Credit Card",
      },
      {
        sr: 12,
        month: "December",
        marketing: "$250.00",
        engineering: "Paid",
        sales: "Credit Card",
      },

  ]
  
  export function TableComponent() {
    return (
      <Table className="border-2 ">
        <TableCaption>Recruitment Cost This Year.</TableCaption>
        <TableHeader>
          <TableRow className="bg-slate-100">
          <TableHead className=""></TableHead>
            <TableHead className="border-r-2">Month</TableHead>
            <TableHead className="border-r-2">Marketing</TableHead>
            <TableHead className="border-r-2">Engineering</TableHead>
            <TableHead className="">Sales</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((data) => (
            <TableRow key={data.month}>
             <TableCell className="pr-0 text-slate-400 ">{data.sr}</TableCell>
              <TableCell className=" border-r-2">{data.month}</TableCell>
              <TableCell className="border-r-2">{data.marketing}</TableCell>
              <TableCell className="border-r-2">{data.engineering}</TableCell>
              <TableCell className="">{data.sales}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  