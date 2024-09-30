import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry } from "@ag-grid-community/core";

const AgGrid = ({
  data,
  columns,
  isDarkMode,
}: {
  data: any[];
  columns: any[];
  isDarkMode: boolean;
}) => {
  const pagination = true;
  const paginationPageSize = 10;
  const paginationPageSizeSelector = [10, 25, 50];
  const rowSelection = "multiple";

  return (
    <>
      <div id="gridContainer" style={{ flex: "1" }}>
        <div
          className={`ag-theme-quartz${isDarkMode ? "-dark" : ""}`} // applying the Data Grid theme
          style={{ height: 500 }} // the Data Grid will fill the size of the parent container
        >
          <AgGridReact
            rowData={data}
            columnDefs={columns}
            rowSelection={rowSelection}
            pagination={pagination}
            paginationPageSize={paginationPageSize}
            paginationPageSizeSelector={paginationPageSizeSelector}
          />
        </div>
      </div>
    </>
  );
};

export default AgGrid;
