import CustomGrid from './CustomGrid.tsx';
import '@testing-library/jest-dom';
import { findAllByRole, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { agGridAdapter } from './AgGridAdapter.tsx';

describe(`Given custom selection handle`, () => {
  it(`should select rows by click in checkbox`, async () => {
    const userSession = userEvent.setup();
    const adapter = agGridAdapter();
    let selectedRows;
    const onSelectionChanged = vi.fn().mockImplementation((params) => selectedRows = params.api.getSelectedRows());

    const result = render(<CustomGrid {...adapter.getInitialState({ onSelectionChanged })} />);

    const gridContent = result.container.querySelector('.ag-body') as HTMLElement;
    expect(gridContent).not.toBeNull();

    const checkBoxes = await findAllByRole(gridContent, 'checkbox');
    expect(checkBoxes).toHaveLength(2);

    const cb = checkBoxes[0];
    await userSession.click(cb);

    expect(cb).toBeChecked();
    expect(onSelectionChanged).toHaveBeenCalled();
    expect(selectedRows).toEqual([
      {
        id: '1',
        make: 'Toyota',
        model: 'Celica',
        price: 35000
      }
    ]);
  }, 1000);
});
