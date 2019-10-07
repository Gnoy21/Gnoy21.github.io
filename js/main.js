function postClick(test){
    location.href="post/"+test+".html";
    var fs = require('fs');
    var files = fs.readdirSync('../post/');
    alert(files);
}
