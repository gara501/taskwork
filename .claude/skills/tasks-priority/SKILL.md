---
name: tasks-priority
description: Sugiere un orden de prioridad para las tareas pendientes de TaskFlow según urgencia y esfuerzo estimado. Usar cuando el usuario pida ayuda para decidir qué tarea hacer primero, priorizar su lista, o organizar su día.
---

# Tasks Priority

## Instrucciones

1. Lee la lista actual de tareas pendientes de TaskFlow (desde el estado de la app, los componentes de React, o el store de datos que exista).
2. Para cada tarea, estima: - **Urgencia**: alta / media / baja (basado en el título/descripción, no inventes fechas límite que no existan) - **Esfuerzo**: alto / medio / bajo (estimado por la complejidad aparente del título)
3. Ordena las tareas priorizando en este orden: - Primero: urgencia alta + esfuerzo bajo (quick wins) - Segundo: urgencia alta + esfuerzo alto - Tercero: urgencia media, cualquier esfuerzo - Último: urgencia baja
4. Presenta el resultado como lista numerada. Cada línea debe incluir: - El nombre de la tarea - Una razón breve (una frase) de por qué quedó en esa posición
5. Si no hay tareas pendientes, dilo claramente en vez de inventar una lista. ## Ejemplo de salida esperada 1. **Enviar reporte al cliente** — urgente y rápido de hacer, buen punto de partida 2. **Configurar CI/CD** — importante pero requiere más tiempo, bloquea tareas futuras 3. **Actualizar README** — puede esperar, bajo impacto inmediato
