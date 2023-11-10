import './NewPost.css';

export function NewPost() {
    function changeBodyHandler(event) {
        console.log(event.target.value)
    }
    return (
        <form className="form">
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={changeBodyHandler}/>
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required />
            </p>
        </form>
    );
}