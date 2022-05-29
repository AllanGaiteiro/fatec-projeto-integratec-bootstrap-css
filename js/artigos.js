// <!--Autor do Arquivo: @Allan Gaiteiro -->//

var p = 'interativo'





function artigos(p) {
    //document.querySelector().style.display
    if (p == 'redes') {
        document.querySelector('div.artigos_redes').style.display = 'block'
        document.querySelector('div.artigos_estruturas').style.display = 'none'
        document.querySelector('div.artigos_interativo').style.display = 'none'
        document.querySelector('object.artigos_interativo').style.display = 'none'
        document.querySelector('section.asside_redes').style.display = 'block'
        document.querySelector('section.asside_estruturas').style.display = 'none'
        document.querySelector('section.asside_interativo').style.display = 'none'

        

    } else if (p == 'estruturas') {
        document.querySelector('div.artigos_redes').style.display = 'none'
        document.querySelector('div.artigos_estruturas').style.display = 'block'
        document.querySelector('div.artigos_interativo').style.display = 'none'
        document.querySelector('object.artigos_interativo').style.display = 'none'
        document.querySelector('section.asside_redes').style.display = 'none'
        document.querySelector('section.asside_estruturas').style.display = 'block'
        document.querySelector('section.asside_interativo').style.display = 'none'

    }else{
        document.querySelector('div.artigos_redes').style.display = 'none'
        document.querySelector('div.artigos_estruturas').style.display = 'none'
        document.querySelector('div.artigos_interativo').style.display = 'block'
        document.querySelector('object.artigos_interativo').style.display = 'block'
        document.querySelector('section.asside_redes').style.display = 'none'
        document.querySelector('section.asside_estruturas').style.display = 'none'
        document.querySelector('section.asside_interativo').style.display = 'block'

    }
}

artigos(p)