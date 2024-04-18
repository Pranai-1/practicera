export default function Helper2({userrandom,setUserRandom}){
    return(
        <form>
      <label htmlFor='age'>random2:</label>
      <input type="text" id="age" name="age" value={userrandom} placeholder="enter random" onChange={(e)=>setUserRandom(e.target.value)}/>
     </form>
    )
}