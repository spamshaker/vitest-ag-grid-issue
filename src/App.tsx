import CustomGrid from './CustomGrid.tsx';
import { agGridAdapter } from './AgGridAdapter.tsx';

function App() {
  const props = agGridAdapter().getInitialState();
  return <CustomGrid {...props} />;
}

export default App;
