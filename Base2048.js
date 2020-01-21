(function($) // début du pluggin
{
    $.fn.game2048 = function(map) // function game2048 du pluggin
    {
            

            function generateMap(map)
            {
                

                var table = document.createElement("table");
                $(table).addClass("table");
                $(".Games").append(table);
                
                var id = 1;

                for (var ligne = 1; ligne <= map; ligne++)
                {
                    // var newRow=document.createElement("tr");
                    //$(newRow).addClass("row");
                    $(".table").append("<tr id=ligne"+ ligne + "></tr>");
                    

                    for (var col = 1; col <= map; col++)
                    {
                        // var newCell = document.createElement("td");
                        // $(newCell).addClass("cell");
                        // $(newCell).addClass("empty");
                        $("#ligne" + ligne).append("<td id=ligne"+ ligne + "col" + col+ " class=cell></td>");
                        // $(newCell).attr("id", id);
                        
                    }
                    
                }
                
            }
            generateMap(map);

            function randomNumber()
            {
                var max= 10;
                var randomNumber = Math.floor((Math.random() *max));
                if(randomNumber == 9)
                {
                     return 4;
                }
                else
                {
                    return 2;
                }
            }

            function randomCell(max)
            {
                var randomCell = Math.floor(Math.random() * max);
                return randomCell;
            }

            function generateCell(nbr = 1)
            {
                var caseVide = [];

                for (var ligne = 1; ligne <= map; ligne++)
                {
                    for (var col = 1; col <= map; col++)
                    {
                        if($("#ligne"+ligne+ "col" + col).text() == "")
                            caseVide.push(("#ligne"+ligne+ "col" + col));
                    }
                }
                var maxLength = caseVide.length;
                var index = randomCell(maxLength);
                $(caseVide[index]).text(randomNumber());
                if (nbr > 1)
                {
                    generateCell(nbr - 1);
                }
                //console.log(caseVide[index]);
            }

            generateCell(2);


            function merge (id1, id2)
            {
                var merge = $(id1).text() *2;  
                $(id2).text("");
                $(id1).text(merge);
            }

            function mergeDown()
                {
                    for(var col = 1; col <= map; col++)
                {
                    var ligne = map;
                    var ligneToMove = ligne - 1;

                    

                    while(ligne >= 1 && ligneToMove >= 1)
                    {
                        if(($("#ligne" + ligneToMove + "col" + col).text() == ""))
                        {
                            ligneToMove--;       
                        }
                        else if ($("#ligne"+ligne+ "col" + col).text() == ($("#ligne" + ligneToMove + "col" + col).text()))
                        {
                            merge("#ligne" +ligne+ "col" + col, "#ligne" + ligneToMove + "col" + col);
                            ligne--;
                            ligneToMove = ligne - 1;
                               
                        }
                        else{
                            ligne--;
                            ligneToMove = ligne - 1;
                        }
                        
                    }
                }
                }

            

            function down()
            {
                mergeDown();

                for(var col = 1; col <= map; col++)
                {
                    var ligne = map;
                    var ligneToMove = ligne - 1;

                    while(ligne >= 1 && ligneToMove >= 1)
                    {
                        if(($("#ligne" + ligneToMove + "col" + col).text() == ""))
                        {
                            ligneToMove--;       
                        }
                        else if ($("#ligne"+ligne+ "col" + col).text() == "")
                        {
                            //si case pas vide et si valeur de case = valeur nouvelle case
                                //alors MERGE
                                $("#ligne"+ligne+ "col" + col).text($("#ligne"+ligneToMove+ "col" + col).text());
                                console.log("oui")
                                $("#ligne" + ligneToMove + "col" + col).text("");
                                ligne--;
                                ligneToMove = ligne - 1;
                               
                        }
                        else{
                            ligne--;
                            ligneToMove = ligne - 1;
                        }
                        
                    }
                }
                generateCell();
                    

            }

            function mergeUp()
                {
                    for(var col = 1; col <= map; col++)
                {
                    var ligne = 1;
                    var ligneToMove = ligne + 1;

                    

                    while(ligne <= map && ligneToMove <= map)
                    {
                        if(($("#ligne" + ligneToMove + "col" + col).text() == ""))
                        {
                            ligneToMove++;       
                        }
                        else if ($("#ligne"+ligne+ "col" + col).text() == ($("#ligne" + ligneToMove + "col" + col).text()))
                        {
                            merge("#ligne" +ligne+ "col" + col, "#ligne" + ligneToMove + "col" + col);
                            ligne++;
                            ligneToMove = ligne + 1;
                               
                        }
                        else{
                            ligne++;
                            ligneToMove = ligne + 1;
                        }
                        
                    }
                }
                }

            function up()
            {
                mergeUp();

                for(var col = 1; col <= map; col++)
                {
                    var ligne = 1;
                    var ligneToMove = ligne + 1;
                    
                    console.log("step1");


                    while(ligne <= map && ligneToMove <= map)
                    {
                        console.log("step2");
                        if(($("#ligne" + ligneToMove + "col" + col).text() == ""))
                        {
                            ligneToMove++;       
                            console.log("step3");
                        }
                        else if ($("#ligne"+ligne+ "col" + col).text() == "")
                        {
                            console.log("step4");
                            //si case pas vide et si valeur de case = valeur nouvelle case
                                //alors MERGE
                                $("#ligne"+ligne+ "col" + col).text($("#ligne"+ligneToMove+ "col" + col).text());
                                console.log("step5");
                                $("#ligne" + ligneToMove + "col" + col).text("");
                                ligne++;
                                ligneToMove = ligne + 1;
                               
                        }
                        else{
                            ligne++;
                            ligneToMove = ligne + 1;
                            console.log("step6");
                        }
                        
                    }
                }
                generateCell();
                    

            }

            function mergeLeft()
                {
                    for(var ligne = 1; ligne <= map; ligne++)
                    {
                        var col = 1;
                        var colToMove = col + 1;

                        

                        while(col <= map && colToMove <= map)
                        {
                            if(($("#ligne" + ligne + "col" + colToMove).text() == ""))
                            {
                                colToMove++;       
                            }
                            else if ($("#ligne"+ligne+ "col" + col).text() == ($("#ligne" + ligne + "col" + colToMove).text()))
                            {
                                merge("#ligne" +ligne+ "col" + col, "#ligne" + ligne + "col" + colToMove);
                                col++;
                                colToMove = col + 1;
                                
                            }
                            else{
                                col++;
                                colToMove = col + 1;
                            }
                            
                        }
                    }
                }

            function left()
                        {
                            mergeLeft();

                            for(var ligne = 1; ligne <= map; ligne++)
                            {
                                var col = 1;
                                var colToMove = col + 1;
                                
                                console.log("step1");


                                while(col <= map && colToMove <= map)
                                {
                                    console.log("step2");
                                    if(($("#ligne" + ligne + "col" + colToMove).text() == ""))
                                    {
                                        colToMove++;       
                                        console.log("step3");
                                    }
                                    else if ($("#ligne"+ligne+ "col" + col).text() == "")
                                    {
                                        console.log("step4");
                                        //si case pas vide et si valeur de case = valeur nouvelle case
                                            //alors MERGE
                                            $("#ligne"+ligne+ "col" + col).text($("#ligne"+ligne+ "col" + colToMove).text());
                                            console.log("step5");
                                            $("#ligne" + ligne + "col" + colToMove).text("");
                                            col++;
                                            colToMove = col + 1;
                                        
                                    }
                                    else{
                                        col++;
                                        colToMove = col + 1;
                                        console.log("step6");
                                    }
                                    
                                }
                            }
                            generateCell();
                                

                        }

            function mergeRight()
                {
                    for(var ligne = 1; ligne <= map; ligne++)
                {
                    var col = map;
                    var colToMove = col - 1;

                    

                    while(col >= 1 && colToMove >= 1)
                    {
                        if(($("#ligne" + ligne + "col" + colToMove).text() == ""))
                        {
                            colToMove--;       
                        }
                        else if ($("#ligne"+ligne+ "col" + col).text() == ($("#ligne" + ligne + "col" + colToMove).text()))
                        {
                            merge("#ligne" +ligne+ "col" + col, "#ligne" + ligne + "col" + colToMove);
                            col--;
                            colToMove = col - 1;
                               
                        }
                        else{
                            col--;
                            colToMove = col - 1;
                        }
                        
                    }
                }
                }

            function right()
            {
                mergeRight();

                for(var ligne = 1; ligne <= map; ligne++)
                {
                    var col = map;
                    var colToMove = col - 1;
                    
                    console.log("step1");


                    while(col >= 1 && colToMove >= 1)
                    {
                        console.log("step2");
                        if(($("#ligne" + ligne + "col" + colToMove).text() == ""))
                        {
                            colToMove--;       
                            console.log("step3");
                        }
                        else if ($("#ligne"+ligne+ "col" + col).text() == "")
                        {
                            console.log("step4");
                            //si case pas vide et si valeur de case = valeur nouvelle case
                                //alors MERGE
                                $("#ligne"+ligne+ "col" + col).text($("#ligne"+ligne+ "col" + colToMove).text());
                                console.log("step5");
                                $("#ligne" + ligne + "col" + colToMove).text("");
                                col--;
                                colToMove = col - 1;
                            
                        }
                        else{
                            col--;
                            colToMove = col - 1;
                            console.log("step6");
                        }
                        
                    }
                }
                generateCell();
                    

            }            
            

         

            // fonction de gestion des évenements (appuie de touches)
            $('html').keydown(function(event) 
            {
                  switch (event['key']) 
                  {
                    case 'ArrowLeft':
                        console.log("Left");
                        left(); 
                        break;
                    case 'ArrowUp':
                          // insérer algo move up
                        console.log("Up");
                        up();
                        break;
                    case 'ArrowRight':
                         // insérer algo move right
                        console.log("Right");
                        right()    
                        break;
                    case 'ArrowDown':
                         // insérer algo move down
                        console.log("Down");
                        down();
                        break;
                  }
            });             
    $('<div>', {id:'title', text: '2048'}).appendTo('header');


    }
})(jQuery); // fin du pluggin