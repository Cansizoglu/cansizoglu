'use client'

import { useEffect, useMemo, useState, type FormEvent } from 'react'
import Icon from './Icon'
import { site } from '@/data/site'
import { districts } from '@/data/districts'

const floors = [
  'Giriş / Bahçe katı',
  'Bodrum',
  '1. kat',
  '2. kat',
  '3. kat',
  '4. kat',
  '5. kat',
  '6. kat',
  '7. kat',
  '8. kat ve üzeri',
]

const roomTypes = ['1+0 / Stüdyo', '1+1', '2+1', '3+1', '4+1', '5+1 ve üzeri', 'Ofis / İş yeri', 'Parça eşya']

const elevatorOptions = ['Binada asansör var', 'Binada asansör yok', 'Bilmiyorum']

const extraServices = [
  'Ambalaj / paketleme',
  'Asansörlü taşıma',
  'Eşya depolama',
  'Montaj / demontaj',
  'Piyano taşıma',
  'Para kasası taşıma',
]

type Status = 'idle' | 'error' | 'success'

function newCaptcha() {
  const a = Math.floor(Math.random() * 8) + 2
  const b = Math.floor(Math.random() * 8) + 2
  return { a, b }
}

export default function QuoteForm() {
  // Captcha yalnızca tarayıcıda üretilir; sunucu ve istemci çıktısı
  // farklı olmasın diye ilk render'da boş bırakılır.
  const [captcha, setCaptcha] = useState<{ a: number; b: number } | null>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [errorText, setErrorText] = useState('')
  const [whatsappUrl, setWhatsappUrl] = useState('')
  const [selectedExtras, setSelectedExtras] = useState<string[]>([])

  const districtNames = useMemo(() => districts.map((d) => d.name), [])

  useEffect(() => {
    setCaptcha(newCaptcha())
  }, [])

  function toggleExtra(value: string) {
    setSelectedExtras((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    )
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    // Bot tuzağı: görünmez alan doldurulmuşsa istek sessizce reddedilir.
    if (String(data.get('website') ?? '').trim() !== '') {
      return
    }

    const answer = Number(data.get('captcha'))
    if (!captcha || answer !== captcha.a + captcha.b) {
      setStatus('error')
      setErrorText('Güvenlik sorusunun cevabı hatalı. Lütfen tekrar deneyin.')
      setCaptcha(newCaptcha())
      form.querySelector<HTMLInputElement>('input[name="captcha"]')?.focus()
      return
    }

    const phone = String(data.get('phone') ?? '').replace(/\s/g, '')
    if (phone.replace(/\D/g, '').length < 10) {
      setStatus('error')
      setErrorText('Lütfen geçerli bir telefon numarası girin.')
      return
    }

    const lines = [
      'Fiyat teklifi talebi',
      '',
      `Ad Soyad: ${data.get('name')}`,
      `Telefon: ${data.get('phone')}`,
      `E-posta: ${data.get('email') || '-'}`,
      '',
      `Nereden: ${data.get('fromDistrict')} - ${data.get('fromAddress') || '-'}`,
      `Çıkış katı: ${data.get('fromFloor')} (${data.get('fromElevator')})`,
      `Nereye: ${data.get('toDistrict')} - ${data.get('toAddress') || '-'}`,
      `Varış katı: ${data.get('toFloor')} (${data.get('toElevator')})`,
      '',
      `Ev tipi / oda sayısı: ${data.get('roomType')}`,
      `Taşınma tarihi: ${data.get('date') || 'Belirtilmedi'}`,
      `Ek hizmetler: ${selectedExtras.length ? selectedExtras.join(', ') : '-'}`,
      '',
      `Not: ${data.get('note') || '-'}`,
    ]

    const url = `https://wa.me/${site.phone.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`
    setWhatsappUrl(url)
    setStatus('success')
    setErrorText('')
    setCaptcha(newCaptcha())

    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <span className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white">
          <Icon name="check" className="h-7 w-7" />
        </span>
        <h2 className="text-xl text-green-900">Talebiniz hazırlandı</h2>
        <p className="mx-auto mt-2 max-w-md leading-7 text-green-800">
          Bilgileriniz WhatsApp üzerinden bize iletilmek üzere hazırlandı. Pencere
          açılmadıysa aşağıdaki butondan gönderebilir veya doğrudan bizi
          arayabilirsiniz.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-[#25D366] hover:bg-[#1da851]"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            WhatsApp ile gönder
          </a>
          <a href={site.phone.callCenterHref} className="btn-outline">
            <Icon name="phone" className="h-4 w-4" />
            {site.phone.callCenter}
          </a>
          <button type="button" className="btn-outline" onClick={() => setStatus('idle')}>
            Yeni talep oluştur
          </button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-brand-100 bg-white p-6 shadow-sm sm:p-8">
      <fieldset className="mb-8">
        <legend className="mb-4 text-lg font-bold text-brand-900">İletişim bilgileriniz</legend>
        <div className="grid gap-4 sm:grid-cols-3">
          <Field label="Ad Soyad" required>
            <input name="name" required className={inputClass} placeholder="Adınız ve soyadınız" />
          </Field>
          <Field label="Telefon" required>
            <input
              name="phone"
              required
              inputMode="tel"
              className={inputClass}
              placeholder="05xx xxx xx xx"
            />
          </Field>
          <Field label="E-posta">
            <input name="email" type="email" className={inputClass} placeholder="ornek@eposta.com" />
          </Field>
        </div>
      </fieldset>

      <fieldset className="mb-8">
        <legend className="mb-4 text-lg font-bold text-brand-900">Nereden taşınıyorsunuz?</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Çıkış ilçesi" required>
            <select name="fromDistrict" required className={inputClass} defaultValue="">
              <option value="" disabled>
                İlçe seçin
              </option>
              {districtNames.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
              <option value="Diğer / Ankara dışı">Diğer / Ankara dışı</option>
            </select>
          </Field>
          <Field label="Mahalle / semt">
            <input name="fromAddress" className={inputClass} placeholder="Örn. Etlik" />
          </Field>
          <Field label="Kaçıncı kat" required>
            <select name="fromFloor" required className={inputClass} defaultValue="">
              <option value="" disabled>
                Kat seçin
              </option>
              {floors.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Asansör durumu" required>
            <select name="fromElevator" required className={inputClass} defaultValue={elevatorOptions[0]}>
              {elevatorOptions.map((e) => (
                <option key={e} value={e}>
                  {e}
                </option>
              ))}
            </select>
          </Field>
        </div>
      </fieldset>

      <fieldset className="mb-8">
        <legend className="mb-4 text-lg font-bold text-brand-900">Nereye taşınıyorsunuz?</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Varış ilçesi" required>
            <select name="toDistrict" required className={inputClass} defaultValue="">
              <option value="" disabled>
                İlçe seçin
              </option>
              {districtNames.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
              <option value="Diğer / Ankara dışı">Diğer / Ankara dışı</option>
            </select>
          </Field>
          <Field label="Mahalle / semt">
            <input name="toAddress" className={inputClass} placeholder="Örn. Eryaman" />
          </Field>
          <Field label="Kaçıncı kat" required>
            <select name="toFloor" required className={inputClass} defaultValue="">
              <option value="" disabled>
                Kat seçin
              </option>
              {floors.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Asansör durumu" required>
            <select name="toElevator" required className={inputClass} defaultValue={elevatorOptions[0]}>
              {elevatorOptions.map((e) => (
                <option key={e} value={e}>
                  {e}
                </option>
              ))}
            </select>
          </Field>
        </div>
      </fieldset>

      <fieldset className="mb-8">
        <legend className="mb-4 text-lg font-bold text-brand-900">Taşınma detayları</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Ev tipi / oda sayısı" required>
            <select name="roomType" required className={inputClass} defaultValue="">
              <option value="" disabled>
                Seçin
              </option>
              {roomTypes.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Taşınma tarihi">
            <input name="date" type="date" className={inputClass} />
          </Field>
        </div>

        <p className="mb-2 mt-5 text-sm font-semibold text-slate-700">Ek hizmetler</p>
        <div className="flex flex-wrap gap-2">
          {extraServices.map((extra) => {
            const active = selectedExtras.includes(extra)
            return (
              <button
                key={extra}
                type="button"
                onClick={() => toggleExtra(extra)}
                aria-pressed={active}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  active
                    ? 'border-brand-700 bg-brand-700 text-white'
                    : 'border-brand-200 bg-white text-slate-700 hover:border-brand-400'
                }`}
              >
                {extra}
              </button>
            )
          })}
        </div>

        <div className="mt-5">
          <Field label="Eklemek istedikleriniz">
            <textarea
              name="note"
              rows={4}
              className={inputClass}
              placeholder="Örn. buzdolabı ve çamaşır makinesi dahil, 2 gardırop var, sokak dar."
            />
          </Field>
        </div>
      </fieldset>

      {/* Bot tuzağı alanı - kullanıcıya görünmez */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Web siteniz</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="rounded-lg border border-brand-100 bg-brand-50/60 p-5">
        <Field
          label={
            captcha
              ? `Güvenlik sorusu: ${captcha.a} + ${captcha.b} = ?`
              : 'Güvenlik sorusu yükleniyor…'
          }
          required
        >
          <input
            name="captcha"
            required
            disabled={!captcha}
            inputMode="numeric"
            autoComplete="off"
            className={`${inputClass} max-w-[160px] disabled:bg-slate-100`}
            placeholder="Sonuç"
          />
        </Field>
        <p className="mt-2 text-xs text-slate-600">
          Bu soru otomatik form gönderimlerini engellemek için sorulur.
        </p>
      </div>

      {status === 'error' ? (
        <p role="alert" className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorText}
        </p>
      ) : null}

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button type="submit" className="btn-primary">
          Teklif Talebini Gönder
          <Icon name="arrow" className="h-4 w-4" />
        </button>
        <a href={site.phone.gsmHref} className="btn-outline">
          <Icon name="phone" className="h-4 w-4" />
          Telefonla bildir: {site.phone.gsm}
        </a>
      </div>
      <p className="mt-4 text-xs leading-5 text-slate-600">
        Formu gönderdiğinizde bilgileriniz WhatsApp üzerinden tarafımıza iletilir.
        Verileriniz yalnızca fiyat teklifi vermek amacıyla kullanılır.
      </p>
    </form>
  )
}

const inputClass =
  'w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-800 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200'

function Field({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
        {required ? <span className="text-red-600"> *</span> : null}
      </span>
      {children}
    </label>
  )
}
