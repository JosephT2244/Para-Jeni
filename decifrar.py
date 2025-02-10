from flask import Flask, render_template, request, jsonify
import math

app = Flask(__name__)

def letra_a_numero(letra):
    if letra.isalpha():
        return ord(letra.lower()) - ord('a') + 1
    return None

def encontrar_base_logaritmo(numero, base_usadas):
    mejor_base = None
    mejor_argumento = None
    mejor_logaritmo = None

    for base in range(2, 100):  # Reducimos el rango de bases a 100
        if base != numero and base not in base_usadas:
            # Usamos un cálculo directo para encontrar el argumento
            argumento = base ** numero
            try:
                # Calculamos el logaritmo de argumento en esa base
                resultado = math.log(argumento, base)

                # Si el resultado es cercano al número de la letra, lo consideramos
                if abs(resultado - numero) < 0.01:
                    mejor_base = base
                    mejor_argumento = argumento
                    mejor_logaritmo = round(resultado, 2)
                    base_usadas.add(base)
                    break
            except ValueError:
                continue

    return mejor_base, mejor_argumento, mejor_logaritmo

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/procesar_texto', methods=['POST'])
def procesar_texto():
    texto = request.form['texto']
    resultado = []
    base_usadas = set()

    for char in texto:
        if char.isalpha():
            numero = letra_a_numero(char)
            base, argumento, logaritmo = encontrar_base_logaritmo(numero, base_usadas)
            if base:
                resultado.append(f"Letra: {char}, Número: {numero}, Base: {base}, Argumento: {argumento}, Logaritmo: {logaritmo}")
            else:
                resultado.append(f"Letra: {char}, Número: {numero}, No se encontró base")
        else:
            resultado.append(f"Signo: {char}")

    return jsonify(resultado)

if __name__ == '__main__':
    app.run(debug=True)
