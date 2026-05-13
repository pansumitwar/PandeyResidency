import { RouterProvider } from 'react-router';
import { router } from './routes';
import { Toaster } from 'sonner';
import './styles/animations.css';

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" richColors />
    </>
  );
}