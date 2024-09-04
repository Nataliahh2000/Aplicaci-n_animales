const animals = {
    mamífero: ['alce', 'alpaca', 'ardilla', 'armadillo', 'asno', 'ballena', 'beluga', 'berrendo', 'bisonte', 'buey', 'búfalo', 'caballo', 'cabra', 'cachalote', 'camello', 'canguro', 'capibara', 'cebra', 'chacal', 'chimpancé', 'chinchilla', 'ciervo', 'cobaya', 'comadreja', 'conejo', 'coyote', 'delfín', 'damalisco', 'dingo', 'dromedario', 'elefante', 'erizo', 'foca', 'gacela', 'gato montés', 'gato', 'guepardo', 'gineta', 'gorila', 'hámster', 'hiena', 'hipopótamo', 'hurón', 'impala', 'jabalí', 'jaguar', 'jirafa', 'koala', 'lémur', 'león', 'leopardo', 'liebre', 'lince', 'lirón', 'lobo', 'llama', 'manatí', 'mandril', 'mapache', 'marmota', 'mofeta', 'morsa', 'murciélago', 'musaraña', 'ñu','orca', 'ornitorrinco', 'oso hormiguero', 'oso panda', 'oso pardo', 'oso polar', 'oveja', 'panda rojo', 'pangolín', 'perezoso', 'perro', 'primates', 'puercoespín', 'puma', 'rata', 'ratón', 'reno', 'rinoceronte', 'rebeco', 'suricato', 'tejón', 'tigre', 'topo', 'vaca', 'vampiro', 'visón', 'wombat', 'zorro', 'zarigüeya'],
    anfibio: ['rana', 'salamandra', 'tritón', 'gallipato', 'sapo'],
    reptil: ['cocodrilo', 'serpiente', 'lagarto', 'tortuga', 'tuátaras', 'caimanes', 'iguana', 'camaleón', 'lagartija', 'basilisco', 'varanos', 'eslizón', 'anolis', 'cobra', 'pitón', 'boa', 'anaconda', 'cascabel', 'culebra'],
    pez: ['salmón', 'tiburón', 'pez payaso', 'trucha', 'atún', 'mero', 'dorada', 'carpa', 'barbo', 'anguila', 'arenque', 'sardina', 'caballa', 'bonito', 'raya', 'manta raya', 'quimera', 'pez mariposa',' pez leon', 'pez ballesta', 'pez arcoiris'],
    ave: ['águila', 'pato', 'pingüino' , 'Águila', 'Halcón', 'Buitre', 'Azor', 'Cernícalo', 'Paloma','Tórtola','Paloma torcaz', 'Gorrión' , 'Mirlo', 'Jilguero', 'Golondrina', 'Ruiseñor', 'Loro gris','Guacamayo', 'Cacatúa', 'Perico', 'Pato', 'Cisne','Ganso','Flamenco', 'Gaviota', 'Pelícano', 'Cigüeña','Garza','Grulla','Ibis','Avestruz','Emú','Kiwi','Casuario','Búho','Lechuza','Mochuelo','Pájaro carpintero','Tucán','Barbudo','Pingüino emperador','Pingüino de Magallanes','Colibrí','Martín pescador','Gallina','Pavo','Faisán','Codorniz','Grulla','Avefría','Gallineta común','Avestruz','Ñandú','Casuario','Emú','Cuco común','Ani','Cucarachero','Quetzal','Trogón','Ave del paraíso'],
    insecto: ['abeja', 'mariposa', 'hormiga','Escarabajo rinoceronte','Mariquita','Escarabajo pelotero','Escarabajo ciervo','Gorgojo','Mariposa monarca','Mariposa alas de cristal','Mariposa macaón','Polilla luna','Polilla esfinge','Abeja de miel','Abejorro','Avispa común','Hormiga roja','Hormiga negra','Mosca doméstica','Mosquito Anopheles','Mosca tse-tse','Mosca de la fruta','Mosquito tigre','Saltamontes común','Grillo','Langosta migratoria','Saltamontes','Chapulín','Chinche','Pulgón','Cigarra','Mosca blanca','Chicharrita','Libélula emperador','Caballito del diablo azul','Libélula de cuatro manchas','Libélula verde','Libélula tigre','Termita subterránea','Termita de madera seca','Termita arbórea','Termita soldado','Cucaracha americana','Cucaracha alemana','Cucaracha oriental','Cucaracha de banda marrón','Mantis religiosa','Piojo','Pulga','Insecto palo gigante','Insecto hoja','Insecto palo indio','Tijereta','Bicho bola','Lombriz de sed','Escorpión'],
    arácnido: ['araña', 'escorpión', 'Tarántula' ],
    crustáceo: ['cangrejo', 'langosta', 'camarón', 'gamba', 'isópodos', 'percebe'],
    molusco: ['caracol', 'pulpo', 'calamar', 'almeja','ostra', 'mejillón', 'sepia'],
    anélido: ['lombriz', 'sanguijuela'],
    gasterópodo: ['caracol', 'babosa']
};

document.getElementById('animalForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const animalName = document.getElementById('animalName').value.trim().toLowerCase();
    let resultText = "Animal no encontrado.";

    for (const [type, names] of Object.entries(animals)) {
        if (names.includes(animalName)) {
            resultText = `El animal "${animalName}" es un ${type}.`;
            break;
        }
    }

    document.getElementById('result').textContent = resultText;
});