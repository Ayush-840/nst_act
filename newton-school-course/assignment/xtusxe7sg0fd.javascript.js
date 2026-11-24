}
    const isPasswordValid = await bcrypt.compare(currentPassword, user.hashedPassword);
    if (!isPasswordValid) {
      return res.status(401).json({
        error: 'Unauthorized',
        message: 'Incorrect current password.',
      });
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await prisma.user.update({
      where: { id: user.id },
      data: { hashedPassword },
    });
    return res.status(200).json({
      success: true,
      message: 'Password updated successfully.',
    });
  } catch (error) {
    console.error('Error changing password:', error);
    return res.status(500).json({
      error: 'Internal Server Error',
      message: 'An unexpected error occurred.',
    });
  }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`BookVerse secure pipeline running on port ${PORT}`));
module.exports = { app };