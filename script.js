function letraANumero(letra) {
    if (/^[a-zA-Z]$/.test(letra)) {
        return letra.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    }
    return null;
}

function encontrarBaseLogaritmo(numero, baseUsadas) {
    let mejorBase = null;
    let mejorArgumento = null;
    let mejorLogaritmo = null;

    for (let base = 2; base < 100; base++) {
        if (base !== numero && !baseUsadas.has(base)) {
            let argumento = Math.pow(base, numero);
            try {
                let resultado = Math.log(argumento) / Math.log(base);
                if (Math.abs(resultado - numero) < 0.01) {
                    mejorBase = base;
                    mejorArgumento = argumento;
                    mejorLogaritmo = resultado.toFixed(2);
                    baseUsadas.add(base);
                    break;
                }
            } catch (e) {
                continue;
            }
        }
    }

    return { mejorBase, mejorArgumento, mejorLogaritmo };
}

function procesarTexto() {
    const texto = document.getElementById("inputTexto").value;
    let resultado = [];
    let baseUsadas = new Set();

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];
        if (/[a-zA-Z]/.test(char)) {
            let numero = letraANumero(char);
            let { mejorBase, mejorArgumento, mejorLogaritmo } = encontrarBaseLogaritmo(numero, baseUsadas);

            if (mejorBase) {
                resultado.push(`💖 Letra: ${char}, Número: ${numero}, Base: ${mejorBase}, Argumento: ${mejorArgumento}, Logaritmo: ${mejorLogaritmo}`);
            } else {
                resultado.push(`💖 Letra: ${char}, Número: ${numero}, No se encontró base`);
            }
        } else {
            resultado.push(`✨ Signo: ${char}`);
        }
    }

    document.getElementById("resultado").innerText = resultado.join("\n");
}
