function pegarDados() {
    if(document.getElementById("num_eleitores_municipio").value == ""){
    }else if(document.getElementById("num_cadeiras_camara_cidade").value == ""){
    }else if(document.getElementById("num_abstencoes").value == ""){  
    }else if(document.getElementById("num_votos_branco").value == ""){
    }else if(document.getElementById("num_votos_nulos").value == ""){    
    }else if(document.getElementById("num_votos_partido_recebeu").value == ""){
    }else if(document.getElementById("nome_partido").value == ""){
    }else{

        let num_eleitores_municipio = parseFloat(document.getElementById("num_eleitores_municipio").value);
        let num_cadeiras_camara_cidade = parseFloat(document.getElementById("num_cadeiras_camara_cidade").value);
        let num_abstencoes = parseFloat(document.getElementById("num_abstencoes").value);
        let num_votos_branco = parseFloat(document.getElementById("num_votos_branco").value);
        let num_votos_nulos = parseFloat(document.getElementById("num_votos_nulos").value);
        let num_votos_partido_recebeu = parseFloat(document.getElementById("num_votos_partido_recebeu").value);
        let nome_partido = document.getElementById("nome_partido").value;

        let num_votos_validos = num_eleitores_municipio - ((num_abstencoes  + num_votos_branco + num_votos_nulos));

        let quociente_eleitoral = num_votos_validos / num_cadeiras_camara_cidade; 

        let resultado = num_votos_partido_recebeu / quociente_eleitoral;
        
        console.log(num_eleitores_municipio);
        console.log(num_abstencoes);
        console.log(num_votos_branco);
        console.log(num_votos_nulos);
        console.log(num_votos_validos);

        document.getElementById("num_eleitores_municipio").value = ""
        document.getElementById("num_cadeiras_camara_cidade").value = ""
        document.getElementById("num_abstencoes").value = ""
        document.getElementById("num_votos_branco").value = ""
        document.getElementById("num_votos_nulos").value = ""
        document.getElementById("num_votos_partido_recebeu").value = ""
        document.getElementById("nome_partido").value = ""

        document.getElementById("resultado").innerHTML = "O partido " + nome_partido + " elegeu " + resultado.toFixed(0) + " vereadores"
    }
}