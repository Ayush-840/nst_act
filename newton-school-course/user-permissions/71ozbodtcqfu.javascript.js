// Your code here
function assignAccess(featureAccess, fallbackAccess, checkPermissions, userId) {
  if (checkPermissions(userId)) {
    return featureAccess(userId);
  }
  return fallbackAccess(userId);
}