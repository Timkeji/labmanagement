// admin 
function adminLogin() {
    // alert(11)
    // var lengthh = $("#form1").serialize()
    // var and = '&'
    // var andd = lengthh.lastIndexOf(and) - 9;
    // console.log(andd);
    // console.log($("#form1").serialize().substr(0, andd))
    // document.getElementById("submit").disabled = true
    var work_id = document.getElementById("work_id1").value
    var password = document.getElementById("password1").value

    //请求参数

    //
    $.ajax({
        //请求方式
        type: "POST",
        cache: false,
        //请求的媒体类型
        //contentType: "application/json;charset=UTF-8",
        //请求地址
        url: "http://blog.coderth.cn/api/oAuth/admin/login",
        //数据，json字符串
        data: { work_id: work_id, password: password },
        dataType: 'json',
        //请求成功
        success: function(result) {
            console.log(result.code == 200);
            if (result.code == 200) {
                const token = result.data.token

                window.localStorage.setItem('yq_token', token)
                var userToken = window.localStorage.getItem("yq_token");
                alert("登陆成功")
                window.location.href = "../html/funcation_home.html"
            } else {
                alert("用户名或者密码错误！")
            }

        },
        //请求失败，包含具体的错误信息
        error: function(e) {
            console.log(e.status);
            console.log(e.responseText);
            alert()
        }
    });
    return false;


}


// student
function studentLogin() {
    // alert(11)
    // var lengthh = $("#form1").serialize()
    // var and = '&'
    // var andd = lengthh.lastIndexOf(and) - 9;
    // console.log(andd);
    // console.log($("#form1").serialize().substr(0, andd))
    // document.getElementById("submit").disabled = true
    var work_id = document.getElementById("work_id2").value
    var password = document.getElementById("password2").value

    //请求参数

    //
    $.ajax({
        //请求方式
        type: "POST",
        cache: false,
        //请求的媒体类型
        //contentType: "application/json;charset=UTF-8",
        //请求地址
        url: "http://blog.coderth.cn/api/oAuth/user/login",
        //数据，json字符串
        data: { work_id: work_id, password: password },
        dataType: 'json',
        //请求成功
        success: function(result) {
            console.log(result.code == 200);
            if (result.code == 200) {
                const token = result.data.token

                window.localStorage.setItem('yq_token', token)
                var userToken = window.localStorage.getItem("yq_token");
                alert("登陆成功")
                window.location.href = "../html/Student_Head_Home_page.html"
            } else {
                alert("用户名或者密码错误！")
            }

        },
        //请求失败，包含具体的错误信息
        error: function(e) {
            console.log(e.status);
            console.log(e.responseText);
            alert()
        }
    });
    return false;


}


// function studentLogin() {
//     alert(11)
//         // var lengthh = $("#form1").serialize()
//         // var and = '&'
//         // var andd = lengthh.lastIndexOf(and) - 9;
//         // console.log(andd);
//     console.log($("#form1").serialize().substring(18))
//         // document.getElementById("submit").disabled = true

//     //请求参数

//     //
//     $.ajax({
//         //请求方式
//         type: "POST",
//         cache: false,
//         //请求的媒体类型
//         //contentType: "application/json;charset=UTF-8",
//         //请求地址
//         url: "http://blog.coderth.cn/api/oAuth/user/login",
//         //数据，json字符串
//         data: $("#form1").serialize().substring(18),
//         dataType: 'json',
//         //请求成功
//         success: function(result) {
//             console.log(result.code == 200);
//             if (result.code == 200) {
//                 const token = result.data.token

//                 window.localStorage.setItem('yq_token', token)
//                 var userToken = window.localStorage.getItem("yq_token");
//                 alert("登陆成功")
//                 window.location.href = "Super_Admin_Home.html"
//             } else {
//                 alert("用户名或者密码错误！")
//             }

//         },
//         //请求失败，包含具体的错误信息
//         error: function(e) {
//             console.log(e.status);
//             console.log(e.responseText);
//             alert()
//         }
//     });
//     return false
// }