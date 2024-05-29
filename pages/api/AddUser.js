import { AddUser } from '../../db/querys.js';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await AddUser(req.body.name, req.body.email, req.body.password);
      res.status(200).json({ message: 'User added' });
    } catch (err) {
      res.status(500).json({ message: 'Error adding user' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}