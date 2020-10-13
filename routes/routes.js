module.exports = function(app){
    
    app.get('/',function(req,res){
        var recomendacoes = [{
                "titulo":"NOME COMPLETO",
                "subtitulo":"Formação acadêmica - FACULDADE",
                "caminho":"foto.png",
                "texto":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"   
        }];
        var habilidades = [{
        "logo":"web.png",
        "texto":"Desenvolvimento de Fron-end utilizando de HTML5, CSS3 e JAVASCRIPT, incluindo bibliotecas e frameworks como Bootstrap, JQuery, e EJS.",
            "texto2":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"   
        },
      {
        "logo":"git.png",
        "texto":"Utilização dos principais sistemas de controle de versão, como o GIT. Também a utlização da plataforma GITGUB.",
          "texto2":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"   
        },
      {
        "logo":"back.png",
        "texto":"Desenvolvimento de Back-end utilizando de Javascript (Node.Js), PHP e MySql. Assim como capacidade de planejamento e modelagem da lógica do sistema e do banco de dados respeitando os requisitos do cliente.",
          "texto2":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"   
        },
      {
        "logo":"adobe.png",
        "texto":"Ferramentas de design gráfico como Photoshop e Illustrator, também desenvolvimento de composições no After Effects.",
          "texto2":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"   
        },
      {
        "logo":"word.png",
        "texto":"Utilização dos principais CMS como: Wordpress e Joomla. Experiência com a instalação e manutenção de templates e plugins, como por exemplo gerenciadores de e-commerce.",
          "texto2":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"   
        }];
        res.render('index.ejs',{'recomendacoes':recomendacoes,'habilidades':habilidades}); 
    });
    
    app.get('/portfolio',function(req,res){
        res.render('portfolio.ejs');
    });
    
    app.get('/galeria',function(req,res){
        res.render('galeria.ejs');
    });
    
    app.get('/websites',function(req,res){
        var websites = [
        {"logo":"1.png",
            "titulo":"Clínica Semper",
            "link":"http://dariooliveirajr.com:21184/",
            "texto":"Site desenvolvido para a clínica de fisioterapia Semper em 2019. O website possui um sistema de agendamento de consultas e gerenciamento de pacientes, especialistas, especialidades, serviços, entre outros.  - O sistema interno pode ser testado através do endereço http://dariooliveirajr.com:21184/sistema, e acessado com as credenciais: email: admin, senha: admin e o tipo: administrador. -  Participação: desenvolvimento completo do sistema de agendamento de consultas e desenvolvedor ativo no front-end (layout) e do banco de dados."   
        },
        {"logo":"2.png",
           "titulo":"AGIF Brasil",
           "link":"http://agif.atwebpages.com",
            "texto":"Projeto de website desenvolvido para a empresa de consultoria AGIF Brasil em 2018. Participação: Desenvolvimento completo do Front-end."   
        },
        {"logo":"3.png",
           "titulo":"Telzir",
           "link":"http://dariooliveirajr.com:21187/telzir",
            "texto":"Website desenvolvido para um processo seletivo. Possui um simulador de custos de ligação. Participação: Desenvolvimento completo."   
        },
        {"logo":"4.png",
           "titulo":"Exemplo Node.Js",
           "link":"http://dariooliveirajr.com:21187",
            "texto":"O website possui todas as funções básicas de um banco de dados (inserir, ler, alterar e deletar), e foi desenvolvido utilizando Node.Js. Participação: Desenvolvimento completo."   
        },
        {"logo":"wordpressblue.png",
           "titulo":"ABRA",
           "link":"http://abrawp.atwebpages.com",
            "texto":"Website de exemplo criado utilizando Wordpress. Participação: Desenvolvimento completo."   
        }
        ];
        res.render('websites.ejs',{'websites':websites});
    });
}