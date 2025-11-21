# ⚡ Práctica de Peticiones HTTP - PokéAPI

## 📋 Información General

**Estudiante:** [Tu Nombre]  
**Fecha:** 21 de noviembre de 2025  
**Rama:** `feature/http-client`  
**API Utilizada:** [PokéAPI](https://pokeapi.co)

## 🎯 Objetivos de la Práctica

1. Comprender y aplicar los conceptos de HTTP/HTTPS, métodos REST, códigos de estado y CORS desde el entorno del frontend.
2. Implementar una página web responsiva y semántica que realice peticiones a un servicio REST real.
3. Registrar, analizar y documentar los resultados obtenidos mediante herramientas de desarrollo.
4. Fortalecer la capacidad de contrastar la teoría con la ejecución real dentro del proyecto integrador.

## 🚀 Características Implementadas

### ✅ Funcionalidades
- ✔️ Página web HTML5 semántica y responsiva
- ✔️ Implementación de peticiones GET a diferentes endpoints de PokéAPI
- ✔️ Uso de Fetch API para peticiones asíncronas
- ✔️ Registro detallado en consola de cada petición
- ✔️ Visualización de resultados en interfaz gráfica
- ✔️ Tarjetas especiales para mostrar información de Pokémon con imágenes
- ✔️ Sistema de logs persistente durante la sesión
- ✔️ Análisis de headers (request y response)
- ✔️ Documentación de políticas CORS
- ✔️ Medición de tiempos de respuesta
- ✔️ Diseño moderno con CSS3 y animaciones

### 🛠️ Tecnologías Utilizadas
- **HTML5** - Estructura semántica
- **CSS3** - Diseño responsivo y moderno
- **JavaScript ES6+** - Lógica de la aplicación
- **Fetch API** - Peticiones HTTP
- **PokéAPI** - API REST pública con datos de Pokémon

## 📊 Tabla de Resultados de Peticiones

| Método | URL | Código de Estado | Tiempo Respuesta | Observaciones CORS |
|--------|-----|------------------|------------------|--------------------|
| GET | https://pokeapi.co/api/v2/pokemon/pikachu | 200 OK | ~200-500 ms | `access-control-allow-origin: *` - Permite peticiones desde cualquier origen |
| GET | https://pokeapi.co/api/v2/pokemon?limit=20 | 200 OK | ~250-600 ms | `access-control-allow-origin: *` - Sin restricciones de CORS |

### 📋 Headers Observados

#### Request Headers (enviados por el cliente)
```
Content-Type: application/json
Accept: application/json
Origin: [tu-dominio]
User-Agent: Mozilla/5.0...
```

#### Response Headers (recibidos del servidor)
```
content-type: application/json; charset=utf-8
access-control-allow-origin: *
cache-control: public, max-age=86400, s-maxage=86400
```

## ⚡ Endpoints de PokéAPI Utilizados

### 1. Obtener Pokémon Específico
```
GET https://pokeapi.co/api/v2/pokemon/{nombre-o-id}
Ejemplos: pikachu, 25, charizard, mewtwo
```

### 2. Obtener Lista de Pokémon
```
GET https://pokeapi.co/api/v2/pokemon?limit=20
Retorna los primeros 20 Pokémon con sus URLs
```

## 🔧 Cómo Usar Diferentes APIs

### Pasos para Cambiar la API:

1. **Modificar la URL Base en `script.js`:**
   ```javascript
   const API_BASE_URL = 'https://tu-api.com/api';
   ```

2. **Actualizar los Endpoints:**
   ```javascript
   async function tuFuncion() {
     const endpoint = '/tu-endpoint';
     await realizarPeticion('GET', endpoint);
   }
   ```

3. **Adaptar la Visualización:**
   ```javascript
   // En la función mostrarResultado(), adapta el HTML
   // según la estructura de datos de tu API
   ```

### Otras APIs Públicas Recomendadas:

- **JSONPlaceholder**: `https://jsonplaceholder.typicode.com`
- **Rick and Morty API**: `https://rickandmortyapi.com/api`
- **Star Wars API (SWAPI)**: `https://swapi.dev/api`
- **The Cat API**: `https://api.thecatapi.com/v1`
- **Open Weather Map**: `https://api.openweathermap.org/data/2.5` (requiere API key)
- **REST Countries**: `https://restcountries.com/v3.1`

## 📸 Evidencias de Ejecución

### 1. Consola del Navegador
La consola muestra información detallada de cada petición:
- ✅ URL solicitada
- ✅ Método HTTP usado
- ✅ Tiempo de respuesta en milisegundos
- ✅ Código de estado HTTP
- ✅ Request Headers completos
- ✅ Response Headers completos
- ✅ Datos de respuesta (JSON)
- ✅ Información de CORS

### 2. Pestaña Network (Developer Tools)
Se puede observar:
- ✅ Timeline de peticiones
- ✅ Tamaño de la respuesta
- ✅ Headers de request y response
- ✅ Preview y Response de datos
- ✅ Timing detallado

### 3. Interfaz Gráfica
- ✅ Resultados mostrados en tiempo real
- ✅ Sistema de logs con historial
- ✅ Badges de estado coloreados
- ✅ Diseño responsivo que se adapta a móviles

## ❓ Respuestas a Preguntas de Control

### 1. ¿Qué diferencia existe entre un código de estado 200, 201, 400 y 500?

- **200 OK**: Indica que la petición se procesó correctamente. El servidor devuelve los datos solicitados. Se usa principalmente con GET y PUT.

- **201 Created**: Indica que la petición fue exitosa y como resultado se creó un nuevo recurso. Se usa típicamente con POST cuando se crea un nuevo registro.

- **400 Bad Request**: Error del cliente. Indica que la petición tiene sintaxis incorrecta o no puede ser procesada por el servidor. Por ejemplo, falta un campo obligatorio o el formato JSON es inválido.

- **500 Internal Server Error**: Error del servidor. Indica que el servidor encontró una situación inesperada que le impide completar la petición. Es un error genérico del lado del servidor.

**Categorización:**
- 2xx = Éxito
- 4xx = Error del Cliente
- 5xx = Error del Servidor

### 2. ¿Qué función cumple CORS en una aplicación web?

**CORS (Cross-Origin Resource Sharing)** es un mecanismo de seguridad implementado por los navegadores que permite o restringe peticiones HTTP entre diferentes dominios.

**Funciones principales:**
1. **Protección contra ataques maliciosos**: Previene que scripts de un dominio accedan a recursos de otro dominio sin autorización.

2. **Control de acceso**: El servidor decide explícitamente qué orígenes pueden acceder a sus recursos mediante headers como:
   - `Access-Control-Allow-Origin`: Define qué dominios pueden hacer peticiones
   - `Access-Control-Allow-Methods`: Define qué métodos HTTP están permitidos
   - `Access-Control-Allow-Headers`: Define qué headers puede enviar el cliente

3. **Same-Origin Policy**: Por defecto, los navegadores bloquean peticiones cross-origin. CORS permite flexibilizar esta política de manera controlada.

**Ejemplo práctico:**
- Una aplicación en `https://mi-app.com` NO puede hacer peticiones a `https://api-externa.com` a menos que este último incluya el header `Access-Control-Allow-Origin: https://mi-app.com` o `Access-Control-Allow-Origin: *` (cualquier origen).

### 3. ¿Cuál es la diferencia entre request headers y response headers?

**Request Headers (Headers de Petición):**
- **Origen**: Enviados por el **cliente** (navegador) al servidor
- **Propósito**: Proporcionar información sobre la petición y el cliente
- **Ejemplos**:
  - `Content-Type`: Tipo de datos que envía el cliente (ej: application/json)
  - `Accept`: Tipos de contenido que el cliente puede procesar
  - `Authorization`: Credenciales de autenticación
  - `User-Agent`: Información del navegador/cliente
  - `Origin`: Dominio desde donde se origina la petición

**Response Headers (Headers de Respuesta):**
- **Origen**: Enviados por el **servidor** al cliente
- **Propósito**: Proporcionar información sobre la respuesta y el servidor
- **Ejemplos**:
  - `Content-Type`: Tipo de datos que devuelve el servidor
  - `Access-Control-Allow-Origin`: Política CORS del servidor
  - `Cache-Control`: Directivas de caché
  - `Set-Cookie`: Cookies que el servidor quiere establecer
  - `Server`: Información del servidor web

**Flujo:**
```
Cliente → [Request Headers] → Servidor
Cliente ← [Response Headers] ← Servidor
```

### 4. ¿Por qué es importante documentar los tiempos de respuesta?

La documentación de tiempos de respuesta es crucial por varios motivos:

**1. Rendimiento y Experiencia de Usuario:**
- Identificar endpoints lentos que afectan la UX
- Establecer SLAs (Service Level Agreements)
- Detectar degradación de rendimiento

**2. Optimización:**
- Comparar antes/después de optimizaciones
- Identificar cuellos de botella
- Priorizar qué optimizar primero

**3. Monitoreo y Alertas:**
- Establecer umbrales de alerta
- Detectar problemas en producción tempranamente
- Identificar patrones de degradación

**4. Planificación de Capacidad:**
- Estimar necesidades de infraestructura
- Planificar escalamiento
- Calcular costos de hosting

**5. Debugging:**
- Identificar problemas de red
- Detectar timeouts
- Analizar latencia en diferentes regiones

**Métricas importantes:**
- Tiempo de respuesta promedio
- Percentiles (p50, p95, p99)
- Tiempo máximo/mínimo
- Tendencias temporales

### 5. ¿Qué riesgos tiene exponer peticiones sin validar en el frontend?

**Riesgos de Seguridad:**

1. **Inyección de Código (XSS - Cross-Site Scripting):**
   - Datos no validados pueden contener scripts maliciosos
   - Afecta a otros usuarios que vean esos datos
   - Puede robar cookies, tokens de sesión

2. **Exposición de Datos Sensibles:**
   - API keys, tokens o credenciales expuestas en el código frontend
   - Cualquiera puede ver el código fuente del navegador
   - Datos sensibles en URLs o localStorage

3. **Ataques de Manipulación:**
   - Los usuarios pueden modificar peticiones desde DevTools
   - Cambiar parámetros, IDs, cantidades
   - Acceder a recursos no autorizados

4. **Falta de Sanitización:**
   - Datos malformados pueden romper la aplicación
   - SQL Injection si se pasan directamente a backend
   - Path Traversal en rutas de archivos

5. **CSRF (Cross-Site Request Forgery):**
   - Sitios maliciosos pueden hacer peticiones en nombre del usuario
   - Necesidad de tokens CSRF

**Buenas Prácticas:**
```javascript
// ❌ MAL - Exponer API keys
const API_KEY = "sk_live_123456789";

// ✅ BIEN - Usar variables de entorno y proxy backend
const response = await fetch('/api/proxy', {
  // El backend maneja las credenciales
});

// ❌ MAL - No validar inputs
fetch(`/api/users/${userId}`); // userId puede ser manipulado

// ✅ BIEN - Validar y sanitizar
if (!Number.isInteger(userId) || userId < 1) {
  throw new Error('ID inválido');
}
```

### 6. ¿Qué consideraciones de seguridad se deben mantener al exponer endpoints entre servicios?

**Consideraciones de Seguridad Backend-to-Backend:**

**1. Autenticación y Autorización:**
- **API Keys**: Claves únicas por servicio
- **OAuth 2.0**: Tokens de acceso con scopes limitados
- **JWT (JSON Web Tokens)**: Tokens firmados con claims
- **mTLS (Mutual TLS)**: Autenticación bidireccional con certificados

**2. Cifrado de Comunicaciones:**
- **HTTPS/TLS obligatorio**: Nunca HTTP en producción
- **TLS 1.2+**: Versiones modernas y seguras
- **Certificados válidos**: No self-signed en producción

**3. Control de Acceso:**
- **Principio de Menor Privilegio**: Solo acceso necesario
- **Whitelist de IPs**: Restringir por IP origen
- **Rate Limiting**: Límites de peticiones por servicio
- **Firewall de Aplicación (WAF)**: Filtrar tráfico malicioso

**4. Validación de Datos:**
- **Validación de Schema**: JSON Schema, OpenAPI
- **Sanitización**: Limpiar inputs peligrosos
- **Límites de tamaño**: Prevenir DoS con payloads grandes
- **Type checking**: Validar tipos de datos

**5. Gestión de Secretos:**
- **Nunca en código**: Usar variables de entorno
- **Vaults de secretos**: HashiCorp Vault, AWS Secrets Manager
- **Rotación de credenciales**: Cambiar periódicamente
- **Separación por entorno**: Dev, staging, prod

**6. Logging y Monitoreo:**
- **Auditoría de accesos**: Quién accede a qué
- **Detección de anomalías**: Patrones inusuales
- **No loggear secretos**: Ocultar datos sensibles
- **Alertas en tiempo real**: Notificar accesos sospechosos

**7. Headers de Seguridad:**
```
Content-Security-Policy
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Strict-Transport-Security
```

**8. Manejo de Errores:**
- **No exponer stack traces**: Info mínima al cliente
- **Códigos genéricos**: No revelar detalles internos
- **Logging detallado interno**: Para debugging

**Ejemplo de arquitectura segura:**
```
[Frontend] → [API Gateway] → [Auth Service] → [Backend Services]
              ↓
           Rate Limit
           API Key Validation
           CORS
           Request Validation
```

## 🔧 Instrucciones de Uso

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Edge)
- Conexión a internet (para acceder a PokéAPI)
- VS Code con extensión Live Server (recomendado)

