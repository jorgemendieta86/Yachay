const questions = [
  ['Básico','Sinonimia','Veloz es a rápido como iniciar es a...', ['terminar','comenzar','detener','esperar'],1,'Veloz y rápido tienen significado semejante; iniciar y comenzar también.'],
  ['Básico','Antonimia','Cerca es a lejos como entrar es a...', ['subir','salir','llegar','mirar'],1,'Cerca y lejos son opuestos; entrar y salir también.'],
  ['Básico','Género','Gallo es a gallina como caballo es a...', ['potro','yegua','burro','mula'],1,'Gallina es el femenino de gallo; yegua es el femenino de caballo.'],
  ['Básico','Animal y alimento','Abeja es a néctar como vaca es a...', ['carne','pasto','fruta','semilla'],1,'La abeja obtiene alimento del néctar; la vaca se alimenta de pasto.'],
  ['Básico','Objeto y uso','Escoba es a barrer como peine es a...', ['cortar','peinar','pintar','medir'],1,'La escoba sirve para barrer; el peine sirve para peinar.'],
  ['Básico','Profesión y herramienta','Carpintero es a martillo como pintor es a...', ['pincel','balanza','silbato','regla'],0,'El carpintero utiliza un martillo; el pintor utiliza un pincel.'],
  ['Básico','Emoción','Miedo es a temblor como alegría es a...', ['sonrisa','silencio','sueño','enojo'],0,'El miedo puede producir temblor; la alegría puede producir una sonrisa.'],
  ['Básico','Vehículo y conductor','Capitán es a barco como conductor es a...', ['avión','automóvil','caballo','bicicleta'],1,'El capitán dirige un barco; el conductor maneja un automóvil.'],
  ['Básico','Parte y todo','Rueda es a bicicleta como página es a...', ['cuaderno','lápiz','mochila','ventana'],0,'La rueda es parte de una bicicleta; la página es parte de un cuaderno.'],
  ['Básico','Tiempo','Hora es a día como día es a...', ['mes','semana','año','minuto'],1,'Una hora forma parte de un día; un día forma parte de una semana.'],
  ['Básico','Animal y hábitat','Pez es a agua como ave es a...', ['nido','aire','pluma','semilla'],1,'El pez vive en el agua; el ave se desplaza por el aire.'],
  ['Básico','Material y objeto','Vidrio es a botella como madera es a...', ['mesa','agua','pintura','clavo'],0,'Una botella puede fabricarse con vidrio; una mesa puede fabricarse con madera.'],
  ['Básico','Parte y planta','Raíz es a árbol como pétalo es a...', ['fruto','flor','tallo','semilla'],1,'La raíz es parte del árbol; el pétalo es parte de la flor.'],
  ['Básico','Sonido y fuente','Campana es a sonido como lámpara es a...', ['calor','luz','olor','vapor'],1,'La campana produce sonido; la lámpara produce luz.'],
  ['Básico','Acción y herramienta','Pintar es a pincel como cortar es a...', ['tijera','cuchara','vaso','almohada'],0,'El pincel se usa para pintar; la tijera se usa para cortar.'],
  ['Básico','Lugar y actividad','Hospital es a curar como escuela es a...', ['cocinar','aprender','vender','viajar'],1,'En el hospital se cura; en la escuela se aprende.'],
  ['Básico','Recipiente y contenido','Botella es a agua como caja es a...', ['papel','juguetes','techo','tierra'],1,'La botella puede contener agua; la caja puede contener juguetes.'],
  ['Básico','Categoría','Manzana es a fruta como zanahoria es a...', ['animal','verdura','bebida','herramienta'],1,'La manzana pertenece a las frutas; la zanahoria pertenece a las verduras.'],
  ['Básico','Origen y producto','Gallina es a huevo como vaca es a...', ['lana','leche','miel','seda'],1,'La gallina produce huevos; la vaca produce leche.'],
  ['Básico','Cantidad y conjunto','Par es a dos como docena es a...', ['cinco','diez','doce','cien'],2,'Un par contiene dos elementos; una docena contiene doce.'],
  ['Básico','Sinonimia','Comenzar es a iniciar como finalizar es a...', ['terminar','subir','abrir','caminar'],0,'Comenzar e iniciar son semejantes; finalizar y terminar también.'],
  ['Básico','Antonimia','Liso es a rugoso como limpio es a...', ['claro','sucio','brillante','suave'],1,'Liso y rugoso son opuestos; limpio y sucio también.'],
  ['Básico','Género','Rey es a reina como príncipe es a...', ['princesa','duque','madre','niña'],0,'Reina es el femenino de rey; princesa es el femenino de príncipe.'],
  ['Básico','Animal y grupo','Pez es a cardumen como lobo es a...', ['rebaño','manada','bandada','colmena'],1,'Un grupo de peces es un cardumen; un grupo de lobos es una manada.'],
  ['Básico','Instrumento y función','Reloj es a hora como termómetro es a...', ['peso','temperatura','distancia','velocidad'],1,'El reloj indica la hora; el termómetro indica la temperatura.'],
  ['Básico','Objeto y lugar','Libro es a biblioteca como cuadro es a...', ['museo','garaje','estadio','mercado'],0,'El libro se encuentra en una biblioteca; el cuadro puede encontrarse en un museo.'],
  ['Básico','Causa y efecto','Estudio es a aprendizaje como ejercicio es a...', ['cansancio','fortaleza','silencio','hambre'],1,'El estudio favorece el aprendizaje; el ejercicio favorece la fortaleza.'],
  ['Básico','Secuencia','Lunes es a martes como enero es a...', ['marzo','febrero','abril','diciembre'],1,'Martes sucede a lunes; febrero sucede a enero.'],
  ['Básico','Prenda y parte del cuerpo','Zapato es a pie como guante es a...', ['cabeza','mano','cuello','espalda'],1,'El zapato cubre el pie; el guante cubre la mano.'],
  ['Básico','Estación y fenómeno','Invierno es a frío como verano es a...', ['lluvia','calor','nieve','viento'],1,'El invierno se relaciona con el frío; el verano se relaciona con el calor.'],
  ['Intermedio','Causa y efecto','Semilla es a planta como idea es a...', ['olvido','proyecto','ruido','sombra'],1,'Una semilla puede originar una planta; una idea puede originar un proyecto.'],
  ['Intermedio','Categoría','Violín es a instrumento como roble es a...', ['fruta','árbol','animal','metal'],1,'El violín pertenece a los instrumentos; el roble pertenece a los árboles.'],
  ['Intermedio','Material y producto','Algodón es a tela como arcilla es a...', ['vasija','humo','cuerda','papel'],0,'El algodón puede transformarse en tela; la arcilla puede transformarse en una vasija.'],
  ['Intermedio','Parte y sistema','Tecla es a teclado como ladrillo es a...', ['pared','cemento','pintura','ventana'],0,'La tecla forma parte del teclado; el ladrillo forma parte de una pared.'],
  ['Intermedio','Acción y herramienta','Escribir es a teclado como fotografiar es a...', ['cámara','lienzo','escalera','brújula'],0,'El teclado se usa para escribir; la cámara se usa para fotografiar.'],
  ['Intermedio','Profesión y espacio','Panadero es a panadería como farmacéutico es a...', ['escuela','farmacia','estación','teatro'],1,'El panadero trabaja en una panadería; el farmacéutico trabaja en una farmacia.'],
  ['Intermedio','Necesidad y satisfacción','Descanso es a cansancio como alimento es a...', ['hambre','frío','miedo','sed'],0,'El descanso alivia el cansancio; el alimento satisface el hambre.'],
  ['Intermedio','Intensidad','Brisa es a viento como chispa es a...', ['humo','incendio','ceniza','lluvia'],1,'La brisa es una forma suave de viento; la chispa puede iniciar un incendio.'],
  ['Intermedio','Origen y producto','Abeja es a miel como olivo es a...', ['aceite','harina','leche','lana'],0,'La abeja produce miel; el olivo produce aceite.'],
  ['Intermedio','Recipiente y contenido','Acuario es a peces como biblioteca es a...', ['plantas','libros','vehículos','alimentos'],1,'El acuario contiene peces; la biblioteca contiene libros.'],
  ['Intermedio','Transformación','Oruga es a mariposa como renacuajo es a...', ['pez','rana','lagarto','caracol'],1,'La oruga se transforma en mariposa; el renacuajo se transforma en rana.'],
  ['Intermedio','Símbolo y significado','Semáforo es a tránsito como balanza es a...', ['justicia','velocidad','comercio','música'],0,'El semáforo regula el tránsito; la balanza simboliza la justicia.'],
  ['Intermedio','Objeto y función','Brújula es a orientar como lupa es a...', ['iluminar','ampliar','pesar','cortar'],1,'La brújula ayuda a orientarse; la lupa ayuda a ampliar.'],
  ['Intermedio','Lugar y actividad','Observatorio es a astros como estadio es a...', ['deportes','medicina','lectura','agricultura'],0,'En un observatorio se estudian los astros; en un estadio se practican deportes.'],
  ['Intermedio','Antonimia','Humilde es a orgulloso como generoso es a...', ['egoísta','curioso','valiente','sereno'],0,'Humilde y orgulloso son opuestos; generoso y egoísta también.'],
  ['Intermedio','Sinonimia','Preciso es a exacto como rápido es a...', ['lento','veloz','débil','pesado'],1,'Preciso y exacto son semejantes; rápido y veloz también.'],
  ['Intermedio','Animal y hábitat','Camello es a desierto como pingüino es a...', ['selva','región polar','pradera','volcán'],1,'El camello está adaptado al desierto; el pingüino está adaptado a regiones polares.'],
  ['Intermedio','Conjunto y elemento','Bosque es a árbol como biblioteca es a...', ['libro','lápiz','mesa','ventana'],0,'Un bosque reúne árboles; una biblioteca reúne libros.'],
  ['Intermedio','Instrumento y medida','Regla es a longitud como balanza es a...', ['peso','temperatura','tiempo','sonido'],0,'La regla mide longitud; la balanza mide peso.'],
  ['Intermedio','Creador y obra','Escultor es a estatua como escritor es a...', ['novela','martillo','teatro','pincel'],0,'El escultor crea estatuas; el escritor crea novelas.'],
  ['Intermedio','Acción y resultado','Practicar es a habilidad como preguntar es a...', ['respuesta','duda','silencio','sueño'],0,'Practicar desarrolla una habilidad; preguntar busca una respuesta.'],
  ['Intermedio','Causa y efecto','Descuido es a accidente como esfuerzo es a...', ['logro','olvido','ruido','descanso'],0,'El descuido puede causar un accidente; el esfuerzo puede producir un logro.'],
  ['Intermedio','Parte y todo','Capítulo es a libro como escena es a...', ['película','actor','cámara','entrada'],0,'El capítulo forma parte de un libro; la escena forma parte de una película.'],
  ['Intermedio','Fuente y energía','Sol es a luz como alimento es a...', ['energía','sombra','sed','ruido'],0,'El sol proporciona luz; el alimento proporciona energía.'],
  ['Intermedio','Secuencia','Capullo es a flor como huevo es a...', ['ave','nido','pluma','cáscara'],0,'Del capullo surge una flor; del huevo puede surgir un ave.'],
  ['Intermedio','Profesión y herramienta','Astrónomo es a telescopio como cirujano es a...', ['estetoscopio','bisturí','micrófono','martillo'],1,'El astrónomo utiliza un telescopio; el cirujano utiliza un bisturí.'],
  ['Intermedio','Objeto y lugar','Avión es a hangar como barco es a...', ['puerto','carretera','túnel','pista'],0,'El avión se guarda en un hangar; el barco se guarda o atraca en un puerto.'],
  ['Intermedio','Necesidad y protección','Abrigo es a frío como paraguas es a...', ['sol','lluvia','viento','nieve'],1,'El abrigo protege del frío; el paraguas protege de la lluvia.'],
  ['Intermedio','Materia y alimento','Harina es a pan como leche es a...', ['queso','agua','sal','arroz'],0,'La harina puede convertirse en pan; la leche puede convertirse en queso.'],
  ['Intermedio','Objeto y función','Llave es a abrir como jabón es a...', ['lavar','cerrar','cortar','dibujar'],0,'La llave sirve para abrir; el jabón sirve para lavar.'],
  ['Avanzado','Relación abstracta','Duda es a certeza como confusión es a...', ['orden','ruido','prisa','memoria'],0,'La certeza resuelve la duda; el orden resuelve la confusión.'],
  ['Avanzado','Categoría','Soneto es a poema como acuarela es a...', ['pintura','música','escultura','danza'],0,'El soneto es un tipo de poema; la acuarela es un tipo de pintura.'],
  ['Avanzado','Instrumento y resultado','Barómetro es a presión como sismógrafo es a...', ['temperatura','movimiento sísmico','humedad','distancia'],1,'El barómetro mide la presión; el sismógrafo registra movimientos sísmicos.'],
  ['Avanzado','Creador y obra','Arquitecto es a edificio como dramaturgo es a...', ['obra teatral','escultura','melodía','mapa'],0,'El arquitecto diseña edificios; el dramaturgo escribe obras teatrales.'],
  ['Avanzado','Proceso y resultado','Investigar es a descubrir como analizar es a...', ['comprender','ocultar','copiar','adornar'],0,'Investigar puede conducir a descubrir; analizar puede conducir a comprender.'],
  ['Avanzado','Parte y sistema','Neurona es a sistema nervioso como glóbulo rojo es a...', ['sistema circulatorio','sistema óseo','sistema digestivo','sistema muscular'],0,'La neurona pertenece al sistema nervioso; el glóbulo rojo pertenece al sistema circulatorio.'],
  ['Avanzado','Origen y destino','Afluente es a río como avenida es a...', ['ciudad','mar','puente','casa'],0,'Un afluente desemboca en un río; una avenida conduce o pertenece a una ciudad.'],
  ['Avanzado','Símbolo y significado','Laurel es a victoria como corona es a...', ['autoridad','tristeza','velocidad','silencio'],0,'El laurel simboliza la victoria; la corona puede simbolizar autoridad.'],
  ['Avanzado','Intensidad','Goteo es a lluvia como murmullo es a...', ['voz','silencio','grito','canción'],0,'El goteo es una manifestación leve de la lluvia; el murmullo es una manifestación leve de la voz.'],
  ['Avanzado','Orden','Tesis es a conclusión como problema es a...', ['solución','pregunta','causa','duda'],0,'Una tesis puede conducir a una conclusión; un problema busca una solución.'],
  ['Avanzado','Causa y efecto','Erosión es a relieve como práctica es a...', ['destreza','olvido','pausa','ruido'],0,'La erosión transforma el relieve; la práctica desarrolla la destreza.'],
  ['Avanzado','Condición y resultado','Disciplina es a logro como negligencia es a...', ['fracaso','premio','descanso','acuerdo'],0,'La disciplina favorece el logro; la negligencia puede conducir al fracaso.'],
  ['Avanzado','Relación recíproca','Enseñar es a aprender como preguntar es a...', ['responder','observar','dibujar','caminar'],0,'Enseñar se relaciona con aprender; preguntar se relaciona con responder.'],
  ['Avanzado','Herramienta y producto','Telar es a tejido como horno es a...', ['cerámica','alimento','semilla','madera'],0,'El telar produce tejidos; el horno puede producir cerámica.'],
  ['Avanzado','Instrumento y objeto de estudio','Microscopio es a célula como telescopio es a...', ['estrella','montaña','semilla','sonido'],0,'El microscopio permite observar células; el telescopio permite observar estrellas.'],
  ['Avanzado','Relación abstracta','Memoria es a recuerdo como imaginación es a...', ['idea','ruido','olvido','medida'],0,'La memoria conserva recuerdos; la imaginación puede producir ideas.'],
  ['Avanzado','Categoría','Triángulo es a polígono como cubo es a...', ['poliedro','círculo','línea','punto'],0,'El triángulo es un polígono; el cubo es un poliedro.'],
  ['Avanzado','Transformación','Mineral es a metal como leche es a...', ['yogur','agua','sal','harina'],0,'Un mineral puede transformarse en metal; la leche puede transformarse en yogur.'],
  ['Avanzado','Lugar y actividad','Archivo es a conservar como laboratorio es a...', ['investigar','cocinar','dormir','nadar'],0,'En un archivo se conservan documentos; en un laboratorio se investiga.'],
  ['Avanzado','Antonimia','Efímero es a permanente como artificial es a...', ['natural','moderno','brillante','pequeño'],0,'Efímero y permanente son opuestos; artificial y natural también.'],
  ['Avanzado','Sinonimia','Adversidad es a dificultad como beneficio es a...', ['ventaja','pérdida','problema','duda'],0,'Adversidad y dificultad son semejantes; beneficio y ventaja también.'],
  ['Avanzado','Parte y todo','Verso es a poema como capítulo es a...', ['novela','párrafo','autor','biblioteca'],0,'El verso forma parte de un poema; el capítulo forma parte de una novela.'],
  ['Avanzado','Origen y producto','Olivo es a aceite como trigo es a...', ['harina','madera','tela','vidrio'],0,'El olivo produce aceite; el trigo puede transformarse en harina.'],
  ['Avanzado','Símbolo y concepto','Balanza es a justicia como corona es a...', ['monarquía','deporte','agricultura','música'],0,'La balanza simboliza la justicia; la corona se relaciona con la monarquía.'],
  ['Avanzado','Secuencia lógica','Causa es a efecto como pregunta es a...', ['respuesta','hipótesis','silencio','camino'],0,'Una causa produce un efecto; una pregunta busca una respuesta.'],
  ['Avanzado','Instrumento y fenómeno','Sismógrafo es a terremoto como pluviómetro es a...', ['lluvia','viento','nieve','calor'],0,'El sismógrafo registra terremotos; el pluviómetro mide la lluvia.'],
  ['Avanzado','Creador y obra','Dramaturgo es a obra teatral como coreógrafo es a...', ['danza','novela','escultura','sinfonía'],0,'El dramaturgo crea obras teatrales; el coreógrafo crea danzas.'],
  ['Avanzado','Relación múltiple','Escuchar es a comprender como observar es a...', ['interpretar','correr','dormir','gritar'],0,'Escuchar ayuda a comprender; observar ayuda a interpretar.'],
  ['Avanzado','Relación recíproca','Pregunta es a respuesta como oferta es a...', ['demanda','regalo','compra','promesa'],0,'Una pregunta espera una respuesta; una oferta se relaciona con una demanda.'],
  ['Avanzado','Parte y sistema','Cable es a circuito como vena es a...', ['sistema circulatorio','sistema solar','sistema digestivo','sistema óseo'],0,'El cable forma parte de un circuito; la vena forma parte del sistema circulatorio.']
].map(([difficulty,type,prompt,options,answer,explanation], index) => ({id:index + 1,difficulty,type,prompt,options,answer,explanation}));

