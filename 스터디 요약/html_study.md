# HTML
## HTML 기본구조

``` html
<!doctype html>
<html lang="kr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>제목</title>
    </head>
    <body>
       
    </body>
    
</html>
```
## Inline tag VS Block tag
* div : block tag -> 한 width를 다 차지
* span : inline tag -> 자기 내용물  만큼만 차지

## 제목 tag
h1, h2, h3, h4, h5, h6이 있다.

## 목록 tag
ul, ol 안에 li를 넣으면 된다.  
~~참 쉽죠?~~

## 입력양식 tag: form tag VS input tag
form : 서버사이드, 데이터 베이스에 전송을 할 때 사용한다.  
form 안에 input을 넣어서 사용한다.  
checkbox, radio라는 tag도 있다.  

``` html
<input type="text">
```
text를 입력받는 tag  
  

``` html
<input type="submit">
```
서버에 데이터를 전송하는 역할을 한다.  
-> 필요했던 기능. 나중에 더 자세히 알아볼 것.  

radio는 같은 name안에서 하나만 선택이 가능하다.  
label tag가 input과 연관이 있어서 쓴다.  
label로 감싸주어야 한 덩어리라는 것을 알게 된다.  

``` html
<ul>
    <li> 
        <label> <input type="radio" name="fruit" id="apple"> 사과 </label>
        <label> <input type="radio" name="fruit" id="samsung"> 삼성 </label>
        <label> <input type="radio" name="fruit" id="MS"> 마소 </label>
    </li>
</ul> 
```

~~뭔가 이상한가? 킹부러 일받으라고 이상하게 했다.~~  
``` html
<ul>
    <li> 
        <label> <input type="checkbox" name="fruit" id="apple"> 사과 </label>
        <label> <input type="checkbox" name="fruit" id="samsung"> 삼성 </label>
        <label> <input type="checkbox" name="fruit" id="MS"> 마소 </label>
    </li>
</ul> 
```
check box이다.

``` html
<li> <input type="button" value="버튼 이름"> </li>
```
Button이다.  
쓰는 것을 권장하지는 않는다.  
그 이유는 브라우저마다 기본 button의 모양이 다르기 때문이다.  
따라서 div나 span에 css를 덮어서 버튼처럼 쓸 수 있다.

## 이미지와 링크
a tag : 링크를 연다.
``` html
<a href="http://www.google.com"> 네이버 바로가기 </a>
```
~~킹부러~~  

사진 첨부
``` html
<img src="image/image1.png"> 
```
## 테이블 테그
``` html
<table> <!-- 테이블 -->
            <thead> <!-- 테이블의 header  -->
                <tr> <!-- 가로줄 열기  -->
                    <th>이름</th>
                    <th>성별</th>
                    <th>나이</th>
                    <th>키</th>
                </tr>
            </thead>
            <tbody> <!-- 테이블의 body -->
                <tr> <!-- 가로줄 열기 -->
                    <td>송대선</td>
                    <td>남</td>
                    <td>2살</td>
                    <td>3m</td>
                </tr>
                <tr> <!-- 가로줄 열기 -->
                    <td>김대선</td>
                    <td>여</td>
                    <td>200살</td>
                    <td>3cm</td>
                </tr>
            </tbody>
        </table> 
```
결과 :
<table> <!-- 테이블 -->
            <thead> <!-- 테이블의 header  -->
                <tr> <!-- 가로줄 열기  -->
                    <th>이름</th>
                    <th>성별</th>
                    <th>나이</th>
                    <th>키</th>
                </tr>
            </thead>
            <tbody> <!-- 테이블의 body -->
                <tr> <!-- 가로줄 열기 -->
                    <td>송대선</td>
                    <td>남</td>
                    <td>2살</td>
                    <td>3m</td>
                </tr>
                <tr> <!-- 가로줄 열기 -->
                    <td>김대선</td>
                    <td>여</td>
                    <td>200살</td>
                    <td>3cm</td>
                </tr>
            </tbody>
        </table> 