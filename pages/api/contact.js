export default async function handler(req, res) {
    if (req.method === 'POST') {
        res.status(200).json({message: "success"})
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}