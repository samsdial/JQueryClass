#JS Advance
JS ADVANCE
===================
https://github.com/jonmircha/edjs-paradigmas2017

Introducción
-------------

#### Paradigmas de la Programación

Entendiendo la programación, la gente cree que la programacióne es dificil:
Algunas razones:

- Malos Profesores
- Programadores SOBERBIOS
- A los seres HUMANOS no les gusta PENSAR y ANALIZAR

La programacion es:
Intuitiva e inherente

Pensar como humanos y no como maquinas
Flujo, como ejecutar los procesos

#### Diagramas de Flujo
Algoritmo es una serie de  pasos ordenados y finitos para resolver una tarea
Diagrama de flujo
```flow

st=>start: Start
e=>end
op=>operation: My Operation
cond=>condition: Yes or No?

st->op->cond
cond(yes)->e
cond(no)->op

```
#### Paradigmas de la programación

Imperativo vs Declarativo

Imperativo:
- Indico el ¿Cómo?
- Fanatica de la mutación
- Usa procedimientos y rutinas como mecanismos de control
- Existen estructuras cíclicas para iterar como while for y loop
- Asignacion destructiva de vairables se puede re-asignar tantas veces como se quiera
- No hay garantia

Declarativa:
- Indico el ¿Que?
- Evita cambiar el estado de un programa
- Usando Funciones puramente matematicas
- No existen estructuras cicilicas
- No Hay asignación destructiva de variables, una variable no puede ser asignada más de una vez.

Programación síncrona y asíncrona

Síncrona
- Programación Paralela (Varios objetos al unisono)
- Acciones Bloqueadas
- Paralelismo
Asíncrona
- Progranación Concurrente
- Acciones NO Bloqueantes
- Concurrencia

#### Nomenclatura del código
En archivos usar snake_case 
Ej:
js_style_guide.js

En objetos, primitivos, funciones e instancias usa
camelCase
Ej:
````js
const myObj = {}
const myNum = 1
const myMap = new Map ()
function myFn() {}
````
En clases y constructores usa PascalCase
```js
class MyClass{}
function MyClass(){}
```
En Constantes usa UPPER_CASE
```js
const MY_CONSTANT = 1
```
PALABRAS RESERVADAS:
```
A: abstract
B: Bolean, Break, byte
C: case, catch, char
```

ORDENANDO MI CODIGO
1. Importado otros achivos y librerias
2. Definimos Constantes
3. Definimos Variable y Objetos
4. Definimos Funciones
5. Asignacion de enventos y estados iniciales


LAS BUENAS PRACTICAS
- Orientado A Objetos (Objetos son una colección de propiedades)
los objetos son una colección de propiedades
4 formas de creear Objetos en JS
1. Objetos literales
2. Prototipos
3. Funciones Constructoras
4. Clases

Funciones como Objetos de Primera Clase
(Funtions as First-Class Objects)
las funciones de JS son Objetos de primera Clase

Tipado Blando
(loose Typing)
No es necesario especificar el tipo de dato de una Variabler al ser declarada, cuando se le asigne un valor, JS detecta el tipo de dato Automáticamente.
Alcance
(Scoping)
Desde ES6 tenemos alcance global, funcional y de bloque.
Elevación
(Hoisting)
En ejecucion, todsa las declaraciones var y function son movidas al comienzzo de cada función
Es una buena práctica declarar todas las variables juntas en la primera línea 
Desde ES6 con let podemos tener variable de bloque y evitar la elevación, por ello ya no se debe usar var

const = Valores que no van a cambiar
let = Variables de Bloque

Modo Estrícto
(stric Mode)
ES6 ya no es necesario

Funciones Anonimas
(Anonymus Functions)
Son declaradas dinámicamente en tiempo de ejecución. Son llamadas anónimas porque no poseen un nombre
Eje:
```js
() => {...}
```

Funciones de Clausura
(Closure functions)
Encapsulan Variables y Funciones que unicamente seran accesibles si son devueltas con el operador return




DOMINGO 07/04 -- 09.15am
Grupo #1 División A 2008 Apertura
DH vs Verona FC
Centro Deportivo LFB #19
//=========//=========//
Grupo #1 División A 2008 Apertura
DOMINGO 07/04 -- 01.45 pm
Grupo #2 División A 2007 Apertura
DH vs FC Bogotá Gladiadores
Centro Deportivo LFB #19
//=========//=========//
Grupo #1 División A 2008 Apertura
DOMINGO 07/04 -- 11.45 am
DH vs Barcelona FC
Centro Deportivo LFB #7
//=========//=========//
Grupo #1 División A 2008 Apertura
DOMINGO 07/04 -- 13.45 am
DH vs Millonarios (Div Menores)
Centro Deportivo LFB #11
//=========//=========//
Grupo único Liga Premier 2001 Apertura
DOMINGO 07/04 -- 01.45 pm
DH vs Real Academia Maracaneiros 
Centro Deportivo LFB #10
//=========//=========//
Grupo #1 División A 2008 Apertura
DOMINGO 07/04 -- 00.00 am
DH vs 
Centro Deportivo LFB #11
//=========//=========//
Grupo #1 División A 2008 Apertura
DOMINGO 07/04 -- 00.00 am
DH vs 
Centro Deportivo LFB #11
    