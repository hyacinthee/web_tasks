var isShow = true;
<!--isShow判断密码是否被隐藏-->
function change() {
    <!--使用document的getElementById方法获取密码框与隐藏键对象-->
    var ps = document.getElementById("inputPassword");
    var la = document.getElementById("click");
    <!--if语句判断密码状态-->
    <!--改变密码框属性，同时调整label标签的内容-->
    if (isShow) {
        ps.type = "text";
        isShow = false;
    } else {
        ps.type = "password";
        isShow = true;
    }
    if(la.checked){
        la.value = "隐藏密码";
    }else{
        la.value = "显示密码";
    }
}