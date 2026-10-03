/**
 * Production deploy'undan sonra sitemap'teki adresleri IndexNow'a bildirir
 * (Bing, Yandex, Seznam, Naver bu protokolü kullanıyor; Google kullanmıyor).
 * Anahtar dosyası: public/80b5aa99c9b5601372ed8b723d7d5680.txt
 *
 * Yalnızca Vercel production build'inde çalışır. Hata olursa build'i
 * durdurmaz, sadece uyarı yazar.
 */
import fs from 'node:fs'

const HOST = 'www.ankaraevdenevenakliye.net.tr'
const KEY = '80b5aa99c9b5601372ed8b723d7d5680'

if (process.env.VERCEL_ENV !== 'production') {
  console.log('[indexnow] production değil, atlandı')
  process.exit(0)
}

try {
  const body = fs.readFileSync('.next/server/app/sitemap.xml.body', 'utf8')
  const urlList = [...body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: `https://${HOST}/${KEY}.txt`,
      urlList,
    }),
    signal: AbortSignal.timeout(15000),
  })
  console.log(`[indexnow] ${urlList.length} adres gönderildi, yanıt: ${res.status}`)
} catch (err) {
  console.warn('[indexnow] gönderilemedi:', err?.message ?? err)
}
