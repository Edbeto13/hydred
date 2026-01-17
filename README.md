# Desafíos de Data Science - Curso Alura

Este repositorio contiene un cuaderno de Jupyter (`.ipynb`) desarrollado como parte de un curso de formación en Data Science de Alura. El contenido se centra en **Python básico**, poniendo en práctica el uso de `if`, `else`, `while` y `for`, además de incluir varios **tips** de programación útiles.

## 📄 Propósito del Proyecto

El propósito de este cuaderno es resolver una serie de desafíos de programación que refuerzan la lógica algorítmica. A través de estos ejercicios, se exploran:
- **Condicionales:** Uso de `if` y `else` para la toma de decisiones.
- **Bucles:** Implementación de `for` y `while` para iteraciones.
- **Tips:** Consejos y buenas prácticas aplicadas a problemas simulados de manejo de datos.

## 📂 Estructura del Proyecto

El repositorio consta de un archivo principal:

- **`desafiosDatS.ipynb`**: Cuaderno de Jupyter que contiene todos los scripts de los desafíos. Está dividido en celdas de código independientes, cada una resolviendo un problema específico.

## 📊 Ejemplos de Insights Obtenidos

Aunque este cuaderno se centra en la lógica de programación y no genera gráficos visuales (plots), se obtienen diversos "insights" numéricos y textuales a partir del procesamiento de datos, tales como:

- **Crecimiento Exponencial**: Cálculo del tiempo necesario para que una colonia de bacterias supere a otra basado en tasas de crecimiento dadas.
- **Análisis de Votaciones**: Determinación del diseño ganador y porcentajes de votos a partir de un diccionario de resultados.
- **Diversidad Biológica**: Identificación del área con mayor diversidad de especies y cálculo de promedios por zona geográfica.
- **Distribución de Edades**: Análisis de la edad promedio de empleados por sector y conteo de personas por encima de la media general.
- **Análisis de Ventas**: Identificación del producto más vendido y cálculo del total de ventas.
- **Validación de Datos**: Algoritmos para verificar fechas válidas, números primos y rangos de notas.

## 📘 Apuntes de Clase

A continuación se resumen los conceptos clave y operadores utilizados en el desarrollo de los desafíos:

### Condicionales y Operadores Relacionales
Permiten comparar valores y determinar si una expresión es verdadera (`True`) o falsa (`False`).

| Operador | Descripción | Ejemplo |
|:---:|---|---|
| `>` | **Mayor que**: Devuelve `True` si el valor izquierdo es mayor. | `edad > 18` |
| `<` | **Menor que**: Devuelve `True` si el valor izquierdo es menor. | `precio < 100` |
| `>=` | **Mayor o igual**: Devuelve `True` si es mayor o igual. | `cantidad >= 10` |
| `<=` | **Menor o igual**: Devuelve `True` si es menor o igual. | `nota <= 5` |
| `==` | **Igual a**: Compara si dos valores son idénticos. | `titulo == "Data"` |
| `!=` | **Diferente de**: Compara si dos valores son distintos. | `opcion != 0` |

### Operadores de Asignación
Se utilizan para asignar valores a variables.
- **`=`**: Asignación simple (e.g., `edad = 20`).
- **`+=`**: Suma y asignación (e.g., `contador += 1` es equivalente a `contador = contador + 1`).

### Cadenas de Texto (Strings)
Secuencias de caracteres inmutables utilizadas para representar texto.
- **Índices**: Posiciones de caracteres, comenzando desde 0.
- **Inmutabilidad**: No se pueden modificar directamente; se debe crear una nueva cadena.
- **`split()`**: Divide una cadena en una lista de subcadenas usando un separador.
- **`join()`**: Une una lista de elementos en una sola cadena.

### Métodos de Listas
Las listas son estructuras que almacenan múltiples elementos y contamos con métodos para manipularlas:
- **`insert(indice, elemento)`**: Inserta un elemento en la posición especificada.
- **`pop(indice)`**: Elimina y devuelve el elemento en la posición indicada.
- **`index(elemento)`**: Devuelve el índice de la primera aparición del elemento.
- **`sort()`**: Ordena la lista (ascendente por defecto; alfabéticamente para texto, numéricamente para números).

## 🚀 Instrucciones para Ejecutar el Notebook

Para interactuar con el código y ver los resultados en tiempo real, puedes utilizar una de las siguientes opciones:

### Opción 1: Google Colab (Recomendado)
El cuaderno incluye un botón "Open in Colab" en la primera celda. 
1. Abre el archivo `desafiosDatS.ipynb` en GitHub.
2. Haz clic en el badge de "Open in Colab" o descarga el archivo y súbelo a tu Google Drive.
3. Ejecuta las celdas secuencialmente o de forma individual presionando el botón de "Play" en cada una.

### Opción 2: Ejecución Local
Si prefieres ejecutarlo en tu máquina:
1. Clona este repositorio:
   ```bash
   git clone https://github.com/Edbeto13/hydred.git
   ```
2. Asegúrate de tener instalado Python y Jupyter Notebook (o JupyterLab).
3. Navega al directorio del proyecto:
   ```bash
   cd hydred
   ```
4. Inicia Jupyter:
   ```bash
   jupyter notebook
   ```
5. Abre el archivo `desafiosDatS.ipynb` desde la interfaz del navegador y ejecuta las celdas.

---
*Este proyecto es parte del portafolio de aprendizaje en Ciencia de Datos.*
