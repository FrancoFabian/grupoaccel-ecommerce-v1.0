import { Lusitana } from 'next/font/google';

// Configura la fuente y sus opciones, incluyendo los pesos que necesitas
export const lusitana = Lusitana({
  subsets: ['latin'], // Especifica el subset que necesitas
  weight: ['400', '700'], // Especifica los pesos disponibles (400 y 700 en este caso)
});
        