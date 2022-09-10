import { Project } from "./redis";
export default function ProjectForm() {
    const handleSubmit: any = async (event: Event) => {
        event.preventDefault();
        const form = new FormData(event.target as HTMLFormElement);
        const fromData = Object.fromEntries(form.entries());

        const res = await fetch('/api/project', {
            body: JSON.stringify(fromData),
            headers: {
                'Contetnt-Type': 'application/json'
            },
            method: 'POST',
        });

        const res2 = await fetch('/api/hello', {
            headers: {
                'Contetnt-Type': 'application/json'
            },
            method: 'GET',
        }).then(re => {
            return re.text().then(text => {

                return JSON.parse(text);

            });
        });
        console.log("result", res2);
    }
    return (
        <form onSubmit={handleSubmit} >
            <input name="title" type="text" />
            <input name="discription" type="text" />
            <input name="image" type="text" />
            <input name="year" type="text" />
            <button type="submit">Create Project</button>
        </form>
    );
}