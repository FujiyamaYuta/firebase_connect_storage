(function () {

    $('#upload').click(function(){
        console.log("クリック");
        var files = document.getElementById('embedpollfileinput').files;
        var image = files[0];

        var ref = firebase.storage().ref().child(image.name);
        ref.put(image).then(function(snapshot) {
            alert('Firebaseへアップロード完了！');
        });
    })


})();