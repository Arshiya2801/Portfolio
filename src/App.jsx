import { ThemeProvider } from './components/ThemeContext';
import EditorialPortfolio from './components/editorial/EditorialPortfolio';

export default function App() {
    return <ThemeProvider><EditorialPortfolio /></ThemeProvider>;
}
