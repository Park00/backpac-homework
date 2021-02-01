import React, {useState} from "react";
import imgLogo from "../asset/idus.png"

function renderStars(score){
  let scoreArr = []
  for(let i = 0; i < 5; i++){
    scoreArr[i] = score < i+1 ? 0 : 1;
  }
  return scoreArr.map((v,i)=>
    <span key={i} className={`stars--${v}`}>●</span>
  )
}

let maxLength  = 50;
let textValue1 = "";
let textCount1 = textValue1.length;

let textValue2 = "텍스트 내용이 있을 수 있습니다.";
let textCount2 = textValue2.length;

let textValue3 = "주문 요청사항을 입력해주세요.";
let textCount3 = textValue3.length;

export default function App(){
  const [updated, setUpdated] = useState(false);
  const [count, setCount] = useState(0);

  function onChangeTextarea(){
    let chagedValue = document.getElementById("case2").value;
    if(chagedValue.length >=maxLength){
      alert(`${maxLength}자 이내로 입력해주세요.`);
      return;
    }
    textCount2 = chagedValue.length;
    setCount(chagedValue.length);
    if(textValue2 == chagedValue){
      setUpdated(false)
    }else{
      setUpdated(true)
    }
  }
  function save(){
    setUpdated(false)
    textValue2 = document.getElementById("case2").value;
  }
  function renderSaveButton(updated){
    if(!updated) return;
    return (
      <div className="button-box">
        <button className="saveButton" onClick={save}>Save</button>
      </div>
    )
  }
  return (
    <div className="container">
      <div className="textarea-wrap">
        <div className="textarea-box readonly">
          <label className="textarea-label">{textCount1}</label>
          <textarea placeholder="초기값이 있을 수 있습니다." id="case1" onKeyUp={onChangeTextarea}>{textValue1}</textarea>
        </div>
      </div>
      <div className="textarea-wrap">
        <div className="textarea-box">
          <label className="textarea-label">{textCount2}</label>
          <textarea placeholder="초기값이 있을 수 있습니다." id="case2" onKeyUp={onChangeTextarea}>{textValue2}</textarea>
        </div>
        {renderSaveButton(updated)}
      </div>
      <div className="textarea-wrap">
        <div className="textarea-box disabled">
          <label className="textarea-label">{textCount3}</label>
          <textarea placeholder="초기값이 있을 수 있습니다." id="case3" onKeyUp={onChangeTextarea}>{textValue3}</textarea>
        </div>
      </div>

      <div className="card-type-1">
        <div className="thumbnail-wrapper">
          <div className="thumbnail">
            <img src={imgLogo}/>
          </div>
        </div>
        <div className="contentWrap">
          <div className="__box1">
            <span className="subTitle">Card lable</span>
            <h1>Card Title</h1>
            <p className="bottomText"><span className="highlight">highlight</span> <span className="lineThrough">Cross out</span></p>
          </div>
          <hr></hr>
          <div className="__box2">
            <div className="stars">{renderStars(3)}</div>
            <div className="stars--desc">stars description</div>
          </div>
        </div>
      </div>

      <div className="card-type-1">
        <div className="thumbnail-wrapper">
          <div className="thumbnail">
            <img src={imgLogo}/>
          </div>
        </div>
        <div className="contentWrap">
          <div className="__box1">
            <span className="subTitle">Card lable</span>
            <h1>Card Title</h1>
            <p className="bottomText"><span className="highlight">highlight</span> <span className="lineThrough">Cross out</span></p>
          </div>
          <hr></hr>
          <div className="__box2">
            <div className="stars">{renderStars(3)}</div>
            <div className="stars--desc">stars description</div>
          </div>
        </div>
      </div>

      <div className="card-type-1">
        <div className="thumbnail-wrapper">
          <div className="thumbnail">
            <img src={imgLogo}/>
          </div>
        </div>
        <div className="contentWrap">
          <div className="__box1">
            <span className="subTitle">Card lable</span>
            <h1>Card Title</h1>
            <p className="bottomText"><span className="highlight">highlight</span> <span className="lineThrough">Cross out</span></p>
          </div>
          <hr></hr>
          <div className="__box2">
            <div className="stars">{renderStars(3)}</div>
            <div className="stars--desc">stars description</div>
          </div>
        </div>
      </div>

      <div className="card-type-1">
        <div className="thumbnail-wrapper">
          <div className="thumbnail">
            <img src={imgLogo}/>
          </div>
        </div>
        <div className="contentWrap">
          <div className="__box1">
            <span className="subTitle">Card lable</span>
            <h1>Card Title</h1>
            <p className="bottomText"><span className="highlight">highlight</span> <span className="lineThrough">Cross out</span></p>
          </div>
          <hr></hr>
          <div className="__box2">
            <div className="stars">{renderStars(3)}</div>
            <div className="stars--desc">stars description</div>
          </div>
        </div>
      </div>

      <div className="card-type-1">
        <div className="thumbnail-wrapper">
          <div className="thumbnail">
            <img src={imgLogo}/>
          </div>
        </div>
        <div className="contentWrap">
          <div className="__box1">
            <span className="subTitle">Card lable</span>
            <h1>Card Title</h1>
            <p className="bottomText"><span className="highlight">highlight</span> <span className="lineThrough">Cross out</span></p>
          </div>
          <hr></hr>
          <div className="__box2">
            <div className="stars">{renderStars(3)}</div>
          </div>
        </div>
      </div>

      <div className="card-type-1">
        <div className="thumbnail-wrapper">
          <div className="thumbnail">
            <img src={imgLogo}/>
          </div>
        </div>
        <div className="contentWrap">
          <div className="__box1">
            <span className="subTitle">Card lable</span>
            <h1>Card Title</h1>
            <p className="bottomText"><span className="highlight">highlight</span> <span className="lineThrough">Cross out</span></p>
          </div>
          <hr></hr>
          <div className="__box2">
            <div className="stars">{renderStars(3)}</div>
          </div>
        </div>
      </div>

      <div className="card-type-1">
        <div className="thumbnail-wrapper">
          <div className="thumbnail">
            <img src={imgLogo}/>
          </div>
        </div>
        <div className="contentWrap">
          <div className="__box1">
            <span className="subTitle">Card lable</span>
            <h1>Card Title</h1>
            <p className="bottomText"><span className="highlight">highlight</span> <span className="lineThrough">Cross out</span></p>
          </div>
          <hr></hr>
          <div className="__box2">
            <div className="stars">{renderStars(3)}</div>
          </div>
        </div>
      </div>

      <div className="card-type-1">
        <div className="thumbnail-wrapper">
          <div className="thumbnail">
            <img src={imgLogo}/>
          </div>
        </div>
        <div className="contentWrap">
          <div className="__box1">
            <span className="subTitle">Card lable</span>
            <h1>Card Title</h1>
            <p className="bottomText"><span className="highlight">highlight</span> <span className="lineThrough">Cross out</span></p>
          </div>
          <hr></hr>
          <div className="__box2">
            <div className="stars">{renderStars(3)}</div>
          </div>
        </div>
      </div>

      <div className="card-type-1">
        <div className="thumbnail-wrapper">
          <div className="thumbnail">
            <img src={imgLogo}/>
          </div>
        </div>
        <div className="contentWrap">
          <div className="__box1">
            <span className="subTitle">Card lable</span>
            <h1>Card Title</h1>
            <p className="bottomText"><span className="highlight">highlight</span> <span className="lineThrough">Cross out</span></p>
          </div>
        </div>
      </div>

      <div className="card-type-1">
        <div className="thumbnail-wrapper">
          <div className="thumbnail">
            <img src={imgLogo}/>
          </div>
        </div>
        <div className="contentWrap">
          <div className="__box1">
            <span className="subTitle">Card lable</span>
            <h1>Card Title</h1>
            <p className="bottomText"><span className="highlight">highlight</span> <span className="lineThrough">Cross out</span></p>
          </div>
        </div>
      </div>

      <div className="card-type-1">
        <div className="thumbnail-wrapper">
          <div className="thumbnail">
            <img src={imgLogo}/>
          </div>
        </div>
        <div className="contentWrap">
          <div className="__box1">
            <span className="subTitle">Card lable</span>
            <h1>Card Title</h1>
            <p className="bottomText"><span className="highlight">highlight</span> <span className="lineThrough">Cross out</span></p>
          </div>
        </div>
      </div>

      <div className="card-type-1">
        <div className="thumbnail-wrapper">
          <div className="thumbnail">
            <img src={imgLogo}/>
          </div>
        </div>
        <div className="contentWrap">
          <div className="__box1">
            <span className="subTitle">Card lable</span>
            <h1>Card Title</h1>
            <p className="bottomText"><span className="highlight">highlight</span> <span className="lineThrough">Cross out</span></p>
          </div>
        </div>
      </div>

      <div className="card-type-2">
        <div className="thumbnail-wrapper">
          <div className="thumbnail">
            <img src={imgLogo}/>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="__box1">
            <div className="title">타이틀</div>
            <div className="content">
              내용 최대 3줄 내용 최대 3줄 내용 최대 3줄 내용 최대 3줄  내용 최대 3줄  내용 최대 3줄  내용 최대 3줄 내용 최대 3줄 내용 최대 3줄내용 최대 3줄
              내용 최대 3줄 내용 최대 3줄 내용 최대 3줄 내용 최대 3줄  내용 최대 3줄  내용 최대 3줄  내용 최대 3줄 내용 최대 3줄 내용 최대 3줄내용 최대 3줄
            </div>
          </div>
          <div className="__box2">
            <div className="score-area">{renderStars(2)} <span className="bar"> | </span> <span className="author">dfdadfasdf dfdad adf dfs adsf adsf dfs </span></div>
          </div>
        </div>
      </div>

      <div className="card-type-2">
        <div className="thumbnail-wrapper">
          <div className="thumbnail">
            <img src={imgLogo}/>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="__box1">
            <div className="title">타이틀</div>
            <div className="content">
              내용 최대 3줄 내용 최대 3줄 내용 최대 3줄 내용 최대 3줄  내용 최대 3줄  내용 최대 3줄  내용 최대 3줄 내용 최대 3줄 내용 최대 3줄내용 최대 3줄
              내용 최대 3줄 내용 최대 3줄 내용 최대 3줄 내용 최대 3줄  내용 최대 3줄  내용 최대 3줄  내용 최대 3줄 내용 최대 3줄 내용 최대 3줄내용 최대 3줄
            </div>
          </div>
          <div className="__box2">
            <div className="score-area">{renderStars(2)} <span className="bar"> | </span> <span className="author">dfdadfasdf dfdad adf dfs adsf adsf dfs </span></div>
          </div>
        </div>
      </div>

      <div className="card-type-2">
        <div className="thumbnail-wrapper">
          <div className="thumbnail">
            <img src={imgLogo}/>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="__box1">
            <div className="title">타이틀</div>
            <div className="content">
              내용 최대 3줄 내용 최대 3줄 내용 최대 3줄 내용 최대 3줄  내용 최대 3줄  내용 최대 3줄  내용 최대 3줄 내용 최대 3줄 내용 최대 3줄내용 최대 3줄
              내용 최대 3줄 내용 최대 3줄 내용 최대 3줄 내용 최대 3줄  내용 최대 3줄  내용 최대 3줄  내용 최대 3줄 내용 최대 3줄 내용 최대 3줄내용 최대 3줄
            </div>
          </div>
          <div className="__box2">
            <div className="score-area">{renderStars(2)} <span className="bar"> | </span> <span className="author">dfdadfasdf dfdad adf dfs adsf adsf dfs </span></div>
          </div>
        </div>
      </div>

      <div className="card-type-2">
        <div className="thumbnail-wrapper">
          <div className="thumbnail">
            <img src={imgLogo}/>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="__box1">
            <div className="title">타이틀</div>
            <div className="content">
              내용 최대 3줄 내용 최대 3줄 내용 최대 3줄 내용 최대 3줄  내용 최대 3줄  내용 최대 3줄  내용 최대 3줄 내용 최대 3줄 내용 최대 3줄내용 최대 3줄
              내용 최대 3줄 내용 최대 3줄 내용 최대 3줄 내용 최대 3줄  내용 최대 3줄  내용 최대 3줄  내용 최대 3줄 내용 최대 3줄 내용 최대 3줄내용 최대 3줄
            </div>
          </div>
          <div className="__box2">
            <div className="score-area">{renderStars(2)} <span className="bar"> | </span> <span className="author">dfdadfasdf dfdad adf dfs adsf adsf dfs </span></div>
          </div>
        </div>
      </div>
    </div>
  )
}