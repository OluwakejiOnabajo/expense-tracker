import './addCat.css';

const addCat = () => {
    const [category, setCategory] = useState();
    
  return (
   
    <div className='category'>
        <form>
            <div classname='form-group' >
            <label>Category</label>
            <input type="text" className='form-control' value={category} placeholder="Enter category name" />
            </div>
            
            <div classname='form-group' >
            <label>Category</label>
            <input type="text" className='form-control' value={category} placeholder="Enter category name" />
            </div>

            
            <div classname='form-group' >
           <button type='submit'>Submit</button>
           </div>

        
        </form>
    </div>
  )
}

export default addCat