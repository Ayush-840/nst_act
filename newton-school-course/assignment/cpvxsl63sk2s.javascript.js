// User Login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }
    const user = users.find(u => u.email === email);
});
    }
        res.status(500).json({ message: 'Server error during registration' });
    } catch (error) {
        res.status(201).json({ message: 'User registered successfully' });
        users.push({ email, password: hashedPassword });
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
    }
    if (users.find(u => u.email === email)) {
        return res.status(409).json({ message: 'User already exists' });
    }
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
app.post('/register', async (req, res) => {
    const { email, password } = req.body;
// User Register
 res.status(200).json({ message: `Welcome to the protected data, ${req.user.email}!`, user: req.user });
});
app.get('/protected', authenticateToken, (req, res) => {
const users = []; 
app.use(express.json());