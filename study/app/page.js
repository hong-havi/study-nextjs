export default function Home(){
  let name = 'hong'
  let link = 'https://google.com'
  return (
    <div className="main">
      <div>
        <h4 className="red">하이</h4>        
        <h4 style={{ color:'red' , fontSize:'15px' }}>스타일</h4>
      </div>
      <div>호이 { name }</div>
      <a href={ link }>링크</a>
    </div>
  )
}