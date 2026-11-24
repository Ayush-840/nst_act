message: 'Incorrect current password.',
      });
    }
    // 5. Hash new password with 10 salt rounds and update database
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    await prisma.user.update({
      where: { email },
      data: { password: hashedNewPassword },
    });
    return res.status(200).json({
      success: true,
      message: 'Password updated successfully.',
    });
  } catch (err) {
    console.error('Change password error:', err);
    return res.status(500).json({
      error: 'Internal Server Error',
      message: 'Failed to update password.',
    });
  }
});
// This route must be fully protected by the custom authenticate middleware
app.get('/analytics', authenticate, (req, res) => {
  const data = getAnalyticsData();
  return res.status(200).json(data);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Secure pipeline running on port ${PORT}`));