function print_console(data){
    console.log(data);
}

function regist(){
    // document : html
    // getElementById : Id로 찾아라
    // value : 입력된 값
    var user_name =  document.getElementById("name").value;
    alert(user_name); // 알림창
    var user_city =  document.getElementById("city").value;
    alert(user_city); // 알림창
    
    //JQuery는 $을 사용한다.
    //#을 id로 인식
    alert($("#name").val());
    alert($("#city").val());

    let obj = {       //오브젝트
        name: "",
        city: ""
    };

    obj.name = $("#name").val();
    obj.city = $("#city").val();

    print_console(obj)
}

function change_city(){
    // by js
    // let city = $("#city").val();
    // document.getElementById("region_02").style.display = "none";
    // document.getElementById("region_064").style.display = "none";
    // document.getElementById("region_" + city).style.display = "";

    //by jQuery
    let city = $("#city").val();
    $("#region_02").hide();
    $("#region_064").hide();
    $("#region_" + city).show();
}

let a = 2;        //숫자
a = 3.14;         //소숫점 숫자
a = "Song \n"        //문자
a = true;         //참/거짓

function load_city(){
    let city_list = []; // 배열
    // 배열 역시 오브젝트와 동일하게 아무 변수나, 다중구조나 다 가능하다. 
    // 보통 hard coding보다 DB에서 정보를 가져오는 방식을 사용한다.
    // 이런걸 너무 바라고 있었다. 드디어 찾았다!
    city_list = [       
        {
            code: "02",
            city: "서울"
        },
        {
            code: "064",
            city: "제주"
        },
        {
            code: "04",
            city: "부산"
        }
    ]

    for (let i=0; i < city_list.length; i++ ){
        if(i==0){
            $("#city").append('<option value="'+city_list[i].code+'" selected>'+city_list[i].city+'</option>');
        }
        else{
            $("#city").append('<option value="'+city_list[i].code+'">'+city_list[i].city+'</option>');
        }
    }

    //$("#city").append('<option value="02" selected> 서울 </option>');
    //$("#city").append('<option value="064"> 제주 </option>');
}

load_city();