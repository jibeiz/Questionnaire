
$(document).ready(function(){


    //document.getElementById("pageone").onclick = function(){
    //    document.body.webkitRequestFullscreen();
    //}

    var numberArray = {0:"one",1:"two",2:"three",3:"four",4:"five",5:"six",6:"seven",7:"eight",8:"nine",9:"ten",10:"eleven",11:"twelve",12:"thirteen",13:"fourteen",14:"fifteen"}


    $.ajax({
        type:"GET",
        url:"Question.xml",
        dataType:"xml",
        success:function(xml){
                $(xml).find('question').each(function () {
                var questionID = $(this).find('id').text();
                var ques = $(this).find('ques').text();
                var type = $(this).find('type').text();
                //append outest div
                $( "<div id='page"+numberArray[questionID]+"' "+"data-role='page'></div>").appendTo("body");
                $( "<div id='header"+numberArray[questionID]+"' data-role='header'></div>").appendTo("#page"+numberArray[questionID]);
                    if(questionID==1)
                         $("<div data-role='navbar'><ul><li><a href='#page"+numberArray[parseInt(questionID)-1]+"' data-icon='arrow-l'>Back "+"</a></li><li><a href='#page"+numberArray[parseInt(questionID)+1]+"' data-icon='arrow-r'>No. "+(parseInt(questionID)+1)+"</a></li></ul></div>").appendTo("#header"+numberArray[questionID]);
                    else
                         $("<div data-role='navbar'><ul><li><a href='#page"+numberArray[parseInt(questionID)-1]+"' data-icon='arrow-l'>No. "+(parseInt(questionID)-1)+"</a></li><li><a href='#pageone' data-icon='home'>Home</a></li><li><a href='#page"+numberArray[parseInt(questionID)+1]+"' data-icon='arrow-r'>No. "+(parseInt(questionID)+1)+"</a></li></ul></div>").appendTo("#header"+numberArray[questionID]);
                    $( "<div id='main"+numberArray[questionID]+"' data-role='main' class='ui-content'></div>").appendTo("#page"+numberArray[questionID]);
                    $( "<div id='footer"+numberArray[questionID]+"' data-role='footer' style='text-align: center'></div>").appendTo("#page"+numberArray[questionID]);

                    $("<div id ='question'"+numberArray[questionID]+"' class='ui-grid-solo' style='height: 100%'> </div>").html(ques).appendTo("#main"+numberArray[questionID]);

                var answerNum = 0;
                $(this).find('ans').each(function(){
                    answerNum = answerNum+1;
                    var answer = $(this).text();
                    //$( "<li id='awnID"+questionID+answerNum+"'></li>").appendTo("#ulAnsID"+questionID);
                    $( "<a href='#page"+numberArray[parseInt(questionID)+1]+"' class='ui-btn ui-btn-inline ui-icon-check ui-btn-icon-left'></a>").html(answer).appendTo("#footer"+numberArray[questionID]);

                });
            });
        },
        error:function(){
            alert("An error occurred while processing XML file.")
        }
    })
});

