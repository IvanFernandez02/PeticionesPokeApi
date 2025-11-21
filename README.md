# ⚡ Práctica de Peticiones HTTP - PokéAPI

## 📋 Información General

**Estudiante:** Ivan Alexander Fernandez Cañar  
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


*Nota: PokéAPI es una API de solo lectura, por lo que solo soporta GET.*

### Códigos de Estado
- **200 OK**: Respuesta exitosa con datos


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

---

**Última actualización:** 21 de noviembre de 2025

