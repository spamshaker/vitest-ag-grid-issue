import { GridOptions } from 'ag-grid-community';

export function agGridAdapter() {
  return {
    getInitialState(options: GridOptions = {}): GridOptions {
      return {
        columnDefs: [
          { field: 'make', checkboxSelection: true },
          { field: 'model' },
          { field: 'price' }
        ],
        rowSelection: 'single',
        rowData: [
          { id: '1', make: 'Toyota', model: 'Celica', price: 35000 },
          { id: '2', make: 'Ford', model: 'Mondeo', price: 32000 }
        ],
        ...options
      };
    }
  };
}
