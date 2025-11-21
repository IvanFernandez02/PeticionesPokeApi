// ==================== CONFIGURACIÓN Y CONSTANTES ====================
const API_BASE_URL = 'https://pokeapi.co/api/v2';
const logs = [];

// ==================== ELEMENTOS DEL DOM ====================
const btnGetPokemon = document.getElementById('btnGetPokemon');
const btnGetList = document.getElementById('btnGetList');
const btnClearLogs = document.getElementById('btnClearLogs');
const pokemonInput = document.getElementById('pokemonInput');
const resultadoDiv = document.getElementById('resultado');
const logContainer = document.getElementById('logContainer');
const fechaSpan = document.getElementById('fecha');

// ==================== INICIALIZACIÓN ====================
document.addEventListener('DOMContentLoaded', () => {
  // Mostrar fecha actual
  fechaSpan.textContent = new Date().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Event Listeners
  btnGetPokemon.addEventListener('click', () => obtenerPokemon());
  btnGetList.addEventListener('click', () => obtenerListaPokemon());
  btnClearLogs.addEventListener('click', limpiarLogs);

  console.log('🚀 Aplicación de Peticiones HTTP inicializada');
  console.log('⚡ API Base URL:', API_BASE_URL);
  console.log('📚 Documentación: https://pokeapi.co/docs/v2');
});

// ==================== FUNCIÓN PRINCIPAL DE PETICIONES ====================
async function realizarPeticion(metodo, endpoint, body = null) {
  const url = `${API_BASE_URL}${endpoint}`;
  const startTime = performance.now();
  
  console.log(`\n${'='.repeat(60)}`);
  console.log(`🔄 Iniciando petición ${metodo}`);
  console.log(`📍 URL: ${url}`);
  console.log(`⏱️ Timestamp: ${new Date().toLocaleString('es-ES')}`);
  
  const options = {
    method: metodo,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };

  if (body) {
    options.body = JSON.stringify(body);
    console.log('📤 Body enviado:', body);
  }

  console.log('📋 Request Headers:', options.headers);

  try {
    const response = await fetch(url, options);
    const endTime = performance.now();
    const tiempoRespuesta = (endTime - startTime).toFixed(2);

    console.log(`✅ Respuesta recibida en ${tiempoRespuesta}ms`);
    console.log(`📊 Código de estado: ${response.status} ${response.statusText}`);
    console.log('📋 Response Headers:');
    
    // Registrar todos los headers de respuesta
    for (let [key, value] of response.headers.entries()) {
      console.log(`   ${key}: ${value}`);
    }

    // Verificar CORS
    const corsHeaders = {
      'access-control-allow-origin': response.headers.get('access-control-allow-origin') || '*',
      'access-control-allow-methods': response.headers.get('access-control-allow-methods') || 'No especificado',
      'access-control-allow-headers': response.headers.get('access-control-allow-headers') || 'No especificado'
    };
    console.log('🔐 CORS Headers:', corsHeaders);
    console.log('ℹ️ Nota: CORS Allow-Origin "*" significa que permite peticiones desde cualquier dominio');

    // Obtener datos de respuesta
    const data = await response.json();
    console.log('📦 Datos recibidos:', data);

    // Crear objeto de resultado
    const resultado = {
      metodo,
      url,
      status: response.status,
      statusText: response.statusText,
      tiempoRespuesta: `${tiempoRespuesta} ms`,
      headers: Object.fromEntries(response.headers.entries()),
      cors: corsHeaders,
      data,
      success: response.ok
    };

    // Registrar en logs
    agregarLog(resultado);

    // Mostrar en interfaz
    mostrarResultado(resultado);

    console.log(`${'='.repeat(60)}\n`);

    return resultado;

  } catch (error) {
    const endTime = performance.now();
    const tiempoRespuesta = (endTime - startTime).toFixed(2);

    console.error('❌ Error en la petición:', error);
    console.log(`⏱️ Tiempo antes del error: ${tiempoRespuesta}ms`);

    const resultado = {
      metodo,
      url,
      status: 'ERROR',
      statusText: error.message,
      tiempoRespuesta: `${tiempoRespuesta} ms`,
      error: error.message,
      success: false
    };

    agregarLog(resultado);
    mostrarResultado(resultado);

    console.log(`${'='.repeat(60)}\n`);

    return resultado;
  }
}