### Pasos para Ejecutar

1. **Clonar o descargar el repositorio**
   ```bash
   git clone [URL-del-repositorio]
   cd [nombre-del-proyecto]
   ```

2. **Cambiar a la rama de trabajo**
   ```bash
   git checkout feature/http-client
   ```

3. **Abrir con Live Server**
   - Abrir `index.html` en VS Code
   - Click derecho → "Open with Live Server"
   - O simplemente abrir `index.html` en el navegador

4. **Interactuar con la aplicación**
   - Ingresar un nombre de Pokémon (ej: pikachu, charizard)
   - Hacer clic en "GET Pokémon" para ver información detallada
   - Hacer clic en "GET Lista" para ver 20 Pokémon
   - Observar los resultados en pantalla con imagen y stats
   - Revisar la consola del navegador (F12)
   - Analizar la pestaña Network de DevTools

### Ejemplos de Búsqueda

**Pokémon populares:**
- pikachu (ID: 25)
- charizard (ID: 6)
- mewtwo (ID: 150)
- bulbasaur (ID: 1)
- eevee (ID: 133)
- lucario (ID: 448)
- greninja (ID: 658)
- squirtle (ID: 7)
- dragonite (ID: 149)
- levitate

**Tipos:**
- fire
- water
- electric
- grass
- psychic
- dragon

