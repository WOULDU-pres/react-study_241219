import "./App.css";

function Header(props) {
  return (
    <header>
      <h1>
        <a href="/" onClick={(e)=>{e.preventDefault();
          props.onChangeMode();
        }}>{props.title}</a>
      </h1>
      {props.body}
    </header>
  );
}

function Nav(props) {
  const list = [];
  for(let i=0; i<props.topics.length;i++){
    let t = props.topics[i];
    list.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>)
  }
  return (
    <nav>
      <ol>{list}</ol>
    </nav>
  );
}

function Article() {
  return (
    <article>
      <h3>위스키 초콜릿 용서하지 않는다</h3>
    </article>
  );
}

function App() {
  const topics = [
    { id: 1, title: "윤정연", body: "오늘을 잊지 않겠습니다 .." },
    { id: 2, title: "주현우", body: "졸리다 .." },
    { id: 3, title: "윤석열", body: "계엄령을 발표하겠습니다 .." },
  ];
  console.log("sexy");
  return (
    <div className="App">
      <Header
        title="그래도"
        body="와사비 때려넣은게 아니라서 다행이다.."
        onChangeMode={()=>{alert('Header');}}
      ></Header>
      <Nav topics={topics}></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
