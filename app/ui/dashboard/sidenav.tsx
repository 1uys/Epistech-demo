import Image from 'next/image';
import Link from 'next/link';

export default function SideNav() {
  return (
    <div className="flex flex-col px-4 py-6 md:px-6 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white min-h-screen">
      {/* Logo con fondo naranja claro y enlace que se abre en nueva pestaña */}
      <Link 
        href="https://uninpahu.edu.co/?gad_source=1&gclid=Cj0KCQiAouG5BhDBARIsAOc08RR9hmjnX-Gdd34tDCif3zB0vWirRU6H1aCnzLv1qE9ehuV1W47GghYaApZfEALw_wcB"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-6 flex items-center justify-center rounded-xl bg-white p-4 shadow-lg transition-all transform hover:scale-105 w-full md:w-auto"
      >
        <div className="w-32 md:w-40">
          {/* Aquí está el logo con el fondo naranja claro */}
          <Image
            src="https://uninpahu.edu.co/wp-content/uploads/2024/05/Logo.svg"
            alt="Logo"
            width={120}
            height={120}
            className="rounded-full p-2 bg-orange-400"
          />
        </div>
      </Link>

      {/* Espaciado vacío para que el contenido se desplace hacia arriba */}
      <div className="flex-grow"></div>

      {/* Texto en la parte baja */}
      <p className="text-center text-sm md:text-base mt-auto mb-4">
        Este es un demo del semillero <strong className="text-yellow-200">Epis-Tech</strong> (Semillero)
      </p>
    </div>
  );
}
