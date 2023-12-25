export default function handler(req, res) {
  if (req.method == "GET" && res.ok) {
    res.status(200).json();
  }
  res.status(200).json("yes");
}
