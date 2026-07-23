---
name: react-code-review-demo
description: Revisa componentes de React y TypeScript en TaskFlow verificando buenas prácticas, convenciones del proyecto y errores comunes. Usar cuando el usuario pida revisar, auditar o validar código de React recién escrito, o antes de hacer commit de nuevos componentes.
---

# Revisión de código React + TypeScript

## Instrucciones

Al revisar un componente o archivo, verifica cada uno de estos puntos y repórtalos
agrupados por severidad. No corrijas nada automáticamente a menos que el usuario
lo pida explícitamente — primero reporta.

### 🔴 Errores (bloquean el merge)

- Uso de `any` en vez de un tipo explícito
- Props sin tipar o con tipos implícitos
- `useEffect` sin arreglo de dependencias, o con dependencias incompletas
- Estado mutado directamente (ej. `state.push(x)` en vez de crear un nuevo array)
- Keys de listas usando el índice del array cuando el orden puede cambiar
- Llamadas a hooks dentro de condicionales, loops, o después de un `return` temprano

### 🟡 Advertencias (revisar, no siempre bloquean)

- Componentes de más de ~150 líneas — candidato a dividir
- Lógica de negocio mezclada directamente en el JSX en vez de extraída a funciones/hooks
- Falta de manejo de estados de carga o error en llamadas asíncronas
- Nombres de variables o funciones poco descriptivos (`data`, `temp`, `x`)

### 🔵 Convenciones del proyecto (según CLAUDE.md)

- Debe usar `export` nombrado, nunca `export default`
- Un componente por archivo, nombre de archivo = nombre del componente
- Tipos e interfaces deben vivir en `src/types/`, no inline en el componente
- Estado global: sin librerías externas, solo hooks nativos (a menos que el
  proyecto ya haya adoptado una)

## Formato de salida

#### 🔴 Errores

- [línea X](descripcion): descripción del problema y por qué importa

#### 🟡 Advertencias

#### 🔵 Convenciones

#### Resumen

[1-2 líneas: ¿el archivo está listo para commit o necesita cambios?]

Si el archivo no tiene problemas en alguna categoría, omite esa sección en vez de escribir "ninguno" — mantén el reporte corto y accionable.
