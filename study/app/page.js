

export default function Home(){
  let name = 'hong'

  return (
    <div className="main">
      <div>
        <h4 className="red">하이</h4>        
        <h4 style={{ color:'red' , fontSize:'15px' }}>스타일</h4>
      </div>
      <div>호이 { name }</div>
    </div>
  )
}