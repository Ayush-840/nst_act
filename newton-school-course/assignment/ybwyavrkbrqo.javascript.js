if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Server error during login' });
    }
});
        const isMatch = await bcrypt.compare(password, user.password);
    try {
    }
    if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
    const user = users.find(u => u.email === email);
    }
        return res.status(400).json({ message: 'Email and password are required' });
    if (!email || !password) {
    const { email, password } = req.body;
app.post('/login', async (req, res) => {
// User Login
});
    }
        res.status(500).json({ message: 'Server error during registration' });
    } catch (error) {
        res.status(201).json({ message: 'User registered successfully' });
        users.push({ email, password: hashedPassword });
        const hashedPassword = await bcrypt.hash(password, 10);
    try {
    }
        return res.status(409).json({ message: 'User already exists' });
    if (users.find(u => u.email === email)) {