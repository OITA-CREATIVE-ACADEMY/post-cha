// POST-cha!のjsファイルです

$(function(){


    //ログイン・新規登録ボタンを押した時、モーダルを開く
    $(document).on('click', '.modal', modalShow);
    
    function modalShow(e){
        var target = $(e.target);
        console.log(target);
        if (target.hasClass('add-modal')) {

        
    }



});


