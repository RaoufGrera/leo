import { Client, Entity, Schema, Repository } from 'redis-om';

const client = new Client();

async function connect() {
    if (!client.isOpen()) {
        await client.open(process.env.REDIS_URL);
    }
}

class Project extends Entity { }
let schema = new Schema(
    Project,
    {
        name: { type: 'string' },
        email: { type: 'string' },
        comment: { type: 'string' },
        test: { type: 'string' },

        date: { type: 'string' },



    },
    {
        dataStructure: 'JSON',
    }
);
export async function createProject(data) {
    await connect();
    const repository = client.fetchRepository(schema);
    const d = new Date();
    data.date = d.toLocaleDateString();
    data.comment = data.comment.substring(0, 400);
    data.name = data.name.substring(0, 20);
    data.email = data.email.substring(0, 20);

    const project = repository.createEntity(data);

    const id = await repository.save(project);
    return id;

}