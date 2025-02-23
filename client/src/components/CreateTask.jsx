export default function CreateTask({minimizeBtn}){

    async function formHandler(e){
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const text = formData.get('text');
        if(text.trim() === "") return;
        
        try{
            const response = await fetch('http://localhost:3030/jsonstore/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    text,
                    isCompleted: false
                })
            })
            minimizeBtn();

        } catch(err){
            console.log(err.message);
        }
    
    }
    return (
    <>
        <div id="create-box">
            <div id="x" onClick={() => minimizeBtn()}>❌</div>
            <form onSubmit={formHandler}>
                <div className="create-form-el">
                    <label htmlFor="text">Task name: </label>
                    <input type="text" name="text" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    </>)
}