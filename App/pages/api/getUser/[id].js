import pb from "../../../pocketbase"

export default async function handler(req, res) {
	const {
	query: { id },
	} = req

	const user = await pb.collection("next_users").getOne(id);
	res.status(200).json(user);
}