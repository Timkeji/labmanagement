
window.onload = function () {
    qrtj = function () {
        // var a=document.getElementById("forminfo").serialize();
        // console.log(a)
        // var a = $("#forminfo").serialize();
        // data_params = decodeURIComponent(a, true);
        // console.log(data_params);

        // var tr = $("#tab tr"); // 获取table中每一行内容
        // var result = []; // 数组
        // for (var i = 0; i < tr.length; i++) {// 遍历表格中每一行的内容
        //     var tds = $(tr[i]).find("td");
        //     if (tds.length > 0) {
        //         result.push({
        //             "equipment": $(tds[0]).find("input").val(),
        //             "equipment_model": $(tds[1]).find("input").val(),
        //             "number": $(tds[2]).find("input").val(),
        //             "attachment": $(tds[3]).find("input").val()
        //         })
        //     }
        // }
        // var jsonData = { // json数据
        //     "queipmentarray": result
        // }
        // var eqquerry = JSON.stringify(jsonData);


        // console.log( eqquerry )
        var userToken = window.localStorage.getItem("yq_token");
        function clear(str) {
            str = str.replace(/,/g, "");//取消字符串中出现的所有逗号 
            return str;
        }
        clear(userToken),
            console.log(userToken);
        var vdata = {
            date:$("#date").val(),
            lab_name:$("#lab_name").val(),
            lab_id:$("#lab_id").val(),
            class_name:$("#class_name").val(),
            class:$("#class").val(),
            number:$("#number").val(),
            laboratory_purpose:$("#laboratory_purpose").val(),
            start_time:$("#start_time").val(),
            end_time:$("#end_time").val(),
            start_class:$("#start_class").val(),
            end_class:$("#end_class").val(),
            phone: $("#phone").val(),
            token:userToken,
        }
        console.log($("#start_time").val());
        console.log(vdata)

        $.ajax({
            type: "post",
            url: 'http://blog.coderth.cn/api/ordinadmin/addlabborrowing',
         
            data: vdata ,// 将json数据转化为字符串
            success: function (data) {
              
                if(data.code==200){
                    alert("提交成功")
                    console.log("成功了"),
                    console.log( data)
                }else{
                    alert("提交失败")
                }
          
            },
            error: function (XMLHttpRequest, textStatus, readyState) {
                console.log(XMLHttpRequest.status);
                console.log(XMLHttpRequest.readyState);
                console.log(textStatus);
                console.log(data)
            }
        })

    }
}