const $ = id => document.getElementById(id);
const storage = {
  get(key, fallback = '') {
    try { return localStorage.getItem(key) || fallback; } catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, value); } catch { /* El juego sigue funcionando sin almacenamiento local. */ }
  }
};
const total = 30;
const errorThreshold = 15;
const resultsEndpoint = 'https://script.google.com/macros/s/AKfycbx2rb6uOeRqPvdicauu_q3O114DjExI0Tv3SMqRzm2h5-5y9c6MGdF2djLjfEp6expPIA/exec';
const historyKey = 'yachay-results';
const recentQuestionsKey = 'yachay-recent-questions';
const questionBank = questions;
let active = [], current = 0, score = 0, correct = 0, streak = 0, bestStreak = 0, answered = false, elapsed = 0, timerId, resultSaved = false, resultSaving = false, currentResult = null;
let audioContext, gain, soundOn = true;
const clickAudio = document.getElementById('click-audio');
const shuffle = items => [...items].sort(() => Math.random() - 0.5);
const formatTime = seconds => `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
function getHistory() {
  try {
    const saved = JSON.parse(storage.get(historyKey, '[]'));
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}
function formatResultDate(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? 'Sin fecha' : date.toLocaleString('es-PE', {dateStyle: 'short', timeStyle: 'short'});
}
function normalizeStudentName(name) {
  return String(name).trim().toLocaleLowerCase('es');
}
function getLatestStudentResult(name) {
  const student = normalizeStudentName(name);
  return getHistory()
    .filter(item => normalizeStudentName(item.nombre) === student)
    .sort((first, second) => new Date(second.fecha) - new Date(first.fecha))[0];
}
function getQuestionPlan(name) {
  const latestResult = getLatestStudentResult(name);
  return latestResult && Number(latestResult.errores) >= errorThreshold
    ? {'Básico': 20, 'Intermedio': 10}
    : {'Básico': 10, 'Intermedio': 10, 'Avanzado': 10};
}
function chooseQuestions(name) {
  let recentIds = [];
  try {
    const saved = JSON.parse(storage.get(recentQuestionsKey, '[]'));
    recentIds = Array.isArray(saved) ? saved : [];
  } catch {
    recentIds = [];
  }
  const recent = new Set(recentIds);
  const selected = Object.entries(getQuestionPlan(name)).flatMap(([level, count]) => {
    const levelQuestions = questionBank.filter(item => item.difficulty === level);
    const fresh = shuffle(levelQuestions.filter(item => !recent.has(item.id)));
    return (fresh.length >= count ? fresh : shuffle(levelQuestions)).slice(0, count);
  });
  const selectedIds = selected.map(item => item.id);
  storage.set(recentQuestionsKey, JSON.stringify([...selectedIds, ...recentIds].slice(0, total)));
  return shuffle(selected);
}
function getResultLevel() {
  const levels = [...new Set(active.map(item => item.difficulty))];
  return levels.length === 1 ? levels[0] : 'Mixto';
}
function createResult(name) {
  return {
    fecha: new Date().toISOString(),
    nombre: name,
    aciertos: correct,
    errores: total - correct,
    nivel: getResultLevel(),
    porcentaje: Math.round(correct / total * 100),
    puntaje: score,
    tiempo: elapsed
  };
}
function storeResult(result) {
  const history = getHistory().filter(item => item.fecha !== result.fecha);
  storage.set(historyKey, JSON.stringify([result, ...history].slice(0, 100)));
  renderHistory();
}
function renderHistory(filter = '') {
  const history = getHistory().sort((first, second) => new Date(second.fecha) - new Date(first.fecha));
  const filterElement = $('history-student-filter');
  const list = $('history-list');
  const status = $('history-status');
  if (!filterElement || !list || !status) return;

  const students = [...new Set(history.map(item => item.nombre).filter(Boolean))].sort((first, second) => first.localeCompare(second, 'es', {sensitivity: 'base'}));
  filterElement.innerHTML = '<option value="">Todos los estudiantes</option>' + students.map(student => `<option value="${escapeHtml(student)}">${escapeHtml(student)}</option>`).join('');
  const selectedStudent = students.includes(filter) ? filter : '';
  filterElement.value = selectedStudent;
  const filtered = selectedStudent ? history.filter(item => item.nombre === selectedStudent) : history;
  list.innerHTML = filtered.map(item => `<tr><th scope="row">${escapeHtml(item.nombre || 'Estudiante')}</th><td>${item.aciertos}/${total}</td><td>${item.errores}</td><td><span class="level-badge">${escapeHtml(item.nivel || 'Mixto')}</span></td><td>${escapeHtml(formatResultDate(item.fecha))}</td></tr>`).join('');
  status.textContent = filtered.length ? `${filtered.length} resultado${filtered.length === 1 ? '' : 's'} guardado${filtered.length === 1 ? '' : 's'}.` : 'No hay resultados guardados para este filtro.';
}
function startTimer() { clearInterval(timerId); elapsed = 0; $('timer').textContent = '00:00'; timerId = setInterval(() => { elapsed++; $('timer').textContent = formatTime(elapsed); }, 1000); }

function updateProgress(completed) { $('progress-bar').style.width = `${(completed / total) * 100}%`; $('progress').setAttribute('aria-valuenow', completed); }
function startQuiz() {
  const name = $('student-name').value.trim() || 'Estudiante';
  storage.set('yachay-student', name);
  active = chooseQuestions(name); current = 0; score = 0; correct = 0; streak = 0; bestStreak = 0; resultSaved = false; resultSaving = false; currentResult = null;
  $('save-button').disabled = false; $('save-button').innerHTML = 'Reintentar guardado <span>↓</span>'; $('save-status').textContent = '';
  $('intro-screen').classList.add('hidden'); $('history-panel').classList.add('hidden'); $('results-screen').classList.add('hidden'); $('quiz-screen').classList.remove('hidden'); renderQuestion(); startTimer();
  playTone(392, .12, 'sine', .12);
  window.scrollTo({top: 0, behavior: 'smooth'});
}
function renderQuestion() {
  answered = false; const item = active[current];
  $('question-number').textContent = String(current + 1).padStart(2, '0'); $('difficulty').textContent = item.difficulty.toUpperCase(); $('analogy-type').textContent = item.type; $('question-title').textContent = item.prompt; $('score').textContent = String(score).padStart(3, '0');
  updateProgress(current); $('feedback').classList.add('hidden'); $('next-button').classList.add('hidden');
  $('options-list').innerHTML = item.options.map((option,index) => `<button class="option" type="button" data-index="${index}" aria-label="Opción ${String.fromCharCode(65 + index)}: ${option}"><span class="option-letter" aria-hidden="true">${String.fromCharCode(65 + index)}</span><span>${option}</span></button>`).join('');
  document.querySelectorAll('.option').forEach(button => button.addEventListener('click', () => { playClickSound(); answer(Number(button.dataset.index)); }));
}
function answer(index) {
  if (answered) return; answered = true; const item = active[current]; const right = index === item.answer;
  document.querySelectorAll('.option').forEach((button, optionIndex) => { button.disabled = true; if (optionIndex === item.answer) button.classList.add('correct'); if (optionIndex === index && !right) button.classList.add('wrong'); });
  if (right) { correct++; streak++; bestStreak = Math.max(bestStreak, streak); score += 10 + Math.min(streak, 5); $('feedback-title').textContent = streak > 1 ? `¡Excelente! Racha de ${streak}` : '¡Muy bien!'; $('feedback-icon').textContent = '✓'; $('feedback').className = 'feedback'; } else { streak = 0; $('feedback-title').textContent = 'Casi. Sigue explorando'; $('feedback-icon').textContent = '↺'; $('feedback').className = 'feedback wrong-feedback'; }
  playAnswerSound(right);
  $('feedback-text').textContent = item.explanation; $('correct-count').textContent = correct; $('streak-count').textContent = streak; $('score').textContent = String(score).padStart(3, '0'); $('next-button').classList.remove('hidden'); updateProgress(current + 1); $('next-button').focus();
}
function nextQuestion() { playTone(330, .09, 'sine', .1); current++; if (current >= total) showResults(); else renderQuestion(); }
function showResults() {
  clearInterval(timerId);
  $('quiz-screen').classList.add('hidden'); $('results-screen').classList.remove('hidden'); const name = storage.get('yachay-student', 'Estudiante'); const previous = Number(storage.get('yachay-best-score', 0)); const newBest = score >= previous;
  storage.set('yachay-best-score', String(Math.max(score, previous))); $('result-name').textContent = name; $('final-score').textContent = score; $('final-correct').textContent = `${correct}/${total}`; $('final-errors').textContent = total - correct; $('final-percent').textContent = `${Math.round(correct / total * 100)}%`; $('final-time').textContent = formatTime(elapsed); $('final-streak').textContent = bestStreak; $('best-result').classList.toggle('hidden', !newBest); window.scrollTo({top: 0, behavior: 'smooth'});
  currentResult = createResult(name);
  storeResult(currentResult);
  saveResults(currentResult);
}
function saveResults(result = currentResult) {
  if (resultSaved || resultSaving) return;
  if (!result) return;
  resultSaving = true;
  const button = $('save-button');
  const status = $('save-status');
  button.disabled = true;
  button.textContent = 'Guardando...';
  status.textContent = 'Enviando tu resultado...';
  fetch(resultsEndpoint, {
    method: 'POST',
    mode: 'no-cors',
    headers: {'Content-Type': 'text/plain;charset=utf-8'},
    body: JSON.stringify(result)
  }).then(() => {
    resultSaved = true;
    resultSaving = false;
    button.textContent = 'Resultado enviado';
    status.textContent = 'Resultado guardado y enviado correctamente.';
  }).catch(() => {
    resultSaving = false;
    button.disabled = false;
    button.innerHTML = 'Reintentar guardado <span>↓</span>';
    status.textContent = 'El resultado quedó guardado en este dispositivo, pero no se pudo enviar. Inténtalo nuevamente.';
  });
}
function ensureAudio() {
  if (audioContext) return true;
  const AudioCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtor) return false;
  audioContext = new AudioCtor(); gain = audioContext.createGain(); gain.gain.value = .06; gain.connect(audioContext.destination);
  return true;
}
function playTone(frequency, duration = .16, type = 'sine', volume = .12) {
  if (!soundOn || !ensureAudio()) return;
  if (audioContext.state === 'suspended') audioContext.resume();
  const oscillator = audioContext.createOscillator(); const envelope = audioContext.createGain(); const now = audioContext.currentTime;
  oscillator.type = type; oscillator.frequency.setValueAtTime(frequency, now); envelope.gain.setValueAtTime(0, now); envelope.gain.linearRampToValueAtTime(volume, now + .015); envelope.gain.exponentialRampToValueAtTime(.001, now + duration);
  oscillator.connect(envelope); envelope.connect(gain); oscillator.start(now); oscillator.stop(now + duration + .02);
}
function playClickSound() {
  if (!soundOn) return;
  if (clickAudio) { clickAudio.currentTime = 0; clickAudio.volume = .7; clickAudio.play().catch(() => {}); }
  playTone(740, .06, 'square', .07);
}
function playAnswerSound(isCorrect) { if (isCorrect) { playTone(523, .14, 'sine', .18); setTimeout(() => playTone(659, .2, 'sine', .16), 80); } else playTone(180, .24, 'triangle', .16); }
function toggleSound() {
  if (!ensureAudio()) { $('sound-label').textContent = 'Sonido no disponible'; return; }
  if (audioContext.state === 'suspended') audioContext.resume(); soundOn = !soundOn; gain.gain.setTargetAtTime(soundOn ? .06 : 0, audioContext.currentTime, .03); $('sound-toggle').setAttribute('aria-pressed', String(soundOn)); $('sound-label').textContent = soundOn ? 'Efectos activos' : 'Efectos desactivados';
  if (soundOn) playTone(392, .2, 'sine', .16);
}
function initYachay() {
  const required = ['student-name', 'start-button', 'next-button', 'restart-button', 'save-button', 'save-status', 'sound-toggle', 'print-button', 'progress', 'timer', 'history-panel', 'history-student-filter', 'history-list', 'history-status'];
  const missing = required.filter(id => !$(id) && id !== 'progress');
  if (missing.length) {
    document.body.insertAdjacentHTML('afterbegin', '<p class="app-error">No se pudo cargar el recorrido. Recarga la página para intentarlo nuevamente.</p>');
    return;
  }
  $('student-name').value = storage.get('yachay-student', ''); $('progress').setAttribute('aria-valuemax', total);
  $('history-student-filter').addEventListener('change', event => renderHistory(event.target.value));
  renderHistory();
  $('start-button').addEventListener('click', startQuiz); $('next-button').addEventListener('click', nextQuestion); $('restart-button').addEventListener('click', startQuiz); $('save-button').addEventListener('click', () => saveResults()); $('sound-toggle').addEventListener('click', toggleSound); $('print-button').addEventListener('click', () => window.print()); $('student-name').addEventListener('keydown', event => { if (event.key === 'Enter') startQuiz(); });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initYachay); else initYachay();
