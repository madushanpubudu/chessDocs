/**
 * Created by DJ on 8/23/2017.
 */

// function drag() {
//     $(".images").draggable({revert:true});
// }
//
// drag();

/////////////////////////////////////////////////////////////


var colorsH=['red','green','black','blue','brown'];
var h=0;
function changeColorH() {
    $("#divM").css("color",colorsH[h]);
    h++;
    if(h==colorsH.length){
        h=0;
    }
}
setInterval(changeColorH,200);

///////

var colorsI=['red','green','black','blue','brown'];
var i=0;
function changeColorI() {
    $("#divMM").css("color",colorsI[i]);
    i++;
    if(i==colorsI.length){
        i=0;
    }
}
setInterval(changeColorI,200);

//////////////

var colorsM=['red','green','black','blue','brown'];
var m=0;
function changeColorM() {
    $('.light').css("color",colorsM[m]);
    m++;
    if(m==colorsM.length){
        m=0;
    }
}
setInterval(changeColorM,200);


////////////////////////////////////////////////////////////////////
var Letters=['A','B','C','D','E','F','G','H'];
var numbers=[1, 2, 3, 4, 5, 6, 7, 8];

var currentPossition;
var divs;
// var suares;
var chesspieces;

var pondCount;
var blackCount=0;
var whiteCount=1;

var CountArray= new Array(9);

