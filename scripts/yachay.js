const questions = [
  ['Básico','Sinonimia','Feliz es a alegre como triste es a...', ['deprimido','ruidoso','rápido','brillante'],0,'Feliz y alegre son palabras de significado semejante; triste y deprimido también.'],
  ['Básico','Antonimia','Grande es a pequeño como alto es a...', ['ancho','bajo','largo','fuerte'],1,'Grande y pequeño son opuestos, al igual que alto y bajo.'],
  ['Básico','Género','Gato es a gata como caballo es a...', ['potro','yegua','burro','caballo'],1,'Gata es el femenino de gato; yegua es el femenino de caballo.'],
  ['Básico','Animal y alimento','Vaca es a pasto como conejo es a...', ['semilla','carne','zanahoria','leche'],2,'El pasto es un alimento de la vaca; la zanahoria es un alimento del conejo.'],
  ['Básico','Objeto y uso','Lápiz es a escribir como tijera es a...', ['pegar','cortar','medir','borrar'],1,'El lápiz sirve para escribir; la tijera sirve para cortar.'],
  ['Básico','Profesión y herramienta','Médico es a estetoscopio como fotógrafo es a...', ['cámara','pincel','martillo','balanza'],0,'El médico utiliza un estetoscopio; el fotógrafo utiliza una cámara.'],
  ['Básico','Emoción','Llanto es a tristeza como sonrisa es a...', ['miedo','alegría','enojo','sorpresa'],1,'El llanto puede expresar tristeza; la sonrisa puede expresar alegría.'],
  ['Básico','Vehículo y conductor','Conductor es a automóvil como piloto es a...', ['avión','bicicleta','tren','barco'],0,'El conductor maneja un automóvil; el piloto conduce un avión.'],
  ['Básico','Parte y todo','Dedo es a mano como hoja es a...', ['flor','árbol','raíz','fruto'],1,'El dedo es parte de la mano; la hoja es parte del árbol.'],
  ['Básico','Tiempo','Día es a semana como mes es a...', ['hora','año','minuto','siglo'],1,'El día forma parte de la semana; el mes forma parte del año.'],
  ['Intermedio','Lugar y actividad','Biblioteca es a leer como laboratorio es a...', ['cocinar','experimentar','dormir','nadar'],1,'En una biblioteca se lee; en un laboratorio se experimenta.'],
  ['Intermedio','Causa y efecto','Lluvia es a inundación como fuego es a...', ['humo','ceniza','helada','rocío'],1,'La lluvia puede causar una inundación; el fuego puede producir ceniza.'],
  ['Intermedio','Animal y grupo','Oveja es a rebaño como abeja es a...', ['manada','jauría','colmena','bandada'],2,'Un grupo de ovejas es un rebaño; un grupo de abejas vive en una colmena.'],
  ['Intermedio','Materia y producto','Madera es a mesa como arcilla es a...', ['vasija','ventana','lápiz','tejido'],0,'La madera puede transformarse en una mesa; la arcilla puede transformarse en una vasija.'],
  ['Intermedio','Objeto y contenido','Libro es a páginas como casa es a...', ['ladrillos','habitaciones','techo','puerta'],1,'Las páginas forman parte de un libro; las habitaciones forman parte de una casa.'],
  ['Intermedio','Acción y objeto','Remar es a bote como cabalgar es a...', ['caballo','silla','camino','rueda'],0,'Se rema usando un bote; se cabalga usando un caballo.'],
  ['Intermedio','Intensidad','Susurro es a voz como chispa es a...', ['luz','incendio','agua','nube'],1,'Un susurro es una manifestación pequeña de la voz; una chispa puede iniciar un incendio.'],
  ['Intermedio','Necesidad y satisfacción','Agua es a sed como alimento es a...', ['hambre','sueño','frío','cansancio'],0,'El agua satisface la sed; el alimento satisface el hambre.'],
  ['Intermedio','Estación y fenómeno','Sol es a verano como lluvia es a...', ['invierno','otoño','primavera','noche'],1,'El sol se relaciona con el verano; la lluvia es frecuente durante el otoño.'],
  ['Intermedio','Objeto y lugar','Avión es a aeropuerto como tren es a...', ['puerto','estación','carretera','garaje'],1,'El avión llega al aeropuerto; el tren llega a la estación.'],
  ['Avanzado','Secuencia','Semilla es a planta como huevo es a...', ['nido','ave','pluma','cáscara'],1,'De una semilla puede nacer una planta; de un huevo puede nacer un ave.'],
  ['Avanzado','Categoría','Rosa es a flor como pino es a...', ['bosque','árbol','hoja','semilla'],1,'La rosa pertenece a la categoría flor; el pino pertenece a la categoría árbol.'],
  ['Avanzado','Relación abstracta','Ignorancia es a conocimiento como oscuridad es a...', ['sombra','luz','nube','noche'],1,'El conocimiento se opone a la ignorancia; la luz se opone a la oscuridad.'],
  ['Avanzado','Instrumento y resultado','Termómetro es a temperatura como balanza es a...', ['distancia','peso','volumen','velocidad'],1,'El termómetro mide la temperatura; la balanza mide el peso.'],
  ['Avanzado','Creador y obra','Poeta es a poema como compositor es a...', ['novela','sinfonía','pintura','escultura'],1,'El poeta crea poemas; el compositor crea sinfonías.'],
  ['Avanzado','Símbolo y significado','Paloma es a paz como balanza es a...', ['justicia','rapidez','silencio','alegría'],0,'La paloma es un símbolo de paz; la balanza es un símbolo de justicia.'],
  ['Avanzado','Proceso','Pregunta es a respuesta como problema es a...', ['duda','solución','error','pregunta'],1,'Una pregunta busca una respuesta; un problema busca una solución.'],
  ['Avanzado','Recipiente y contenido','Frasco es a perfume como sobre es a...', ['carta','papel','tinta','sello'],0,'El perfume puede estar dentro de un frasco; la carta puede estar dentro de un sobre.'],
  ['Avanzado','Origen y destino','Río es a mar como camino es a...', ['puente','destino','viaje','montaña'],1,'El río desemboca en el mar; el camino conduce hacia un destino.'],
  ['Avanzado','Relación múltiple','Leer es a comprender como observar es a...', ['imaginar','analizar','correr','escuchar'],1,'La lectura permite comprender; la observación permite analizar con atención.'],
  ['Avanzado','Antónimo','Generoso es a egoísta como valiente es a...', ['prudente','cobarde','fuerte','curioso'],1,'Generoso y egoísta son opuestos; valiente y cobarde también.'],
  ['Avanzado','Parte y sistema','Corazón es a cuerpo como motor es a...', ['rueda','automóvil','carretera','volante'],1,'El corazón es esencial para el cuerpo; el motor es esencial para el automóvil.'],
  ['Avanzado','Profesión y espacio','Juez es a tribunal como docente es a...', ['biblioteca','escuela','hospital','mercado'],1,'El juez trabaja en un tribunal; el docente trabaja en una escuela.'],
  ['Avanzado','Transformación','Uva es a vino como leche es a...', ['queso','agua','harina','sal'],0,'La uva se transforma en vino; la leche puede transformarse en queso.'],
  ['Avanzado','Orden','Infancia es a juventud como mañana es a...', ['noche','tarde','mediodía','madrugada'],1,'La juventud sucede después de la infancia; la tarde sucede después de la mañana.'],
  ['Avanzado','Función','Mapa es a orientar como diccionario es a...', ['traducir','definir','dibujar','calcular'],1,'Un mapa ayuda a orientarse; un diccionario ayuda a encontrar definiciones.']
].map(([difficulty,type,prompt,options,answer,explanation]) => ({difficulty,type,prompt,options,answer,explanation}));

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
const questionBank = questions.slice(0, total);
let active = [], current = 0, score = 0, correct = 0, streak = 0, bestStreak = 0, answered = false, elapsed = 0, timerId;
let audioContext, gain, soundOn = true;
const clickAudio = document.getElementById('click-audio');
const shuffle = items => [...items].sort(() => Math.random() - 0.5);
const formatTime = seconds => `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
function startTimer() { clearInterval(timerId); elapsed = 0; $('timer').textContent = '00:00'; timerId = setInterval(() => { elapsed++; $('timer').textContent = formatTime(elapsed); }, 1000); }

function updateProgress(completed) { $('progress-bar').style.width = `${(completed / total) * 100}%`; $('progress').setAttribute('aria-valuenow', completed); }
function startQuiz() {
  const name = $('student-name').value.trim() || 'Estudiante';
  storage.set('yachay-student', name);
  active = shuffle(questionBank); current = 0; score = 0; correct = 0; streak = 0; bestStreak = 0;
  $('intro-screen').classList.add('hidden'); $('results-screen').classList.add('hidden'); $('quiz-screen').classList.remove('hidden'); renderQuestion(); startTimer();
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
  storage.set('yachay-best-score', String(Math.max(score, previous))); $('result-name').textContent = name; $('final-score').textContent = score; $('final-correct').textContent = `${correct}/${total}`; $('final-percent').textContent = `${Math.round(correct / total * 100)}%`; $('final-time').textContent = formatTime(elapsed); $('final-streak').textContent = bestStreak; $('best-result').classList.toggle('hidden', !newBest); window.scrollTo({top: 0, behavior: 'smooth'});
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
  const required = ['student-name', 'start-button', 'next-button', 'restart-button', 'sound-toggle', 'print-button', 'progress', 'timer'];
  const missing = required.filter(id => !$(id) && id !== 'progress');
  if (missing.length) {
    document.body.insertAdjacentHTML('afterbegin', '<p class="app-error">No se pudo cargar el recorrido. Recarga la página para intentarlo nuevamente.</p>');
    return;
  }
  $('student-name').value = storage.get('yachay-student', ''); $('progress').setAttribute('aria-valuemax', total);
  $('start-button').addEventListener('click', startQuiz); $('next-button').addEventListener('click', nextQuestion); $('restart-button').addEventListener('click', startQuiz); $('sound-toggle').addEventListener('click', toggleSound); $('print-button').addEventListener('click', () => window.print()); $('student-name').addEventListener('keydown', event => { if (event.key === 'Enter') startQuiz(); });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initYachay); else initYachay();
