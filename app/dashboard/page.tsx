import { lusitana } from '@/app/ui/fonts';

export default function Page() {
  const hrefOptions = {
    FCEA: 'https://chatgpt.com/g/g-o3NMHn5g3-asistente-de-investigacion-fcea',
    FCPA: 'https://chatgpt.com/g/g-Zy4RS1xU3-asistente-de-investigacion-fcpa',
    FITI: 'https://chatgpt.com/g/g-NS58TjYtF-asistente-de-investigacion-fit',
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Título con el logo y el nombre */}
      <h1 className={`${lusitana.className} text-xl md:text-3xl font-bold mb-6 bg-white p-4`}>
        Guías de Investigación Académica
      </h1>

      {/* Introducción sobre diseño de prompts académicos */}
      <section className="bg-white p-4 rounded-lg shadow-md mb-6 max-w-3xl text-center">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          El Diseño de un Prompt Académico Efectivo
        </h2>
        <p className="text-base text-gray-700">
          El diseño de un prompt académico efectivo es esencial para obtener respuestas precisas y útiles de los modelos de inteligencia artificial. Al formular correctamente un prompt, no solo se optimiza el rendimiento de la IA, sino que también se facilita el proceso de investigación para el estudiante.
        </p>
        <p className="text-base text-gray-700 mt-4">
          En este apartado, exploraremos los elementos clave que deben considerarse al diseñar un prompt dirigido a tareas académicas, asegurando que esté alineado con los objetivos de investigación y adaptado al contexto universitario.
        </p>
        
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
          Elementos de un Buen Prompt
        </h3>
        <ul className="list-disc text-left text-base text-gray-700 ml-6">
          <li><strong>Claridad:</strong> El prompt debe ser lo más directo posible. Evitar ambigüedades y vaguedades es esencial para que la IA no tenga que "adivinar" lo que se le está pidiendo.</li>
          <li><strong>Contexto:</strong> Proporcionar información suficiente sobre el tema o la tarea que se está realizando. Esto incluye detalles sobre el enfoque de la investigación, el área de estudio, y los objetivos del trabajo.</li>
          <li><strong>Especificidad:</strong> Un prompt específico ayuda a obtener respuestas más precisas. Por ejemplo, en lugar de "Resume este artículo", se puede decir: "Resume el artículo y destaca los tres principales hallazgos sobre la contaminación atmosférica."</li>
          <li><strong>Formato de la respuesta:</strong> Incluir instrucciones sobre cómo se espera que se entregue la respuesta, como un resumen, una lista de puntos clave, o una hipótesis en formato de texto académico.</li>
        </ul>
      </section>

      {/* Descripción de las guías */}
      <p className="text-center text-lg text-gray-700 mb-4">
        Bienvenido a la sección de guías de investigación académica. Selecciona tu facultad para acceder a la guía correspondiente:
      </p>

      {/* Lista de enlaces */}
      <div className="space-y-4">
        <a
          href={hrefOptions.FCEA}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-orange-500 text-white py-1.5 px-3 rounded-md hover:bg-orange-600 transition-colors text-center"
        >
          Guía para la Facultad FCEA
        </a>
        <a
          href={hrefOptions.FCPA}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-orange-500 text-white py-1.5 px-3 rounded-md hover:bg-orange-600 transition-colors text-center"
        >
          Guía para la Facultad FCPA
        </a>
        <a
          href={hrefOptions.FITI}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-orange-500 text-white py-1.5 px-3 rounded-md hover:bg-orange-600 transition-colors text-center"
        >
          Guía para la Facultad FITI
        </a>
      </div>
    </main>
  );
}
