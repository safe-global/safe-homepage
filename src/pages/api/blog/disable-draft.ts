const handler = async (_: any, res: any) => {
  res.setDraftMode({ enable: false })
  res.redirect('/blog')
  res.end()
}

export default handler