$(document).ready(function () {
    divs=$('.square');
    chesspieces=$('.chesspieses');
    pondCount=0;
    for(var i=0;i<CountArray.length;i++){
        CountArray[i]=0;
    }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////

$('.chesspieses').on("click",function (eventData) {
    currentPossition=$(this);
    console.log(currentPossition);

    if (!(currentPossition.hasClass('clickpiece')) && currentPossition.hasClass('PondB')){
        pondCount=0;
        pathofBlackpond(currentPossition);

    }
    if (!(currentPossition.hasClass('clickpiece')) && currentPossition.hasClass('PondW')){
        pondCount=0;
        pathofWhitekpond(currentPossition);

    }
    if (!(currentPossition.hasClass('click')) && currentPossition.hasClass('Rook')){
        pathofRook(currentPossition);

    }
    if (!(currentPossition.hasClass('clickpiece')) && currentPossition.hasClass('RookW')){
        pathofRookW(currentPossition);

    }
    if (!(currentPossition.hasClass('clickpiece')) && currentPossition.hasClass('Bishop')){
        pathofBishop(currentPossition);

    }
    if (!(currentPossition.hasClass('clickpiece')) && currentPossition.hasClass('BishopW')){
        pathofBishopW(currentPossition);

    }
    if (!(currentPossition.hasClass('clickpiece')) && currentPossition.hasClass('Night')){
        pathofKnight(currentPossition);

    }
    if (!(currentPossition.hasClass('clickpiece')) && currentPossition.hasClass('NightW')){
        pathofKnightW(currentPossition);

    }
    if (!(currentPossition.hasClass('clickpiece')) && currentPossition.hasClass('King')){
        pathofKing(currentPossition);

    }
    if (!(currentPossition.hasClass('clickpiece')) && currentPossition.hasClass('KingW')){
        pathofKingW(currentPossition);

    }
    if (!(currentPossition.hasClass('clickpiece')) && currentPossition.hasClass('Queen')){
        pathofQueen(currentPossition);

    }
    if (!(currentPossition.hasClass('clickpiece')) && currentPossition.hasClass('QueenW')){
        pathofQueenW(currentPossition);

    }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////

function pathofBlackpond(eventData) {
    currentPossition=eventData;
    divs.removeClass('selectPath');
    divs.removeClass('crosspiece');
    chesspieces.removeClass('clickpiece');
    var currentId=currentPossition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId=Letters[LettersArrayPossition]+numbers[numArrayPossition+1];
    var tempId1=Letters[LettersArrayPossition+1]+numbers[numArrayPossition+1];
    var tempId2=Letters[LettersArrayPossition-1]+numbers[numArrayPossition+1];
    var x=LettersArrayPossition;


    for (var y=numArrayPossition+1;y<4;y++){
        tempId=Letters[x]+numbers[y];
        if (!($("#"+tempId).children().hasClass('chesspieses'))){
            $("#"+tempId).addClass('selectPath');
            currentPossition.addClass('clickpiece');
        }
        else{
            break;
        }
    }
    if (!($("#"+tempId).children().hasClass('chesspieses'))){
        $("#"+tempId).addClass('selectPath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');

    }
    if ($("#"+tempId1).children().hasClass('White')){
        $("#"+tempId1).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');
    }
    if ($("#"+tempId2).children().hasClass('White')){
        $("#"+tempId2).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////


function pathofWhitekpond(eventData) {
    currentPossition=eventData;
    divs.removeClass('selectPath');
    divs.removeClass('crosspiece');
    chesspieces.removeClass('clickpiece');
    var currentId=currentPossition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId=Letters[LettersArrayPossition]+numbers[numArrayPossition-1];
    var tempId1=Letters[LettersArrayPossition+1]+numbers[numArrayPossition-1];
    var tempId2=Letters[LettersArrayPossition-1]+numbers[numArrayPossition-1];
    var x=LettersArrayPossition;


    for (var y=numArrayPossition-1;y<7;y--){
        tempId=Letters[x]+numbers[y];
        if (!($("#"+tempId).children().hasClass('chesspieses'))){
            $("#"+tempId).addClass('selectPath');
            currentPossition.addClass('clickpiece');
            if (y==4){
                break;
            }
            if (y==3){
                break;
            }
            if (y==2){
                break;
            }
            if (y==1){
                break;
            }

        }
        else{
            break;
        }
    }
    // if (!($("#"+tempId).children().hasClass('chesspieses'))){
    //     $("#"+tempId).addClass('selectPath');
    //     currentPossition.addClass('clickpiece');
    //     currentPossition.removeClass('selectPath');
    //
    // }

    if ($("#"+tempId1).children().hasClass('Black')){
        $("#"+tempId1).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');
    }
    if ($("#"+tempId2).children().hasClass('Black')){
        $("#"+tempId2).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');
    }
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////

function pathofKnight(eventData) {
    currentPossition=eventData;
    divs.removeClass('selectPath');
    chesspieces.removeClass('clickpiece');
    divs.removeClass('crosspiece');
    var currentId=currentPossition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId1=Letters[LettersArrayPossition-2]+numbers[numArrayPossition+1];
    var tempId2=Letters[LettersArrayPossition-1]+numbers[numArrayPossition+2];
    var tempId3=Letters[LettersArrayPossition+1]+numbers[numArrayPossition+2];
    var tempId4=Letters[LettersArrayPossition+2]+numbers[numArrayPossition+1];
    var tempId5=Letters[LettersArrayPossition-2]+numbers[numArrayPossition-1];
    var tempId6=Letters[LettersArrayPossition-1]+numbers[numArrayPossition-2];
    var tempId7=Letters[LettersArrayPossition+1]+numbers[numArrayPossition-2];
    var tempId8=Letters[LettersArrayPossition+2]+numbers[numArrayPossition-1];

    if (!($("#"+tempId1).children().hasClass('chesspieses'))){
        $("#"+tempId1).addClass('selectPath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');

    }else if ($("#"+tempId1).children().hasClass('White')){
        $("#"+tempId1).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');
    }
    if (!($("#"+tempId2).children().hasClass('chesspieses'))){
        $("#"+tempId2).addClass('selectPath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');

    }else if ($("#"+tempId2).children().hasClass('White')){
        $("#"+tempId2).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');
    }
    if (!($("#"+tempId3).children().hasClass('chesspieses'))){
        $("#"+tempId3).addClass('selectPath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');

    }else if ($("#"+tempId3).children().hasClass('White')){
        $("#"+tempId3).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');
    }
    if (!($("#"+tempId4).children().hasClass('chesspieses'))){
        $("#"+tempId4).addClass('selectPath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');

    }else if ($("#"+tempId4).children().hasClass('White')){
        $("#"+tempId4).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');
    }
    if (!($("#"+tempId5).children().hasClass('chesspieses'))){
        $("#"+tempId5).addClass('selectPath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');

    }else if ($("#"+tempId5).children().hasClass('White')){
        $("#"+tempId5).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');
    }
    if (!($("#"+tempId6).children().hasClass('chesspieses'))){
        $("#"+tempId6).addClass('selectPath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');

    }else if ($("#"+tempId6).children().hasClass('White')){
        $("#"+tempId6).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');
    }
    if (!($("#"+tempId7).children().hasClass('chesspieses'))){
        $("#"+tempId7).addClass('selectPath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');

    }else if ($("#"+tempId7).children().hasClass('White')){
        $("#"+tempId7).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');
    }
    if (!($("#"+tempId8).children().hasClass('chesspieses'))){
        $("#"+tempId8).addClass('selectPath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');

    }else if ($("#"+tempId8).children().hasClass('White')){
        $("#"+tempId8).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function pathofKnightW(eventData) {
    currentPossition=eventData;
    divs.removeClass('selectPath');
    chesspieces.removeClass('clickpiece');
    divs.removeClass('crosspiece');
    var currentId=currentPossition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId1=Letters[LettersArrayPossition-2]+numbers[numArrayPossition+1];
    var tempId2=Letters[LettersArrayPossition-1]+numbers[numArrayPossition+2];
    var tempId3=Letters[LettersArrayPossition+1]+numbers[numArrayPossition+2];
    var tempId4=Letters[LettersArrayPossition+2]+numbers[numArrayPossition+1];
    var tempId5=Letters[LettersArrayPossition-2]+numbers[numArrayPossition-1];
    var tempId6=Letters[LettersArrayPossition-1]+numbers[numArrayPossition-2];
    var tempId7=Letters[LettersArrayPossition+1]+numbers[numArrayPossition-2];
    var tempId8=Letters[LettersArrayPossition+2]+numbers[numArrayPossition-1];

    if (!($("#"+tempId1).children().hasClass('chesspieses'))){
        $("#"+tempId1).addClass('selectPath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');

    }else if ($("#"+tempId1).children().hasClass('Black')){
        $("#"+tempId1).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');
    }
    if (!($("#"+tempId2).children().hasClass('chesspieses'))){
        $("#"+tempId2).addClass('selectPath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');

    }else if ($("#"+tempId2).children().hasClass('Black')){
        $("#"+tempId2).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');
    }
    if (!($("#"+tempId3).children().hasClass('chesspieses'))){
        $("#"+tempId3).addClass('selectPath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');

    }else if ($("#"+tempId3).children().hasClass('Black')){
        $("#"+tempId3).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');
    }
    if (!($("#"+tempId4).children().hasClass('chesspieses'))){
        $("#"+tempId4).addClass('selectPath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');

    }else if ($("#"+tempId4).children().hasClass('Black')){
        $("#"+tempId4).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');
    }
    if (!($("#"+tempId5).children().hasClass('chesspieses'))){
        $("#"+tempId5).addClass('selectPath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');

    }else if ($("#"+tempId5).children().hasClass('Black')){
        $("#"+tempId5).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');
    }
    if (!($("#"+tempId6).children().hasClass('chesspieses'))){
        $("#"+tempId6).addClass('selectPath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');

    }else if ($("#"+tempId6).children().hasClass('Black')){
        $("#"+tempId6).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');
    }
    if (!($("#"+tempId7).children().hasClass('chesspieses'))){
        $("#"+tempId7).addClass('selectPath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');

    }else if ($("#"+tempId7).children().hasClass('Black')){
        $("#"+tempId7).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');
    }
    if (!($("#"+tempId8).children().hasClass('chesspieses'))){
        $("#"+tempId8).addClass('selectPath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');

    }else if ($("#"+tempId8).children().hasClass('Black')){
        $("#"+tempId8).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');
    }
}


//////////////////////////////////////////////////////////////////////////////////////////////////

function pathofKing(eventData) {
    currentPossition=eventData;
    divs.removeClass('selectPath');
    chesspieces.removeClass('clickpiece');
    divs.removeClass('crosspiece');
    var currentId=currentPossition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId1=Letters[LettersArrayPossition]+numbers[numArrayPossition+1];
    var tempId2=Letters[LettersArrayPossition-1]+numbers[numArrayPossition+1];
    var tempId3=Letters[LettersArrayPossition+1]+numbers[numArrayPossition+1];
    var tempId4=Letters[LettersArrayPossition+1]+numbers[numArrayPossition];
    var tempId5=Letters[LettersArrayPossition-1]+numbers[numArrayPossition];
    var tempId6=Letters[LettersArrayPossition]+numbers[numArrayPossition-1];
    var tempId7=Letters[LettersArrayPossition+1]+numbers[numArrayPossition-1];
    var tempId8=Letters[LettersArrayPossition-1]+numbers[numArrayPossition-1];

    if (!($("#"+tempId1).children().hasClass('chesspieses'))){
        $("#"+tempId1).addClass('selectPath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');

    }else if ($("#"+tempId1).children().hasClass('White')){
        $("#"+tempId1).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');
    }
    if (!($("#"+tempId2).children().hasClass('chesspieses'))){
        $("#"+tempId2).addClass('selectPath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');

    }else if ($("#"+tempId2).children().hasClass('White')){
        $("#"+tempId2).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');
    }
    if (!($("#"+tempId3).children().hasClass('chesspieses'))){
        $("#"+tempId3).addClass('selectPath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');

    }else if ($("#"+tempId3).children().hasClass('White')){
        $("#"+tempId3).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');
    }
    if (!($("#"+tempId4).children().hasClass('chesspieses'))){
        $("#"+tempId4).addClass('selectPath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');

    }else if ($("#"+tempId4).children().hasClass('White')){
        $("#"+tempId4).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');
    }
    if (!($("#"+tempId5).children().hasClass('chesspieses'))){
        $("#"+tempId5).addClass('selectPath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');

    }else if ($("#"+tempId5).children().hasClass('White')){
        $("#"+tempId5).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');
    }
    if (!($("#"+tempId6).children().hasClass('chesspieses'))){
        $("#"+tempId6).addClass('selectPath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');

    }else if ($("#"+tempId6).children().hasClass('White')){
        $("#"+tempId6).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');
    }
    if (!($("#"+tempId7).children().hasClass('chesspieses'))){
        $("#"+tempId7).addClass('selectPath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');

    }else if ($("#"+tempId7).children().hasClass('White')){
        $("#"+tempId7).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');
    }
    if (!($("#"+tempId8).children().hasClass('chesspieses'))){
        $("#"+tempId8).addClass('selectPath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');

    }else if ($("#"+tempId8).children().hasClass('White')){
        $("#"+tempId8).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////

function pathofKingW(eventData) {
    currentPossition=eventData;
    divs.removeClass('selectPath');
    chesspieces.removeClass('clickpiece');
    divs.removeClass('crosspiece');
    var currentId=currentPossition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId1=Letters[LettersArrayPossition]+numbers[numArrayPossition+1];
    var tempId2=Letters[LettersArrayPossition-1]+numbers[numArrayPossition+1];
    var tempId3=Letters[LettersArrayPossition+1]+numbers[numArrayPossition+1];
    var tempId4=Letters[LettersArrayPossition+1]+numbers[numArrayPossition];
    var tempId5=Letters[LettersArrayPossition-1]+numbers[numArrayPossition];
    var tempId6=Letters[LettersArrayPossition]+numbers[numArrayPossition-1];
    var tempId7=Letters[LettersArrayPossition+1]+numbers[numArrayPossition-1];
    var tempId8=Letters[LettersArrayPossition-1]+numbers[numArrayPossition-1];

    if (!($("#"+tempId1).children().hasClass('chesspieses'))){
        $("#"+tempId1).addClass('selectPath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');

    }else if ($("#"+tempId1).children().hasClass('Black')){
        $("#"+tempId1).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');
    }
    if (!($("#"+tempId2).children().hasClass('chesspieses'))){
        $("#"+tempId2).addClass('selectPath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');

    }else if ($("#"+tempId2).children().hasClass('Black')){
        $("#"+tempId2).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');
    }
    if (!($("#"+tempId3).children().hasClass('chesspieses'))){
        $("#"+tempId3).addClass('selectPath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');

    }else if ($("#"+tempId3).children().hasClass('Black')){
        $("#"+tempId3).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');
    }
    if (!($("#"+tempId4).children().hasClass('chesspieses'))){
        $("#"+tempId4).addClass('selectPath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');

    }else if ($("#"+tempId4).children().hasClass('Black')){
        $("#"+tempId4).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');
    }
    if (!($("#"+tempId5).children().hasClass('chesspieses'))){
        $("#"+tempId5).addClass('selectPath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');

    }else if ($("#"+tempId5).children().hasClass('Black')){
        $("#"+tempId5).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');
    }
    if (!($("#"+tempId6).children().hasClass('chesspieses'))){
        $("#"+tempId6).addClass('selectPath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');

    }else if ($("#"+tempId6).children().hasClass('Black')){
        $("#"+tempId6).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');
    }
    if (!($("#"+tempId7).children().hasClass('chesspieses'))){
        $("#"+tempId7).addClass('selectPath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');

    }else if ($("#"+tempId7).children().hasClass('Black')){
        $("#"+tempId7).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');
    }
    if (!($("#"+tempId8).children().hasClass('chesspieses'))){
        $("#"+tempId8).addClass('selectPath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');

    }else if ($("#"+tempId8).children().hasClass('Black')){
        $("#"+tempId8).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectPath');
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////

function pathofRookW(eventData){
    currentPossition=eventData;
    divs.removeClass('selectPath');
    chesspieces.removeClass('clickpiece');
    divs.removeClass('crosspiece');
    var currentId=currentPossition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId=Letters[LettersArrayPossition]+numbers[numArrayPossition-1];
    var x=LettersArrayPossition;
    for (var y=numArrayPossition+1;y<8;y++){
        tempId=Letters[x]+numbers[y];
        if (!($("#"+tempId).children().hasClass('chesspieses'))){
            $("#"+tempId).addClass('selectPath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId).children().hasClass('Black')){
            $("#"+tempId).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectPath');
            break;
        }else {
            break;
        }

    }
    var x1=numArrayPossition;
    for (var y=LettersArrayPossition+1;y<8;y++){
        tempId=Letters[y]+numbers[x1];
        if (!($("#"+tempId).children().hasClass('chesspieses'))){
            $("#"+tempId).addClass('selectPath');
            currentPossition.addClass('clickpiece');
        }
        else if ($("#"+tempId).children().hasClass('Black')){
            $("#"+tempId).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectPath');
            break;
        }else {
            break;
        }
    }
    var x2=numArrayPossition;
    for (var y=LettersArrayPossition-1;y>=0;y--){
        tempId=Letters[y]+numbers[x2];
        if (!($("#"+tempId).children().hasClass('chesspieses'))){
            $("#"+tempId).addClass('selectPath');
            currentPossition.addClass('clickpiece');
        }
        else if ($("#"+tempId).children().hasClass('Black')){
            $("#"+tempId).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectPath');
            break;
        }else {
            break;
        }
    }
    for (var y=numArrayPossition-1;y>=0;y--){
        tempId=Letters[x]+numbers[y];
        if (!($("#"+tempId).children().hasClass('chesspieses'))){
            $("#"+tempId).addClass('selectPath');
            currentPossition.addClass('clickpiece');
        }
        else if ($("#"+tempId).children().hasClass('Black')){
            $("#"+tempId).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectPath');
            break;
        }else {
            break;
        }
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////


function pathofRook(eventData){
    currentPossition=eventData;
    divs.removeClass('selectPath');
    chesspieces.removeClass('clickpiece');
    divs.removeClass('crosspiece');
    var currentId=currentPossition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId=Letters[LettersArrayPossition]+numbers[numArrayPossition-1];
    var x=LettersArrayPossition;
    for (var y=numArrayPossition+1;y<8;y++){
        tempId=Letters[x]+numbers[y];
        if (!($("#"+tempId).children().hasClass('chesspieses'))){
            $("#"+tempId).addClass('selectPath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId).children().hasClass('White')){
            $("#"+tempId).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectPath');
            break;
        }else {
            break;
        }

    }
    var x1=numArrayPossition;
    for (var y=LettersArrayPossition+1;y<8;y++){
        tempId=Letters[y]+numbers[x1];
        if (!($("#"+tempId).children().hasClass('chesspieses'))){
            $("#"+tempId).addClass('selectPath');
            currentPossition.addClass('clickpiece');
        }
        else if ($("#"+tempId).children().hasClass('White')){
            $("#"+tempId).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectPath');
            break;
        }else {
            break;
        }
    }
    var x2=numArrayPossition;
    for (var y=LettersArrayPossition-1;y>=0;y--){
        tempId=Letters[y]+numbers[x2];
        if (!($("#"+tempId).children().hasClass('chesspieses'))){
            $("#"+tempId).addClass('selectPath');
            currentPossition.addClass('clickpiece');
        }
        else if ($("#"+tempId).children().hasClass('White')){
            $("#"+tempId).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectPath');
            break;
        }else {
            break;
        }
    }
    for (var y=numArrayPossition-1;y>=0;y--){
        tempId=Letters[x]+numbers[y];
        if (!($("#"+tempId).children().hasClass('chesspieses'))){
            $("#"+tempId).addClass('selectPath');
            currentPossition.addClass('clickpiece');
        }
        else if ($("#"+tempId).children().hasClass('White')){
            $("#"+tempId).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectPath');
            break;
        }else {
            break;
        }
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////

function pathofBishopW(eventData) {
    currentPossition=eventData;
    divs.removeClass('selectPath');
    chesspieces.removeClass('clickpiece');
    divs.removeClass('crosspiece');
    var currentId=currentPossition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId1=Letters[LettersArrayPossition+1]+numbers[numArrayPossition+1];
    var tempId2=Letters[LettersArrayPossition-1]+numbers[numArrayPossition+1];
    var tempId3=Letters[LettersArrayPossition+1]+numbers[numArrayPossition-1];
    var tempId4=Letters[LettersArrayPossition-1]+numbers[numArrayPossition-1];
    var x=LettersArrayPossition;
    var y=numArrayPossition
    for (;y<8;y++){
        tempId1=Letters[++x]+numbers[y+1];
        if (!($("#"+tempId1).children().hasClass('chesspieses'))) {
            $("#" + tempId1).addClass('selectPath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId1).children().hasClass('Black')){
            $("#"+tempId1).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectPath');
            break;
        }else {
            break;
        }

    }
    var x1=LettersArrayPossition;
    var y1=numArrayPossition
    for (;y1<8;y1++){
        tempId2=Letters[--x1]+numbers[y1+1];
        if (!($("#"+tempId2).children().hasClass('chesspieses'))){
            $("#"+tempId2).addClass('selectPath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId2).children().hasClass('Black')){
            $("#"+tempId2).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectPath');
            break;
        }else {
            break;
        }
    }
    var x2=numArrayPossition;
    var y2=LettersArrayPossition;
    for (;x2>=0;x2--){
        tempId3=Letters[++y2]+numbers[x2-1];
        if (!($("#"+tempId3).children().hasClass('chesspieses'))){
            $("#"+tempId3).addClass('selectPath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectPath');
            break;
        }else {
            break;
        }
    }
    var x3=numArrayPossition;
    var y3=LettersArrayPossition;
    for (;x3>=0;x3--){
        tempId4=Letters[--y3]+numbers[x3-1];
        if (!($("#"+tempId4).children().hasClass('chesspieses'))){
            $("#"+tempId4).addClass('selectPath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectPath');
            break;
        }else {
            break;
        }
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////


function pathofBishop(eventData) {
    currentPossition=eventData;
    divs.removeClass('selectPath');
    chesspieces.removeClass('clickpiece');
    divs.removeClass('crosspiece');
    var currentId=currentPossition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId1=Letters[LettersArrayPossition+1]+numbers[numArrayPossition+1];
    var tempId2=Letters[LettersArrayPossition-1]+numbers[numArrayPossition+1];
    var tempId3=Letters[LettersArrayPossition+1]+numbers[numArrayPossition-1];
    var tempId4=Letters[LettersArrayPossition-1]+numbers[numArrayPossition-1];
    var x=LettersArrayPossition;
    var y=numArrayPossition
    for (;y<8;y++){
        tempId1=Letters[++x]+numbers[y+1];
        if (!($("#"+tempId1).children().hasClass('chesspieses'))) {
            $("#" + tempId1).addClass('selectPath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId1).children().hasClass('White')){
            $("#"+tempId1).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectPath');
            break;
        }else {
            break;
        }

    }
    var x1=LettersArrayPossition;
    var y1=numArrayPossition
    for (;y1<8;y1++){
        tempId2=Letters[--x1]+numbers[y1+1];
        if (!($("#"+tempId2).children().hasClass('chesspieses'))){
            $("#"+tempId2).addClass('selectPath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId2).children().hasClass('White')){
            $("#"+tempId2).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectPath');
            break;
        }else {
            break;
        }
    }
    var x2=numArrayPossition;
    var y2=LettersArrayPossition;
    for (;x2>=0;x2--){
        tempId3=Letters[++y2]+numbers[x2-1];
        if (!($("#"+tempId3).children().hasClass('chesspieses'))){
            $("#"+tempId3).addClass('selectPath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId3).children().hasClass('White')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectPath');
            break;
        }else {
            break;
        }
    }
    var x3=numArrayPossition;
    var y3=LettersArrayPossition;
    for (;x3>=0;x3--){
        tempId4=Letters[--y3]+numbers[x3-1];
        if (!($("#"+tempId4).children().hasClass('chesspieses'))){
            $("#"+tempId4).addClass('selectPath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId4).children().hasClass('White')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectPath');
            break;
        }else {
            break;
        }
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////

function pathofQueen(eventData) {
    currentPossition=eventData;
    divs.removeClass('selectPath');
    chesspieces.removeClass('clickpiece');
    divs.removeClass('crosspiece');
    var currentId=currentPossition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId=Letters[LettersArrayPossition]+numbers[numArrayPossition+1];
    var tempId1=Letters[LettersArrayPossition+1]+numbers[numArrayPossition+1];
    var tempId2=Letters[LettersArrayPossition-1]+numbers[numArrayPossition+1];
    var tempId3=Letters[LettersArrayPossition+1]+numbers[numArrayPossition-1];
    var tempId4=Letters[LettersArrayPossition-1]+numbers[numArrayPossition-1];
    var x=LettersArrayPossition;
    for (var y=numArrayPossition+1;y<8;y++){
        tempId=Letters[x]+numbers[y];
        if (!($("#"+tempId).children().hasClass('chesspieses'))){
            $("#"+tempId).addClass('selectPath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId).children().hasClass('White')){
            $("#"+tempId).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectPath');
            break;
        }else {
            break;
        }

    }
    var x1=numArrayPossition;
    for (var y=LettersArrayPossition+1;y<8;y++){
        tempId=Letters[y]+numbers[x1];
        if (!($("#"+tempId).children().hasClass('chesspieses'))){
            $("#"+tempId).addClass('selectPath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId).children().hasClass('White')){
            $("#"+tempId).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectPath');
            break;
        }else {
            break;
        }
    }
    var x2=numArrayPossition;
    for (var y=LettersArrayPossition-1;y>=0;y--){
        tempId=Letters[y]+numbers[x2];
        if (!($("#"+tempId).children().hasClass('chesspieses'))){
            $("#"+tempId).addClass('selectPath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId).children().hasClass('White')){
            $("#"+tempId).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectPath');
            break;
        }else {
            break;
        }
    }
    for (var y=numArrayPossition-1;y>=0;y--){
        tempId=Letters[x]+numbers[y];
        if (!($("#"+tempId).children().hasClass('chesspieses'))){
            $("#"+tempId).addClass('selectPath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId).children().hasClass('White')){
            $("#"+tempId).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectPath');
            break;
        }else {
            break;
        }
    }
    var x=LettersArrayPossition;
    var y=numArrayPossition
    for (;y<8;y++){
        tempId1=Letters[++x]+numbers[y+1];
        if (!($("#"+tempId1).children().hasClass('chesspieses'))){
            $("#"+tempId1).addClass('selectPath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId1).children().hasClass('White')){
            $("#"+tempId1).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectPath');
            break;
        }else {
            break;
        }

    }
    var x1=LettersArrayPossition;
    var y1=numArrayPossition
    for (;y1<8;y1++){
        tempId2=Letters[--x1]+numbers[y1+1];
        if (!($("#"+tempId2).children().hasClass('chesspieses'))){
            $("#"+tempId2).addClass('selectPath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId2).children().hasClass('White')){
            $("#"+tempId2).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectPath');
            break;
        }else {
            break;
        }
    }
    var x2=numArrayPossition;
    var y2=LettersArrayPossition;
    for (;x2>=0;x2--){
        tempId3=Letters[++y2]+numbers[x2-1];
        if (!($("#"+tempId3).children().hasClass('chesspieses'))){
            $("#"+tempId3).addClass('selectPath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId3).children().hasClass('White')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectPath');
            break;
        }else {
            break;
        }
    }
    var x3=numArrayPossition;
    var y3=LettersArrayPossition;
    for (;x3>=0;x3--){
        tempId4=Letters[--y3]+numbers[x3-1];
        if (!($("#"+tempId4).children().hasClass('chesspieses'))){
            $("#"+tempId4).addClass('selectPath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId4).children().hasClass('White')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectPath');
            break;
        }else {
            break;
        }
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function pathofQueenW(eventData) {
    currentPossition=eventData;
    divs.removeClass('selectPath');
    chesspieces.removeClass('clickpiece');
    divs.removeClass('crosspiece');
    var currentId=currentPossition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId=Letters[LettersArrayPossition]+numbers[numArrayPossition+1];
    var tempId1=Letters[LettersArrayPossition+1]+numbers[numArrayPossition+1];
    var tempId2=Letters[LettersArrayPossition-1]+numbers[numArrayPossition+1];
    var tempId3=Letters[LettersArrayPossition+1]+numbers[numArrayPossition-1];
    var tempId4=Letters[LettersArrayPossition-1]+numbers[numArrayPossition-1];
    var x=LettersArrayPossition;
    for (var y=numArrayPossition+1;y<8;y++){
        tempId=Letters[x]+numbers[y];
        if (!($("#"+tempId).children().hasClass('chesspieses'))){
            $("#"+tempId).addClass('selectPath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId).children().hasClass('Black')){
            $("#"+tempId).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectPath');
            break;
        }else {
            break;
        }

    }
    var x1=numArrayPossition;
    for (var y=LettersArrayPossition+1;y<8;y++){
        tempId=Letters[y]+numbers[x1];
        if (!($("#"+tempId).children().hasClass('chesspieses'))){
            $("#"+tempId).addClass('selectPath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId).children().hasClass('Black')){
            $("#"+tempId).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectPath');
            break;
        }else {
            break;
        }
    }
    var x2=numArrayPossition;
    for (var y=LettersArrayPossition-1;y>=0;y--){
        tempId=Letters[y]+numbers[x2];
        if (!($("#"+tempId).children().hasClass('chesspieses'))){
            $("#"+tempId).addClass('selectPath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId).children().hasClass('Black')){
            $("#"+tempId).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectPath');
            break;
        }else {
            break;
        }
    }
    for (var y=numArrayPossition-1;y>=0;y--){
        tempId=Letters[x]+numbers[y];
        if (!($("#"+tempId).children().hasClass('chesspieses'))){
            $("#"+tempId).addClass('selectPath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId).children().hasClass('Black')){
            $("#"+tempId).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectPath');
            break;
        }else {
            break;
        }
    }
    var x=LettersArrayPossition;
    var y=numArrayPossition
    for (;y<8;y++){
        tempId1=Letters[++x]+numbers[y+1];
        if (!($("#"+tempId1).children().hasClass('chesspieses'))){
            $("#"+tempId1).addClass('selectPath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId1).children().hasClass('Black')){
            $("#"+tempId1).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectPath');
            break;
        }else {
            break;
        }

    }
    var x1=LettersArrayPossition;
    var y1=numArrayPossition
    for (;y1<8;y1++){
        tempId2=Letters[--x1]+numbers[y1+1];
        if (!($("#"+tempId2).children().hasClass('chesspieses'))){
            $("#"+tempId2).addClass('selectPath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId2).children().hasClass('Black')){
            $("#"+tempId2).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectPath');
            break;
        }else {
            break;
        }
    }
    var x2=numArrayPossition;
    var y2=LettersArrayPossition;
    for (;x2>=0;x2--){
        tempId3=Letters[++y2]+numbers[x2-1];
        if (!($("#"+tempId3).children().hasClass('chesspieses'))){
            $("#"+tempId3).addClass('selectPath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectPath');
            break;
        }else {
            break;
        }
    }
    var x3=numArrayPossition;
    var y3=LettersArrayPossition;
    for (;x3>=0;x3--){
        tempId4=Letters[--y3]+numbers[x3-1];
        if (!($("#"+tempId4).children().hasClass('chesspieses'))){
            $("#"+tempId4).addClass('selectPath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectPath');
            break;
        }else {
            break;
        }
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////

$(".square").on("click",function (eventData) {
    var currentSquar = $(this);
    console.log(currentSquar);
    var currentpiece = $(".chesspieses.clickpiece");
    if ($(currentSquar).hasClass('selectPath')) {
        currentSquar.append(currentpiece);
        chesspieces.removeClass('clickpiece');
        divs.removeClass('selectPath');
        divs.removeClass('crosspiece');
    }
    if ($(currentSquar).hasClass('crosspiece')) {
        //var y=$(currentpiece).clone();
        $(currentpiece).remove();
        $(currentSquar).children().remove();
        currentSquar.append(currentpiece);
        divs.removeClass('selectPath');
        chesspieces.removeClass('clickpiece');
        divs.removeClass('crosspiece');
    }
});