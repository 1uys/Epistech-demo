import { redirect } from 'next/navigation';

export default function Page() {
  // Redirige automáticamente a la página del dashboard
  redirect('/dashboard');
  return null; // No se renderiza nada porque se redirige automáticamente
}
