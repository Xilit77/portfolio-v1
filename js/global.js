$(function(){


    /*///////////////////////////////
    ------- MENU BURGER ANIMATION -------
    ///////////////////////////////*/

    var burger=true

        $('#burger-btn').on('click',function(){
            if(burger==true){
                TweenMax.to('#nav-tell',0,{right:"0%", onComplete: function(){
                    TweenMax.to('#carre-nav-1',0.3,{right:"0%"});
                    TweenMax.to('#carre-nav-2',0.6,{right:"0%"});
                    TweenMax.to('#carre-nav-3',0.9,{right:"0%"});
                        TweenMax.to('#nav-on',0.9,{right:"0%"});
                }});
                $('.menu-text-btn').stop().html('<p>FERMER</p>');
                burger=false;
             }else{
                TweenMax.to('#nav-on',0.9,{right:'-100%'});
                    TweenMax.to('#carre-nav-1',1,{right:'-100%'});
                    TweenMax.to('#carre-nav-2',1.5,{right:'-100%'});
                    TweenMax.to('#carre-nav-3',1.8,{right:'-100%', onComplete: function(){
                        TweenMax.to('#nav-tell',0,{right:'-100%'});
                    }});
                $('.menu-text-btn').stop().html('<p>MENU</p>');
                burger=true;
             }
        });

    /*///////////////////////////////
    ------- PASSIONS - MOUSEHOVER -------
    ///////////////////////////////*/

            /* $('.sport').on('mouseenter',function(){}); */

    //MUSIQUE PICTURES

    $('#links-pics-passions-1').on('mouseenter', function(){
        TweenMax.to('#links-pics-passions-4',.5,{opacity:'.2'});
        TweenMax.to('#links-pics-passions-3',.5,{opacity:'.2'});
        TweenMax.to('#links-pics-passions-2',.5,{opacity:'.2'});
        TweenMax.to('#links-pics-passions-1',.5,{opacity:'1'});
        TweenMax.to('#carre-1',.3,{right:"0%"});
        TweenMax.to('#carre-2',.6,{right:"0%"});
        TweenMax.to('#carre-3',.9,{right:"0%", onComplete: function(){
            TweenMax.to('#carre-1',.3,{right:'-100%'});
            TweenMax.to('#carre-2',.6,{right:'-100%'});
            TweenMax.to('#carre-3',.9,{right:'-100%'});
                TweenMax.to('#pic-musique',0,{display:'block'});
                TweenMax.to('#pic-videos',0,{display:'none'});
                TweenMax.to('#pic-voyage',0,{display:'none'});
                TweenMax.to('#pic-sports',0,{display:'none'});
            }});
    });

    //SPORTS PICTURES

    $('#links-pics-passions-2').on('mouseenter', function(){
        TweenMax.to('#links-pics-passions-4',.5,{opacity:'.2'});
        TweenMax.to('#links-pics-passions-3',.5,{opacity:'.2'});
        TweenMax.to('#links-pics-passions-2',.5,{opacity:'1'});
        TweenMax.to('#links-pics-passions-1',.5,{opacity:'.2'});
        TweenMax.to('#carre-1',.3,{right:"0%"});
        TweenMax.to('#carre-2',.6,{right:"0%"});
        TweenMax.to('#carre-3',.9,{right:"0%", onComplete: function(){
            TweenMax.to('#carre-1',.3,{right:'-100%'});
            TweenMax.to('#carre-2',.6,{right:'-100%'});
            TweenMax.to('#carre-3',.9,{right:'-100%'});
                TweenMax.to('#pic-musique',0,{display:'none'});
                TweenMax.to('#pic-videos',0,{display:'none'});
                TweenMax.to('#pic-voyage',0,{display:'none'});
                TweenMax.to('#pic-sports',0,{display:'block'});
            }});
    });

    //VIDEOS PICTURES

    $('#links-pics-passions-3').on('mouseenter', function(){
        TweenMax.to('#links-pics-passions-4',.5,{opacity:'.2'});
        TweenMax.to('#links-pics-passions-3',.5,{opacity:'1'});
        TweenMax.to('#links-pics-passions-2',.5,{opacity:'.2'});
        TweenMax.to('#links-pics-passions-1',.5,{opacity:'.2'});
        TweenMax.to('#carre-1',.3,{right:"0%"});
        TweenMax.to('#carre-2',.6,{right:"0%"});
        TweenMax.to('#carre-3',.9,{right:"0%", onComplete: function(){
            TweenMax.to('#carre-1',.3,{right:'-100%'});
            TweenMax.to('#carre-2',.6,{right:'-100%'});
            TweenMax.to('#carre-3',.9,{right:'-100%'});
                TweenMax.to('#pic-musique',0,{display:'none'});
                TweenMax.to('#pic-videos',0,{display:'block'});
                TweenMax.to('#pic-voyage',0,{display:'none'});
                TweenMax.to('#pic-sports',0,{display:'none'});
            }});
    });

    //VOYAGES PICTURES

    $('#links-pics-passions-4').on('mouseenter', function(){
        TweenMax.to('#links-pics-passions-4',.5,{opacity:'1'});
        TweenMax.to('#links-pics-passions-3',.5,{opacity:'.2'});
        TweenMax.to('#links-pics-passions-2',.5,{opacity:'.2'});
        TweenMax.to('#links-pics-passions-1',.5,{opacity:'.2'});
        TweenMax.to('#carre-1',.3,{right:"0%"});
        TweenMax.to('#carre-2',.6,{right:"0%"});
        TweenMax.to('#carre-3',.9,{right:"0%", onComplete: function(){
            TweenMax.to('#carre-1',.3,{right:'-100%'});
            TweenMax.to('#carre-2',.6,{right:'-100%'});
            TweenMax.to('#carre-3',.9,{right:'-100%'});
                TweenMax.to('#pic-musique',0,{display:'none'});
                TweenMax.to('#pic-videos',0,{display:'none'});
                TweenMax.to('#pic-voyage',0,{display:'block'});
                TweenMax.to('#pic-sports',0,{display:'none'});
            }});
    });

    /*///////////////////////////////
    ------- PROJETS - MOOSEENTER -------
    ///////////////////////////////*/

            /* $('.sport').on('mouseenter',function(){}); */


    //PROJET 1 PICTURES

    //AIGLES DE MEAUX
    $('#links-pics-projets-1').on('mouseenter', function(){
        TweenMax.to('#links-pics-projets-6',.5,{opacity:'.2'});
        TweenMax.to('#links-pics-projets-5',.5,{opacity:'.2'});
        TweenMax.to('#links-pics-projets-4',.5,{opacity:'.2'});
        TweenMax.to('#links-pics-projets-3',.5,{opacity:'.2'});
        TweenMax.to('#links-pics-projets-2',.5,{opacity:'.2'});
        TweenMax.to('#links-pics-projets-1',.5,{opacity:'1'});
        TweenMax.to('#carre-projets-1',.3,{right:"0%"});
        TweenMax.to('#carre-projets-2',.6,{right:"0%"});
        TweenMax.to('#carre-projets-3',.9,{right:"0%", onComplete: function(){
            //INFORMATIONS SUR LE PROJET
            $('#projet-competences').delay(2).stop().html('2016-17 | Print - Création graphique - Évènementiel');
            $('#projet-titre').delay(2).stop().html('<b class="bold">AIGLES DE MEAUX, </b> association de Football Américain');
            $('#projet-description').stop().html('Les Aigles de Meaux est le club de Football Américain de la ville de Meaux. Club niveau Régional, il accueil chaque année plus de 250 licenciés et détient une présence en forte croissance dans la Seine-et-Marne et sur les réseaux sociaux.');
            $('#projet-client').delay(2).stop().html('<b class="color-blue-clair">ClIENT :</b> AIGLES DE MEAUX - RESPONSABLE DE LA COMMUNICATION');
            $('#projet-techno').delay(2).stop().html('<b class="color-blue-clair">COMPÉTENCES : </b>SUITE ADOBE - PRINT - COMMUNICATION - GESTION DE PROJET');
            $('#btn-more-projet').delay(2).stop().html('<a href="projets/aigles-de-meaux.html" class="btn">En savoir plus <span class="box-white"></span><span class="box-white2"></span><span class="box-white3"></span></a>');
            //SUITE ANIMATION APPARITION DE L'IMAGE
            TweenMax.to('#carre-projets-1',.3,{right:'-100%'});
            TweenMax.to('#carre-projets-2',.6,{right:'-100%'});
            TweenMax.to('#carre-projets-3',.9,{right:'-100%'});
                TweenMax.to('#pic-projet-1',0,{display:'block'});
                TweenMax.to('#pic-projet-2',0,{display:'none'});
                TweenMax.to('#pic-projet-3',0,{display:'none'});
                TweenMax.to('#pic-projet-4',0,{display:'none'});
                TweenMax.to('#pic-projet-5',0,{display:'none'});
                TweenMax.to('#pic-projet-6',0,{display:'none'});
            }});
    });

    //PROJET 2 PICTURES

    //BLACKOUT
    $('#links-pics-projets-2').on('mouseenter', function(){
        TweenMax.to('#links-pics-projets-6',.5,{opacity:'.2'});
        TweenMax.to('#links-pics-projets-5',.5,{opacity:'.2'});
        TweenMax.to('#links-pics-projets-4',.5,{opacity:'.2'});
        TweenMax.to('#links-pics-projets-3',.5,{opacity:'.2'});
        TweenMax.to('#links-pics-projets-2',.5,{opacity:'1'});
        TweenMax.to('#links-pics-projets-1',.5,{opacity:'.2'});
        TweenMax.to('#links-pics-projets-1',.5,{opacity:'.2'});
        TweenMax.to('#carre-projets-1',.3,{right:"0%"});
        TweenMax.to('#carre-projets-2',.6,{right:"0%"});
        TweenMax.to('#carre-projets-3',.9,{right:"0%", onComplete: function(){
            //INFORMATIONS SUR LE PROJET
            $('#projet-competences').delay(2).stop().html('2014-17 | Print - Création graphique - Évènementiel');
            $('#projet-titre').delay(2).stop().html('<b class="bold">BLACKOUT, </b>un collectif d organisateur de soirée');
            $('#projet-description').stop().html('Blackout à été créé à la suite d un rassemblement de plusieurs organisateurs de soirée. Cette association à permis d évoluer rapidement pour atteindre des lieux prestigieux du monde de la nuit Parisienne.');
            $('#projet-client').delay(2).stop().html('<b class="color-blue-clair">ClIENT :</b> BLACKOUT - GRAPHISTE');
            $('#projet-techno').delay(2).stop().html('<b class="color-blue-clair">COMPÉTENCES : </b>SUITE ADOBE - PRINT - COMMUNICATION - GESTION DE PROJET');
            $('#btn-more-projet').delay(2).stop().html('<a href="projets/blackout.html" class="btn">En savoir plus <span class="box-white"></span><span class="box-white2"></span><span class="box-white3"></span></a>');
            //SUITE ANIMATION APPARITION DE L'IMAGE
            TweenMax.to('#carre-projets-1',.3,{right:'-100%'});
            TweenMax.to('#carre-projets-2',.6,{right:'-100%'});
            TweenMax.to('#carre-projets-3',.9,{right:'-100%'});
                TweenMax.to('#pic-projet-1',0,{display:'none'});
                TweenMax.to('#pic-projet-2',0,{display:'block'});
                TweenMax.to('#pic-projet-3',0,{display:'none'});
                TweenMax.to('#pic-projet-4',0,{display:'none'});
                TweenMax.to('#pic-projet-5',0,{display:'none'});
                TweenMax.to('#pic-projet-6',0,{display:'none'});
            }});
    });

    //CSSRuleprojet DEMANDER A MR CLICHY POUR CHOPER LES ::AFTER

    //PROJET 3 PICTURES

    //RIVA PARTIEL
    $('#links-pics-projets-3').on('mouseenter', function(){
        TweenMax.to('#links-pics-projets-6',.5,{opacity:'.2'});
        TweenMax.to('#links-pics-projets-5',.5,{opacity:'.2'});
        TweenMax.to('#links-pics-projets-4',.5,{opacity:'.2'});
        TweenMax.to('#links-pics-projets-3',.5,{opacity:'1'});
        TweenMax.to('#links-pics-projets-2',.5,{opacity:'.2'});
        TweenMax.to('#links-pics-projets-1',.5,{opacity:'.2'});
        TweenMax.to('#carre-projets-1',.3,{right:"0%"});
        TweenMax.to('#carre-projets-2',.6,{right:"0%"});
        TweenMax.to('#carre-projets-3',.9,{right:"0%", onComplete: function(){
            //INFORMATIONS SUR LE PROJET
            $('#projet-competences').delay(2).stop().html('2017 | UI-UX Design - Front-end developpement');
            $('#projet-titre').delay(2).stop().html('<b class="bold">RIVA, </b>marque prestigieuse & raffiné');
            $('#projet-description').stop().html('Riva est une marque italienne de bateau de luxe. Ce site à été réalisé en deux jours, le premier jours pour la réflexion, le maquettage, l’analyse ergonomique et l’intéraction. La deuxième pour l’intégration.');
            $('#projet-client').delay(2).stop().html('<b class="color-blue-clair">ClIENT :</b> PROJET ÉTUDIANT - MJM DESIGN GRAPHIQUE');
            $('#projet-techno').delay(2).stop().html('<b class="color-blue-clair">COMPÉTENCES : </b>CSS3 - HTML5 - JQUERY');
            $('#btn-more-projet').delay(2).stop().html('<a href="projets/riva.html" class="btn">En savoir plus <span class="box-white"></span><span class="box-white2"></span><span class="box-white3"></span></a>');
            //SUITE ANIMATION APPARITION DE L'IMAGE
            TweenMax.to('#carre-projets-1',.3,{right:'-100%'});
            TweenMax.to('#carre-projets-2',.6,{right:'-100%'});
            TweenMax.to('#carre-projets-3',.9,{right:'-100%'});
                TweenMax.to('#pic-projet-1',0,{display:'none'});
                TweenMax.to('#pic-projet-2',0,{display:'none'});
                TweenMax.to('#pic-projet-3',0,{display:'block'});
                TweenMax.to('#pic-projet-4',0,{display:'none'});
                TweenMax.to('#pic-projet-5',0,{display:'none'});
                TweenMax.to('#pic-projet-6',0,{display:'none'});
            }});
    });

    //PROJET 4 PICTURES

    //SNCF
    $('#links-pics-projets-4').on('mouseenter', function(){
        TweenMax.to('#links-pics-projets-6',.5,{opacity:'.2'});
        TweenMax.to('#links-pics-projets-5',.5,{opacity:'.2'});
        TweenMax.to('#links-pics-projets-4',.5,{opacity:'1'});
        TweenMax.to('#links-pics-projets-3',.5,{opacity:'.2'});
        TweenMax.to('#links-pics-projets-2',.5,{opacity:'.2'});
        TweenMax.to('#links-pics-projets-1',.5,{opacity:'.2'});
        TweenMax.to('#carre-projets-1',.3,{right:"0%"});
        TweenMax.to('#carre-projets-2',.6,{right:"0%"});
        TweenMax.to('#carre-projets-3',.9,{right:"0%", onComplete: function(){
            //INFORMATIONS SUR LE PROJET
            $('#projet-competences').delay(2).stop().html('2016-17 | UI-UX Design - Communication - Graphiste - Consulting');
            $('#projet-titre').delay(2).stop().html('<b class="bold">SNCF, </b>chargé de communication à l Agence Communication RH');
            $('#projet-description').stop().html('SNCF est la plus grande entreprise ferroviaire de France. En tant que chargé de communication à l Agence Communication RH au sein de la Direction Cohésion & Ressource Humaine Ferroviaire il m a été confié de nombreuses tâches aussi bien graphique que dans l accompagnement de projet.');
            $('#projet-client').delay(2).stop().html('<b class="color-blue-clair">ClIENT :</b> SNCF - Acteurs RH');
            $('#projet-techno').delay(2).stop().html('<b class="color-blue-clair">COMPÉTENCES : </b>PRINT - HTML5 - CSS3 - GESTION DE PROJETS');
            $('#btn-more-projet').delay(2).stop().html('<a href="projets/sncf.html" class="btn">En savoir plus <span class="box-white"></span><span class="box-white2"></span><span class="box-white3"></span></a>');
            //SUITE ANIMATION APPARITION DE L'IMAGE
            TweenMax.to('#carre-projets-1',.3,{right:'-100%'});
            TweenMax.to('#carre-projets-2',.6,{right:'-100%'});
            TweenMax.to('#carre-projets-3',.9,{right:'-100%'});
                TweenMax.to('#pic-projet-1',0,{display:'none'});
                TweenMax.to('#pic-projet-2',0,{display:'none'});
                TweenMax.to('#pic-projet-3',0,{display:'none'});
                TweenMax.to('#pic-projet-4',0,{display:'block'});
                TweenMax.to('#pic-projet-5',0,{display:'none'});
                TweenMax.to('#pic-projet-6',0,{display:'none'});
            }});
    });

    //PROJET 5 PICTURES

    //SUCCESSONFIELD
    $('#links-pics-projets-5').on('mouseenter', function(){
        TweenMax.to('#links-pics-projets-6',.5,{opacity:'.2'});
        TweenMax.to('#links-pics-projets-5',.5,{opacity:'1'});
        TweenMax.to('#links-pics-projets-4',.5,{opacity:'.2'});
        TweenMax.to('#links-pics-projets-3',.5,{opacity:'.2'});
        TweenMax.to('#links-pics-projets-2',.5,{opacity:'.2'});
        TweenMax.to('#links-pics-projets-1',.5,{opacity:'.2'});
        TweenMax.to('#carre-projets-1',.3,{right:"0%"});
        TweenMax.to('#carre-projets-2',.6,{right:"0%"});
        TweenMax.to('#carre-projets-3',.9,{right:"0%", onComplete: function(){
            //INFORMATIONS SUR LE PROJET
            $('#projet-competences').delay(2).stop().html('2017 | UI-UX Design - Front-end developpement');
            $('#projet-titre').delay(2).stop().html('<b class="bold">SUCCESSONFIELD, </b>La bible du Football Américain');
            $('#projet-description').stop().html('SUCCESSONFIELD, est un site qui permet d accompagner les joueurs de Football Américain dans leurs apprentissages et leurs développements. Il a surtout pour vocation de faire GAGNER DU TEMPS aux joueurs sachant que trouver des informations sur l&rsquo;apprentissage de ce sport, est toujours très compliqué surtout en français.');
            $('#projet-client').delay(2).stop().html('<b class="color-blue-clair">ClIENT :</b> PROJET ÉTUDIANT - MJM DESIGN GRAPHIQUE');
            $('#projet-techno').delay(2).stop().html('<b class="color-blue-clair">COMPÉTENCES : </b>UI/UX DESIGN - HTML5 - CSS3 - JQUERY');
            $('#btn-more-projet').delay(2).stop().html('<a href="projets/successonfield.html" class="btn">En savoir plus <span class="box-white"></span><span class="box-white2"></span><span class="box-white3"></span></a>');
            //SUITE ANIMATION APPARITION DE L'IMAGE
            TweenMax.to('#carre-projets-1',.3,{right:'-100%'});
            TweenMax.to('#carre-projets-2',.6,{right:'-100%'});
            TweenMax.to('#carre-projets-3',.9,{right:'-100%'});
                TweenMax.to('#pic-projet-1',0,{display:'none'});
                TweenMax.to('#pic-projet-2',0,{display:'none'});
                TweenMax.to('#pic-projet-3',0,{display:'none'});
                TweenMax.to('#pic-projet-4',0,{display:'none'});
                TweenMax.to('#pic-projet-5',0,{display:'block'});
                TweenMax.to('#pic-projet-6',0,{display:'none'});
            }});
    });

    //PROJET 6 PICTURES

    //SUCCESSONFIELD
    $('#links-pics-projets-6').on('mouseenter', function(){
        TweenMax.to('#links-pics-projets-6',.5,{opacity:'1'});
        TweenMax.to('#links-pics-projets-5',.5,{opacity:'.2'});
        TweenMax.to('#links-pics-projets-4',.5,{opacity:'.2'});
        TweenMax.to('#links-pics-projets-3',.5,{opacity:'.2'});
        TweenMax.to('#links-pics-projets-2',.5,{opacity:'.2'});
        TweenMax.to('#links-pics-projets-1',.5,{opacity:'.2'});
        TweenMax.to('#carre-projets-1',.3,{right:"0%"});
        TweenMax.to('#carre-projets-2',.6,{right:"0%"});
        TweenMax.to('#carre-projets-3',.9,{right:"0%", onComplete: function(){
            //INFORMATIONS SUR LE PROJET
            $('#projet-competences').delay(2).stop().html('2017 | UI-UX Design - Front-end developpement');
            $('#projet-titre').delay(2).stop().html('<b class="bold">SUCCESSONFIELD, </b>La bible du Football Américain');
            $('#projet-description').stop().html('SUCCESSONFIELD, est un site qui permet d accompagner les joueurs de Football Américain dans leurs apprentissages et leurs développements. Il a surtout pour vocation de faire GAGNER DU TEMPS aux joueurs sachant que trouver des informations sur l apprentissage de ce sport, est toujours très compliqué surtout en français.');
            $('#projet-client').delay(2).stop().html('<b class="color-blue-clair">ClIENT :</b> PROJET ÉTUDIANT - MJM DESIGN GRAPHIQUE');
            $('#projet-techno').delay(2).stop().html('<b class="color-blue-clair">COMPÉTENCES : </b>UI/UX DESIGN - HTML5 - CSS3 - JQUERY');
            $('#btn-more-projet').delay(2).stop().html('<a href="projets/successonfield.html" class="btn">En savoir plus <span class="box-white"></span><span class="box-white2"></span><span class="box-white3"></span></a>');
            //SUITE ANIMATION APPARITION DE L'IMAGE
            TweenMax.to('#carre-projets-1',.3,{right:'-100%'});
            TweenMax.to('#carre-projets-2',.6,{right:'-100%'});
            TweenMax.to('#carre-projets-3',.9,{right:'-100%'});
                TweenMax.to('#pic-projet-1',0,{display:'none'});
                TweenMax.to('#pic-projet-2',0,{display:'none'});
                TweenMax.to('#pic-projet-3',0,{display:'none'});
                TweenMax.to('#pic-projet-4',0,{display:'none'});
                TweenMax.to('#pic-projet-5',0,{display:'none'});
                TweenMax.to('#pic-projet-6',0,{display:'block'});
            }});
    });

    //SLIDER PROJETS

    $('#slider').nivoSlider({
        effect:'fade', /*effet de transition appliquée*/
        animSpeed:500, /*temps de transition*/
        pauseTime:5000,/*temps de pause*/
        /*LeftsliceUp,sliceUpLeft,slideUpdownLeft,fold,slideUpDown,fade,random,slideInRight,slideInLeft*/
        beforeChange:function(){},
        afterChange:function(){test()},
        slideshowEnd:function(){},
        lastSlide:function(){},
        afterLoad:function(){},
    });

    var nb=1;

    function test(){
        if(nb<5){
            nb++;
        }else{
            nb=1;
        }
        switch(nb){
            case(1):
                $('#projet-competences').stop().html('2017 | UI-UX Design - Front-end developpement');
                $('#projet-titre').stop().html('<b class="bold">RIVA, </b>La bible du Football Américain');
                $('#projet-description').stop().html('RIVA, est un site qui permet d accompagner les joueurs de Football Américain dans leurs apprentissages et leurs développements. Il a surtout pour vocation de faire GAGNER DU TEMPS aux joueurs sachant que trouver des informations sur l apprentissage de ce sport, est toujours très compliqué surtout en français.');
                $('#projet-client').stop().html('<b class="color-blue-clair">ClIENT :</b> PROJET ÉTUDIANT - MJM DESIGN GRAPHIQUE');
                $('#projet-techno').stop().html('<b class="color-blue-clair">COMPÉTENCES : </b>UI/UX DESIGN - HTML5 - CSS3 - JQUERY');
                $('#btn-more-projet').stop().html('<a href="projets/successonfield.html" class="btn">En savoir plus <span class="box-white"></span><span class="box-white2"></span><span class="box-white3"></span></a>');
            break;
            case(2):
                $('#projet-competences').stop().html('2017 | UI-UX Design - Front-end developpement');
                $('#projet-titre').stop().html('<b class="bold">SNCF, </b>La bible du Football Américain');
                $('#projet-description').stop().html('SNCF, est un site qui permet d accompagner les joueurs de Football Américain dans leurs apprentissages et leurs développements. Il a surtout pour vocation de faire GAGNER DU TEMPS aux joueurs sachant que trouver des informations sur l apprentissage de ce sport, est toujours très compliqué surtout en français.');
                $('#projet-client').stop().html('<b class="color-blue-clair">ClIENT :</b> PROJET ÉTUDIANT - MJM DESIGN GRAPHIQUE');
                $('#projet-techno').stop().html('<b class="color-blue-clair">COMPÉTENCES : </b>UI/UX DESIGN - HTML5 - CSS3 - JQUERY');
                $('#btn-more-projet').stop().html('<a href="projets/successonfield.html" class="btn">En savoir plus <span class="box-white"></span><span class="box-white2"></span><span class="box-white3"></span></a>');
            break;
            case(3):
                $('#projet-competences').stop().html('2017 | UI-UX Design - Front-end developpement');
                $('#projet-titre').stop().html('<b class="bold">BLA BLA, </b>La bible du Football Américain');
                $('#projet-description').stop().html('BLA BLA 3, est un site qui permet d accompagner les joueurs de Football Américain dans leurs apprentissages et leurs développements. Il a surtout pour vocation de faire GAGNER DU TEMPS aux joueurs sachant que trouver des informations sur l apprentissage de ce sport, est toujours très compliqué surtout en français.');
                $('#projet-client').stop().html('<b class="color-blue-clair">ClIENT :</b> PROJET ÉTUDIANT - MJM DESIGN GRAPHIQUE');
                $('#projet-techno').stop().html('<b class="color-blue-clair">COMPÉTENCES : </b>UI/UX DESIGN - HTML5 - CSS3 - JQUERY');
                $('#btn-more-projet').stop().html('<a href="projets/successonfield.html" class="btn">En savoir plus <span class="box-white"></span><span class="box-white2"></span><span class="box-white3"></span></a>');
            break;
            case(4):
                $('#projet-competences').stop().html('2017 | UI-UX Design - Front-end developpement');
                $('#projet-titre').stop().html('<b class="bold">BLA BLA 4, </b>La bible du Football Américain');
                $('#projet-description').stop().html('BLA BLA 4, est un site qui permet d accompagner les joueurs de Football Américain dans leurs apprentissages et leurs développements. Il a surtout pour vocation de faire GAGNER DU TEMPS aux joueurs sachant que trouver des informations sur l apprentissage de ce sport, est toujours très compliqué surtout en français.');
                $('#projet-client').stop().html('<b class="color-blue-clair">ClIENT :</b> PROJET ÉTUDIANT - MJM DESIGN GRAPHIQUE');
                $('#projet-techno').stop().html('<b class="color-blue-clair">COMPÉTENCES : </b>UI/UX DESIGN - HTML5 - CSS3 - JQUERY');
                $('#btn-more-projet').stop().html('<a href="projets/successonfield.html" class="btn">En savoir plus <span class="box-white"></span><span class="box-white2"></span><span class="box-white3"></span></a>');
            break;
            case(5):
                $('#projet-competences').stop().html('2017 | UI-UX Design - Front-end developpement');
                $('#projet-titre').stop().html('<b class="bold">BLA BLA 5, </b>La bible du Football Américain');
                $('#projet-description').stop().html('BLA BLA 5, est un site qui permet d accompagner les joueurs de Football Américain dans leurs apprentissages et leurs développements. Il a surtout pour vocation de faire GAGNER DU TEMPS aux joueurs sachant que trouver des informations sur l apprentissage de ce sport, est toujours très compliqué surtout en français.');
                $('#projet-client').stop().html('<b class="color-blue-clair">ClIENT :</b> PROJET ÉTUDIANT - MJM DESIGN GRAPHIQUE');
                $('#projet-techno').stop().html('<b class="color-blue-clair">COMPÉTENCES : </b>UI/UX DESIGN - HTML5 - CSS3 - JQUERY');
                $('#btn-more-projet').stop().html('<a href="projets/successonfield.html" class="btn">En savoir plus <span class="box-white"></span><span class="box-white2"></span><span class="box-white3"></span></a>');
            break;
               }

        console.log(nb);

    }

});
