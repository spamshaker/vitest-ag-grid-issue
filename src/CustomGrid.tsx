import { AgGridReact } from 'ag-grid-react/lib/agGridReact'; // the AG Grid React Component
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { GridOptions } from 'ag-grid-community'; // Optional theme CSS


const CustomGrid = <T extends { id: string }>(props: GridOptions<T>) => (
  <div className="ag-theme-alpine"
    style={{ height: 1280, width: 720 }}
    role="grid">
    <AgGridReact<T> {...props} />
  </div>
);
export default CustomGrid;
