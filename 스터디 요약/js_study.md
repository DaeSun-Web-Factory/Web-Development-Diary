# JAVA SCRIPT
## 기본 적용법
css는 header에 적용을 시켜도 좋지만,  
js는 body의 최하단에 적용을 시키는 것이 좋다.  

브라우저가 위에서부터 아래로 읽어서 분석하는데,  
맨 위에 js를 적용시켜놓으면 js를 다 검사하고 내려오게 된다.  

body의 맨 아래 부분에 적용시키면,  
상대적으로 조금이라도 더 빠르게 load가 되는 것처럼 느낄 수 있다.  

아래 코드를 body 최하단에 넣어라.
``` html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
```

## JS의 용도
1. 사용자로부터의 input 값을 handling.
2. 특정 element를 보였다, 감추었다.  

이 두가지 용도로 주로 쓰인다.

## 사용자로부터 input 받기
``` html
<div> 이름 : <input type="text" id="name" value=""> </div>
<div> 지역 : 
    <select id="city">
        <option value="02"> 서울 </option>
        <option value="064"> 제주 </option>
    </select>
</div>
<button type="button" onclick="regist();"> 버튼 </button>
```
onclick = "js code"

``` js
function regist(){
    // document : html
    // getElementById : Id로 찾아라
    // value : 입력된 값
    var user_name = document.getElementById("name").value;
    alert(user_name); // 알림창
    var user_city =  document.getElementById("city").value;
    alert(user_city); // 알림창

    //JQuery는 $을 사용한다.
    //#을 id로 인식
    alert($("#name").val());
    alert($("#city").val());
}
```
## element의 속성을 조절
``` html
<div> 지역 : 
    <select id="city" onchange="change_city(); ">
        <option value="02" selected> 서울 </option>
        <option value="064"> 제주 </option>
    </select>
</div>

<div> 동네 : 
    <select id="region_02">
        <option value=""> 강남 </option>
        <option value=""> 서초 </option>
    </select>
    <select id="region_064" style="display: none ;">
        <option value=""> 제주시 </option>
        <option value=""> 서귀포시 </option>
    </select>
</div>
```

``` js
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
```

## 변수 선언
var, let, const

1. var :   
``` js
var x = 2;
var x = 3;
//이러면 x값이 3이 된다.
//즉, 변수가 재정의 된다.
```

2. let
``` js
let x = 2;
//let x = 3;      -> error!
//변수의 재정의를 막는 것이다.
```

3. const
``` js
const x = 2;
//x = 3;      -> error!
//변수의 변경을 막는 것이다.
//절대로 바뀌지 않는 값이다.
```

## 변수의 type
숫자, 소숫점 숫자, 문자, 참/거짓, 날짜, 오브젝트, 배열 등이 있다.  
``` js
let a = 2;        //숫자
a = 3.14;         //소숫점 숫자
a = "Song \n"     //문자
a = true;         //참/거짓

let obj = {       //오브젝트
    name: "",     //사실 key를 미리 선언을 안 해놓아도 괜찮다.
    city: ""      //나중에 key-value pair를 넣을 때 같이 생성된다.
};

obj.name = $("#name").val();
obj.city = $("#city").val();

console.log(obj);

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
```

## for, if
위에 예시로 썼다.