// ==================== MÉTODOS HTTP ====================

/**
 * Obtiene información de un Pokémon específico
 * GET /pokemon/{nombre-o-id}
 */
async function obtenerPokemon() {
  console.log('🔍 Ejecutando petición GET para obtener Pokémon');
  const pokemon = pokemonInput.value.toLowerCase().trim();
  
  if (!pokemon) {
    alert('Por favor, ingresa el nombre o ID de un Pokémon');
    return;
  }
  
  const endpoint = `/pokemon/${pokemon}`;
  await realizarPeticion('GET', endpoint);
}

/**
 * Obtiene una lista de Pokémon
 * GET /pokemon?limit=20
 */
async function obtenerListaPokemon() {
  console.log('📋 Ejecutando petición GET para obtener lista de Pokémon');
  const endpoint = '/pokemon?limit=20';
  await realizarPeticion('GET', endpoint);
}

// ==================== GESTIÓN DE LOGS ====================

/**
 * Agrega un nuevo log al array de logs
 */
function agregarLog(resultado) {
  const timestamp = new Date().toLocaleString('es-ES');
  logs.push({ ...resultado, timestamp });
  actualizarLogsUI();
}

/**
 * Actualiza la interfaz de logs
 */
function actualizarLogsUI() {
  if (logs.length === 0) {
    logContainer.innerHTML = '<p class="placeholder">Los logs aparecerán aquí...</p>';
    return;
  }

  logContainer.innerHTML = logs.map((log, index) => `
    <div class="log-entry ${log.success ? 'log-success' : 'log-error'}">
      <div class="log-timestamp">⏰ ${log.timestamp}</div>
      <div>
        <span class="log-method">${log.metodo}</span>
        <span>${log.url}</span>
      </div>
      <div>
        Estado: <strong>${log.status} ${log.statusText || ''}</strong> | 
        Tiempo: <strong>${log.tiempoRespuesta}</strong>
      </div>
    </div>
  `).reverse().join('');
}

/**
 * Limpia todos los logs
 */
function limpiarLogs() {
  logs.length = 0;
  actualizarLogsUI();
  console.clear();
  console.log('🧹 Logs limpiados');
}

// ==================== VISUALIZACIÓN DE RESULTADOS ====================

/**
 * Muestra los resultados de una petición en la interfaz
 */
