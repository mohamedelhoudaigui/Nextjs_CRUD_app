import pb from "../../../pocketbase"

export default async function handler(req, res) {
  const users = await pb.collection("next_users").getFullList();
  res.status(200).json(users);
}
