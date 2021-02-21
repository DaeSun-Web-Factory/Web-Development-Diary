# CSS
## 기본 적용법
다음의 코드를 html의 header에 넣는다.
``` html
<link rel="stylesheet" href="style/home_style.css">
```

## 기본 디자인을 죽이고 시작한다.
실무에서는 html에서 기본으로 제공하는 디자인들을 다 죽이고 시작한다.  
그게 더 편하다.
``` css
*{ /*모든 tag에 적용하는 * */
    border-collapse: collapse;
    margin: 0px;
    padding: 0px;
    text-decoration: none;
    color: black;
    list-style: none;
}
```
## Position
기본적으로 absolute, relative, fixed가 있다.
``` html
<div class="blackPosition">
    <div>black</div>    
</div>

<div class="relativePosition">
    <div>relative</div>    
</div>

<div class="absolutePosition">
    <div>absolute</div>    
</div>

<div class="fixedPosition">
    <div>fixed</div>    
</div>
```
``` css
.blackPosition{
    width: 100%;
    background-color: hotpink;
}

.relativePosition{
    width: 100%;
    background-color: red;
    /*현 위치를 기준으로 움직인다.*/
}

.absolutePosition{
    width: 100%;
    background-color: green;
    /*html 전체 문서를 기준으로 고정된다.*/
}

.fixedPosition{
    /*브라우저를 기준으로 고정된다.*/
    width: 100%;
    background-color: blue;
}
```
## Display
주로 none, block, inline, flex를 사용  
display : inline -> 원래 block이었던 테그를 inline으로 바꿀 수 있다.  
display : block -> 원래 inline이었던 테그를 block으로 바꿀 수 있다.  
none -> 존재는 하지만, 안보이게 해준다.  
flex는 조금 복잡하다.  

``` html
<!--html-->
<div class="flexible">
    <div>div</div>
    <div>div</div>
    <div>div</div>
    <div>div</div>
</div>
```

``` css
/*css*/
.flexible{
    display: flex;
}

.flexible > div:first-child{
    flex: 2;
}

.flexible > div{
    flex: 1;
    background-color: hotpink;
    border: 1px solid white;
}
```