### Análisis de Resultados

1. **Abrir Developer Tools** (F12)
2. **Pestaña Console**: Ver logs detallados de cada petición
3. **Pestaña Network**: 
   - Ver timeline de peticiones
   - Analizar headers
   - Revisar tiempos de respuesta
   - Verificar política CORS
   - Ver caché (PokéAPI usa caché de 24 horas)

## 📁 Estructura del Proyecto

```
proyecto/
│
├── index.html          # Estructura HTML semántica
├── styles.css          # Estilos responsivos
├── script.js           # Lógica de peticiones HTTP
├── README.md           # Documentación (este archivo)
└── .gitignore          # Archivos ignorados por Git
```

## 🎓 Conceptos Aplicados

### HTTP Methods
- **GET**: Obtener recursos (Pokémon, habilidades, tipos, listas)
- **POST**: Crear recursos (no aplicable en PokéAPI - es solo lectura)
- **PUT**: Actualizar recursos (no aplicable en PokéAPI)
- **DELETE**: Eliminar recursos (no aplicable en PokéAPI)

*Nota: PokéAPI es una API de solo lectura, por lo que solo soporta GET.*

### Códigos de Estado
- **200 OK**: Respuesta exitosa con datos
- **404 Not Found**: Recurso no encontrado (Pokémon inexistente)
- **2xx**: Respuestas exitosas en general
- **4xx**: Errores del cliente
- **5xx**: Errores del servidor

