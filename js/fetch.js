const me = async (url) => {
  try {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data);
  } catch(e) {
    console.log(e)
  }
}

me('https://www.inbox.lv/api/weather')