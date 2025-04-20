

function App() {
  return <div style={{display:'flex'}}>
    <Card>
      <div>
        <span>write your name here</span>
        <input type="text" placeholder="name" />
      </div>
    </Card>
    <Card>
      <div>
        hi there
      </div>
    </Card>


    </div>
}
function Card({children}){
  return <div style={{borderRadius:'20px', backgroundColor:'brown', padding:'20px', margin:'20px', color:'white',fontSize:'20px',display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}> 
  {children}
  </div>
}
export default App