### CORS
- Política de seguridad del navegador
- Controla peticiones entre diferentes orígenes
- PokéAPI tiene `Access-Control-Allow-Origin: *` (permite todo)
- Configurado mediante headers HTTP

### Headers HTTP
- Request: Información enviada por el cliente
- Response: Información enviada por el servidor
- Content-Type, Accept, CORS headers, etc.

### Caché HTTP
- PokéAPI usa caché agresivo (86400 segundos = 24 horas)
- Header: `cache-control: public, max-age=86400`
- Reduce carga en el servidor
- Mejora rendimiento para el cliente

## 🚀 Mejoras Futuras

- [ ] Implementar búsqueda avanzada con filtros
- [ ] Agregar más endpoints (movimientos, regiones, ítems)
- [ ] Sistema de favoritos con LocalStorage
- [ ] Comparador de Pokémon
- [ ] Gráficos de estadísticas con Chart.js
- [ ] Modo offline con Service Workers
- [ ] Paginación para listas grandes
- [ ] Tests unitarios con Jest
- [ ] Integración con otras APIs de juegos

## 📝 Notas Adicionales

- **API Pública**: PokéAPI es gratuita y no requiere autenticación
- **CORS**: La API está configurada con `Access-Control-Allow-Origin: *` lo que permite peticiones desde cualquier origen
- **Tiempos de respuesta**: Pueden variar según la conexión a internet y carga del servidor
- **Caché**: PokéAPI usa caché de 24 horas, las peticiones repetidas serán más rápidas
- **Browser DevTools**: Herramienta esencial para desarrollo web frontend
- **Rate Limiting**: Sin límites oficiales, pero se recomienda usar caché local
- **Datos**: Información completa de las 9 generaciones de Pokémon

## 👨‍💻 Autor

[Tu Nombre]  
[Tu correo/contacto]  
ACD Plataformas - 2025

---

**Última actualización:** 21 de noviembre de 2025
