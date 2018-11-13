// POST-cha!のjsファイルです

$(function(){
    

    //ログイン・新規登録ボタンを押した時、モーダルを開く
    $(document).on('click', '.login, .signup', modalShow);

    function modalShow(e){
        // alert("ああああああああああああああ");
        var target = $(e.target);
        console.log(target);
        if (target.hasClass('add-modal')) {
        // ADDボタンを表示（データ追加用モーダル）
        $('#add-button').css('display', 'block');
        $('#update-button').css('display', 'none');
        $('#delete-button').css('display', 'none');  
        } else if (target.hasClass('edit-modal')) {
        // UPDATE, DELETEボタンを表示（データ編集用モーダル）
        $('#add-button').css('display', 'none');
        $('#update-button').css('display', 'block');
        $('#delete-button').css('display', 'block');


        
    }
}



});