function mostrarResultado(resultado) {
  const statusClass = resultado.success ? 'status-success' : 'status-error';
  const statusIcon = resultado.success ? '✅' : '❌';

  let html = `
    <div class="request-info">
      <h3>${statusIcon} Resultado de la Petición ${resultado.metodo}</h3>
      
      <div class="info-item">
        <strong>🌐 URL:</strong>
        <span>${resultado.url}</span>
      </div>
      
      <div class="info-item">
        <strong>🔧 Método:</strong>
        <span>${resultado.metodo}</span>
      </div>
      
      <div class="info-item">
        <strong>📊 Estado HTTP:</strong>
        <span class="status-badge ${statusClass}">
          ${resultado.status} ${resultado.statusText || ''}
        </span>
      </div>
      
      <div class="info-item">
        <strong>⏱️ Tiempo Respuesta:</strong>
        <span>${resultado.tiempoRespuesta}</span>
      </div>
  `;

  // Información de CORS
  if (resultado.cors) {
    const corsOrigin = resultado.cors['access-control-allow-origin'];
    html += `
      <div class="info-item">
        <strong>🔐 CORS Origin:</strong>
        <span>${corsOrigin === '*' ? '* (Permite cualquier origen)' : corsOrigin}</span>
      </div>
    `;
  }

  // Headers importantes
  if (resultado.headers) {
    html += `
      <div class="info-item">
        <strong>📋 Content-Type:</strong>
        <span>${resultado.headers['content-type'] || 'No especificado'}</span>
      </div>
    `;
  }

  html += `</div>`;

  // Mostrar datos de respuesta formateados para Pokémon
  if (resultado.data) {
    // Formatear datos específicos de Pokémon si es posible
    let displayData = resultado.data;
    
    // Si es información de un Pokémon específico
    if (displayData.name && displayData.sprites) {
      html += `
        <div class="pokemon-card">
          <h3>⚡ ${displayData.name.toUpperCase()}</h3>
          ${displayData.sprites?.front_default ? `<img src="${displayData.sprites.front_default}" alt="${displayData.name}" class="pokemon-sprite">` : ''}
          <div class="pokemon-info">
            <p><strong>Altura:</strong> ${displayData.height ? displayData.height / 10 : 'N/A'} m</p>
            <p><strong>Peso:</strong> ${displayData.weight ? displayData.weight / 10 : 'N/A'} kg</p>
            <p><strong>Tipos:</strong> ${displayData.types?.map(t => t.type.name).join(', ') || 'N/A'}</p>
            <p><strong>Habilidades:</strong> ${displayData.abilities?.map(a => a.ability.name).join(', ') || 'N/A'}</p>
          </div>
        </div>
      `;
    }
    
    html += `
      <div class="response-data">
        <strong>📦 Datos de Respuesta JSON:</strong>
        <pre>${JSON.stringify(displayData, null, 2)}</pre>
      </div>
    `;
  }

  // Mostrar error si existe
  if (resultado.error) {
    html += `
      <div class="response-data">
        <strong>❌ Error:</strong>
        <pre>${resultado.error}</pre>
      </div>
    `;
  }

  resultadoDiv.innerHTML = html;
}

// ==================== UTILIDADES ====================

/**
 * Obtiene información sobre códigos de estado HTTP
 */
function obtenerInfoCodigoEstado(codigo) {
  const codigos = {
    200: { tipo: 'Éxito', descripcion: 'OK - La petición se procesó correctamente' },
    201: { tipo: 'Éxito', descripcion: 'Created - El recurso fue creado exitosamente' },
    204: { tipo: 'Éxito', descripcion: 'No Content - Petición exitosa sin contenido de respuesta' },
    400: { tipo: 'Error Cliente', descripcion: 'Bad Request - La petición contiene sintaxis errónea' },
    401: { tipo: 'Error Cliente', descripcion: 'Unauthorized - Autenticación requerida' },
    403: { tipo: 'Error Cliente', descripcion: 'Forbidden - El servidor rechaza la petición' },
    404: { tipo: 'Error Cliente', descripcion: 'Not Found - Recurso no encontrado' },
    500: { tipo: 'Error Servidor', descripcion: 'Internal Server Error - Error interno del servidor' },
    502: { tipo: 'Error Servidor', descripcion: 'Bad Gateway - Respuesta inválida del servidor upstream' },
    503: { tipo: 'Error Servidor', descripcion: 'Service Unavailable - Servidor no disponible' }
  };

  return codigos[codigo] || { tipo: 'Desconocido', descripcion: 'Código de estado desconocido' };
}

// ==================== EXPORTAR PARA TESTING ====================
// Hacer funciones disponibles globalmente para debugging en consola
window.app = {
  obtenerPokemon,
  obtenerListaPokemon,
  logs,
  obtenerInfoCodigoEstado
};

console.log('💡 Tip: Puedes acceder a las funciones mediante window.app en la consola');
console.log('💡 Ejemplos de Pokémon: pikachu, charizard, mewtwo, bulbasaur, eevee');
