export default async function generateToken(auth, username, password) {
  const token = await auth.use('api').attempt(username, password, {
    expiresIn: '1 min',
  })
  process.env.TOKEN = token
  return token
}
