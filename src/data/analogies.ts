export type Difficulty = 'Básico' | 'Intermedio' | 'Avanzado';

export type Analogy = {
  id: number;
  difficulty: Difficulty;
  type: string;
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
};

export const analogies: Analogy[] = [
  { id: 1, difficulty: 'Básico', type: 'Sinonimia', prompt: 'Feliz es a alegre como triste es a...', options: ['deprimido', 'ruidoso', 'rápido', 'brillante'], answer: 0, explanation: 'Feliz y alegre son palabras de significado semejante; triste y deprimido también.' },
  { id: 2, difficulty: 'Básico', type: 'Antonimia', prompt: 'Grande es a pequeño como alto es a...', options: ['ancho', 'bajo', 'largo', 'fuerte'], answer: 1, explanation: 'Grande y pequeño son opuestos, al igual que alto y bajo.' },
  { id: 3, difficulty: 'Básico', type: 'Género', prompt: 'Gato es a gata como caballo es a...', options: ['potro', 'yegua', 'burro', 'caballo'], answer: 1, explanation: 'Gata es el femenino de gato; yegua es el femenino de caballo.' },
  { id: 4, difficulty: 'Básico', type: 'Animal y alimento', prompt: 'Vaca es a pasto como conejo es a...', options: ['semilla', 'carne', 'zanahoria', 'leche'], answer: 2, explanation: 'El pasto es un alimento de la vaca; la zanahoria es un alimento del conejo.' },
  { id: 5, difficulty: 'Básico', type: 'Objeto y uso', prompt: 'Lápiz es a escribir como tijera es a...', options: ['pegar', 'cortar', 'medir', 'borrar'], answer: 1, explanation: 'El lápiz sirve para escribir; la tijera sirve para cortar.' },
  { id: 6, difficulty: 'Básico', type: 'Profesión y herramienta', prompt: 'Médico es a estetoscopio como fotógrafo es a...', options: ['cámara', 'pincel', 'martillo', 'balanza'], answer: 0, explanation: 'El médico utiliza un estetoscopio; el fotógrafo utiliza una cámara.' },
  { id: 7, difficulty: 'Básico', type: 'Emoción', prompt: 'Llanto es a tristeza como sonrisa es a...', options: ['miedo', 'alegría', 'enojo', 'sorpresa'], answer: 1, explanation: 'El llanto puede expresar tristeza; la sonrisa puede expresar alegría.' },
  { id: 8, difficulty: 'Básico', type: 'Vehículo y conductor', prompt: 'Conductor es a automóvil como piloto es a...', options: ['avión', 'bicicleta', 'tren', 'barco'], answer: 0, explanation: 'El conductor maneja un automóvil; el piloto conduce un avión.' },
  { id: 9, difficulty: 'Básico', type: 'Parte y todo', prompt: 'Dedo es a mano como hoja es a...', options: ['flor', 'árbol', 'raíz', 'fruto'], answer: 1, explanation: 'El dedo es parte de la mano; la hoja es parte del árbol.' },
  { id: 10, difficulty: 'Básico', type: 'Tiempo', prompt: 'Día es a semana como mes es a...', options: ['hora', 'año', 'minuto', 'siglo'], answer: 1, explanation: 'El día forma parte de la semana; el mes forma parte del año.' },
  { id: 11, difficulty: 'Intermedio', type: 'Lugar y actividad', prompt: 'Biblioteca es a leer como laboratorio es a...', options: ['cocinar', 'experimentar', 'dormir', 'nadar'], answer: 1, explanation: 'En una biblioteca se lee; en un laboratorio se experimenta.' },
  { id: 12, difficulty: 'Intermedio', type: 'Causa y efecto', prompt: 'Lluvia es a inundación como fuego es a...', options: ['humo', 'ceniza', 'helada', 'rocío'], answer: 1, explanation: 'La lluvia puede causar una inundación; el fuego puede producir ceniza.' },
  { id: 13, difficulty: 'Intermedio', type: 'Animal y grupo', prompt: 'Oveja es a rebaño como abeja es a...', options: ['manada', 'jauría', 'colmena', 'bandada'], answer: 2, explanation: 'Un grupo de ovejas es un rebaño; un grupo organizado de abejas vive en una colmena.' },
  { id: 14, difficulty: 'Intermedio', type: 'Materia y producto', prompt: 'Madera es a mesa como arcilla es a...', options: ['vasija', 'ventana', 'lápiz', 'tejido'], answer: 0, explanation: 'La madera puede transformarse en una mesa; la arcilla puede transformarse en una vasija.' },
  { id: 15, difficulty: 'Intermedio', type: 'Objeto y contenido', prompt: 'Libro es a páginas como casa es a...', options: ['ladrillos', 'habitaciones', 'techo', 'puerta'], answer: 1, explanation: 'Las páginas forman parte de un libro; las habitaciones forman parte de una casa.' },
  { id: 16, difficulty: 'Intermedio', type: 'Acción y objeto', prompt: 'Remar es a bote como cabalgar es a...', options: ['caballo', 'silla', 'camino', 'rueda'], answer: 0, explanation: 'Se rema usando un bote; se cabalga usando un caballo.' },
  { id: 17, difficulty: 'Intermedio', type: 'Intensidad', prompt: 'Susurro es a voz como chispa es a...', options: ['luz', 'incendio', 'agua', 'nube'], answer: 1, explanation: 'Un susurro es una manifestación pequeña de la voz; una chispa puede iniciar un incendio.' },
  { id: 18, difficulty: 'Intermedio', type: 'Necesidad y satisfacción', prompt: 'Agua es a sed como alimento es a...', options: ['hambre', 'sueño', 'frío', 'cansancio'], answer: 0, explanation: 'El agua satisface la sed; el alimento satisface el hambre.' },
  { id: 19, difficulty: 'Intermedio', type: 'Estación y fenómeno', prompt: 'Sol es a verano como lluvia es a...', options: ['invierno', 'otoño', 'primavera', 'noche'], answer: 1, explanation: 'El sol se relaciona con el verano; la lluvia es característica frecuente del otoño.' },
  { id: 20, difficulty: 'Intermedio', type: 'Objeto y lugar', prompt: 'Avión es a aeropuerto como tren es a...', options: ['puerto', 'estación', 'carretera', 'garaje'], answer: 1, explanation: 'El avión llega al aeropuerto; el tren llega a la estación.' },
  { id: 21, difficulty: 'Avanzado', type: 'Secuencia', prompt: 'Semilla es a planta como huevo es a...', options: ['nido', 'ave', 'pluma', 'cáscara'], answer: 1, explanation: 'De una semilla puede nacer una planta; de un huevo puede nacer un ave.' },
  { id: 22, difficulty: 'Avanzado', type: 'Categoría', prompt: 'Rosa es a flor como pino es a...', options: ['bosque', 'árbol', 'hoja', 'semilla'], answer: 1, explanation: 'La rosa pertenece a la categoría flor; el pino pertenece a la categoría árbol.' },
  { id: 23, difficulty: 'Avanzado', type: 'Relación abstracta', prompt: 'Ignorancia es a conocimiento como oscuridad es a...', options: ['sombra', 'luz', 'nube', 'noche'], answer: 1, explanation: 'El conocimiento se opone a la ignorancia; la luz se opone a la oscuridad.' },
  { id: 24, difficulty: 'Avanzado', type: 'Instrumento y resultado', prompt: 'Termómetro es a temperatura como balanza es a...', options: ['distancia', 'peso', 'volumen', 'velocidad'], answer: 1, explanation: 'El termómetro mide la temperatura; la balanza mide el peso.' },
  { id: 25, difficulty: 'Avanzado', type: 'Creador y obra', prompt: 'Poeta es a poema como compositor es a...', options: ['novela', 'sinfonía', 'pintura', 'escultura'], answer: 1, explanation: 'El poeta crea poemas; el compositor crea sinfonías.' },
  { id: 26, difficulty: 'Avanzado', type: 'Símbolo y significado', prompt: 'Paloma es a paz como balanza es a...', options: ['justicia', 'rapidez', 'silencio', 'alegría'], answer: 0, explanation: 'La paloma es un símbolo de paz; la balanza es un símbolo de justicia.' },
  { id: 27, difficulty: 'Avanzado', type: 'Proceso', prompt: 'Pregunta es a respuesta como problema es a...', options: ['duda', 'solución', 'error', 'pregunta'], answer: 1, explanation: 'Una pregunta busca una respuesta; un problema busca una solución.' },
  { id: 28, difficulty: 'Avanzado', type: 'Recipiente y contenido', prompt: 'Frasco es a perfume como sobre es a...', options: ['carta', 'papel', 'tinta', 'sello'], answer: 0, explanation: 'El perfume puede estar dentro de un frasco; la carta puede estar dentro de un sobre.' },
  { id: 29, difficulty: 'Avanzado', type: 'Origen y destino', prompt: 'Río es a mar como camino es a...', options: ['puente', 'destino', 'viaje', 'montaña'], answer: 1, explanation: 'El río desemboca en el mar; el camino conduce hacia un destino.' },
  { id: 30, difficulty: 'Avanzado', type: 'Relación múltiple', prompt: 'Leer es a comprender como observar es a...', options: ['imaginar', 'analizar', 'correr', 'escuchar'], answer: 1, explanation: 'La lectura permite comprender; la observación permite analizar con atención.' },
  { id: 31, difficulty: 'Avanzado', type: 'Antónimo', prompt: 'Generoso es a egoísta como valiente es a...', options: ['prudente', 'cobarde', 'fuerte', 'curioso'], answer: 1, explanation: 'Generoso y egoísta son opuestos; valiente y cobarde también.' },
  { id: 32, difficulty: 'Avanzado', type: 'Parte y sistema', prompt: 'Corazón es a cuerpo como motor es a...', options: ['rueda', 'automóvil', 'carretera', 'volante'], answer: 1, explanation: 'El corazón es un órgano esencial del cuerpo; el motor es una parte esencial del automóvil.' },
  { id: 33, difficulty: 'Avanzado', type: 'Profesión y espacio', prompt: 'Juez es a tribunal como docente es a...', options: ['biblioteca', 'escuela', 'hospital', 'mercado'], answer: 1, explanation: 'El juez trabaja en un tribunal; el docente trabaja en una escuela.' },
  { id: 34, difficulty: 'Avanzado', type: 'Transformación', prompt: 'Uva es a vino como leche es a...', options: ['queso', 'agua', 'harina', 'sal'], answer: 0, explanation: 'La uva se transforma en vino; la leche puede transformarse en queso.' },
  { id: 35, difficulty: 'Avanzado', type: 'Orden', prompt: 'Infancia es a juventud como mañana es a...', options: ['noche', 'tarde', 'mediodía', 'madrugada'], answer: 1, explanation: 'La juventud sucede después de la infancia; la tarde sucede después de la mañana.' },
  { id: 36, difficulty: 'Avanzado', type: 'Función', prompt: 'Mapa es a orientar como diccionario es a...', options: ['traducir', 'definir', 'dibujar', 'calcular'], answer: 1, explanation: 'Un mapa ayuda a orientarse; un diccionario ayuda a encontrar definiciones.' }
];
