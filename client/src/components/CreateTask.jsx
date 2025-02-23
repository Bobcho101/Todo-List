export default function CreateTask({minimizeBtn}){

    return (
    <>
        <div id="create-box">
            <div id="x" onClick={() => minimizeBtn()}>❌</div>
            <form>
                <div className="create-form-el">
                    <label htmlFor="text">Task name: </label>
                    <input type="text" name="text" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    </>)
}