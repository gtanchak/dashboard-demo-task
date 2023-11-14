import {
  createColumnHelper,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";
import { useState } from "react";
import { defaultData } from "./data";
import { Link } from "react-router-dom";

const useDashboardPage = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [data, setData] = useState(() => [...defaultData]);

  const columnHelper = createColumnHelper<any>();
  const columns = [
    columnHelper.accessor("id", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor((row) => row.dateRemoved, {
      id: "dateRemoved",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Date Removed</span>,
    }),
    columnHelper.accessor("link", {
      header: () => "Link",
      cell: (info) => (
        <Link to={info.renderValue()} target="_blank">
          {info.renderValue()}
        </Link>
      ),
    }),
    columnHelper.accessor("source", {
      header: () => <span>Source</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("action", {
      header: "Action",
      cell: (info) => (
        <div className="badge badge-light-success text-right">
          {info.renderValue()}
        </div>
      ),
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return { table };
};

export default useDashboardPage;
