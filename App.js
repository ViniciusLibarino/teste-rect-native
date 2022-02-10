import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <>
      <StatusBar style="light" background="#2980b9" />
      <Home />
    </>
  );
}
